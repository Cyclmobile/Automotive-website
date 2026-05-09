<template>
  <ion-page>
    <ion-content class="wheelware-content" :fullscreen="true">
      <div class="storefront-shell">
        <header class="site-header">
          <div class="service-strip" aria-label="Kundeservice">
            <a href="#support">
              <ion-icon aria-hidden="true" :icon="callOutline" />
              Kundeservice
            </a>
            <a href="#stores">
              <ion-icon aria-hidden="true" :icon="locationOutline" />
              Butikker
            </a>
            <span>
              <ion-icon aria-hidden="true" :icon="timeOutline" />
              Levering fra 0 kr.
            </span>
          </div>

          <div class="main-header">
            <button class="icon-button mobile-menu" type="button" aria-label="Menu">
              <ion-icon aria-hidden="true" :icon="menuOutline" />
            </button>

            <a class="brand-link" href="/" aria-label="WheelWare forside">
              <img src="/wheelware-logo.png" alt="WheelWare" />
            </a>

            <form class="search-box" role="search" @submit.prevent>
              <ion-icon aria-hidden="true" :icon="searchOutline" />
              <input
                v-model="productSearch"
                type="search"
                placeholder="Søg efter dæk, fælge, reservedele..."
                aria-label="Søg i butikken"
              />
              <button type="submit">Søg</button>
            </form>

            <nav class="header-actions" aria-label="Hurtige handlinger">
              <a href="#stores">
                <ion-icon aria-hidden="true" :icon="storefrontOutline" />
                <span>Find butik</span>
              </a>
              <a href="#account">
                <ion-icon aria-hidden="true" :icon="personOutline" />
                <span>Log ind</span>
              </a>
              <a href="#basket" class="cart-action">
                <ion-icon aria-hidden="true" :icon="cartOutline" />
                <span>Kurv</span>
                <strong>{{ cartCount }}</strong>
              </a>
            </nav>
          </div>

          <nav class="department-nav" aria-label="Varegrupper">
            <a
              v-for="department in departments"
              :key="department"
              href="#products"
              @click.prevent="selectDepartment(department)"
              :class="{ active: activeCategory === department }"
            >
              {{ department }}
            </a>
          </nav>
        </header>

        <main>
          <section class="hero-section" aria-labelledby="hero-title">
            <div class="hero-inner">
              <div class="hero-copy">
                <div class="hero-kicker">Autoudstyr - reservedele - dæk</div>
                <h1 id="hero-title">WheelWare</h1>
                <p>
                  Alt til bilen, værkstedet og hjulsæsonen samlet i en hurtig
                  netbutik med butikslager, click & collect og skarpe pakkepriser.
                </p>
                <div class="hero-actions">
                  <a href="#products" class="primary-action">
                    <ion-icon aria-hidden="true" :icon="pricetagOutline" />
                    Se tilbud
                  </a>
                  <a href="#finder" class="secondary-action">
                    <ion-icon aria-hidden="true" :icon="carOutline" />
                    Find dele
                  </a>
                </div>
              </div>

              <div class="hero-product" aria-label="WheelWare kampagne">
                <div class="sale-tag">Ny sæson</div>
                <div class="wheel-visual" aria-hidden="true">
                  <span class="wheel-ring"></span>
                  <span class="wheel-spoke spoke-one"></span>
                  <span class="wheel-spoke spoke-two"></span>
                  <span class="wheel-spoke spoke-three"></span>
                  <span class="wheel-hub"></span>
                </div>
                <div class="hero-product-copy">
                  <span>Komplet hjulpakke</span>
                  <strong>fra 3.999 kr.</strong>
                </div>
              </div>
            </div>
          </section>

          <section class="category-section" aria-labelledby="category-title">
            <div class="section-heading">
              <div>
                <span class="section-eyebrow">Shop efter behov</span>
                <h2 id="category-title">Populære kategorier</h2>
              </div>
              <a href="#products">
                Alle kategorier
                <ion-icon aria-hidden="true" :icon="chevronForwardOutline" />
              </a>
            </div>

            <div class="category-grid">
              <button
                v-for="category in categoryTiles"
                :key="category.name"
                type="button"
                class="category-card"
                @click="selectDepartment(category.filter)"
              >
                <span class="category-icon" :class="category.tone">
                  <ion-icon aria-hidden="true" :icon="category.icon" />
                </span>
                <span class="category-name">{{ category.name }}</span>
                <span class="category-meta">{{ category.meta }}</span>
              </button>
            </div>
          </section>

          <section id="finder" class="finder-section" aria-labelledby="finder-title">
            <div class="finder-copy">
              <span class="section-eyebrow">Find varen hurtigere</span>
              <h2 id="finder-title">Find dele til din bil</h2>
            </div>
            <form class="vehicle-finder" @submit.prevent>
              <label>
                Nummerplade
                <input type="text" placeholder="AB 12 345" />
              </label>
              <label>
                Mærke
                <select>
                  <option>Vælg mærke</option>
                  <option>Volkswagen</option>
                  <option>Toyota</option>
                  <option>BMW</option>
                  <option>Ford</option>
                </select>
              </label>
              <button type="submit">
                <ion-icon aria-hidden="true" :icon="optionsOutline" />
                Find produkter
              </button>
            </form>
          </section>

          <section id="products" class="products-section" aria-labelledby="products-title">
            <div class="section-heading">
              <div>
                <span class="section-eyebrow">Aktuelle varer</span>
                <h2 id="products-title">Tilbud og bestsellere</h2>
              </div>
              <div class="filter-pills" aria-label="Produktfiltre">
                <button
                  v-for="filter in productFilters"
                  :key="filter"
                  type="button"
                  :class="{ active: activeCategory === filter }"
                  @click="selectDepartment(filter)"
                >
                  {{ filter }}
                </button>
              </div>
            </div>

            <div class="product-grid">
              <article
                v-for="product in visibleProducts"
                :key="product.id"
                class="product-card"
              >
                <button class="save-button" type="button" :aria-label="`Gem ${product.title}`">
                  <ion-icon aria-hidden="true" :icon="heartOutline" />
                </button>
                <div class="product-visual" :class="product.tone">
                  <ion-icon aria-hidden="true" :icon="product.icon" />
                  <span>{{ product.badge }}</span>
                </div>
                <div class="product-body">
                  <span class="product-category">{{ product.category }}</span>
                  <h3>{{ product.title }}</h3>
                  <p>{{ product.spec }}</p>
                  <div class="rating-row">
                    <ion-icon aria-hidden="true" :icon="star" />
                    <span>{{ product.rating }}</span>
                  </div>
                  <div class="price-row">
                    <div>
                      <span class="old-price">{{ product.oldPrice }} kr.</span>
                      <strong>{{ product.price }} kr.</strong>
                    </div>
                    <button type="button" @click="addToCart">
                      <ion-icon aria-hidden="true" :icon="addOutline" />
                    </button>
                  </div>
                </div>
              </article>
            </div>

            <p v-if="visibleProducts.length === 0" class="empty-state">
              Ingen varer matcher din sogning.
            </p>
          </section>

          <section class="campaign-section" aria-labelledby="campaign-title">
            <div>
              <span class="section-eyebrow">Klar til sæsonen</span>
              <h2 id="campaign-title">Sommerklargøring af bil og garage</h2>
              <p>
                Fyld kurven med vask, olie, batteripleje, tagbokse og
                værkstedsudstyr.
              </p>
            </div>
            <a href="#products" class="secondary-action light">
              <ion-icon aria-hidden="true" :icon="flashOutline" />
              Shop kampagnen
            </a>
          </section>

          <section class="service-section" aria-label="WheelWare service">
            <article>
              <ion-icon aria-hidden="true" :icon="storefrontOutline" />
              <h3>Click & collect</h3>
              <p>Bestil online og hent i din lokale WheelWare butik.</p>
            </article>
            <article>
              <ion-icon aria-hidden="true" :icon="cubeOutline" />
              <h3>Levering</h3>
              <p>Dag-til-dag levering på lagerførte produkter.</p>
            </article>
            <article>
              <ion-icon aria-hidden="true" :icon="shieldCheckmarkOutline" />
              <h3>Prismatch</h3>
              <p>Fair priser på reservedele, tilbehør og hjulpakker.</p>
            </article>
          </section>
        </main>

        <footer id="support" class="site-footer">
          <div>
            <img src="/wheelware-logo.png" alt="WheelWare" />
            <p>Alt til bil, hjul, cykel, fritid og værksted.</p>
          </div>
          <nav aria-label="Footer">
            <a href="#support">Kundeservice</a>
            <a href="#stores">Butikker</a>
            <a href="#products">Tilbud</a>
            <a href="#finder">Find dele</a>
          </nav>
        </footer>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { IonContent, IonIcon, IonPage } from "@ionic/vue";
