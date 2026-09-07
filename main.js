// --- CORE APPLICATION LOGIC & ROUTER ---

// Business & SKU Data
const BUSINESS = {
  name: "Bhagyashree Food Products",
  legal: "Partnership Firm",
  since: 2012,
  address: "Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad, Uttar Pradesh - 244001",
  phone: "+91 97588 05800",
  email: "info@bhagyashreefoodproducts.com",
  fssai: "12718060000582",
  gstin: "09AAMFB2738E1ZG",
  udyam: "UDYAM-UP-59-0006744"
};

const BREAD_PRODUCTS = [
  {
    name: "Good Morning India Fresh White Bread",
    desc: "Soft, oven-fresh white bread slice, ideal for daily breakfast toast, sandwiches, and family dining.",
    weight: "500g Pack",
    variants: "Standard Slices",
    img: "./assets/bread/500gm.jpeg"
  },
  {
    name: "Good Morning India Premium Bread",
    desc: "Richly formulated bread baked for extra softness and nutritious morning family table breakfasts.",
    weight: "600g Family Pack",
    variants: "Large Loaf",
    img: "./assets/bread/600gm.jpeg"
  },
  {
    name: "Good Morning India Special Sandwich Bread",
    desc: "Specially crafted soft slice bread in vibrant red pouch, perfect for quick morning snacks.",
    weight: "350g Pack",
    variants: "Sandwich Slices",
    img: "./assets/bread/350gm.jpeg"
  },
  {
    name: "Good Morning India Fresh Sandwich Bread",
    desc: "Delicate orange packaging sandwich bread baked to standard softness and clean slice texture.",
    weight: "300g Pack",
    variants: "Daily Pack",
    img: "./assets/bread/300gm.jpeg"
  },
  {
    name: "Good Morning India Classic Sandwich Bread",
    desc: "Compact everyday sandwich loaf packed with fresh grain nutrition for daily consumption.",
    weight: "220g Value Pack",
    variants: "Value Pack",
    img: "./assets/bread/220gm.jpeg"
  },
  {
    name: "Good Morning India Gattu Sandwich Bread",
    desc: "Signature blue & green checked package sandwich bread offering great slice volume and texture.",
    weight: "Gattu Special Pack",
    variants: "Special Edition",
    img: "./assets/bread/GATTU.jpeg"
  }
];

const PREETI_PRODUCTS = [
  {
    name: "Preeti Biscottis – Classic",
    desc: "100% eggless handmade biscuits in classic orange packaging. Crispy, crunchy and perfect with tea.",
    weight: "Assorted Pack",
    variants: "Classic Orange",
    img: "./assets/rusk/preeti_biscottis_orange.jpg"
  },
  {
    name: "Preeti Biscottis – Dry Fruits",
    desc: "Premium dry fruits variant of our signature eggless handmade biscuits. Rich, nutty and delicious.",
    weight: "Assorted Pack",
    variants: "Dry Fruits Special",
    img: "./assets/rusk/preeti_biscottis_dryfruits.jpg"
  },
  {
    name: "Preeti Biscottis – Premium",
    desc: "100% eggless handmade biscuit in tall premium pack. For a healthier, fresh, rich and tasty treat.",
    weight: "Premium Pack",
    variants: "Premium Orange",
    img: "./assets/rusk/preeti_biscottis_tall.jpg"
  },
  {
    name: "Keshav Bread Suji Toast",
    desc: "Tasty and crunchy bread suji toast made with finest semolina. A delightful tea-time companion.",
    weight: "Standard Pack",
    variants: "Suji Toast",
    img: "./assets/rusk/keshav_suji_toast.jpg"
  },
  {
    name: "Preeti Bread Rusk Toast",
    desc: "Double-baked crispy bread rusk toast with 0% artificial preservatives. Premium quality guaranteed.",
    weight: "Standard Pack",
    variants: "Bread Rusk",
    img: "./assets/rusk/preeti_rusk_toast.jpg"
  }
];

// Unified 11-SKU Catalog for Category Filtering (English Oven / Modern Foods Style)
const ALL_FMCG_PRODUCTS = [
  {
    id: "gmi-500",
    category: "bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    name: "Fresh White Bread (500g)",
    fullName: "Good Morning India Fresh White Bread",
    weight: "500g Regular Pack",
    tag: "Daily Fresh",
    desc: "Soft, uniform oven-fresh slices baked daily for morning toast, sandwiches, and family dining.",
    img: "./assets/bread/500gm.jpeg",
    link: "#/brands/good-morning-india"
  },
  {
    id: "gmi-600",
    category: "bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    name: "Premium Family Loaf (600g)",
    fullName: "Good Morning India Premium Bread",
    weight: "600g Family Pack",
    tag: "Extra Soft",
    desc: "Richly formulated large loaf baked for wholesome softness and hearty morning family breakfasts.",
    img: "./assets/bread/600gm.jpeg",
    link: "#/brands/good-morning-india"
  },
  {
    id: "gmi-350",
    category: "bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    name: "Special Sandwich Bread (350g)",
    fullName: "Good Morning India Special Sandwich Bread",
    weight: "350g Red Pack",
    tag: "Sandwich Cut",
    desc: "Specially formulated soft slices in signature red pouch, crafted for grilled and club sandwiches.",
    img: "./assets/bread/350gm.jpeg",
    link: "#/brands/good-morning-india"
  },
  {
    id: "gmi-300",
    category: "bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    name: "Fresh Sandwich Bread (300g)",
    fullName: "Good Morning India Fresh Sandwich Bread",
    weight: "300g Orange Pack",
    tag: "Everyday Pack",
    desc: "Delicate orange pack sandwich loaf baked for soft texture and clean, uniform slicing.",
    img: "./assets/bread/300gm.jpeg",
    link: "#/brands/good-morning-india"
  },
  {
    id: "gmi-220",
    category: "bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    name: "Classic Sandwich Bread (220g)",
    fullName: "Good Morning India Classic Sandwich Bread",
    weight: "220g Value Pack",
    tag: "Value Pack",
    desc: "Compact everyday sandwich loaf packed with fresh grain nutrition for daily consumption.",
    img: "./assets/bread/220gm.jpeg",
    link: "#/brands/good-morning-india"
  },
  {
    id: "gmi-gattu",
    category: "bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    name: "Gattu Sandwich Bread",
    fullName: "Good Morning India Gattu Sandwich Bread",
    weight: "Gattu Special Pack",
    tag: "Special Edition",
    desc: "Signature blue & green checked package sandwich bread offering great slice volume and texture.",
    img: "./assets/bread/GATTU.jpeg",
    link: "#/brands/good-morning-india"
  },
  {
    id: "preeti-rusk",
    category: "rusk",
    brand: "Preeti",
    brandClass: "preeti",
    name: "Double-Baked Bread Rusk Toast",
    fullName: "Preeti Bread Rusk Toast",
    weight: "Standard Pack",
    tag: "100% Vegetarian",
    desc: "Double-baked crispy bread rusk toast made with finest ingredients for authentic Indian tea-time crunch.",
    img: "./assets/rusk/preeti_rusk_toast.jpg",
    link: "#/brands/preeti"
  },
  {
    id: "keshav-suji",
    category: "rusk",
    brand: "Preeti Range",
    brandClass: "preeti",
    name: "Keshav Bread Suji Toast",
    fullName: "Keshav Bread Suji Toast",
    weight: "Standard Pack",
    tag: "Semolina Toast",
    desc: "Tasty, crunchy bread suji toast made with fine semolina. A wholesome, crispy tea-time companion.",
    img: "./assets/rusk/keshav_suji_toast.jpg",
    link: "#/brands/preeti"
  },
  {
    id: "preeti-biscotti-orange",
    category: "biscotti",
    brand: "Preeti",
    brandClass: "preeti",
    name: "Handmade Biscottis – Classic",
    fullName: "Preeti Biscottis Classic Orange",
    weight: "Assorted Box",
    tag: "100% Eggless",
    desc: "100% eggless handmade biscuits in classic orange packaging. Crispy, crunchy and rich in taste.",
    img: "./assets/rusk/preeti_biscottis_orange.jpg",
    link: "#/brands/preeti"
  },
  {
    id: "preeti-biscotti-dryfruits",
    category: "biscotti",
    brand: "Preeti",
    brandClass: "preeti",
    name: "Handmade Biscottis – Dry Fruits",
    fullName: "Preeti Biscottis Dry Fruits Special",
    weight: "Assorted Box",
    tag: "Dry Fruits Rich",
    desc: "Premium dry fruits variant of signature eggless handmade biscuits. Nutty, wholesome, and delicious.",
    img: "./assets/rusk/preeti_biscottis_dryfruits.jpg",
    link: "#/brands/preeti"
  },
  {
    id: "preeti-biscotti-tall",
    category: "biscotti",
    brand: "Preeti",
    brandClass: "preeti",
    name: "Handmade Biscottis – Tall Pack",
    fullName: "Preeti Biscottis Premium Tall Pack",
    weight: "Tall Box Pack",
    slug: "preeti-biscottis-tall",
    img: "./assets/rusk/preeti_biscottis_tall.jpg",
    link: "#/products/preeti-biscottis-tall"
  }
];

