const departments = [
  "Alle",
  "Bil",
  "Dæk & fælge",
  "Reservedele",
  "Værktøj",
  "Cykel",
  "MC",
  "Camping",
  "Båd",
  "Tilbud",
  "Outlet",
];

const categoryTiles = [
  {
    name: "Dæk & fælge",
    meta: "Sommer, vinter og helår",
    filter: "Dæk & fælge",
    icon: "car-sport-outline",
    tone: "blue",
  },
  {
    name: "Reservedele",
    meta: "Bremser, filtre og pærer",
    filter: "Reservedele",
    icon: "battery-charging-outline",
    tone: "ink",
  },
  {
    name: "Værktøj",
    meta: "Til garage og bilpleje",
    filter: "Værktøj",
    icon: "construct-outline",
    tone: "steel",
  },
  {
    name: "Cykel",
    meta: "Dele, lys og låse",
    filter: "Cykel",
    icon: "bicycle-outline",
    tone: "sky",
  },
  {
    name: "Camping",
    meta: "Tagbokse og fritid",
    filter: "Camping",
    icon: "cube-outline",
    tone: "gold",
  },
  {
    name: "Båd",
    meta: "Udstyr til vandet",
    filter: "Båd",
    icon: "boat-outline",
    tone: "blue",
  },
];

const products = [
  {
    id: 1,
    title: 'WheelWare Alloy Pro 18"',
    category: "Dæk & fælge",
    spec: "Komplet sæt med monterede sommerdæk",
    price: "5.999",
    oldPrice: "7.199",
    badge: "Spar 1.200",
    rating: "4.8",
    image:
      "https://iconicalloys.co.uk/cdn/shop/files/PRORACE1_2glossblack3qtr.jpg?v=1746050750&width=1946",
  },
  {
    id: 2,
    title: "Premium bremsesæt",
    category: "Reservedele",
    spec: "Skiver og klodser til populære bilmodeller",
    price: "1.249",
    oldPrice: "1.699",
    badge: "Tilbud",
    rating: "4.7",
    image:
      "https://www.bsr-tuning.dk/assets/images/general_products/big/150_big.jpg",
  },
  {
    id: 3,
    title: "Garage Master værktøjsvogn",
    category: "Værktøj",
    spec: "7 skuffer, lås og kuglelejeskinner",
    price: "2.799",
    oldPrice: "3.499",
    badge: "Nyhed",
    rating: "4.9",
    image:
      "https://dagensbolig.dk/wp-content/uploads/2025/05/Ov842118a81d8ea94.jpg",
  },
  {
    id: 4,
    title: "StartBoost batterilader",
    category: "Reservedele",
    spec: "12V intelligent opladning og vedligehold",
    price: "399",
    oldPrice: "549",
    badge: "Spar 150",
    rating: "4.6",
    image: "https://akkumulator.dk/wp-content/uploads/2017/06/products-p90.jpg",
  },
  {
    id: 5,
    title: "LED arbejdslygte duo",
    category: "Tilbud",
    spec: "Magnetfod, USB-C og 1200 lumen",
    price: "249",
    oldPrice: "399",
    badge: "Kampagne",
    rating: "4.5",
    image: "https://m.media-amazon.com/images/I/81ukadjP2YL._AC_SX679_.jpg",
  },
  {
    id: 6,
    title: "Cykelservice pakke",
    category: "Cykel",
    spec: "Kædeolie, slange, lygter og multiværktøj",
    price: "329",
    oldPrice: "499",
    badge: "Pakkepris",
    rating: "4.7",
    image:
      "https://amarcykelservice.dk/wp-content/uploads/2026/04/Woom-Fully-Equipped-Bundle-Pakke-500x500.png",
  },
  {
    id: 7,
    title: 'Nokian vinterdæk 17"',
    category: "Dæk & fælge",
    spec: "Sæt med 4 dæk - kraftigt vintergreb",
    price: "3.499",
    oldPrice: "4.299",
    badge: "Spar 800",
    rating: "4.9",
    image:
      "https://cdn.pkwteile.de/thumb?id=21880770&m=0&n=0&lng=dk&rev=94078017",
  },
  {
    id: 8,
    title: "Castrol motorolie 5W-30",
    category: "Reservedele",
    spec: "5 liter helsyntetisk - til moderne benzin & diesel",
    price: "299",
    oldPrice: "449",
    badge: "Spar 150",
    rating: "4.8",
    image: "https://shop11223.sfstatic.io/upload_dir/shop/5w30-m-5l.jpg",
  },
  {
    id: 9,
    title: "Donkraft 3T hydraulisk",
    category: "Værktøj",
    spec: "Stabil hydraulisk donkraft - 3000 kg",
    price: "699",
    oldPrice: "899",
    badge: "Bestseller",
    rating: "4.7",
    image:
      "https://www.autobixen.dk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/i/m/import_110_0677811_1_1.jpg",
  },
  {
    id: 10,
    title: "Thule tagboks 450L",
    category: "Camping",
    spec: "Aerodynamisk tagboks med dobbelt åbning",
    price: "4.299",
    oldPrice: "4.999",
    badge: "Sæson",
    rating: "4.8",
    image:
      "https://lejboxen.dk/wp-content/uploads/2024/01/Pacific-200-e1705070374724.jpg",
  },
  {
    id: 11,
    title: "MC sommerhandsker",
    category: "MC",
    spec: "Læderhandsker med ventilation og knokkelbeskyttelse",
    price: "549",
    oldPrice: "799",
    badge: "Tilbud",
    rating: "4.6",
    image:
      "https://sw7102.sfstatic.io/upload_dir/shop/category/_thumbs/Held-Sambia-MC-Sommerhandske-2.w1200.jpg",
  },
  {
    id: 12,
    title: "Bilvask Premium kit",
    category: "Tilbud",
    spec: "Shampoo, voks, mikrofibre og fælgrens",
    price: "199",
    oldPrice: "349",
    badge: "Spar 150",
    rating: "4.5",
    image: "https://m.media-amazon.com/images/I/81phCVcpJOL._AC_SX679_.jpg",
  },
];