import {
  addOutline,
  batteryChargingOutline,
  bicycleOutline,
  boatOutline,
  callOutline,
  carOutline,
  carSportOutline,
  cartOutline,
  chevronForwardOutline,
  constructOutline,
  cubeOutline,
  flashOutline,
  heartOutline,
  locationOutline,
  menuOutline,
  optionsOutline,
  personOutline,
  pricetagOutline,
  searchOutline,
  shieldCheckmarkOutline,
  star,
  storefrontOutline,
  timeOutline,
} from "ionicons/icons";

type StoreProduct = {
  id: number;
  title: string;
  category: string;
  spec: string;
  price: string;
  oldPrice: string;
  badge: string;
  rating: string;
  icon: string;
  tone: string;
};

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

const productFilters = ["Alle", "Dæk & fælge", "Reservedele", "Værktøj", "Tilbud"];

const categoryTiles = [
  {
    name: "Dæk & fælge",
    meta: "Sommer, vinter og helår",
    filter: "Dæk & fælge",
    icon: carSportOutline,
    tone: "blue",
  },
  {
    name: "Reservedele",
    meta: "Bremser, filtre og pærer",
    filter: "Reservedele",
    icon: batteryChargingOutline,
    tone: "ink",
  },
  {
    name: "Værktøj",
    meta: "Til garage og bilpleje",
    filter: "Værktøj",
    icon: constructOutline,
    tone: "steel",
  },
  {
    name: "Cykel",
    meta: "Dele, lys og låse",
    filter: "Cykel",
    icon: bicycleOutline,
    tone: "sky",
  },
  {
    name: "Camping",
    meta: "Tagbokse og fritid",
    filter: "Camping",
    icon: cubeOutline,
    tone: "gold",
  },
  {
    name: "Båd",
    meta: "Udstyr til vandet",
    filter: "Båd",
    icon: boatOutline,
    tone: "blue",
  },
];