// Product Showcase Data (Authentic Bhagyashree FMCG Products)
const SHOWCASE_PRODUCTS = [
  {
    id: "gmi-white-bread-500",
    slug: "good-morning-fresh-white-bread",
    name: "Good Morning India Fresh White Bread",
    shortName: "Fresh White Bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    category: "bread",
    categoryLabel: "BREAD & LOAVES",
    desc: "Soft, oven-fresh white bread slices, ideal for daily breakfast toast, sandwiches, and family dining.",
    weight: "500g Regular Pack",
    tag: "Daily Morning Fresh",
    img: "./assets/bread/500gm.jpeg",
    highlights: [
      "Baked fresh daily at our Moradabad facility",
      "Soft and uniform slice texture ideal for toasting and sandwiches",
      "Tamper-evident moisture-barrier pouch packaging",
      "FSSAI Grade-A certified manufacturing (Lic: 12718060000582)",
      "100% pure vegetarian production line"
    ]
  },
  {
    id: "gmi-premium-bread-600",
    slug: "good-morning-premium-bread",
    name: "Good Morning India Premium Bread",
    shortName: "Premium Family Bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    category: "bread",
    categoryLabel: "BREAD & LOAVES",
    desc: "Richly formulated bread baked for extra softness and nutritious morning family table breakfasts.",
    weight: "600g Family Pack",
    tag: "Extra Soft Large Loaf",
    img: "./assets/bread/600gm.jpeg",
    highlights: [
      "Wholesome large family loaf with high slice count",
      "Extra soft crumb structure formulated for rich morning nutrition",
      "Formulated with select refined wheat flour and balanced yeast profile",
      "Dispatched fresh on early 5:00 AM distribution fleet",
      "100% vegetarian quality assured"
    ]
  },
  {
    id: "gmi-sandwich-bread-350",
    slug: "good-morning-special-sandwich-bread",
    name: "Good Morning India Special Sandwich Bread",
    shortName: "Special Sandwich Bread",
    brand: "Good Morning India",
    brandClass: "gmi",
    category: "bread",
    categoryLabel: "BREAD & LOAVES",
    desc: "Specially crafted soft slice bread in vibrant red pouch, perfect for quick morning snacks.",
    weight: "350g Value Pack",
    tag: "Sandwich Cut Slices",
    img: "./assets/bread/350gm.jpeg",
    highlights: [
      "Precision cut sandwich slices with uniform crumb strength",
      "Ideal for grilling, spreading, and quick breakfast club sandwiches",
      "Moisture-locked packaging preserving crumb flexibility",
      "Standardized hygienic processing protocols",
      "FSSAI licensed food product"
    ]
  },
  {
    id: "preeti-bread-rusk",
    slug: "preeti-bread-rusk-toast",
    name: "Preeti Bread Rusk Toast",
    shortName: "Double-Baked Bread Rusk",
    brand: "Preeti",
    brandClass: "preeti",
    category: "rusk",
    categoryLabel: "RUSKS & TOAST",
    desc: "Double-baked crispy bread rusk toast made with finest ingredients for authentic Indian tea-time crunch.",
    weight: "Standard Fresh Pack",
    tag: "Double-Baked Crispy",
    img: "./assets/rusk/preeti_rusk_toast.jpg",
    highlights: [
      "Authentic traditional double-baking for golden crispy crunch",
      "Perfect dipping firmness for everyday morning & evening Indian tea",
      "100% vegetarian with zero animal fats",
      "Extended ambient shelf stability and aroma retention",
      "Manufactured under automated hygiene controls"
    ]
  },
  {
    id: "keshav-suji-toast",
    slug: "keshav-bread-suji-toast",
    name: "Keshav Bread Suji Toast",
    shortName: "Semolina Suji Toast",
    brand: "Preeti Range",
    brandClass: "preeti",
    category: "rusk",
    categoryLabel: "RUSKS & TOAST",
    desc: "Tasty and crunchy bread suji toast made with finest semolina. A delightful tea-time companion.",
    weight: "Standard Pack",
    tag: "Semolina Crunch",
    img: "./assets/rusk/keshav_suji_toast.jpg",
    highlights: [
      "Formulated with premium wheat semolina (suji) for distinctive crunch",
      "Oven-baked to golden perfection with subtle sweetness",
      "Wholesome tea-time staple popular across northern markets",
      "Hygienically packaged to prevent moisture softening",
      "FSSAI verified product standard"
    ]
  },
  {
    id: "preeti-biscottis-classic",
    slug: "preeti-biscottis-classic",
    name: "Preeti Handmade Biscottis – Classic",
    shortName: "Handmade Biscottis Classic",
    brand: "Preeti",
    brandClass: "preeti",
    category: "biscotti",
    categoryLabel: "BISCUITS",
    desc: "100% eggless handmade biscuits in classic orange packaging. Crispy, crunchy and perfect with tea.",
    weight: "Assorted Box Pack",
    tag: "100% Eggless",
    img: "./assets/rusk/preeti_biscottis_orange.jpg",
    highlights: [
      "100% eggless handmade confectionery biscuit formulation",
      "Rich buttery crumb texture with crisp bite",
      "Classic regional tea companion in signature orange packaging",
      "Strict quality checking for ingredients and packaging integrity",
      "Produced in dedicated pure vegetarian facilities"
    ]
  },
  {
    id: "preeti-biscottis-dryfruits",
    slug: "preeti-biscottis-dryfruits",
    name: "Preeti Handmade Biscottis – Dry Fruits",
    shortName: "Dry Fruits Biscottis",
    brand: "Preeti",
    brandClass: "preeti",
    category: "biscotti",
    categoryLabel: "BISCUITS",
    desc: "Premium dry fruits variant of our signature eggless handmade biscuits. Rich, nutty and delicious.",
    weight: "Premium Gift Box",
    tag: "Dry Fruits Rich",
    img: "./assets/rusk/preeti_biscottis_dryfruits.jpg",
    highlights: [
      "Enriched with wholesome dry fruits and crunchy nuts",
      "100% eggless formulation suitable for all festive and tea occasions",
      "Carefully baked for delicate sweetness and satisfying texture",
      "Premium airtight sealed box preserving fresh oven aroma",
      "FSSAI licensed factory production"
    ]
  }
];

// Hero Showcase Data — Premium FMCG Visual Campaign
const HERO_SHOWCASE_SLIDES = [
  {
    id: "freshness",
    slideNum: "01",
    label: "FRESHNESS",
    eyebrow: "GOOD MORNING INDIA",
    title: "Freshness<br>Baked Every Day.",
    desc: "Freshly baked bread made for everyday Indian mornings.",
    bgImg: "./assets/hero_slide_1.jpg",
    productImg: "./assets/bread/500gm.jpeg",
    productAlt: "Good Morning India Fresh White Bread 500g",
    brandClass: "gmi",
    cta1Text: "Explore Our Breads",
    cta1Link: "#/brands/good-morning-india",
    cta2Text: "Become a Distributor",
    cta2Link: "#/distributors"
  },
  {
    id: "bakery",
    slideNum: "02",
    label: "OUR BAKERY",
    eyebrow: "MADE AT BHAGYASHREE",
    title: "Made Here.<br>Delivered Fresh.",
    desc: "Manufactured with standardized processes at our Moradabad bakery facility.",
    bgImg: "./assets/hero_slide_2.jpg",
    productImg: "./assets/bread/600gm.jpeg",
    productAlt: "Bhagyashree Bakery Plant & Fresh Loaves",
    brandClass: "gmi",
    cta1Text: "Discover Our Process",
    cta1Link: "#/process",
    cta2Text: "Our Factory",
    cta2Link: "#/about"
  },
  {
    id: "range",
    slideNum: "03",
    label: "OUR RANGE",
    eyebrow: "OUR BAKERY RANGE",
    title: "More Than Bread.",
    desc: "Everyday bakery favourites, made for every table.",
    bgImg: "./assets/hero_slide_3.jpg",
    productImg: "./assets/rusk/preeti_rusk_toast.jpg",
    productAlt: "Preeti Rusk & Biscottis FMCG Range",
    brandClass: "preeti",
    cta1Text: "Explore Our Products",
    cta1Link: "#/brands",
    cta2Text: "View All Brands",
    cta2Link: "#/brands"
  },
  {
    id: "distribution",
    slideNum: "04",
    label: "DISTRIBUTION",
    eyebrow: "FROM OUR BAKERY TO THE MARKET",
    title: "Freshness<br>That Travels.",
    desc: "From our bakery in Moradabad to retailers across the region.",
    bgImg: "./assets/hero_slide_4.jpg",
    productImg: "./assets/bread/600gm.jpeg",
    productAlt: "Bhagyashree Daily Morning Logistics Fleet",
    brandClass: "gmi",
    cta1Text: "Become a Distributor",
    cta1Link: "#/distributors",
    cta2Text: "Contact Us",
    cta2Link: "#/contact"
  }
];

const DISTRIBUTION_CHANNELS = [
  "Authorized Wholesale Stockists",
  "Regional Logistics Depots",
  "Supermarket & Modern Trade Outlets",
  "Local Retail Grocery Stores",
  "Morning Route Delivery Fleet",
  "Institutional & Food Service Supply",
  "Authorized Wholesale Stockists",
  "Regional Logistics Depots",
  "Supermarket & Modern Trade Outlets",
  "Local Retail Grocery Stores"
];

