const products = [
  { id: 1, title: "Trådløs håndstøvsuger", category: "Rengøring", description: "Kraftig, kompakt støvsuger med vaskbart filter og komplet mundstykkesæt.", price: 449, oldPrice: 599, badge: "Bestseller", rating: "4,9", image: "assets/products/handheld-vacuum.png" },
  { id: 2, title: "4-i-1 biloplader", category: "Elektronik", description: "USB-C PD, USB-A og integrerede kabler samlet i én kompakt oplader.", price: 299, oldPrice: 399, badge: "Nyhed", rating: "4,8", image: "assets/products/multi-car-charger.png" },
  { id: 3, title: "Smart opbevaringssæt", category: "Organisering", description: "Fire diskrete beholdere til småting og affald i kabinen.", price: 249, oldPrice: 329, badge: "Sætpris", rating: "4,7", image: "assets/products/car-storage-set.png" },
  { id: 4, title: "Foldbar magnetisk mobilholder", category: "Elektronik", description: "Stabil, justerbar holder med sugekop og pladsbesparende foldedesign.", price: 349, oldPrice: 449, badge: "Populær", rating: "4,9", image: "assets/products/magnetic-phone-holder.png" },
  { id: 5, title: "Minimalistisk bilduft", category: "Komfort", description: "Kompakt og diskret luftfrisker med regulerbar duftåbning.", price: 129, oldPrice: 169, badge: "Nyhed", rating: "4,6", image: "assets/products/car-air-freshener.png" },
];

const categories = ["Alle", ...new Set(products.map((product) => product.category))];
let activeCategory = "Alle";
let cart = loadCart();
let paypalReady = false;
let cardFields;

const productGrid = document.querySelector("#product-grid");
const filterRow = document.querySelector("#filter-row");
const emptyState = document.querySelector("#empty-state");
const cartBadge = document.querySelector("#cart-count");
const toast = document.querySelector("#toast");
const cartDrawer = document.querySelector("#cart-drawer");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartCheckout = document.querySelector("#cart-checkout");
const paymentStatus = document.querySelector("#payment-status");

function money(value) {
  return `${new Intl.NumberFormat("da-DK").format(value)} kr.`;
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("wheelware-cart"));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("wheelware-cart", JSON.stringify(cart));
}

function cartPayload() {
  return cart.map(({ id, quantity }) => ({ id, quantity }));
}

function cartQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(({ id }) => id === item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);
}

function renderFilters() {
  filterRow.innerHTML = categories.map((category) => `<button class="${category === activeCategory ? "active" : ""}" data-category="${category}" type="button">${category}</button>`).join("");
  filterRow.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const visibleProducts = activeCategory === "Alle" ? products : products.filter((product) => product.category === activeCategory);
  emptyState.hidden = visibleProducts.length > 0;
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" />
        <span class="product-badge">${product.badge}</span>
        <button class="favorite" type="button" aria-label="Gem ${product.title}"><ion-icon name="heart-outline"></ion-icon></button>
      </div>
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="rating"><ion-icon name="star"></ion-icon><strong>${product.rating}</strong><span>(24)</span></div>
        <div class="product-footer">
          <div class="price"><del>${money(product.oldPrice)}</del><strong>${money(product.price)}</strong></div>
          <button class="add-button" type="button" data-add="${product.id}"><ion-icon name="add-outline"></ion-icon><span>Tilføj</span></button>
        </div>
      </div>
    </article>`).join("");

  productGrid.querySelectorAll("[data-add]").forEach((button) => button.addEventListener("click", () => addToCart(Number(button.dataset.add))));
  productGrid.querySelectorAll(".favorite").forEach((button) => button.addEventListener("click", () => {
    const selected = button.classList.toggle("selected");
    button.querySelector("ion-icon").setAttribute("name", selected ? "heart" : "heart-outline");
  }));
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id, quantity: 1 });
  updateCart();
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function changeQuantity(id, change) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== id);
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

function updateCart() {
  saveCart();
  cartBadge.textContent = cartQuantity();
  const hasItems = cart.length > 0;
  cartEmpty.hidden = hasItems;
  cartCheckout.hidden = !hasItems;
  cartItems.hidden = !hasItems;
  document.querySelector("#cart-subtotal").textContent = money(cartTotal());
  document.querySelector("#cart-total").textContent = money(cartTotal());

  cartItems.innerHTML = cart.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.title}" />
        <div>
          <h3>${product.title}</h3>
          <span class="cart-item-price">${money(product.price)}</span>
          <div class="quantity-control">
            <button type="button" data-decrease="${item.id}" aria-label="Fjern én ${product.title}"><ion-icon name="remove-outline"></ion-icon></button>
            <span>${item.quantity}</span>
            <button type="button" data-increase="${item.id}" aria-label="Tilføj én ${product.title}"><ion-icon name="add-outline"></ion-icon></button>
          </div>
        </div>
        <button class="remove-item" type="button" data-remove="${item.id}" aria-label="Fjern ${product.title}"><ion-icon name="trash-outline"></ion-icon></button>
      </article>`;
  }).join("");

  cartItems.querySelectorAll("[data-decrease]").forEach((button) => button.addEventListener("click", () => changeQuantity(Number(button.dataset.decrease), -1)));
  cartItems.querySelectorAll("[data-increase]").forEach((button) => button.addEventListener("click", () => changeQuantity(Number(button.dataset.increase), 1)));
  cartItems.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => removeFromCart(Number(button.dataset.remove))));

  if (hasItems && !paypalReady) initializePayPal();
}