const products: StoreProduct[] = [
  {
    id: 1,
    title: "WheelWare Alloy Pro 18\"",
    category: "Dæk & fælge",
    spec: "Komplet sæt med monterede sommerdæk",
    price: "5.999",
    oldPrice: "7.199",
    badge: "Spar 1.200",
    rating: "4.8",
    icon: carSportOutline,
    tone: "blue",
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
    icon: shieldCheckmarkOutline,
    tone: "ink",
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
    icon: constructOutline,
    tone: "steel",
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
    icon: batteryChargingOutline,
    tone: "gold",
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
    icon: flashOutline,
    tone: "sky",
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
    icon: bicycleOutline,
    tone: "blue",
  },
];

const productSearch = ref("");
const activeCategory = ref("Alle");
const cartCount = ref(0);

const visibleProducts = computed(() => {
  const search = productSearch.value.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      activeCategory.value === "Alle" ||
      activeCategory.value === product.category ||
      activeCategory.value === "Bil";
    const matchesSearch =
      !search ||
      `${product.title} ${product.category} ${product.spec}`.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });
});

const selectDepartment = (department: string) => {
  activeCategory.value = department;
};

const addToCart = () => {
  cartCount.value += 1;
};

onMounted(() => {
  document.title = "WheelWare";
});
</script>

<style scoped>
.wheelware-content {
  --background: #f3f5f9;
  color: #1f2329;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.storefront-shell {
  min-height: 100%;
  background: #f3f5f9;
}

.storefront-shell *,
.storefront-shell *::before,
.storefront-shell *::after {
  box-sizing: border-box;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  border-bottom: 1px solid #dfe5ef;
  box-shadow: 0 8px 24px rgba(20, 32, 52, 0.08);
}

.service-strip {
  display: flex;
  justify-content: flex-end;
  gap: 22px;
  min-height: 34px;
  padding: 0 32px;
  background: #232428;
  color: #ffffff;
  font-size: 13px;
  font-weight: 650;
}

.service-strip a,
.service-strip span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
}

.service-strip ion-icon {
  color: #2c5fb7;
  font-size: 17px;
}

.main-header {
  display: grid;
  grid-template-columns: 210px minmax(260px, 1fr) auto;
  align-items: center;
  gap: 22px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 14px 28px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  width: 168px;
  height: 76px;
}

.brand-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.mobile-menu {
  display: none;
}

.icon-button,
.header-actions a,
.search-box button,
.primary-action,
.secondary-action,
.vehicle-finder button,
.price-row button,
.filter-pills button {
  border: 0;
  font: inherit;
}

