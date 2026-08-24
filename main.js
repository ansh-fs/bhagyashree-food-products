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
    tag: "Premium Pack",
    desc: "100% eggless handmade biscuit in tall premium pack. A rich, crunchy confectionery treat.",
    img: "./assets/rusk/preeti_biscottis_tall.jpg",
    link: "#/brands/preeti"
  }
];

// Hero Showcase Data (English Oven / Britannia / Bonn Style)
const HERO_SHOWCASE_SLIDES = [
  {
    id: "breads",
    tabNumber: "01",
    tabTitle: "Daily Fresh Breads",
    icon: "sandwich",
    badge: "Good Morning India • Fresh Morning Bake",
    title: "Pure Morning Freshness,<br>Baked for Every Table.",
    desc: "Soft, oven-fresh white bread loaves and sandwich slices baked daily from select grains with standardized FSSAI hygiene controls in Moradabad.",
    img: "./assets/bread/500gm.jpeg",
    brandClass: "gmi",
    tagPill: "🍞 Fresh Daily Morning Dispatch Across UP",
    cta1Text: "Explore Bread Range",
    cta1Link: "#/brands/good-morning-india",
    cta2Text: "Become a Distributor",
    cta2Link: "#/distributors"
  },
  {
    id: "rusks",
    tabNumber: "02",
    tabTitle: "Tea-Time Rusks & Toast",
    icon: "coffee",
    badge: "Preeti • Authentic Indian Tea-Time",
    title: "The Golden Crunch for<br>Every Cup of Chai.",
    desc: "Double-baked crispy bread rusks and crunchy semolina toast made with 100% vegetarian purity, natural aroma, and zero artificial preservatives.",
    img: "./assets/rusk/preeti_rusk_toast.jpg",
    brandClass: "preeti",
    tagPill: "☕ 100% Vegetarian Double-Baked Crispy",
    cta1Text: "Explore Preeti Rusks",
    cta1Link: "#/brands/preeti",
    cta2Text: "Wholesale Dealership",
    cta2Link: "#/distributors"
  },
  {
    id: "biscottis",
    tabNumber: "03",
    tabTitle: "Eggless Biscottis",
    icon: "cookie",
    badge: "Preeti • 100% Eggless Bakery",
    title: "Handmade Artisan Crunch<br>with Dry Fruits.",
    desc: "Delicate, crispy, and rich handmade eggless biscuits in classic orange and dry fruit variants. Crafted for daily tea-time indulgence and gifting.",
    img: "./assets/rusk/preeti_biscottis_orange.jpg",
    brandClass: "preeti",
    tagPill: "✨ 100% Eggless Artisan Biscuit",
    cta1Text: "View Biscottis Range",
    cta1Link: "#/brands/preeti",
    cta2Text: "Bulk Order Rates",
    cta2Link: "#/contact"
  },
  {
    id: "factory",
    tabNumber: "04",
    tabTitle: "Modern Bakery Plant",
    icon: "factory",
    badge: "Bhagyashree Plant • Est. 2012 Moradabad",
    title: "Automated Baking Lines<br>&amp; Daily Route Logistics.",
    desc: "State-of-the-art continuous baking ovens, steel proofing chambers, and a dedicated early-morning delivery fleet supplying distributors across Uttar Pradesh.",
    img: "./assets/bread/600gm.jpeg",
    brandClass: "gmi",
    tagPill: "🏭 24×7 Industrial Production Capacity",
    cta1Text: "Our Manufacturing Facility",
    cta1Link: "#/about",
    cta2Text: "Factory Partnership Desk",
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
  const path = hash.substring(1);
  const renderer = routes[path] || renderHome;
  
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
  if (path.startsWith("/brands/")) {
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

// Render: Home Page (Benchmark FMCG Architecture — English Oven, Bonn, Britannia, Modern Foods)
function renderHome() {
  const pillars = [
    { icon: "factory", title: "Automated Continuous Baking", desc: "Equipped with continuous automated ovens, stainless steel proofing chambers, and hygienic conveyor feeds." },
    { icon: "shield-check", title: "FSSAI Grade-A Quality Control", desc: "Standardized checking protocols for flour quality, yeast balance, and baking temperatures (Lic: 12718060000582)." },
    { icon: "package-check", title: "Tamper-Evident Sealed Packaging", desc: "Standardized unit weights and moisture-protected sealed pouches locking in morning bake freshness." },
    { icon: "truck", title: "Daily Morning Route Fleet", desc: "Dedicated 5 AM dispatch supply lines supporting wholesale stockists and grocery retail routes throughout UP." }
  ];

  return `
    <!-- SECTION 1: BENCHMARK FMCG HERO (ENGLISH OVEN / BRITANNIA STYLE) -->
    <section class="fmcg-hero" id="hero-section">
      <div class="container fmcg-hero-container">
        
        <!-- Hero Slides Stage -->
        <div class="fmcg-hero-stage" id="fmcg-hero-stage">
          ${HERO_SHOWCASE_SLIDES.map((slide, idx) => `
            <div class="fmcg-hero-slide ${idx === 0 ? 'active' : ''}" data-hero-index="${idx}">
              <div class="fmcg-hero-grid">
                <!-- Text Column -->
                <div class="fmcg-hero-text">
                  <div class="fmcg-hero-badge ${slide.brandClass}">
                    <span>${slide.badge}</span>
                  </div>
                  <h1 class="fmcg-hero-title">${slide.title}</h1>
                  <p class="fmcg-hero-desc">${slide.desc}</p>
                  
                  <div class="fmcg-hero-actions">
                    <a href="${slide.cta1Link}" class="btn btn-primary fmcg-btn-primary">
                      <span>${slide.cta1Text}</span>
                      <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                    </a>
                    <a href="${slide.cta2Link}" class="btn btn-secondary fmcg-btn-secondary">
                      <i data-lucide="handshake" style="width: 16px; height: 16px;"></i>
                      <span>${slide.cta2Text}</span>
                    </a>
                  </div>

                  <div class="fmcg-hero-trust-bullets">
                    <span class="fmcg-bullet-item"><i data-lucide="shield-check" style="width:14px;height:14px;color:var(--brand-primary);"></i> FSSAI Grade-A</span>
                    <span class="fmcg-bullet-item"><i data-lucide="leaf" style="width:14px;height:14px;color:#10B981;"></i> 100% Vegetarian</span>
                    <span class="fmcg-bullet-item"><i data-lucide="truck" style="width:14px;height:14px;color:var(--brand-gold);"></i> 5 AM Daily Dispatch</span>
                  </div>
                </div>

                <!-- Product Showcase Card Column -->
                <div class="fmcg-hero-visual">
                  <div class="fmcg-product-card-showcase">
                    <div class="fmcg-card-showcase-top">
                      <span class="fmcg-showcase-brand ${slide.brandClass}">
                        ${slide.id === 'breads' ? 'Good Morning India' : slide.id === 'rusks' || slide.id === 'biscottis' ? 'Preeti' : 'Bhagyashree Plant'}
                      </span>
                      <span class="fmcg-showcase-quality">✓ Standardized Quality</span>
                    </div>
                    <div class="fmcg-product-pedestal">
                      <div class="fmcg-pedestal-glow"></div>
                      <img src="${slide.img}" alt="${slide.tabTitle}" class="fmcg-hero-product-img">
                    </div>
                    <div class="fmcg-card-showcase-bottom">
                      <span>${slide.tagPill}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Hero Bottom Tab Switcher (English Oven Style) -->
        <div class="fmcg-hero-tabs" id="fmcg-hero-tabs">
          ${HERO_SHOWCASE_SLIDES.map((slide, idx) => `
            <button class="fmcg-hero-tab ${idx === 0 ? 'active' : ''}" data-tab-index="${idx}" aria-label="${slide.tabTitle}">
              <div class="fmcg-tab-progress"><div class="fmcg-tab-progress-fill"></div></div>
              <div class="fmcg-tab-inner">
                <span class="fmcg-tab-num">${slide.tabNumber}</span>
                <div class="fmcg-tab-content">
                  <span class="fmcg-tab-title">${slide.tabTitle}</span>
                </div>
              </div>
            </button>
          `).join('')}
        </div>

        <!-- Factual FMCG Trust Strip -->
        <div class="fmcg-hero-trust-bar">
          <div class="fmcg-trust-item"><i data-lucide="shield-check" style="width:14px;height:14px;color:var(--brand-primary);"></i><span>FSSAI Lic: 12718060000582</span></div>
          <span class="fmcg-trust-sep">•</span>
          <div class="fmcg-trust-item"><i data-lucide="award" style="width:14px;height:14px;color:var(--brand-gold);"></i><span>GST Registered</span></div>
          <span class="fmcg-trust-sep">•</span>
          <div class="fmcg-trust-item"><i data-lucide="check-circle" style="width:14px;height:14px;color:#10B981;"></i><span>Udyam Certified</span></div>
          <span class="fmcg-trust-sep">•</span>
          <div class="fmcg-trust-item"><i data-lucide="calendar" style="width:14px;height:14px;color:var(--brand-primary);"></i><span>Est. 2012 Moradabad</span></div>
          <span class="fmcg-trust-sep">•</span>
          <div class="fmcg-trust-item"><i data-lucide="leaf" style="width:14px;height:14px;color:#10B981;"></i><span>100% Vegetarian Plant</span></div>
        </div>

      </div>
    </section>

    <!-- SECTION 2: PRODUCT RANGE & DISCOVERY (ENGLISH OVEN & MODERN FOODS STYLE) -->
    <section class="section-padding fmcg-discovery-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Product Range</span>
          <h2>Crafted for Everyday Taste &amp; Nutrition</h2>
          <p>Explore our complete assortment of morning white breads, sandwich loaves, double-baked rusks, and handmade eggless biscottis.</p>
        </div>

        <!-- Category Filter Chips -->
        <div class="fmcg-filter-bar" id="fmcg-filter-bar">
          <button class="fmcg-filter-chip active" data-filter="all">All Products (11)</button>
          <button class="fmcg-filter-chip" data-filter="bread">🍞 Daily Breads (6)</button>
          <button class="fmcg-filter-chip" data-filter="rusk">☕ Rusks &amp; Toast (2)</button>
          <button class="fmcg-filter-chip" data-filter="biscotti">🍪 Eggless Biscottis (3)</button>
        </div>

        <!-- Dynamic Product Cards Grid -->
        <div class="fmcg-product-grid" id="fmcg-product-grid">
          ${ALL_FMCG_PRODUCTS.map(p => `
            <div class="fmcg-product-card" data-category="${p.category}">
              <div class="fmcg-card-top">
                <span class="fmcg-card-brand ${p.brandClass}">${p.brand}</span>
                <span class="fmcg-card-tag">${p.tag}</span>
              </div>
              <div class="fmcg-card-img-wrap">
                <img src="${p.img}" alt="${p.fullName}" loading="lazy">
              </div>
              <div class="fmcg-card-body">
                <span class="fmcg-card-weight">${p.weight}</span>
                <h3 class="fmcg-card-name">${p.name}</h3>
                <p class="fmcg-card-desc">${p.desc}</p>
                <div class="fmcg-card-footer">
                  <a href="${p.link}" class="fmcg-card-link">View Details <i data-lucide="arrow-right" style="width:14px;height:14px;"></i></a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 3: OUR COLLECTIONS (3 VISUAL FMCG BANNERS) -->
    <section class="section-padding collections-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Our Collections</span>
          <h2>Baked for Every Meal &amp; Tea Time</h2>
          <p>Explore our core product lines crafted for morning breakfast tables and evening refreshments.</p>
        </div>
        <div class="collections-grid">
          <a href="#/brands/good-morning-india" class="collection-banner-card collection-bread">
            <div class="collection-banner-backdrop"></div>
            <div class="collection-content">
              <span class="collection-tag">Bread &amp; Bakery</span>
              <h3>Good Morning India Breads</h3>
              <p>Soft white loaves, sandwich bread, standard daily packs &amp; family loaves.</p>
              <span class="collection-link">Explore Collection <i data-lucide="arrow-right" style="width:15px;height:15px;"></i></span>
            </div>
            <div class="collection-image-box">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Bread Collection" loading="lazy">
            </div>
          </a>
          <a href="#/brands/preeti" class="collection-banner-card collection-biscotti">
            <div class="collection-banner-backdrop"></div>
            <div class="collection-content">
              <span class="collection-tag">Eggless Bakery</span>
              <h3>Preeti Biscottis &amp; Cookies</h3>
              <p>100% eggless handmade biscottis in classic orange &amp; dry fruit varieties.</p>
              <span class="collection-link">Explore Collection <i data-lucide="arrow-right" style="width:15px;height:15px;"></i></span>
            </div>
            <div class="collection-image-box">
              <img src="./assets/rusk/preeti_biscottis_orange.jpg" alt="Preeti Biscottis Collection" loading="lazy">
            </div>
          </a>
          <a href="#/brands/preeti" class="collection-banner-card collection-rusk">
            <div class="collection-banner-backdrop"></div>
            <div class="collection-content">
              <span class="collection-tag">Tea-Time Staples</span>
              <h3>Preeti Rusks &amp; Suji Toast</h3>
              <p>Double-baked crispy rusks and semolina toast crafted for the daily tea cup.</p>
              <span class="collection-link">Explore Collection <i data-lucide="arrow-right" style="width:15px;height:15px;"></i></span>
            </div>
            <div class="collection-image-box">
              <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Preeti Rusks Collection" loading="lazy">
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 4: QUALITY & FRESHNESS (APPETIZING VISUAL SHOWCASE) -->
    <section class="section-padding qa-section">
      <div class="container">
        <div class="qa-grid">
          <div class="qa-narrative-col">
            <div class="qa-header">
              <span class="section-badge">Quality Assurance</span>
              <h2>Wholesome Ingredients.<br><span>Masterfully Baked.</span></h2>
              <p>At Bhagyashree Food Products, every loaf and rusk is produced under standardized hygiene and FSSAI compliance protocols. We formulate our products using select grain flour, standard yeast balance, temperature-controlled automated ovens, and sealed packaging to lock in morning freshness.</p>
            </div>
            <div class="qa-features-list">
              <div class="qa-feature-item">
                <div class="qa-feature-icon"><i data-lucide="shield-check"></i></div>
                <div>
                  <h4>FSSAI Grade-A Compliance</h4>
                  <p>State-licensed food production facility (Lic No. 12718060000582) adhering to strict hygiene standards.</p>
                </div>
              </div>
              <div class="qa-feature-item">
                <div class="qa-feature-icon"><i data-lucide="leaf"></i></div>
                <div>
                  <h4>100% Vegetarian &amp; Eggless Lines</h4>
                  <p>Prepared in pure vegetarian facilities with 0% animal derivatives across bread and rusk lines.</p>
                </div>
              </div>
              <div class="qa-feature-item">
                <div class="qa-feature-icon"><i data-lucide="package-check"></i></div>
                <div>
                  <h4>Tamper-Evident Moisture Seal</h4>
                  <p>Pouch-sealed and moisture-protected packaging locks in daily morning bakery aroma and texture.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="qa-visual-col">
            <div class="qa-visual-grid">
              <div class="qa-visual-card qa-visual-main">
                <img src="./assets/bread/600gm.jpeg" alt="Fresh baked Good Morning India bread" loading="lazy">
                <div class="qa-visual-overlay"><span>Fresh Baked Daily • 500g &amp; 600g</span></div>
              </div>
              <div class="qa-visual-card">
                <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Crispy rusk toast" loading="lazy">
                <div class="qa-visual-overlay"><span>Double-Baked Crispy</span></div>
              </div>
              <div class="qa-visual-card">
                <img src="./assets/rusk/preeti_biscottis_dryfruits.jpg" alt="Eggless biscottis" loading="lazy">
                <div class="qa-visual-overlay"><span>Handmade Eggless</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: THE BRANDS BEHIND EVERY BITE (HARVEST GOLD / BIMBO STYLE) -->
    <section class="section-padding portfolio-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Our Portfolio</span>
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

    <!-- SECTION 6: MANUFACTURING EXCELLENCE (4 VERIFIED PILLARS) -->
    <section class="section-padding manufacturing-section">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Infrastructure &amp; Capabilities</span>
          <h2>Manufacturing Excellence</h2>
          <p>How we scale production to supply regional wholesale and retail networks with consistency.</p>
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

  if (path === "/" || path === "") {
    initHeroShowcase();
    initCategoryFilter();
  } else if (path === "/gallery") {
    initGalleryFilters();
    initLightbox();
  } else if (path === "/distributors") {
    initDistributorForm();
  } else if (path === "/contact") {
    initContactForm();
  }
}

// Benchmark FMCG Hero Showcase (English Oven / Britannia / Bonn Style)
function initHeroShowcase() {
  const slides = document.querySelectorAll(".fmcg-hero-slide");
  const tabs = document.querySelectorAll(".fmcg-hero-tab");
  if (!slides.length || !tabs.length) return;

  let current = 0;
  let autoTimer = null;
  const DURATION = 5000;
  let startTime = Date.now();

  function switchSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    tabs.forEach(t => {
      t.classList.remove("active");
      const fill = t.querySelector(".fmcg-tab-progress-fill");
      if (fill) fill.style.width = "0%";
    });

    slides[index].classList.add("active");
    tabs[index].classList.add("active");
    current = index;
    startTime = Date.now();
    
    // Refresh icons inside active slide if any
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function nextSlide() {
    switchSlide((current + 1) % slides.length);
  }

  function startTimer() {
    stopTimer();
    autoTimer = setInterval(nextSlide, DURATION);
    startTime = Date.now();
  }

  function stopTimer() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Animate active tab fill progress
  function updateProgress() {
    const activeTab = tabs[current];
    if (activeTab) {
      const fill = activeTab.querySelector(".fmcg-tab-progress-fill");
      if (fill) {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / DURATION) * 100, 100);
        fill.style.width = `${progress}%`;
      }
    }
    requestAnimationFrame(updateProgress);
  }
  requestAnimationFrame(updateProgress);

  // Tab click handlers
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const idx = parseInt(tab.getAttribute("data-tab-index"));
      switchSlide(idx);
      startTimer();
    });
  });

  // Pause on hover
  const heroSection = document.getElementById("hero-section");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopTimer);
    heroSection.addEventListener("mouseleave", startTimer);
  }

  // Touch Swipe
  let touchStartX = 0;
  const stage = document.getElementById("fmcg-hero-stage");
  if (stage) {
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          switchSlide((current + 1) % slides.length);
        } else {
          switchSlide((current - 1 + slides.length) % slides.length);
        }
        startTimer();
      }
    }, { passive: true });
  }

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