// Router Configuration
const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/brands": renderBrands,
  "/brands/preeti": renderPreeti,
  "/brands/good-morning-india": renderGMI,
  "/process": renderProcess,
  "/distributors": renderDistributors,
  "/gallery": renderGallery,
  "/contact": renderContact
};

// Route Selector
function router() {
  const hash = window.location.hash || "#/";
  // Separate path from query parameters (e.g. #/contact?product=Bread -> /contact)
  const pathWithQuery = hash.substring(1);
  const path = pathWithQuery.split("?")[0];

  // Clean up timers on route change
  if (window.heroAutoTimer) {
    clearInterval(window.heroAutoTimer);
    window.heroAutoTimer = null;
  }
  if (window.showcaseAutoTimer) {
    clearInterval(window.showcaseAutoTimer);
    window.showcaseAutoTimer = null;
  }

  let renderer = routes[path];
  
  // Dedicated Product Detail Dynamic Routing
  if (!renderer && path.startsWith("/products/")) {
    const slug = path.replace("/products/", "");
    renderer = () => renderProductDetail(slug);
  }

  if (!renderer) renderer = renderHome;
  
  const view = document.getElementById("router-view");
  if (view) {
    view.className = "fade-in-up";
    view.innerHTML = renderer();
    
    // Scroll to top of window on page transition
    window.scrollTo(0, 0);
  }
  
  // Update Navbar Active States
  updateNavbarActiveState(path);
  
  // Re-initialize dynamic interactions
  initInteractions(path);
}