.search-box {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) auto;
  align-items: center;
  min-height: 50px;
  background: #eef3fb;
  border: 2px solid #174ea6;
  border-radius: 8px;
  overflow: hidden;
}

.search-box ion-icon {
  margin-left: 14px;
  color: #174ea6;
  font-size: 21px;
}

.search-box input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0 14px;
  color: #20242a;
  font-size: 15px;
  font-weight: 600;
}

.search-box input::placeholder {
  color: #667489;
}

.search-box button {
  align-self: stretch;
  padding: 0 22px;
  background: #174ea6;
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-actions a {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 44px;
  padding: 0 12px;
  color: #232428;
  font-size: 13px;
  font-weight: 750;
  text-decoration: none;
  border-radius: 8px;
}

.header-actions a:hover {
  background: #eef3fb;
}

.header-actions ion-icon {
  color: #174ea6;
  font-size: 22px;
}

.cart-action strong {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  background: #174ea6;
  color: #ffffff;
  border-radius: 999px;
  font-size: 12px;
}

.department-nav {
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 0 28px 12px;
  overflow-x: auto;
}

.department-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 15px;
  color: #20242a;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 8px;
}

.department-nav a:hover,
.department-nav a.active {
  background: #174ea6;
  color: #ffffff;
}

main {
  overflow: hidden;
}

.hero-section {
  background:
    linear-gradient(110deg, rgba(23, 78, 166, 0.96) 0%, rgba(23, 78, 166, 0.96) 56%, rgba(35, 36, 40, 0.98) 56%),
    #174ea6;
  color: #ffffff;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(280px, 0.96fr);
  align-items: center;
  gap: 36px;
  max-width: 1240px;
  min-height: 430px;
  margin: 0 auto;
  padding: 44px 28px;
}

.hero-kicker,
.section-eyebrow {
  display: inline-flex;
  color: #6e8fd0;
  font-size: 13px;
  font-weight: 850;
  text-transform: uppercase;
}

.hero-kicker {
  color: #d9e6ff;
}

.hero-copy h1,
.section-heading h2,
.finder-copy h2,
.campaign-section h2 {
  margin: 0;
  letter-spacing: 0;
}

.hero-copy h1 {
  margin-top: 10px;
  font-size: 54px;
  line-height: 1;
  font-weight: 900;
}

.hero-copy p {
  max-width: 560px;
  margin: 18px 0 0;
  color: #e9f0ff;
  font-size: 18px;
  line-height: 1.55;
  font-weight: 520;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.primary-action,
.secondary-action,
.vehicle-finder button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 850;
  cursor: pointer;
}

.primary-action {
  background: #ffffff;
  color: #174ea6;
}

.secondary-action {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.38);
}

.secondary-action.light {
  background: #ffffff;
  color: #174ea6;
  border-color: transparent;
}

.hero-product {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 320px;
  padding: 34px;
  background:
    radial-gradient(circle at 28% 24%, rgba(255, 255, 255, 0.18), transparent 30%),
    #232428;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
}

.sale-tag {
  position: absolute;
  top: 22px;
  left: 22px;
  padding: 7px 11px;
  background: #f5b82e;
  color: #191b20;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 900;
}

.wheel-visual {
  position: relative;
  width: min(250px, 66vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background: #191b20;
  box-shadow:
    inset 0 0 0 20px #2d2f34,
    inset 0 0 0 34px #f5f7fb,
    inset 0 0 0 45px #174ea6,
    0 24px 55px rgba(0, 0, 0, 0.35);
}

.wheel-ring,
.wheel-spoke,
.wheel-hub {
  position: absolute;
  inset: 0;
  margin: auto;
}

.wheel-ring {
  width: 54%;
  height: 54%;
  border: 18px solid #f5f7fb;
  border-radius: 50%;
}

.wheel-spoke {
  width: 25px;
  height: 124px;
  background: #f5f7fb;
  border-radius: 999px;
  transform-origin: center;
}

.spoke-one {
  transform: rotate(0deg);
}

.spoke-two {
  transform: rotate(60deg);
}

.spoke-three {
  transform: rotate(120deg);
}

.wheel-hub {
  width: 58px;
  height: 58px;
  background: #174ea6;
  border: 9px solid #f5f7fb;
  border-radius: 50%;
}

.hero-product-copy {
  display: grid;
  gap: 4px;
  margin-top: 26px;
  text-align: center;
}

.hero-product-copy span {
  color: #dfe7f7;
  font-size: 15px;
  font-weight: 700;
}

.hero-product-copy strong {
  color: #ffffff;
  font-size: 30px;
  line-height: 1.1;
}

.category-section,
.products-section,
.finder-section,
.service-section,
.campaign-section,
.site-footer {
  max-width: 1240px;
  margin: 0 auto;
  padding-inline: 28px;
}

#finder,
#products,
#support {
  scroll-margin-top: 170px;
}

