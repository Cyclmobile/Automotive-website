const products = [
  {
    id: 1,
    title: "Trådløs håndstøvsuger",
    category: "Rengøring",
    description: "Kraftig, kompakt støvsuger med vaskbart filter og komplet mundstykkesæt.",
    price: 449,
    oldPrice: 599,
    badge: "Bestseller",
    rating: "4,9",
    image: "assets/products/handheld-vacuum.png",
  },
  {
    id: 2,
    title: "4-i-1 biloplader",
    category: "Elektronik",
    description: "USB-C PD, USB-A og integrerede kabler samlet i én kompakt oplader.",
    price: 299,
    oldPrice: 399,
    badge: "Nyhed",
    rating: "4,8",
    image: "assets/products/multi-car-charger.png",
  },
  {
    id: 3,
    title: "Smart opbevaringssæt",
    category: "Organisering",
    description: "Fire diskrete beholdere til småting og affald i kabinen.",
    price: 249,
    oldPrice: 329,
    badge: "Sætpris",
    rating: "4,7",
    image: "assets/products/car-storage-set.png",
  },
  {
    id: 4,
    title: "Foldbar magnetisk mobilholder",
    category: "Elektronik",
    description: "Stabil, justerbar holder med sugekop og pladsbesparende foldedesign.",
    price: 349,
    oldPrice: 449,
    badge: "Populær",
    rating: "4,9",
    image: "assets/products/magnetic-phone-holder.png",
  },
  {
    id: 5,
    title: "Minimalistisk bilduft",
    category: "Komfort",
    description: "Kompakt og diskret luftfrisker med regulerbar duftåbning.",
    price: 129,
    oldPrice: 169,
    badge: "Nyhed",
    rating: "4,6",
    image: "assets/products/car-air-freshener.png",
  },
];

const categories = ["Alle", ...new Set(products.map((product) => product.category))];
let activeCategory = "Alle";
let cartCount = 0;

const productGrid = document.querySelector("#product-grid");
const filterRow = document.querySelector("#filter-row");
const emptyState = document.querySelector("#empty-state");
const cartBadge = document.querySelector("#cart-count");
const toast = document.querySelector("#toast");

function money(value) {
  return new Intl.NumberFormat("da-DK").format(value);
}

function renderFilters() {
  filterRow.innerHTML = categories
    .map(
      (category) =>
        `<button class="${category === activeCategory ? "active" : ""}" data-category="${category}" type="button">${category}</button>`,
    )
    .join("");

  filterRow.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const visibleProducts =
    activeCategory === "Alle"
      ? products
      : products.filter((product) => product.category === activeCategory);

  emptyState.hidden = visibleProducts.length > 0;
  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.title}" />
            <span class="product-badge">${product.badge}</span>
            <button class="favorite" type="button" aria-label="Gem ${product.title}">
              <ion-icon name="heart-outline"></ion-icon>
            </button>
          </div>
          <div class="product-content">
            <span class="product-category">${product.category}</span>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="rating"><ion-icon name="star"></ion-icon><strong>${product.rating}</strong><span>(24)</span></div>
            <div class="product-footer">
              <div class="price"><del>${money(product.oldPrice)} kr.</del><strong>${money(product.price)} kr.</strong></div>
              <button class="add-button" type="button" data-add="${product.id}">
                <ion-icon name="add-outline"></ion-icon>
                <span>Tilføj</span>
              </button>
            </div>
          </div>
        </article>`,
    )
    .join("");

  productGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      cartCount += 1;
      cartBadge.textContent = cartCount;
      toast.classList.add("show");
      window.clearTimeout(window.toastTimer);
      window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
    });
  });

  productGrid.querySelectorAll(".favorite").forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("ion-icon");
      const selected = button.classList.toggle("selected");
      icon.setAttribute("name", selected ? "heart" : "heart-outline");
    });
  });
}

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector("ion-icon").setAttribute("name", open ? "close-outline" : "menu-outline");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector("ion-icon").setAttribute("name", "menu-outline");
  });
});

document.querySelector("#footer-year").textContent = new Date().getFullYear();
renderFilters();
renderProducts();