// Update Active Link in Navbar
function updateNavbarActiveState(path) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.classList.remove("active");
  });
  
  let basePage = path;
  if (path.startsWith("/brands/") || path.startsWith("/products/")) {
    basePage = "/brands";
  }
  
  const activeLink = document.querySelector(`.nav-link[href="#${basePage}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Header shrink on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header-nav");
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// Mobile navbar toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    mobileToggle.innerHTML = isOpen
      ? '<i data-lucide="x" style="width: 24px; height: 24px;"></i>'
      : '<i data-lucide="menu" style="width: 24px; height: 24px;"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });
}

// Close mobile navbar on nav link click
document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-link") && navMenu && mobileToggle) {
    navMenu.classList.remove("active");
    mobileToggle.innerHTML = '<i data-lucide="menu" style="width: 24px; height: 24px;"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
});

// Link Quick Enquiry Button to Contact Page
const ctaBtn = document.getElementById("nav-cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    window.location.hash = "#/contact";
  });
}

// Router Hash Listener & Execution
window.addEventListener("hashchange", router);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", router);
} else {
  router();
}

// --- RENDER PAGES ---

// --- HERO SEPARATE PRESENTATION LOGIC (DESKTOP & MOBILE SHARE HERO_SHOWCASE_SLIDES DATA) ---

// Desktop Hero Presentation View (Viewport > 768px)
function renderDesktopHero(slides) {
  return `
    <div class="fmcg-hero-desktop-view">
      <div class="fmcg-hero-viewport" id="fmcg-hero-stage-desktop">
        ${slides.map((slide, idx) => `
          <div class="fmcg-hero-slide-v2 fmcg-hero-slide-desktop ${idx === 0 ? 'active' : ''}" data-hero-index="${idx}">
            <div class="fmcg-hero-bg-wrap">
              <img src="${slide.bgImg}" alt="${slide.label} Background" class="fmcg-hero-bg-img" loading="${idx === 0 ? 'eager' : 'lazy'}">
              <div class="fmcg-hero-scrim"></div>
            </div>
            <div class="container fmcg-hero-content-container">
              <div class="fmcg-hero-layout">
                <div class="fmcg-hero-editorial">
                  <span class="fmcg-hero-eyebrow ${slide.brandClass}">${slide.eyebrow}</span>
                  <h1 class="fmcg-hero-headline">${slide.title}</h1>
                  <p class="fmcg-hero-subtext">${slide.desc}</p>
                  
                  <div class="fmcg-hero-cta-group">
                    <a href="${slide.cta1Link}" class="btn fmcg-btn-hero-primary">
                      <span>${slide.cta1Text}</span>
                      <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                    </a>
                    <a href="${slide.cta2Link}" class="btn fmcg-btn-hero-secondary">
                      <i data-lucide="handshake" style="width: 16px; height: 16px;"></i>
                      <span>${slide.cta2Text}</span>
                    </a>
                  </div>
                </div>

                <div class="fmcg-hero-product-stage">
                  <div class="fmcg-product-spotlight">
                    <img src="${slide.productImg}" alt="${slide.productAlt}" class="fmcg-hero-pack-img">
                  </div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="fmcg-hero-nav-bar">
        <div class="container fmcg-hero-nav-container">
          <div class="fmcg-editorial-nav-list" id="fmcg-hero-tabs">
            ${slides.map((slide, idx) => `
              <button class="fmcg-editorial-nav-item ${idx === 0 ? 'active' : ''}" data-tab-index="${idx}" aria-label="Slide ${slide.slideNum} ${slide.label}">
                <span class="fmcg-nav-num">${slide.slideNum}</span>
                <span class="fmcg-nav-label">${slide.label}</span>
                <div class="fmcg-nav-line"><div class="fmcg-nav-fill"></div></div>
              </button>
            `).join('')}
          </div>

          <div class="fmcg-hero-arrow-controls">
            <button class="fmcg-hero-arrow fmcg-arrow-prev" id="hero-prev-btn" aria-label="Previous Slide">
              <i data-lucide="chevron-left" style="width: 18px; height: 18px;"></i>
            </button>
            <button class="fmcg-hero-arrow fmcg-arrow-next" id="hero-next-btn" aria-label="Next Slide">
              <i data-lucide="chevron-right" style="width: 18px; height: 18px;"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Mobile Hero Presentation View (Viewport <= 768px)
function renderMobileHero(slides) {
  return `
    <div class="fmcg-hero-mobile-view">
      <div class="fmcg-hero-viewport" id="fmcg-hero-stage-mobile">
        ${slides.map((slide, idx) => `
          <div class="fmcg-hero-slide-v2 fmcg-hero-slide-mobile ${idx === 0 ? 'active' : ''}" data-hero-index="${idx}">
            <div class="fmcg-hero-bg-wrap">
              <img src="${slide.bgImg}" alt="${slide.label} Background" class="fmcg-hero-bg-img" loading="${idx === 0 ? 'eager' : 'lazy'}">
              <div class="fmcg-hero-scrim"></div>
            </div>
            
            <div class="container fmcg-mobile-hero-container">
              <!-- 1. Product Stage (Top) -->
              <div class="fmcg-mobile-product-stage">
                <div class="fmcg-product-spotlight">
                  <img src="${slide.productImg}" alt="${slide.productAlt}" class="fmcg-hero-pack-img">
                </div>
              </div>

              <!-- 2. Eyebrow Badge -->
              <span class="fmcg-hero-eyebrow ${slide.brandClass}">${slide.eyebrow}</span>

              <!-- 3. Headline -->
              <h1 class="fmcg-mobile-headline">${slide.title}</h1>

              <!-- 4. Supporting Text -->
              <p class="fmcg-mobile-subtext">${slide.desc}</p>

              <!-- 5. CTA Buttons (Stacked 100%) -->
              <div class="fmcg-mobile-cta-group">
                <a href="${slide.cta1Link}" class="btn fmcg-btn-hero-primary">
                  <span>${slide.cta1Text}</span>
                  <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                </a>
                <a href="${slide.cta2Link}" class="btn fmcg-btn-hero-secondary">
                  <i data-lucide="handshake" style="width: 16px; height: 16px;"></i>
                  <span>${slide.cta2Text}</span>
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- 6. Compact Mobile Carousel Controls -->
      <div class="fmcg-mobile-nav-bar">
        <div class="container fmcg-mobile-nav-container">
          <button class="fmcg-hero-arrow fmcg-arrow-prev-mob" aria-label="Previous Slide">
            <i data-lucide="chevron-left" style="width: 16px; height: 16px;"></i>
          </button>

          <div class="fmcg-mobile-nav-info">
            <span class="fmcg-mobile-active-label" id="fmcg-mobile-active-label">${slides[0].slideNum} / 04 • ${slides[0].label}</span>
            <div class="fmcg-mobile-dots" id="fmcg-mobile-dots">
              ${slides.map((slide, idx) => `
                <button class="fmcg-mobile-dot ${idx === 0 ? 'active' : ''}" data-tab-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
              `).join('')}
            </div>
          </div>

          <button class="fmcg-hero-arrow fmcg-arrow-next-mob" aria-label="Next Slide">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render: Dedicated Product Detail Page (FMCG Discovery Architecture)
function renderProductDetail(slug) {
  const product = SHOWCASE_PRODUCTS.find(p => p.slug === slug) || ALL_FMCG_PRODUCTS.find(p => p.slug === slug || p.id === slug);

  if (!product) {
    return `
      <section class="section-padding" style="text-align:center; min-height: 60vh; display:flex; align-items:center;">
        <div class="container">
          <span class="section-badge">Product Catalog</span>
          <h1 style="font-family:var(--font-display); font-size: 32px; font-weight: 800; margin: 16px 0;">Product Not Found</h1>
          <p style="color:var(--text-muted); max-width: 500px; margin: 0 auto 28px;">The requested bakery item could not be found or has been moved. Explore our core brands and product range.</p>
          <a href="#/brands" class="btn btn-primary">Browse All Products</a>
        </div>
      </section>
    `;
  }

  const categoryName = product.categoryLabel || "BAKERY SPECIALS";
  const brandName = product.brand || "Bhagyashree";
  const highlights = product.highlights || [
    "Manufactured at our licensed Moradabad bakery plant (FSSAI: 12718060000582)",
    "100% pure vegetarian recipe with zero animal fats",
    "Moisture-controlled sealed packaging for prolonged freshness",
    "Dispatched daily on regional early-morning logistics routes"
  ];

  return `
    <!-- Breadcrumb Bar -->
    <div class="product-detail-breadcrumb-bar">
      <div class="container">
        <nav class="product-breadcrumb" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="#/brands">Products</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">${product.name}</span>
        </nav>
      </div>
    </div>

    <!-- Product Detail Content Section -->
    <section class="section-padding product-detail-section">
      <div class="container">
        <div class="product-detail-grid">
          <!-- Left Column: Authentic Product Photography Showcase Stage -->
          <div class="product-detail-media">
            <div class="product-detail-img-stage">
              <span class="product-detail-badge ${product.brandClass || 'gmi'}">${brandName}</span>
              <div class="product-detail-glow"></div>
              <img src="${product.img}" alt="${product.name}" class="product-detail-hero-img">
              <div class="product-detail-authenticity">
                <i data-lucide="shield-check" style="width:16px;height:16px;color:#10B981;"></i>
                <span>Authentic Bhagyashree Packaging • Fresh Batch</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Product Narrative & Information -->
          <div class="product-detail-info">
            <div class="product-detail-header-meta">
              <span class="product-category-tag">${categoryName}</span>
              <span class="product-weight-pill">${product.weight || 'Standard Pack'}</span>
            </div>
            
            <h1 class="product-detail-title">${product.name}</h1>
            <p class="product-detail-lead">${product.desc}</p>
            
            <!-- Verified Quality & Factory Highlights -->
            <div class="product-detail-highlights">
              <h4>Product Specifications &amp; Quality Highlights</h4>
              <ul>
                ${highlights.map(h => `
                  <li>
                    <i data-lucide="check-circle-2" style="width:18px;height:18px;color:var(--brand-primary);flex-shrink:0;"></i>
                    <span>${h}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Factory Compliance Strip -->
            <div class="product-compliance-mini-strip">
              <div class="compliance-mini-item">
                <i data-lucide="badge-check" style="width:16px;height:16px;color:var(--brand-primary);"></i>
                <span><strong>FSSAI Lic:</strong> 12718060000582</span>
              </div>
              <div class="compliance-mini-item">
                <i data-lucide="map-pin" style="width:16px;height:16px;color:var(--brand-primary);"></i>
                <span><strong>Origin:</strong> Moradabad, UP</span>
              </div>
              <div class="compliance-mini-item">
                <i data-lucide="leaf" style="width:16px;height:16px;color:#10B981;"></i>
                <span><strong>Dietary:</strong> 100% Pure Vegetarian</span>
              </div>
            </div>

            <!-- FMCG Brand Actions (NO Checkout / BUY NOW) -->
            <div class="product-detail-actions">
              <a href="#/contact?product=${encodeURIComponent(product.name)}" class="btn btn-primary product-enquire-btn">
                <i data-lucide="mail" style="width:18px;height:18px;"></i>
                <span>Enquire About This Product</span>
              </a>
              <a href="#/" class="btn btn-secondary product-back-btn">
                <i data-lucide="arrow-left" style="width:18px;height:18px;"></i>
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render: Home Page (Benchmark FMCG Architecture)
function renderHome() {
  const pillars = [
    { icon: "factory", title: "Automated Continuous Baking", desc: "Equipped with continuous automated ovens, stainless steel proofing chambers, and hygienic conveyor feeds." },
    { icon: "shield-check", title: "FSSAI Grade-A Quality Control", desc: "Standardized checking protocols for flour quality, yeast balance, and baking temperatures (Lic: 12718060000582)." },
    { icon: "package-check", title: "Tamper-Evident Sealed Packaging", desc: "Standardized unit weights and moisture-protected sealed pouches locking in morning bake freshness." },
    { icon: "truck", title: "Daily Morning Route Fleet", desc: "Dedicated 5 AM dispatch supply lines supporting wholesale stockists and grocery retail routes throughout UP." }
  ];

  return `
    <!-- SECTION 1: FULL-WIDTH FMCG ADVERTISING HERO CAROUSEL -->
    <section class="fmcg-hero-v2" id="hero-section">
      <!-- Shared Data, Separate Presentation Renderers -->
      ${renderDesktopHero(HERO_SHOWCASE_SLIDES)}
      ${renderMobileHero(HERO_SHOWCASE_SLIDES)}
    </section>

    <!-- POST-HERO DEDICATED TRUST STRIP -->
    <section class="fmcg-post-hero-trust">
      <div class="container">
        <div class="fmcg-trust-strip-inner">
          <div class="fmcg-trust-pill-item">
            <i data-lucide="shield-check" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            <span>FSSAI Grade-A (Lic: 12718060000582)</span>
          </div>
          <span class="fmcg-trust-dot">•</span>
          <div class="fmcg-trust-pill-item">
            <i data-lucide="leaf" style="width: 18px; height: 18px; color: #10B981;"></i>
            <span>100% Vegetarian Purity</span>
          </div>
          <span class="fmcg-trust-dot">•</span>
          <div class="fmcg-trust-pill-item">
            <i data-lucide="truck" style="width: 18px; height: 18px; color: var(--brand-amber);"></i>
            <span>5 AM Daily Dispatch Across UP</span>
          </div>
          <span class="fmcg-trust-dot">•</span>
          <div class="fmcg-trust-pill-item">
            <i data-lucide="award" style="width: 18px; height: 18px; color: var(--brand-gold);"></i>
            <span>GST &amp; Udyam Certified</span>
          </div>
          <span class="fmcg-trust-dot">•</span>
          <div class="fmcg-trust-pill-item">
            <i data-lucide="calendar" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            <span>Est. 2012 Moradabad</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: NEW PREMIUM FMCG PRODUCT SHOWCASE -->
    <section class="section-padding fmcg-product-showcase-section" id="product-showcase-section">
      <!-- Curved Section Transition Layer -->
      <div class="fmcg-showcase-curve-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0,0 C380,75 1060,75 1440,0 L1440,80 L0,80 Z" fill="#FAF6F0"/>
        </svg>
      </div>

      <div class="container">
        <div class="fmcg-showcase-header">
          <div class="fmcg-showcase-titles">
            <div class="fmcg-showcase-eyebrow">
              <span class="fmcg-eyebrow-text">OUR PRODUCTS</span>
              <span class="fmcg-eyebrow-line"></span>
            </div>
            <h2>Everyday Favourites.<br><span class="fmcg-heading-accent">Made for Every Table.</span></h2>
            <p>Explore the bakery products manufactured by Bhagyashree Food Products — from everyday breads to crispy rusks, biscuits and traditional tea-time favourites.</p>
          </div>
          
          <!-- Desktop Horizontal Carousel Arrow Controls -->
          <div class="fmcg-showcase-controls" aria-label="Product Showcase Navigation">
            <button class="fmcg-showcase-arrow" id="showcase-prev-btn" aria-label="Previous products">
              <i data-lucide="chevron-left" style="width:20px;height:20px;"></i>
            </button>
            <button class="fmcg-showcase-arrow" id="showcase-next-btn" aria-label="Next products">
              <i data-lucide="chevron-right" style="width:20px;height:20px;"></i>
            </button>
          </div>
        </div>

        <!-- Horizontal Showcase Carousel Track -->
        <div class="fmcg-showcase-track-wrap" id="fmcg-showcase-track-wrap">
          <div class="fmcg-showcase-track" id="fmcg-showcase-track">
            ${SHOWCASE_PRODUCTS.map(p => `
              <div class="fmcg-showcase-card" data-slug="${p.slug}">
                <div class="fmcg-showcase-card-head">
                  <span class="fmcg-showcase-cat-pill">${p.categoryLabel}</span>
                  <span class="fmcg-showcase-brand-pill ${p.brandClass}">${p.brand}</span>
                </div>
                <div class="fmcg-showcase-img-stage">
                  <img src="${p.img}" alt="${p.name}" class="fmcg-showcase-prod-img" loading="lazy">
                </div>
                <div class="fmcg-showcase-card-body">
                  <span class="fmcg-showcase-weight">${p.weight}</span>
                  <h3 class="fmcg-showcase-prod-name">${p.name}</h3>
                  <p class="fmcg-showcase-prod-desc">${p.desc}</p>
                  <div class="fmcg-showcase-card-footer">
                    <a href="#/products/${p.slug}" class="fmcg-showcase-explore-btn" aria-label="Explore ${p.name}">
                      <span>Explore Product</span>
                      <i data-lucide="arrow-right" style="width: 15px; height: 15px;"></i>
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Mobile Pagination Indicator -->
        <div class="fmcg-showcase-mobile-footer">
          <div class="fmcg-showcase-dots" id="fmcg-showcase-dots">
            ${SHOWCASE_PRODUCTS.map((p, idx) => `
              <button class="fmcg-showcase-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to product ${idx + 1}"></button>
            `).join('')}
          </div>
        </div>

        <!-- Bottom Section CTA -->
        <div class="fmcg-showcase-bottom-cta">
          <a href="#/brands" class="fmcg-showcase-all-link">
            <span>Explore Full Product Range</span>
            <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 3: OUR CORE BRAND PORTFOLIOS -->
    <section class="section-padding portfolio-section" id="brand-portfolios-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Our Core Brand Portfolios</span>
          <h2>The Brands Behind Every Bite</h2>
          <p>Two distinct FMCG verticals delivering consistent taste and fresh bakery staples across Uttar Pradesh.</p>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-card gmi">
            <div class="portfolio-card-header">
              <span class="portfolio-pill gmi">Bread &amp; Bakery</span>
              <div class="portfolio-logo-wrap">
                <img src="./assets/gmi_logo.png" alt="Good Morning India" class="portfolio-logo">
              </div>
              <h3>Good Morning India</h3>
              <p>Oven-fresh white bread, sandwich slices, and family packs dispatched daily on early-morning route vehicles.</p>
            </div>
            <div class="portfolio-card-body">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Range" loading="lazy">
            </div>
            <div class="portfolio-card-footer">
              <a href="#/brands/good-morning-india" class="portfolio-link gmi">Explore Bread Range <i data-lucide="arrow-right" style="width:15px;height:15px;"></i></a>
            </div>
          </div>
          <div class="portfolio-card preeti">
            <div class="portfolio-card-header">
              <span class="portfolio-pill preeti">Rusk &amp; Biscottis</span>
              <div class="portfolio-logo-wrap">
                <img src="./assets/preeti_logo.png" alt="Preeti Rusk &amp; Biscuits" class="portfolio-logo">
              </div>
              <h3>Preeti</h3>
              <p>Double-baked crispy rusks, 100% eggless handmade biscottis, and crunchy suji toast for classic tea-time snacking.</p>
            </div>
            <div class="portfolio-card-body">
              <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Preeti Products Range" loading="lazy">
            </div>
            <div class="portfolio-card-footer">
              <a href="#/brands/preeti" class="portfolio-link preeti">Explore Preeti Range <i data-lucide="arrow-right" style="width:15px;height:15px;"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: MADE WITH CARE. BUILT FOR SCALE. -->
    <section class="section-padding manufacturing-section" id="manufacturing-excellence-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Made With Care. Built For Scale.</span>
          <h2>Industrial Bakery Manufacturing Capabilities</h2>
          <p>How we scale production to supply regional wholesale and retail networks with morning-fresh consistency.</p>
        </div>
        <div class="pillars-grid">
          ${pillars.map(p => `
            <div class="pillar-card">
              <div class="pillar-icon">
                <i data-lucide="${p.icon}"></i>
              </div>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 5: OUR BAKERY MANUFACTURING PROCESS -->
    <section class="section-padding home-process-section" id="home-process-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Our Process</span>
          <h2>Our Bakery Manufacturing Process</h2>
          <p>Standardized food-grade processing from certified ingredient intake to precision continuous baking and early morning dispatch.</p>
        </div>
        <div class="timeline">
          <div class="timeline-step">
            <div class="step-num">01</div>
            <h3>Raw Material Inspection</h3>
            <p>Every batch of wheat flour, semolina, and ingredients undergoes strict FSSAI compliance verification before entering the mixing line.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">02</div>
            <h3>Precision Batch Mixing &amp; Proofing</h3>
            <p>Automated spiral kneaders ensure uniform dough texture. Temperature and humidity-controlled proofing chambers allow optimal yeast fermentation.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">03</div>
            <h3>Continuous Oven Baking</h3>
            <p>High-capacity tunnel ovens with zoned thermal regulation ensure even golden crust development, balanced crumb moisture, and consistent loaf weight.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">04</div>
            <h3>Hygienic Cooling &amp; Precision Slicing</h3>
            <p>Breads pass through filtered-air cooling conveyors before automated multi-blade slicing machines achieve uniform slice thickness.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">05</div>
            <h3>Tamper-Evident Packaging &amp; Dispatch</h3>
            <p>Pouch packaging machines seal every unit. Products are crated and loaded onto route logistics vehicles for early 5:00 AM distribution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: QUALITY ASSURANCE & STANDARDS -->
    <section class="section-padding home-qa-standards-section" id="home-qa-standards-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Standards &amp; Compliance</span>
          <h2>Quality Assurance &amp; Standards</h2>
          <p>Every batch leaving our Moradabad plant adheres to standardized food safety parameters, hygienic handling, and authentic purity.</p>
        </div>
        <div class="qa-standards-grid">
          <div class="qa-standard-card">
            <div class="qa-standard-icon">
              <i data-lucide="shield-check"></i>
            </div>
            <h3>FSSAI Grade-A Compliance</h3>
            <p>State-licensed food production facility (Lic No. 12718060000582) adhering to standardized testing and hygiene protocols.</p>
          </div>
          <div class="qa-standard-card">
            <div class="qa-standard-icon">
              <i data-lucide="leaf"></i>
            </div>
            <h3>100% Vegetarian &amp; Eggless Lines</h3>
            <p>Prepared in pure vegetarian facilities with 0% animal derivatives across our bread, rusk, and handmade biscuit lines.</p>
          </div>
          <div class="qa-standard-card">
            <div class="qa-standard-icon">
              <i data-lucide="package-check"></i>
            </div>
            <h3>Tamper-Evident Moisture Protection</h3>
            <p>Pouch-sealed and moisture-protected packaging locks in morning bakery aroma, crumb softness, and crispness.</p>
          </div>
          <div class="qa-standard-card">
            <div class="qa-standard-icon">
              <i data-lucide="truck"></i>
            </div>
            <h3>5:00 AM Cold-Chain Dispatch Route</h3>
            <p>Early-morning dedicated route fleet delivering bakery freshness directly to stockists and retailers across western UP.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: RETAIL & LOGISTICS FOOTPRINT (MARQUEE) -->
    <section class="marquee-container">
      <div class="marquee-title">Retail &amp; Distribution Supply Network</div>
      <div class="marquee-content">
        ${DISTRIBUTION_CHANNELS.map(ch => `
          <div class="marquee-item">
            <i data-lucide="store" style="width:18px;height:18px;"></i>
            <span>${ch}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SECTION 8: B2B DISTRIBUTOR PARTNERSHIP CTA -->
    <section class="section-padding b2b-cta-section">
      <div class="container" style="text-align:center;max-width:800px;">
        <span class="hero-tagline" style="background:#EAF8F0;color:#10B981;border-color:rgba(16,185,129,0.1);">📈 Expanding Wholesale Routes</span>
        <h2 style="font-family:var(--font-display);font-size:36px;font-weight:800;margin:16px 0 20px;">Partner With Moradabad's Leading Bakery Plant</h2>
        <p style="color:var(--text-muted);font-size:16px;margin-bottom:30px;">We allocate exclusive geographic routes and wholesale price structures to authorized logistics stockists, supermarket distribution managers, and large retail traders.</p>
        <div class="hero-actions" style="justify-content:center;">
          <a href="#/distributors" class="btn btn-primary">Download Partnership Terms</a>
          <a href="#/contact" class="btn btn-secondary">Locate Factory on Google Maps</a>
        </div>
      </div>
    </section>
  `;
}

// Render: About Page
function renderAbout() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>Industrial Food Manufacturing</h1>
        <p>Bhagyashree Food Products is a partner-led food factory scaling operations to meet bulk regional consumer demand.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container about-split">
        <div class="about-text">
          <span class="section-badge">Corporate Background</span>
          <h2 style="font-size: 32px; font-weight: 800; margin: 12px 0 20px;">Built on Quality, Scaling with Technology</h2>
          <p style="margin-bottom: 16px;">Founded in 2012 in Moradabad, Uttar Pradesh, Bhagyashree Food Products has grown from a regional bakery unit into an automated manufacturing facility producing high-volume consumer bakery staples.</p>
          <p style="margin-bottom: 24px;">Operating with specialized automated production machinery, we serve both retail consumers through our proprietary brands and commercial partners through bulk distribution supply networks.</p>
          
          <div style="background: var(--bg-primary); padding: 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <h4 style="font-weight: 700; margin-bottom: 8px;">Compliance &amp; Registrations</h4>
            <ul style="list-style: none; font-size: 14px; color: var(--text-muted); display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <li><strong>FSSAI:</strong> ${BUSINESS.fssai}</li>
              <li><strong>GSTIN:</strong> ${BUSINESS.gstin}</li>
              <li><strong>Udyam:</strong> ${BUSINESS.udyam}</li>
              <li><strong>Status:</strong> Operational (24×7)</li>
            </ul>
          </div>
        </div>
        <div class="about-image-card">
          <img src="./assets/bread/600gm.jpeg" alt="Bhagyashree Factory Facility" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);">
        </div>
      </div>
    </section>
  `;
}

// Render: Brands Hub
function renderBrands() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>Our Brand Portfolio</h1>
        <p>Bhagyashree Food Products operates specialized vertical brands addressing daily household nutrition and tea-time snacking.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container brands-grid">
        <!-- Brand 1: Good Morning India -->
        <div class="brand-card">
          <div class="brand-card-header">
            <img src="./assets/gmi_logo.png" alt="Good Morning India Logo" class="brand-logo-img">
            <div>
              <h3>Good Morning India</h3>
              <p style="color: var(--text-muted); font-size: 14px;">Daily Bread &amp; Fresh Morning Bakery</p>
            </div>
          </div>
          <div class="brand-preview-img-container">
            <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Bread" class="brand-preview-img">
          </div>
          <div style="padding: 24px;">
            <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 20px;">From daily standard loaves to nutritious sandwich slices, Good Morning India delivers morning freshness to regional markets.</p>
            <a href="#/brands/good-morning-india" class="btn btn-primary" style="width: 100%; text-align: center;">View Good Morning India Range</a>
          </div>
        </div>

        <!-- Brand 2: Preeti -->
        <div class="brand-card">
          <div class="brand-card-header">
            <img src="./assets/preeti_logo.png" alt="Preeti Logo" class="brand-logo-img">
            <div>
              <h3>Preeti</h3>
              <p style="color: var(--text-muted); font-size: 14px;">Rusks, Biscottis &amp; Tea-Time Confectionery</p>
            </div>
          </div>
          <div class="brand-preview-img-container">
            <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Preeti Rusks & Biscottis" class="brand-preview-img">
          </div>
          <div style="padding: 24px;">
            <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 20px;">Crispy double-baked rusks, semolina suji toast, and premium eggless handmade biscottis crafted for tea lovers.</p>
            <a href="#/brands/preeti" class="btn btn-primary" style="width: 100%; text-align: center; background: var(--preeti-blue);">View Preeti Range</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render: Preeti Page (Rusk & Biscuits)
function renderPreeti() {
  return `
    <section class="brand-hero preeti-hero">
      <div class="container brand-hero-content">
        <div class="brand-hero-text">
          <span class="hero-tagline" style="background: rgba(255,255,255,0.2); color: #fff; border-color: rgba(255,255,255,0.3);">Vertical Brand</span>
          <h1>Preeti Rusk &amp; Biscottis</h1>
          <p>Traditional double-baking techniques combined with 100% vegetarian formulations. Preeti represents crispness, authentic Indian tea-time flavors, and superior shelf-life stability.</p>
        </div>
        <div class="brand-hero-img-box">
          <img src="./assets/preeti_logo.png" alt="Preeti Official Logo" class="brand-hero-logo">
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Product Lineup</span>
          <h2>Preeti SKU Catalog</h2>
          <p>Wholesale packaging specifications available for regional distribution networks.</p>
        </div>
        <div class="products-grid">
          ${PREETI_PRODUCTS.map(p => `
            <div class="product-card">
              <div class="product-img-box">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
              </div>
              <div class="product-info">
                <span class="product-weight">${p.weight}</span>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div style="margin-top: 14px; font-size: 13px; font-weight: 600; color: var(--preeti-blue);">
                  Variant: ${p.variants}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="brand-cta-box" style="background: var(--preeti-bg); border-color: var(--preeti-gold);">
          <h3>Distribute Preeti in Your Region</h3>
          <p>We provide lucrative trade margins, marketing collaterals, and reliable supply cycles to stockists.</p>
          <a href="#/distributors" class="btn btn-primary" style="background: var(--preeti-blue);">Apply for Dealership</a>
        </div>
      </div>
    </section>
  `;
}

// Render: Good Morning India Page (Bread)
function renderGMI() {
  return `
    <section class="brand-hero gmi-hero">
      <div class="container brand-hero-content">
        <div class="brand-hero-text">
          <span class="hero-tagline" style="background: rgba(255,255,255,0.2); color: #fff; border-color: rgba(255,255,255,0.3);">Vertical Brand</span>
          <h1>Good Morning India Breads</h1>
          <p>Formulated for maximum softness, balanced moisture, and wholesome grain nutrition. Dispatched early every morning to ensure optimal freshness at retail grocery counters.</p>
        </div>
        <div class="brand-hero-img-box">
          <img src="./assets/gmi_logo.png" alt="Good Morning India Logo" class="brand-hero-logo">
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Product Lineup</span>
          <h2>Good Morning India Bread SKUs</h2>
          <p>Standardized unit sizes and weights suited for both retail consumers and commercial kitchens.</p>
        </div>
        <div class="products-grid">
          ${BREAD_PRODUCTS.map(p => `
            <div class="product-card">
              <div class="product-img-box">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
              </div>
              <div class="product-info">
                <span class="product-weight">${p.weight}</span>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div style="margin-top: 14px; font-size: 13px; font-weight: 600; color: var(--gmi-red);">
                  Type: ${p.variants}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="brand-cta-box" style="background: var(--gmi-bg); border-color: var(--gmi-red);">
          <h3>Stock Good Morning India Breads</h3>
          <p>Reliable daily route distribution and competitive dealer pricing for regional retail networks.</p>
          <a href="#/distributors" class="btn btn-primary" style="background: var(--gmi-red);">Inquire for Bread Routes</a>
        </div>
      </div>
    </section>
  `;
}

// Render: Process & Quality
function renderProcess() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>Manufacturing Process &amp; Quality Control</h1>
        <p>From flour intake to continuous automated ovens and early-morning dispatch logistics.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="timeline">
          <div class="timeline-step">
            <div class="step-num">01</div>
            <h3>Raw Material Inspection</h3>
            <p>Every batch of wheat flour, semolina, sugar, and shortening undergoes strict FSSAI compliance verification before entering the mixing line.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">02</div>
            <h3>Precision Batch Mixing &amp; Proofing</h3>
            <p>Automated spiral kneaders ensure uniform dough texture. Temperature and humidity-controlled proofing chambers allow optimal yeast fermentation.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">03</div>
            <h3>Continuous Oven Baking</h3>
            <p>High-capacity tunnel ovens with zoned thermal regulation ensure even golden crust development, balanced crumb moisture, and consistent loaf weight.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">04</div>
            <h3>Hygienic Cooling &amp; Precision Slicing</h3>
            <p>Breads pass through filtered-air cooling conveyors before automated multi-blade slicing machines achieve uniform slice thickness.</p>
          </div>
          <div class="timeline-step">
            <div class="step-num">05</div>
            <h3>Tamper-Evident Packaging &amp; Dispatch</h3>
            <p>Pouch packaging machines seal every unit. Products are crated and loaded onto route logistics vehicles for early 5:00 AM distribution.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render: Become a Distributor (Form page)
function renderDistributors() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>Become an Authorized Distributor</h1>
        <p>Partner with Bhagyashree Food Products for exclusive geographic routes, high product demand, and lucrative trade margins.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container dist-split">
        <div class="dist-info">
          <span class="section-badge">Trade Partnership</span>
          <h2 style="font-size: 32px; font-weight: 800; margin: 12px 0 20px;">Why Distribute Our Brands?</h2>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
            <li style="display: flex; gap: 12px; align-items: flex-start;">
              <i data-lucide="check-circle-2" style="color: var(--brand-primary); shrink: 0; margin-top: 2px;"></i>
              <div><strong>High Consumer Velocity:</strong> Daily staple bread and tea-time snacks with consistent repeat purchases.</div>
            </li>
            <li style="display: flex; gap: 12px; align-items: flex-start;">
              <i data-lucide="check-circle-2" style="color: var(--brand-primary); shrink: 0; margin-top: 2px;"></i>
              <div><strong>Route Exclusivity:</strong> Dedicated territory allocations protecting your retail supply network.</div>
            </li>
            <li style="display: flex; gap: 12px; align-items: flex-start;">
              <i data-lucide="check-circle-2" style="color: var(--brand-primary); shrink: 0; margin-top: 2px;"></i>
              <div><strong>Dependable Dispatch:</strong> Guaranteed 24×7 manufacturing continuity and daily morning logistics.</div>
            </li>
            <li style="display: flex; gap: 12px; align-items: flex-start;">
              <i data-lucide="check-circle-2" style="color: var(--brand-primary); shrink: 0; margin-top: 2px;"></i>
              <div><strong>Full Regulatory Compliance:</strong> Registered FSSAI, GST, and Udyam credentials on all documentation.</div>
            </li>
          </ul>

          <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <h4 style="font-weight: 700; margin-bottom: 6px;">Direct Partnership Desk:</h4>
            <p style="font-size: 15px; color: var(--text-dark); margin-bottom: 4px;"><strong>Phone:</strong> ${BUSINESS.phone}</p>
            <p style="font-size: 15px; color: var(--text-dark);"><strong>Email:</strong> ${BUSINESS.email}</p>
          </div>
        </div>

        <div class="dist-form-card">
          <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 8px;">Distributor Application</h3>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 24px;">Submit your business details for wholesale price sheets and area eligibility.</p>
          
          <form id="distributor-form">
            <div class="form-row">
              <div class="form-group">
                <label for="d-name">Contact Person *</label>
                <input type="text" id="d-name" required placeholder="Your full name">
              </div>
              <div class="form-group">
                <label for="d-firm">Firm / Agency Name *</label>
                <input type="text" id="d-firm" required placeholder="Business / Firm Name">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="d-phone">Mobile Number (WhatsApp) *</label>
                <input type="tel" id="d-phone" required placeholder="+91 98765 43210">
              </div>
              <div class="form-group">
                <label for="d-email">Email Address</label>
                <input type="email" id="d-email" placeholder="name@domain.com">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="d-city">Proposed Territory / City *</label>
                <input type="text" id="d-city" required placeholder="e.g. Moradabad, Rampur, Bareilly">
              </div>
              <div class="form-group">
                <label for="d-type">Business Type</label>
                <select id="d-type">
                  <option value="wholesale">Wholesale Stockist</option>
                  <option value="retail_chain">Retail Chain / Supermarket</option>
                  <option value="fmcg_distributor">FMCG Route Distributor</option>
                  <option value="institutional">Institutional / Canteen</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="d-brands">Brands Interested in Distributing</label>
              <select id="d-brands">
                <option value="both">Both Brands (Good Morning India &amp; Preeti)</option>
                <option value="gmi">Good Morning India Breads Only</option>
                <option value="preeti">Preeti Rusks &amp; Biscottis Only</option>
              </select>
            </div>

            <div class="form-group">
              <label for="d-notes">Existing Distribution Network / Vehicles</label>
              <textarea id="d-notes" rows="3" placeholder="Briefly describe your existing distribution routes, vehicle capacity, or retail reach..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 14px;">
              Submit Distributor Enquiry
            </button>
          </form>
          <div id="dist-form-status" style="margin-top: 14px; display: none; padding: 12px; border-radius: 6px; font-size: 14px;"></div>
        </div>
      </div>
    </section>
  `;
}

// Render: Gallery
function renderGallery() {
  const galleryItems = [
    { title: "Good Morning India 500g Fresh White Bread", category: "bread", img: "./assets/bread/500gm.jpeg" },
    { title: "Preeti Bread Rusk Toast", category: "rusk", img: "./assets/rusk/preeti_rusk_toast.jpg" },
    { title: "Good Morning India 600g Premium Family Loaf", category: "bread", img: "./assets/bread/600gm.jpeg" },
    { title: "Preeti Biscottis Classic Orange Box", category: "biscotti", img: "./assets/rusk/preeti_biscottis_orange.jpg" },
    { title: "Good Morning India Special Sandwich Bread", category: "bread", img: "./assets/bread/350gm.jpeg" },
    { title: "Preeti Biscottis Dry Fruits Special", category: "biscotti", img: "./assets/rusk/preeti_biscottis_dryfruits.jpg" },
    { title: "Keshav Bread Suji Toast Standard Pack", category: "rusk", img: "./assets/rusk/keshav_suji_toast.jpg" },
    { title: "Good Morning India Fresh Sandwich Bread 300g", category: "bread", img: "./assets/bread/300gm.jpeg" },
    { title: "Preeti Biscottis Premium Tall Pack", category: "biscotti", img: "./assets/rusk/preeti_biscottis_tall.jpg" },
    { title: "Good Morning India Classic 220g Value Bread", category: "bread", img: "./assets/bread/220gm.jpeg" },
    { title: "Good Morning India Gattu Sandwich Bread", category: "bread", img: "./assets/bread/GATTU.jpeg" }
  ];

  return `
    <section class="page-hero">
      <div class="container">
        <h1>Product &amp; Facility Gallery</h1>
        <p>High-resolution packaging, SKU variants, and plant facility assets.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="gallery-tabs">
          <button class="gallery-tab active" data-filter="all">All Items</button>
          <button class="gallery-tab" data-filter="bread">Breads</button>
          <button class="gallery-tab" data-filter="rusk">Rusks &amp; Toast</button>
          <button class="gallery-tab" data-filter="biscotti">Biscottis</button>
        </div>

        <div class="gallery-grid" id="gallery-container">
          ${galleryItems.map(item => `
            <div class="gallery-item" data-category="${item.category}">
              <img src="${item.img}" alt="${item.title}" loading="lazy">
              <div class="gallery-overlay">
                <h4>${item.title}</h4>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Render: Contact Page
function renderContact() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>Contact &amp; Factory Location</h1>
        <p>Get in touch with our corporate administrative office and manufacturing plant in Moradabad.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container contact-split">
        <div class="contact-info-card">
          <span class="section-badge">Head Office &amp; Plant</span>
          <h2 style="font-size: 28px; font-weight: 800; margin: 12px 0 20px;">Bhagyashree Food Products</h2>
          
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; gap: 14px;">
              <i data-lucide="map-pin" style="color: var(--brand-primary); shrink: 0; margin-top: 4px;"></i>
              <div>
                <strong>Factory Address:</strong><br>
                <span style="color: var(--text-muted); font-size: 14.5px;">${BUSINESS.address}</span>
              </div>
            </div>

            <div style="display: flex; gap: 14px;">
              <i data-lucide="phone" style="color: var(--brand-primary); shrink: 0; margin-top: 4px;"></i>
              <div>
                <strong>Sales &amp; Dealership Desk:</strong><br>
                <a href="tel:${BUSINESS.phone}" style="color: var(--brand-primary); font-weight: 700;">${BUSINESS.phone}</a>
              </div>
            </div>

            <div style="display: flex; gap: 14px;">
              <i data-lucide="mail" style="color: var(--brand-primary); shrink: 0; margin-top: 4px;"></i>
              <div>
                <strong>Official Email:</strong><br>
                <a href="mailto:${BUSINESS.email}" style="color: var(--text-dark);">${BUSINESS.email}</a>
              </div>
            </div>

            <div style="display: flex; gap: 14px;">
              <i data-lucide="clock" style="color: var(--brand-primary); shrink: 0; margin-top: 4px;"></i>
              <div>
                <strong>Operational Timings:</strong><br>
                <span style="color: var(--text-muted); font-size: 14px;">Plant Production: 24×7<br>Admin Office: Mon–Sat, 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          <div style="margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px;">
            <p style="font-size: 13px; color: var(--text-muted);">
              <strong>Regulatory Info:</strong> FSSAI: ${BUSINESS.fssai} | GSTIN: ${BUSINESS.gstin} | Udyam: ${BUSINESS.udyam}
            </p>
          </div>
        </div>

        <div class="contact-form-card">
          <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 8px;">Send an Official Message</h3>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 24px;">For general enquiries, institutional supply, or vendor partnerships.</p>

          <form id="general-contact-form">
            <div class="form-group">
              <label for="c-name">Full Name *</label>
              <input type="text" id="c-name" required placeholder="Your full name">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="c-phone">Phone Number *</label>
                <input type="tel" id="c-phone" required placeholder="+91 98765 43210">
              </div>
              <div class="form-group">
                <label for="c-email">Email Address</label>
                <input type="email" id="c-email" placeholder="name@domain.com">
              </div>
            </div>

            <div class="form-group">
              <label for="c-subject">Subject / Inquiry Type</label>
              <select id="c-subject">
                <option value="dealership">New Dealership / Distributorship</option>
                <option value="institutional">Bulk Institutional Supply</option>
                <option value="vendor">Raw Material / Vendor Proposal</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div class="form-group">
              <label for="c-message">Message *</label>
              <textarea id="c-message" rows="4" required placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 14px;">
              Send Message
            </button>
          </form>
          <div id="contact-form-status" style="margin-top: 14px; display: none; padding: 12px; border-radius: 6px; font-size: 14px;"></div>
        </div>
      </div>
    </section>
  `;
}

// Interactive Controller
function initInteractions(path) {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 100);
  }

  // Initialize mobile announcement ticker
  initMobileAnnouncementTicker();

  if (path === "/" || path === "") {
    initHeroShowcase();
    initProductShowcase();
  } else if (path === "/gallery") {
    initGalleryFilters();
    initLightbox();
  } else if (path === "/distributors") {
    initDistributorForm();
  } else if (path === "/contact") {
    initContactForm();
  }
}

// Mobile Announcement Bar Carousel Ticker
let tickerInterval = null;
function initMobileAnnouncementTicker() {
  const slides = document.querySelectorAll(".mobile-ticker-slide");
  if (!slides.length) return;
  if (tickerInterval) clearInterval(tickerInterval);

  let current = 0;
  tickerInterval = setInterval(() => {
    if (!slides[current]) return;
    slides[current].classList.remove("active");
    slides[current].classList.add("exit");
    
    setTimeout(() => {
      slides.forEach(s => s.classList.remove("exit"));
    }, 400);

    current = (current + 1) % slides.length;
    if (slides[current]) {
      slides[current].classList.add("active");
    }
  }, 3200);
}

// Benchmark FMCG Visual Hero Carousel Implementation
function initHeroShowcase() {
  const desktopSlides = document.querySelectorAll(".fmcg-hero-slide-desktop");
  const mobileSlides = document.querySelectorAll(".fmcg-hero-slide-mobile");
  const tabs = document.querySelectorAll(".fmcg-editorial-nav-item");
  const dots = document.querySelectorAll(".fmcg-mobile-dot");
  const mobileLabel = document.getElementById("fmcg-mobile-active-label");
  
  const prevBtn = document.getElementById("hero-prev-btn");
  const nextBtn = document.getElementById("hero-next-btn");
  const prevBtnMob = document.querySelector(".fmcg-arrow-prev-mob");
  const nextBtnMob = document.querySelector(".fmcg-arrow-next-mob");

  const totalSlides = HERO_SHOWCASE_SLIDES.length;
  if (!totalSlides) return;

  // Clean up any pre-existing timer on window
  if (window.heroAutoTimer) {
    clearInterval(window.heroAutoTimer);
    window.heroAutoTimer = null;
  }

  let current = 0;
  const DURATION = 6000; // Exactly 6 seconds autoplay
  let startTime = Date.now();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function switchSlide(index) {
    desktopSlides.forEach(s => s.classList.remove("active"));
    mobileSlides.forEach(s => s.classList.remove("active"));

    tabs.forEach(t => {
      t.classList.remove("active");
      const fill = t.querySelector(".fmcg-nav-fill");
      if (fill) fill.style.width = "0%";
    });

    dots.forEach(d => d.classList.remove("active"));

    if (desktopSlides[index]) desktopSlides[index].classList.add("active");
    if (mobileSlides[index]) mobileSlides[index].classList.add("active");
    if (tabs[index]) tabs[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");

    if (mobileLabel && HERO_SHOWCASE_SLIDES[index]) {
      mobileLabel.textContent = `${HERO_SHOWCASE_SLIDES[index].slideNum} / 04 • ${HERO_SHOWCASE_SLIDES[index].label}`;
    }

    current = index;
    startTime = Date.now();

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function nextSlide() {
    switchSlide((current + 1) % totalSlides);
  }

  function prevSlide() {
    switchSlide((current - 1 + totalSlides) % totalSlides);
  }

  function startTimer() {
    if (reducedMotion) return;
    stopTimer();
    window.heroAutoTimer = setInterval(nextSlide, DURATION);
    startTime = Date.now();
  }

  function stopTimer() {
    if (window.heroAutoTimer) {
      clearInterval(window.heroAutoTimer);
      window.heroAutoTimer = null;
    }
  }

  // Smooth progress fill animation for active desktop tab
  function updateProgress() {
    if (!reducedMotion && window.heroAutoTimer) {
      const activeTab = tabs[current];
      if (activeTab) {
        const fill = activeTab.querySelector(".fmcg-nav-fill");
        if (fill) {
          const elapsed = Date.now() - startTime;
          const progress = Math.min((elapsed / DURATION) * 100, 100);
          fill.style.width = `${progress}%`;
        }
      }
    }
    requestAnimationFrame(updateProgress);
  }
  requestAnimationFrame(updateProgress);

  // Desktop Tab navigation click handlers
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const idx = parseInt(tab.getAttribute("data-tab-index"));
      switchSlide(idx);
      startTimer();
    });
  });

  // Mobile Dot click handlers
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-tab-index"));
      switchSlide(idx);
      startTimer();
    });
  });

  // Desktop & Mobile Arrow navigation handlers
  [prevBtn, prevBtnMob].forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        prevSlide();
        startTimer();
      });
    }
  });

  [nextBtn, nextBtnMob].forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        nextSlide();
        startTimer();
      });
    }
  });

  // Keyboard Navigation (Left / Right Arrows)
  document.addEventListener("keydown", (e) => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      if (e.key === "ArrowRight") {
        nextSlide();
        startTimer();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
        startTimer();
      }
    }
  });

  // Pause on hover (desktop)
  const heroSection = document.getElementById("hero-section");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopTimer);
    heroSection.addEventListener("mouseleave", startTimer);
  }

  // Touch Swipe Gesture Handling for Mobile & Desktop
  let touchStartX = 0;
  const stages = [document.getElementById("fmcg-hero-stage-desktop"), document.getElementById("fmcg-hero-stage-mobile")];
  stages.forEach(stage => {
    if (stage) {
      stage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      stage.addEventListener("touchend", (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          startTimer();
        }
      }, { passive: true });
    }
  });

  switchSlide(0);
  startTimer();
}

// Live Category Filtering (English Oven & Modern Foods Style)
function initCategoryFilter() {
  const chips = document.querySelectorAll(".fmcg-filter-chip");
  const cards = document.querySelectorAll(".fmcg-product-card");
  if (!chips.length || !cards.length) return;

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.getAttribute("data-filter");

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          card.classList.remove("fmcg-card-hidden");
        } else {
          card.style.display = "none";
          card.classList.add("fmcg-card-hidden");
        }
      });

      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });
}

// Gallery Filtering Logic
function initGalleryFilters() {
  const tabs = document.querySelectorAll(".gallery-tab");
  const items = document.querySelectorAll(".gallery-item");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");
      items.forEach(item => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// Simple Lightbox
function initLightbox() {
  const items = document.querySelectorAll(".gallery-item img");
  items.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const modal = document.createElement("div");
      modal.className = "lightbox-modal";
      modal.innerHTML = `
        <div class="lightbox-content">
          <img src="${src}" alt="Enlarged View">
          <button class="lightbox-close">&times;</button>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains("lightbox-close")) {
          modal.remove();
        }
      });
    });
  });
}

// Distributor Form Submission Handler
function initDistributorForm() {
  const form = document.getElementById("distributor-form");
  const status = document.getElementById("dist-form-status");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("d-name").value;
    const firm = document.getElementById("d-firm").value;
    const phone = document.getElementById("d-phone").value;
    const city = document.getElementById("d-city").value;

    if (status) {
      status.style.display = "block";
      status.style.background = "#EAF8F0";
      status.style.color = "#10B981";
      status.style.border = "1px solid #10B981";
      status.innerHTML = `<strong>Thank you, ${name}!</strong> Your distributor inquiry for <strong>${firm} (${city})</strong> has been logged. Our sales desk will call you at ${phone} within 24 hours.`;
    }
    form.reset();
  });
}

// Contact Form Submission Handler
function initContactForm() {
  const form = document.getElementById("general-contact-form");
  const status = document.getElementById("contact-form-status");
  if (!form) return;

  // Pre-populate inquiry subject/message if navigated with product query
  const hash = window.location.hash || "";
  if (hash.includes("product=")) {
    try {
      const prodName = decodeURIComponent(hash.split("product=")[1].split("&")[0]);
      const msgField = document.getElementById("c-message") || form.querySelector("textarea");
      if (msgField && !msgField.value) {
        msgField.value = `Hello Bhagyashree Food Products team, I would like to enquire about wholesale/distribution availability and trade terms for: ${prodName}.`;
      }
      const subjectSelect = document.getElementById("c-subject");
      if (subjectSelect) {
        // Find or select the dealership or wholesale option
        for (let i = 0; i < subjectSelect.options.length; i++) {
          if (subjectSelect.options[i].text.toLowerCase().includes("product") || subjectSelect.options[i].text.toLowerCase().includes("wholesale") || subjectSelect.options[i].text.toLowerCase().includes("dealership")) {
            subjectSelect.selectedIndex = i;
            break;
          }
        }
      }
    } catch (err) {
      console.warn("Could not prefill product enquiry:", err);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("c-name").value;
    const phone = document.getElementById("c-phone").value;

    if (status) {
      status.style.display = "block";
      status.style.background = "#EAF8F0";
      status.style.color = "#10B981";
      status.style.border = "1px solid #10B981";
      status.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been received. Our team will get back to you at ${phone}.`;
    }
    form.reset();
  });
}

// FMCG Horizontal Product Showcase Controller
function initProductShowcase() {
  const track = document.getElementById("fmcg-showcase-track");
  const prevBtn = document.getElementById("showcase-prev-btn");
  const nextBtn = document.getElementById("showcase-next-btn");
  const dots = document.querySelectorAll(".fmcg-showcase-dot");
  if (!track) return;

  // Reset any pre-existing showcase timer
  if (window.showcaseAutoTimer) {
    clearInterval(window.showcaseAutoTimer);
    window.showcaseAutoTimer = null;
  }

  const cards = track.querySelectorAll(".fmcg-showcase-card");
  if (!cards.length) return;

  function getCardStep() {
    const card = cards[0];
    if (!card) return 340;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;
    return card.offsetWidth + gap;
  }

  function scrollPrev() {
    const step = getCardStep();
    if (track.scrollLeft <= 10) {
      // Wrap to end smoothly
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: -step, behavior: "smooth" });
    }
    resetAutoplayTimer();
  }

  function scrollNext() {
    const step = getCardStep();
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 15) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: step, behavior: "smooth" });
    }
    resetAutoplayTimer();
  }

  if (prevBtn) prevBtn.addEventListener("click", scrollPrev);
  if (nextBtn) nextBtn.addEventListener("click", scrollNext);

  // Synchronize pagination dots
  function updateActiveDot() {
    const step = getCardStep();
    const currentIdx = Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / step)));
    dots.forEach((dot, idx) => {
      if (idx === currentIdx) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  track.addEventListener("scroll", () => {
    requestAnimationFrame(updateActiveDot);
  }, { passive: true });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"));
      const step = getCardStep();
      track.scrollTo({ left: idx * step, behavior: "smooth" });
      resetAutoplayTimer();
    });
  });

  // Subtle Autoplay (~6 seconds) with Pause on Hover & Touch
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function startAutoplay() {
    if (prefersReducedMotion) return;
    stopAutoplay();
    window.showcaseAutoTimer = setInterval(scrollNext, 6000);
  }

  function stopAutoplay() {
    if (window.showcaseAutoTimer) {
      clearInterval(window.showcaseAutoTimer);
      window.showcaseAutoTimer = null;
    }
  }

  function resetAutoplayTimer() {
    stopAutoplay();
    startAutoplay();
  }

  const section = document.getElementById("product-showcase-section");
  if (section) {
    section.addEventListener("mouseenter", stopAutoplay);
    section.addEventListener("mouseleave", startAutoplay);
    section.addEventListener("touchstart", stopAutoplay, { passive: true });
    section.addEventListener("touchend", startAutoplay, { passive: true });
  }

  // Keyboard accessibility on arrow keys when focused in track
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  });

  startAutoplay();
}