.category-section {
  padding-top: 38px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.section-heading h2,
.finder-copy h2,
.campaign-section h2 {
  margin-top: 5px;
  color: #20242a;
  font-size: 28px;
  line-height: 1.15;
  font-weight: 900;
}

.section-heading a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #174ea6;
  font-weight: 850;
  text-decoration: none;
  white-space: nowrap;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
}

.category-card {
  display: grid;
  gap: 10px;
  min-height: 150px;
  padding: 18px;
  border: 1px solid #dce3ef;
  background: #ffffff;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(25, 38, 63, 0.06);
}

.category-card:hover {
  border-color: #174ea6;
  transform: translateY(-2px);
}

.category-icon {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  color: #ffffff;
  border-radius: 8px;
  font-size: 25px;
}

.category-icon.blue,
.product-visual.blue {
  background: #174ea6;
}

.category-icon.ink,
.product-visual.ink {
  background: #232428;
}

.category-icon.steel,
.product-visual.steel {
  background: #607089;
}

.category-icon.sky,
.product-visual.sky {
  background: #397ac4;
}

.category-icon.gold,
.product-visual.gold {
  background: #c9911f;
}

.category-name {
  color: #20242a;
  font-size: 16px;
  font-weight: 900;
}

.category-meta {
  color: #667489;
  font-size: 13px;
  line-height: 1.35;
  font-weight: 600;
}

.finder-section {
  display: grid;
  grid-template-columns: minmax(190px, 0.32fr) minmax(0, 1fr);
  align-items: center;
  gap: 22px;
  margin-top: 34px;
  padding-top: 22px;
  padding-bottom: 22px;
  background: #ffffff;
  border: 1px solid #dce3ef;
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(25, 38, 63, 0.07);
}

.vehicle-finder {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) minmax(150px, 1fr) auto;
  gap: 12px;
  align-items: end;
}

.vehicle-finder label {
  display: grid;
  gap: 7px;
  color: #475569;
  font-size: 13px;
  font-weight: 800;
}

.vehicle-finder input,
.vehicle-finder select {
  width: 100%;
  height: 46px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  color: #20242a;
  border-radius: 8px;
  padding: 0 12px;
  font: inherit;
  font-weight: 700;
  outline: 0;
}

.vehicle-finder input:focus,
.vehicle-finder select:focus {
  border-color: #174ea6;
  box-shadow: 0 0 0 3px rgba(23, 78, 166, 0.16);
}

.vehicle-finder button {
  height: 46px;
  background: #174ea6;
  color: #ffffff;
}

.products-section {
  padding-top: 38px;
}

.filter-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.filter-pills button {
  min-height: 36px;
  padding: 0 13px;
  color: #334155;
  background: #ffffff;
  border: 1px solid #dce3ef;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 850;
  cursor: pointer;
}

.filter-pills button.active {
  color: #ffffff;
  background: #174ea6;
  border-color: #174ea6;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.product-card {
  position: relative;
  display: grid;
  min-height: 430px;
  background: #ffffff;
  border: 1px solid #dce3ef;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(25, 38, 63, 0.07);
}

.save-button {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 0;
  color: #174ea6;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 18px rgba(25, 38, 63, 0.14);
  cursor: pointer;
}

.product-visual {
  display: grid;
  place-items: center;
  min-height: 172px;
  color: #ffffff;
}

.product-visual ion-icon {
  font-size: 74px;
  filter: drop-shadow(0 12px 22px rgba(0, 0, 0, 0.22));
}

.product-visual span {
  align-self: end;
  margin-bottom: 14px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.95);
  color: #20242a;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 900;
}

.product-body {
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  gap: 8px;
  padding: 18px;
}

.product-category {
  color: #174ea6;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.product-body h3 {
  min-height: 48px;
  margin: 0;
  color: #20242a;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
}

.product-body p {
  min-height: 44px;
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.45;
  font-weight: 600;
}

.rating-row {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #c9911f;
  font-size: 14px;
  font-weight: 900;
}