const state = {
  productSearch: "",
  activeCategory: "Alle",
  cartCount: 0,
};

const $ = (sel) => document.querySelector(sel);

function renderDepartmentNav() {
  const nav = $("#department-nav");
  nav.innerHTML = departments
    .map(
      (d) =>
        `<a href="#products" data-department="${d}" class="${
          state.activeCategory === d ? "active" : ""
        }">${d}</a>`,
    )
    .join("");

  nav.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      selectDepartment(el.dataset.department);
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderCategoryGrid() {
  const grid = $("#category-grid");
  grid.innerHTML = categoryTiles
    .map(
      (c) => `
        <button type="button" class="category-card" data-filter="${c.filter}">
          <span class="category-icon ${c.tone}">
            <ion-icon aria-hidden="true" name="${c.icon}"></ion-icon>
          </span>
          <span class="category-name">${c.name}</span>
          <span class="category-meta">${c.meta}</span>
        </button>
      `,
    )
    .join("");

  grid.querySelectorAll(".category-card").forEach((el) => {
    el.addEventListener("click", () => {
      selectDepartment(el.dataset.filter);
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function getVisibleProducts() {
  const search = state.productSearch.trim().toLowerCase();
  return products.filter((p) => {
    const matchesCategory =
      state.activeCategory === "Alle" ||
      state.activeCategory === p.category ||
      state.activeCategory === "Bil";
    const matchesSearch =
      !search ||
      `${p.title} ${p.category} ${p.spec}`.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const grid = $("#product-grid");
  const empty = $("#empty-state");
  const visible = getVisibleProducts();

  empty.hidden = visible.length !== 0;

  grid.innerHTML = visible
    .map(
      (p) => `
        <article class="product-card">
          <div class="product-visual">
            <img
              src="${p.image}"
              alt="${p.title}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://picsum.photos/seed/wheelware-${p.id}/800/600';"
            />
            <span class="badge">${p.badge}</span>
          </div>
          <div class="product-body">
            <span class="product-category">${p.category}</span>
            <h3>${p.title}</h3>
            <p>${p.spec}</p>
            <div class="rating-row">
              <ion-icon aria-hidden="true" name="star"></ion-icon>
              <span>${p.rating}</span>
            </div>
            <div class="price-row">
              <div>
                <span class="old-price">${p.oldPrice} kr.</span>
                <strong>${p.price} kr.</strong>
              </div>
              <button type="button" data-add-to-cart aria-label="Tilføj til kurv">
                <ion-icon aria-hidden="true" name="add-outline"></ion-icon>
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
}

function selectDepartment(department) {
  state.activeCategory = department;
  renderDepartmentNav();
  renderProducts();
}

function addToCart() {
  state.cartCount += 1;
  $("#cart-count").textContent = state.cartCount;
}

function bindSearch() {
  const input = $("#product-search");
  const form = $("#search-form");

  input.addEventListener("input", (e) => {
    state.productSearch = e.target.value;
    renderProducts();
  });

  form.addEventListener("submit", (e) => e.preventDefault());
}

function setFooterYear() {
  $("#footer-year").textContent = new Date().getFullYear();
}

function bindHeaderInteractions() {
  const header = document.querySelector(".site-header");
  const mainHeader = document.querySelector(".main-header");
  const burger = document.querySelector(".mobile-menu");
  const burgerIcon = burger?.querySelector("ion-icon");
  const departmentNav = document.querySelector(".department-nav");
  if (!header || !mainHeader) return;

  const setMenuOpen = (open) => {
    header.classList.toggle("menu-open", open);
    burger?.setAttribute("aria-expanded", String(open));
    burgerIcon?.setAttribute("name", open ? "close-outline" : "menu-outline");
    if (open) mainHeader.classList.remove("collapsed");
  };

  if (burger) {
    burger.setAttribute("aria-expanded", "false");
    burger.addEventListener("click", () => {
      setMenuOpen(!header.classList.contains("menu-open"));
    });
  }

  departmentNav?.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenuOpen(false);
  });

  let collapsed = false;
  let troughY = window.scrollY;
  let peakY = window.scrollY;
  let ticking = false;
  let lastStateChangeTime = 0;
  const showAtTop = 60;
  const collapseAtY = 140;
  const collapseDelta = 40;
  const expandDelta = 60;
  const bottomBuffer = 12;
  const stateChangeDebounceMs = 400;

  const setCollapsed = (next) => {
    if (collapsed === next) return;
    collapsed = next;
    mainHeader.classList.toggle("collapsed", next);
    lastStateChangeTime = Date.now();
  };

  const update = () => {
    const y = Math.max(window.scrollY, 0);
    const maxY =
      (document.documentElement.scrollHeight || document.body.scrollHeight) -
      window.innerHeight;
    const nearBottom = maxY - y <= bottomBuffer;
    const canChangeState =
      Date.now() - lastStateChangeTime >= stateChangeDebounceMs;

    if (y <= showAtTop) {
      setCollapsed(false);
      troughY = y;
      peakY = y;
    } else if (!nearBottom && canChangeState) {
      if (!collapsed) {
        if (y < troughY) troughY = y;
        if (
          y - troughY > collapseDelta &&
          y > collapseAtY &&
          !header.classList.contains("menu-open")
        ) {
          setCollapsed(true);
          peakY = y;
        }
      } else {
        if (y > peakY) peakY = y;
        if (peakY - y > expandDelta) {
          setCollapsed(false);
          troughY = y;
        }
      }
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = "WheelWare";
  renderDepartmentNav();
  renderCategoryGrid();
  renderProducts();
  bindSearch();
  setFooterYear();
  bindHeaderInteractions();
});