function openCart() {
  document.body.classList.add("cart-open");
  cartBackdrop.hidden = false;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  updateCart();
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  window.setTimeout(() => { cartBackdrop.hidden = true; }, 250);
}

function setPaymentStatus(message, isError = false) {
  paymentStatus.textContent = message;
  paymentStatus.classList.toggle("error", isError);
}

async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Betalingen kunne ikke gennemføres.");
  return data;
}

async function createPayPalOrder() {
  const order = await apiRequest("/api/paypal/orders", {
    method: "POST",
    body: JSON.stringify({ cart: cartPayload() }),
  });
  return order.id;
}

async function capturePayPalOrder(orderID) {
  return apiRequest(`/api/paypal/orders/${encodeURIComponent(orderID)}/capture`, { method: "POST" });
}

function completePayment(details) {
  const orderId = details.id || details.orderID || "";
  cart = [];
  updateCart();
  closeCart();
  document.querySelector("#payment-success-message").textContent = orderId
    ? `Betalingen er godkendt. Ordrenummer: ${orderId}`
    : "Betalingen er godkendt.";
  document.querySelector("#payment-success").hidden = false;
}

async function initializePayPal() {
  paypalReady = true;
  try {
    const config = await apiRequest("/api/paypal/config");
    if (!config.configured) {
      setPaymentStatus("Onlinebetaling er ikke aktiveret endnu. PayPal-kontoen skal forbindes, før butikken går live.", true);
      return;
    }

    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(config.clientId)}&currency=${encodeURIComponent(config.currency)}&components=buttons,card-fields&intent=capture`;
      script.onload = resolve;
      script.onerror = () => reject(new Error("PayPal kunne ikke indlæses."));
      document.head.appendChild(script);
    });

    setPaymentStatus(config.environment === "live" ? "Vælg PayPal eller betalingskort." : "Sandbox er aktiv – brug en PayPal testkonto.");

    window.paypal.Buttons({
      style: { layout: "vertical", color: "blue", shape: "rect", label: "paypal", height: 46 },
      createOrder: createPayPalOrder,
      onApprove: async ({ orderID }) => completePayment(await capturePayPalOrder(orderID)),
      onCancel: () => setPaymentStatus("Betalingen blev annulleret. Din kurv er gemt."),
      onError: (error) => setPaymentStatus(error.message || "Der opstod en fejl under betalingen.", true),
    }).render("#paypal-button-container");

    cardFields = window.paypal.CardFields({
      createOrder: createPayPalOrder,
      onApprove: async ({ orderID }) => completePayment(await capturePayPalOrder(orderID)),
      onError: (error) => setPaymentStatus(error.message || "Kortbetalingen kunne ikke gennemføres.", true),
    });

    if (cardFields.isEligible()) {
      document.querySelector("#card-payment").hidden = false;
      cardFields.NameField().render("#card-name-field");
      cardFields.NumberField().render("#card-number-field");
      cardFields.ExpiryField().render("#card-expiry-field");
      cardFields.CVVField().render("#card-cvv-field");
    }
  } catch (error) {
    paypalReady = false;
    setPaymentStatus(error.message || "Checkout kunne ikke indlæses.", true);
  }
}

document.querySelector("#card-submit").addEventListener("click", async () => {
  if (!cardFields) return;
  try {
    const state = await cardFields.getState();
    if (!state.isFormValid) {
      setPaymentStatus("Kontrollér kortoplysningerne og prøv igen.", true);
      return;
    }
    await cardFields.submit();
  } catch (error) {
    setPaymentStatus(error.message || "Kortbetalingen kunne ikke gennemføres.", true);
  }
});

document.querySelector("#cart-button").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeCart(); });
document.querySelector("#payment-success-close").addEventListener("click", () => { document.querySelector("#payment-success").hidden = true; });

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector("ion-icon").setAttribute("name", open ? "close-outline" : "menu-outline");
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector("ion-icon").setAttribute("name", "menu-outline");
}));

document.querySelector("#footer-year").textContent = new Date().getFullYear();
renderFilters();
renderProducts();
updateCart();