.price-row {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  padding-top: 8px;
}

.price-row div {
  display: grid;
  gap: 2px;
}

.old-price {
  color: #8a97aa;
  font-size: 13px;
  font-weight: 700;
  text-decoration: line-through;
}

.price-row strong {
  color: #1f2329;
  font-size: 26px;
  line-height: 1.1;
  font-weight: 950;
}

.price-row button {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  background: #174ea6;
  color: #ffffff;
  border-radius: 8px;
  font-size: 23px;
  cursor: pointer;
}

.empty-state {
  margin: 18px 0 0;
  color: #64748b;
  font-weight: 700;
}

.campaign-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 40px;
  padding-top: 28px;
  padding-bottom: 28px;
  background: #232428;
  color: #ffffff;
  border-radius: 8px;
}

.campaign-section h2 {
  color: #ffffff;
}

.campaign-section p {
  max-width: 640px;
  margin: 10px 0 0;
  color: #d6deeb;
  line-height: 1.5;
  font-weight: 600;
}

.service-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding-top: 34px;
}

.service-section article {
  display: grid;
  gap: 10px;
  min-height: 160px;
  padding: 22px;
  background: #ffffff;
  border: 1px solid #dce3ef;
  border-radius: 8px;
  box-shadow: 0 10px 28px rgba(25, 38, 63, 0.06);
}

.service-section ion-icon {
  color: #174ea6;
  font-size: 32px;
}

.service-section h3 {
  margin: 0;
  color: #20242a;
  font-size: 18px;
  font-weight: 900;
}

.service-section p {
  margin: 0;
  color: #667489;
  line-height: 1.45;
  font-weight: 600;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 42px;
  padding-top: 30px;
  padding-bottom: 36px;
  color: #dbe4f4;
  background: #1f2329;
}

.site-footer img {
  width: 154px;
  height: 74px;
  object-fit: contain;
  background: #ffffff;
  border-radius: 6px;
}

.site-footer p {
  margin: 10px 0 0;
  color: #c5cedd;
  font-weight: 600;
}

.site-footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-content: start;
  justify-content: flex-end;
}

.site-footer a {
  color: #ffffff;
  font-weight: 750;
  text-decoration: none;
}

@media (max-width: 1040px) {
  .main-header {
    grid-template-columns: auto minmax(150px, 190px) 1fr;
  }

  .mobile-menu {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    color: #174ea6;
    background: #eef3fb;
    border-radius: 8px;
    font-size: 24px;
  }

  .header-actions {
    grid-column: 2 / -1;
    justify-content: flex-end;
  }

  .search-box {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero-inner,
  .finder-section {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .service-strip {
    justify-content: flex-start;
    gap: 15px;
    overflow-x: auto;
    padding: 0 16px;
  }

  .main-header {
    grid-template-columns: auto minmax(128px, 1fr) auto;
    gap: 10px;
    padding: 10px 14px;
  }

  .brand-link {
    width: 132px;
    height: 62px;
  }

  .header-actions {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    width: 100%;
  }

  .header-actions a {
    justify-content: center;
    min-width: 0;
    padding: 0 8px;
  }

  .header-actions span {
    display: none;
  }

  .department-nav {
    justify-content: flex-start;
    padding: 0 14px 10px;
  }

  .hero-section {
    background: #174ea6;
  }

  .hero-inner {
    min-height: auto;
    padding: 34px 16px;
  }

  .hero-copy h1 {
    font-size: 42px;
  }

  .hero-copy p {
    font-size: 16px;
  }

  .hero-product {
    min-height: 280px;
    padding: 24px;
  }

  .category-section,
  .products-section,
  .finder-section,
  .service-section,
  .campaign-section,
  .site-footer {
    padding-inline: 16px;
  }

  #finder,
  #products,
  #support {
    scroll-margin-top: 280px;
  }

  .section-heading,
  .campaign-section,
  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .section-heading h2,
  .finder-copy h2,
  .campaign-section h2 {
    font-size: 24px;
  }

  .category-grid,
  .product-grid,
  .service-section {
    grid-template-columns: 1fr;
  }

  .category-card {
    min-height: 124px;
  }

  .vehicle-finder {
    grid-template-columns: 1fr;
  }

  .filter-pills {
    justify-content: flex-start;
  }

  .product-card {
    min-height: 400px;
  }

  .site-footer nav {
    justify-content: flex-start;
  }
}
</style>
