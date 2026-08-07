const products = [
  {
    id: 1,
    title: "Kraftig håndholdt støvsuger",
    category: "Rengøring",
    subtitle: "Effektiv rengøring – når og hvor du har brug for det",
    description: "Kraftig, trådløs håndstøvsuger til bilen med komplet mundstykkesæt.",
    paragraphs: [
      "Denne kraftige håndholdte støvsuger er den perfekte løsning til hurtig og effektiv rengøring af bilen. Med stærk sugeevne fjerner den nemt støv, sand, krummer, dyrehår og andet snavs fra sæder, måtter, sprækker og bagagerum.",
      "Det kompakte og trådløse design gør den nem at håndtere og opbevare, så du altid har den ved hånden, når bilen trænger til en hurtig opfriskning.",
    ],
    benefits: [
      "Kraftig sugeevne til effektiv rengøring",
      "Trådløst og kompakt design",
      "Let at bruge og opbevare",
      "Velegnet til bil, hjem og kontor",
      "Rengør nemt svært tilgængelige områder",
    ],
    specs: [
      "Fuld opladning: ca. 3,5 timer",
      "Lav hastighed (35 %): op til 33 minutter",
      "Mellem hastighed (75 %): op til 26 minutter",
      "Turbo (100 %): ca. 12–15 minutter",
    ],
    idealFor: ["Bilsæder og måtter", "Bagagerum", "Sprækker og smalle områder", "Dyrehår, støv og krummer", "Hurtig rengøring på farten"],
    note: "Batteritiden kan variere afhængigt af brug, underlag og mængden af snavs.",
    price: 449,
    oldPrice: 599,
    badge: "Bestseller",
    rating: "4,9",
    image: "assets/products/handheld-vacuum.png",
  },
  {
    id: 2,
    title: "LISEN udtrækkelig biloplader",
    category: "Elektronik",
    subtitle: "Hurtig opladning uden kabelrod",
    description: "Kompakt biloplader med integrerede udtrækkelige kabler og flere porte.",
    paragraphs: [
      "LISEN udtrækkelig biloplader kombinerer smart design med hurtig opladning. De integrerede udtrækkelige kabler holder bilen organiseret og fri for rod, mens dine enheder oplades under kørslen.",
    ],
    benefits: [
      "Udtrækkelige kabler for et ryddeligt interiør",
      "Hurtig og stabil opladning",
      "Kompakt og moderne design",
      "Praktisk til lange køreture",
      "Nem opbevaring uden løse ledninger",
    ],
    idealFor: ["Smartphones", "Tablets", "Andre USB-opladelige enheder"],
    price: 299,
    oldPrice: 399,
    badge: "Nyhed",
    rating: "4,8",
    image: "assets/products/multi-car-charger.png",
  },
  {
    id: 3,
    title: "Mini bil skraldespand",
    category: "Organisering",
    subtitle: "Hold bilen ren og organiseret",
    description: "Kompakt beholder til kvitteringer, servietter og andet mindre affald.",
    paragraphs: [
      "Denne praktiske mini bil skraldespand gør det nemt at holde bilen fri for affald. Det kompakte design passer ind i bilens kabine og hjælper med at skabe et mere ryddeligt og behageligt miljø.",
    ],
    benefits: [
      "Kompakt og pladsbesparende",
      "Nem at tømme og rengøre",
      "Velegnet til småt affald",
      "Holder bilen pæn og organiseret",
      "Stilrent design til forskellige biltyper",
    ],
    idealFor: ["Kvitteringer", "Emballage", "Servietter", "Andet mindre affald"],
    price: 249,
    oldPrice: 329,
    badge: "Praktisk",
    rating: "4,7",
    image: "assets/products/car-storage-set.png",
  },
  {
    id: 4,
    title: "Magnetisk mobilholder",
    category: "Elektronik",
    subtitle: "Praktisk montering af din smartphone",
    description: "Stærk magnet, foldbart design og 360° justering til den rette synsvinkel.",
    paragraphs: [
      "Få nem adgang til din smartphone under kørslen med denne magnetiske mobilholder. Den kraftige magnet holder telefonen stabilt på plads, også på ujævne veje.",
      "Det kompakte design passer diskret ind i bilens interiør, mens 360° rotation gør det muligt at justere telefonen til den ønskede synsvinkel.",
    ],
    benefits: [
      "Stærk magnetisk fastholdelse",
      "Hurtig montering og afmontering med én hånd",
      "360° justerbar visning",
      "Elegant og pladsbesparende design",
      "Kompatibel med de fleste smartphones",
    ],
    idealFor: ["GPS-navigation", "Håndfri opkald", "Kørselsinformation", "Daglig pendling", "Længere køreture"],
    price: 349,
    oldPrice: 449,
    badge: "Populær",
    rating: "4,9",
    image: "assets/products/magnetic-phone-holder.png",
  },
  {
    id: 5,
    title: "Luxury Car Air Freshener – Fresh Drive",
    category: "Komfort",
    subtitle: "Frisk og behagelig duft til enhver køretur",
    description: "Diskret luftfrisker med en ren og energigivende Fresh Drive-duft.",
    paragraphs: [
      "Skab en behagelig atmosfære i bilen med Fresh Drive luftfriskeren. Den giver en ren og frisk duft, som forbedrer køreoplevelsen og hjælper med at neutralisere uønskede lugte.",
      "Duftoplevelsen er ren og energigivende og giver følelsen af en nyvasket og velplejet bil.",
    ],
    benefits: [
      "Frisk og behagelig duft",
      "Hjælper med at neutralisere dårlige lugte",
      "Langvarig effekt",
      "Elegant og diskret design",
      "Velegnet til daglig brug",
    ],
    price: 129,
    oldPrice: 169,
    badge: "Fresh Drive",
    rating: "4,6",
    image: "assets/products/car-air-freshener.png",
  },
  {
    id: 6,
    title: "WheelWare komplet bilpakke",
    category: "Pakker",
    subtitle: "Fem praktiske produkter samlet i én pakke",
    description: "Komplet pakke med støvsuger, biloplader, skraldespand, mobilholder og Fresh Drive bilduft.",
    paragraphs: [
      "WheelWare-pakken samler de fem produkter, du skal bruge til en renere, mere organiseret og praktisk bil. Alt leveres samlet i én pakke og er klar til brug på hverdagens ture.",
    ],
    packageContents: [
      "Kraftig håndholdt støvsuger med tilbehør",
      "LISEN udtrækkelig biloplader",
      "Mini bil skraldespand",
      "Magnetisk mobilholder",
      "Luxury Car Air Freshener – Fresh Drive",
    ],
    benefits: [
      "Hele WheelWare-sortimentet samlet",
      "Én samlet levering",
      "Praktisk startpakke til bilen",
      "En god løsning til ny bil eller som gave",
    ],
    price: 1199,
    oldPrice: 1475,
    badge: "Pakkeløsning",
    rating: "4,9",
    image: "assets/products/complete-car-care-package.png",
  },
];

const categories = ["Alle", ...new Set(products.map((product) => product.category))];
let activeCategory = "Alle";
let cart = loadCart();
let paypalReady = false;
let cardFields;
let activeDetailProductId = null;

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
const detailModal = document.querySelector("#product-detail-modal");
const detailBackdrop = document.querySelector("#detail-backdrop");

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
      <button class="product-image product-image-button" type="button" data-detail="${product.id}" aria-label="Se ${product.title}">
        <img src="${product.image}" alt="${product.title}" />
        <span class="product-badge">${product.badge}</span>
      </button>
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="rating"><ion-icon name="star"></ion-icon><strong>${product.rating}</strong><span>(24)</span></div>
        <div class="product-footer">
          <div class="price"><del>${money(product.oldPrice)}</del><strong>${money(product.price)}</strong></div>
          <div class="product-actions">
            <button class="detail-button" type="button" data-detail="${product.id}">Læs mere</button>
            <button class="add-button" type="button" data-add="${product.id}" aria-label="Tilføj ${product.title}"><ion-icon name="add-outline"></ion-icon><span>Tilføj</span></button>
          </div>
        </div>
      </div>
    </article>`).join("");

  productGrid.querySelectorAll("[data-add]").forEach((button) => button.addEventListener("click", () => addToCart(Number(button.dataset.add))));
  productGrid.querySelectorAll("[data-detail]").forEach((button) => button.addEventListener("click", () => openProductDetail(Number(button.dataset.detail))));
}

function detailList(title, items) {
  if (!items?.length) return "";
  return `<section class="detail-section"><h3>${title}</h3><ul>${items.map((item) => `<li><ion-icon name="checkmark-circle-outline"></ion-icon><span>${item}</span></li>`).join("")}</ul></section>`;
}

function openProductDetail(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  activeDetailProductId = id;
  document.querySelector("#detail-image").src = product.image;
  document.querySelector("#detail-image").alt = product.title;
  document.querySelector("#detail-category").textContent = product.category;
  document.querySelector("#detail-title").textContent = product.title;
  document.querySelector("#detail-subtitle").textContent = product.subtitle;
  document.querySelector("#detail-price").textContent = money(product.price);
  document.querySelector("#detail-copy").innerHTML = `
    ${product.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    ${detailList("Pakken indeholder", product.packageContents)}
    ${detailList("Fordele", product.benefits)}
    ${detailList("Batteri og opladning", product.specs)}
    ${detailList("Perfekt til", product.idealFor)}
    ${product.note ? `<p class="detail-note"><ion-icon name="information-circle-outline"></ion-icon><span>${product.note}</span></p>` : ""}
  `;
  detailBackdrop.hidden = false;
  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductDetail() {
  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  window.setTimeout(() => { detailBackdrop.hidden = true; }, 220);
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
    if (!product) return "";
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
  closeProductDetail();
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
  const response = await fetch(url, { ...options, headers: { "Content-Type": "application/json", ...(options.headers || {}) } });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Betalingen kunne ikke gennemføres.");
  return data;
}

async function createPayPalOrder() {
  const order = await apiRequest("/api/paypal/orders", { method: "POST", body: JSON.stringify({ cart: cartPayload() }) });
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
  document.querySelector("#payment-success-message").textContent = orderId ? `Betalingen er godkendt. Ordrenummer: ${orderId}` : "Betalingen er godkendt.";
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

document.querySelector("#detail-close").addEventListener("click", closeProductDetail);
detailBackdrop.addEventListener("click", closeProductDetail);
document.querySelector("#detail-add").addEventListener("click", () => {
  if (!activeDetailProductId) return;
  addToCart(activeDetailProductId);
  openCart();
});
document.querySelector("#cart-button").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductDetail();
    closeCart();
  }
});
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
