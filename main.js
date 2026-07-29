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
    name: "Preeti Premium Elaichi Rusk",
    desc: "Double-baked crispy biscuits infused with natural cardamom seeds. Perfectly sweet and crunchy.",
    weight: "200g / 400g Value Packs",
    variants: "Premium Cardamom",
    img: "./assets/rusk_product.jpg"
  },
  {
    name: "Preeti Special Milk Rusk",
    desc: "Enriched with real milk solids for a buttery, melting crunch in every tea dip.",
    weight: "300g Pack",
    variants: "Rich Milk",
    img: "./assets/rusk_product.jpg"
  },
  {
    name: "Preeti Traditional Suji Toast",
    desc: "Crisp tea-time toast made with fine semolina flour (Suji) and digestive seeds.",
    weight: "300g Premium Pack",
    variants: "Suji & Saunf",
    img: "./assets/suji_toast.jpg"
  },
  {
    name: "Preeti Crunchy Kaju Butter Cookies",
    desc: "Rich butter-baked cookies studded with real premium cashew bits. A luxury tea-time treat.",
    weight: "200g Premium Box",
    variants: "Rich Cashew Butter",
    img: "./assets/biscuit_product.jpg"
  },
  {
    name: "Preeti Handcrafted Atta Biscuits",
    desc: "Whole-wheat crisp biscuits made with pure ghee flavorings, perfect for health-conscious snacks.",
    weight: "250g Pack",
    variants: "Traditional Atta",
    img: "./assets/biscuit_product.jpg"
  }
];

const PARTNER_CHANNELS = [
  "Vishal Mega Mart", "Swiggy Instamart", "Blinkit", "Zepto", 
  "Reliance Smart", "Burger Singh", "KFC Franchise Network", "BigBasket",
  "Vishal Mega Mart", "Swiggy Instamart", "Blinkit", "Zepto"
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
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile navbar toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.setAttribute("data-lucide", "x");
    } else {
      icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  });
}

// Close mobile navbar on nav link click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    navMenu.classList.remove("active");
    const icon = mobileToggle.querySelector("i");
    icon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  }
});

// Link Quick Enquiry Button to Contact Page
const ctaBtn = document.getElementById("nav-cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    window.location.hash = "#/contact";
  });
}

// Router Hash Listener
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

// --- RENDER PAGES ---

// Render: Home Page
function renderHome() {
  const pillars = [
    { icon: "factory", title: "Automated Baking Plant", desc: "Equipped with continuous automated ovens, steel proofing setups, and hygienic conveyor feeds." },
    { icon: "check-circle", title: "Standardized QC Lines", desc: "Rigorous FSSAI compliant checking protocols for flour quality, yeast balance, and baking temperatures." },
    { icon: "truck", title: "Morning Dispatch Fleet", desc: "Strategically located on Delhi Road to launch fresh delivery trucks before dawn daily." },
    { icon: "users", title: "B2B Distribution Network", desc: "Supporting over 150 wholesale distributors and wholesale hubs throughout UP and neighboring districts." }
  ];

  return `
    <!-- HERO SECTION -->
    <section class="hero" id="hero-section">
      <!-- Background Bakery Light Rays Overlay -->
      <div class="sunlight-rays"></div>
      
      <!-- Subtle Floating Flour Particles -->
      <div class="flour-particles">
        <span class="particle p1"></span>
        <span class="particle p2"></span>
        <span class="particle p3"></span>
        <span class="particle p4"></span>
        <span class="particle p5"></span>
        <span class="particle p6"></span>
      </div>

      <div class="container hero-grid">
        <div class="hero-text-col">
          <div class="hero-tag-badge">
            <i data-lucide="sparkles" style="width: 14px; height: 14px; color: var(--accent-gold);"></i>
            <span>PREMIUM FMCG BAKERY BRAND</span>
          </div>
          <h1 class="hero-title">Freshly Baked<br><span>Every Morning.</span></h1>
          <p class="hero-desc">Delivering soft, hygienic and delicious bread made with quality ingredients for families, retailers and distributors.</p>
          
          <div class="hero-actions">
            <a href="#/brands/good-morning-india" class="btn btn-primary hero-btn-primary">
              <span>Explore Products</span>
              <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
            </a>
            <a href="#/distributors" class="btn btn-secondary hero-btn-secondary">
              <i data-lucide="handshake" style="width: 18px; height: 18px; color: var(--accent-gold);"></i>
              <span>Become a Distributor</span>
            </a>
          </div>

          <!-- TRUST BADGES -->
          <div class="trust-badges-grid">
            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <i data-lucide="check" style="width: 16px; height: 16px;"></i>
              </div>
              <span>Fresh Every Day</span>
            </div>
            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <i data-lucide="shield-check" style="width: 16px; height: 16px;"></i>
              </div>
              <span>Hygienically Packed</span>
            </div>
            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <i data-lucide="award" style="width: 16px; height: 16px;"></i>
              </div>
              <span>Quality Ingredients</span>
            </div>
            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <i data-lucide="users" style="width: 16px; height: 16px;"></i>
              </div>
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>

        <div class="hero-visual-col">
          <!-- Main Hero Product Showcase with Floating Animation -->
          <div class="hero-product-stage">
            <div class="hero-sun-glow"></div>
            <div class="hero-product-card-wrapper float-animation">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Fresh White Bread" class="hero-product-main-img">
              <div class="hero-product-badge">
                <span class="badge-title">Good Morning India</span>
                <span class="badge-sub">Fresh White Bread • 500g</span>
              </div>
            </div>
            <!-- Soft Realistic Drop Shadow -->
            <div class="hero-product-shadow"></div>
          </div>
        </div>
      </div>

      <!-- Curved Bottom Transition Divider -->
      <div class="hero-curved-divider">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,32 C360,96 1080,96 1440,32 L1440,120 L0,120 Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>

    <!-- STATS STRIP -->
    <section class="stats-bar">
      <div class="container stats-grid">
        <div class="stat-card">
          <h3>2012</h3>
          <p>Established Year</p>
        </div>
        <div class="stat-card">
          <h3>50k+</h3>
          <p>Loaves Baked Daily</p>
        </div>
        <div class="stat-card">
          <h3>150+</h3>
          <p>Active Distributors</p>
        </div>
        <div class="stat-card">
          <h3>100%</h3>
          <p>Hygienic & Certified</p>
        </div>
      </div>
    </section>

    <!-- CORPORATE PILLARS -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <h2>Our Manufacturing Excellence</h2>
          <p>How we scale operations to feed regional market demand with precision, safety, and fresh quality.</p>
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

    <!-- BRANDS HUB SECTION -->
    <section class="section-padding brands-section">
      <div class="container">
        <div class="section-title">
          <h2>One Manufacturer. Two Iconic Brands.</h2>
          <p>We pack two distinct product verticals to own the breakfast and tea-time table respectively.</p>
        </div>
        <div class="brands-grid">
          <!-- Preeti Brand Card -->
          <div class="brand-showcase-card preeti">
            <div class="brand-card-header preeti">
              <img src="./assets/preeti_logo.png" alt="Preeti Rusk & Biscuits Logo" class="brand-logo-img">
              <h3>Preeti</h3>
              <p>Rusk, bakery cookies & suji toast. India's favorite double-baked tea-time staples, crisp and full of rich flavor.</p>
              <a href="#/brands/preeti" class="btn btn-primary" style="background: var(--preeti-blue);">View Preeti Products</a>
            </div>
            <div class="brand-preview-img-container">
              <img src="./assets/rusk_product.jpg" alt="Preeti Rusk Packaging Preview">
            </div>
          </div>

          <!-- Good Morning India Brand Card -->
          <div class="brand-showcase-card gmi">
            <div class="brand-card-header gmi">
              <img src="./assets/gmi_logo.png" alt="Good Morning India Bread Logo" class="brand-logo-img">
              <h3>Good Morning India</h3>
              <p>Soft white loaves, brown bread, sweet buns, and burger buns. Loaded with standard weights and color-coded packaging.</p>
              <a href="#/brands/good-morning-india" class="btn btn-primary" style="background: var(--gmi-red);">View Bread Products</a>
            </div>
            <div class="brand-preview-img-container">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Bread Preview">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHANNEL PARTNERS MARQUEE -->
    <section class="marquee-container">
      <div class="marquee-title">Supplying to Leading Logistics & Grocery Outlets</div>
      <div class="marquee-content">
        ${PARTNER_CHANNELS.map(pc => `
          <div class="marquee-item">
            <i data-lucide="store" style="width: 18px; height: 18px;"></i>
            <span>${pc}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- B2B CALL TO ACTION -->
    <section class="section-padding" style="background: var(--bg-card); border-bottom: 1px solid var(--border-color);">
      <div class="container" style="text-align: center; max-width: 800px;">
        <span class="hero-tagline" style="background: #EAF8F0; color: #10B981; border-color: rgba(16,185,129,0.1);">📈 Expanding Territory</span>
        <h2 style="font-family: var(--font-display); font-size: 36px; font-weight: 800; margin: 16px 0 20px;">Partner With Moradabad's Leading Bakery Plant</h2>
        <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">We allocate exclusive geographic routes and wholesale price structures to authorized logistics stockists, supermarket distribution managers, and large retail traders. Contact our partnership desk today.</p>
        <div class="hero-actions" style="justify-content: center;">
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
          <h2>Built for Volume, Consistency & Compliance</h2>
          <p>Established in 2012 as a partnership firm, our company has strictly avoided retail bakery model complications. Instead, we focused solely on automated manufacturing pipelines, morning route delivery dispatch systems, and long-term distributor stability.</p>
          <p>Our plant located on Delhi Road (Khushalpur Road, Shahpur Tigri), Moradabad runs multiple automated production shifts daily. Raw material arrivals (premium wheat flour, edible dairy oils, spices, sugar) undergo sensory checking before storage. Standard baking temperature programs ensure that each loaf of Good Morning India bread matches the freshness, weight, and flavor of the next.</p>
          <p>With registered FSSAI licensing, MSME Udyam credentials, and standard GST billing compliance, we provide institutional grocery clients and supermarkets clean paperwork and clean supply operations.</p>
        </div>
        <div class="about-image">
          <img src="./assets/factory_interior.jpg" alt="Bhagyashree Food Products Factory Plant">
        </div>
      </div>
    </section>

    <!-- COMPLIANCE AND VERIFICATION SECTION -->
    <section class="section-padding" style="background: #FFF8EE; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-title">
          <h2>Registration & Compliances</h2>
          <p>Official certifications backing our wholesale trading and product safety standards.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
          <div class="step-content" style="text-align: center; border-color: var(--accent-gold);">
            <div class="pillar-icon" style="margin: 0 auto 16px; background: var(--bg-card);"><i data-lucide="shield-check" style="color: var(--accent-gold)"></i></div>
            <h4 style="font-weight: 800; font-family: var(--font-display); font-size: 16px; margin-bottom: 8px;">FSSAI Licensed Facility</h4>
            <p style="font-size: 13px; color: var(--text-muted);">Lic No. <strong>12718060000582</strong>. Safe, temperature-controlled, sanitized food manufacturing environments.</p>
          </div>
          <div class="step-content" style="text-align: center; border-color: var(--accent-gold);">
            <div class="pillar-icon" style="margin: 0 auto 16px; background: var(--bg-card);"><i data-lucide="file-text" style="color: var(--accent-gold)"></i></div>
            <h4 style="font-weight: 800; font-family: var(--font-display); font-size: 16px; margin-bottom: 8px;">GST Registered Billing</h4>
            <p style="font-size: 13px; color: var(--text-muted);">GSTIN: <strong>09AAMFB2738E1ZG</strong>. Offering full trade inputs, reliable invoicing, and automated dispatch manifests.</p>
          </div>
          <div class="step-content" style="text-align: center; border-color: var(--accent-gold);">
            <div class="pillar-icon" style="margin: 0 auto 16px; background: var(--bg-card);"><i data-lucide="award" style="color: var(--accent-gold)"></i></div>
            <h4 style="font-weight: 800; font-family: var(--font-display); font-size: 16px; margin-bottom: 8px;">MSME Registered Entity</h4>
            <p style="font-size: 13px; color: var(--text-muted);">Udyam Reg. No: <strong>UDYAM-UP-59-0006744</strong>. Backed by corporate enterprise framework guarantees.</p>
          </div>
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
        <h1>Product Catalogues & Brands</h1>
        <p>Explore specialized daily staples and snacks manufactured across our automated bread and cookie production lines.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
          <!-- Preeti Card -->
          <div class="brand-showcase-card preeti">
            <div class="brand-card-header preeti">
              <img src="./assets/preeti_logo.png" alt="Preeti Logo" class="brand-logo-img">
              <h2>Preeti Tea-Time Range</h2>
              <p>Special double-baked crispy rusks (sweet cardamom and milk flavors), light digestible saunf suji toast, and crumbly butter cookies built to keep tea dipping delicious.</p>
              <a href="#/brands/preeti" class="btn btn-primary" style="background: var(--preeti-blue);">View Preeti Catalogue</a>
            </div>
            <div class="brand-preview-img-container" style="height: 300px;">
              <img src="./assets/rusk_product.jpg" alt="Preeti Rusk range">
            </div>
          </div>

          <!-- GMI Card -->
          <div class="brand-showcase-card gmi">
            <div class="brand-card-header gmi">
              <img src="./assets/gmi_logo.png" alt="Good Morning India Logo" class="brand-logo-img">
              <h2>Good Morning India Bread</h2>
              <p>Standard white slicing loaves, jumbo sandwich bread for catering outlets, whole wheat bread, burger buns, and soft sweet buns packed under protective atmosphere parameters.</p>
              <a href="#/brands/good-morning-india" class="btn btn-primary" style="background: var(--gmi-red);">View GMI Bread Catalogue</a>
            </div>
            <div class="brand-preview-img-container" style="height: 300px;">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Bread range">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render: Preeti Page (Rusk & Biscuits)
function renderPreeti() {
  return `
    <section class="brand-hero preeti">
      <div class="container brand-hero-content">
        <div class="brand-hero-text">
          <span class="hero-tagline" style="background: var(--preeti-orange); color: var(--text-light); border: none;">Crispy Tea-time Staples</span>
          <h1>Preeti Rusk &amp; Biscuits</h1>
          <p>Preeti is our premier, long-established vertical covering crunchy tea-time snacks. Baked from premium grain choices and sweetened moderately for mass consumer adoption.</p>
        </div>
        <div class="brand-hero-img-box">
          <img src="./assets/preeti_logo.png" alt="Preeti Brand Logo" class="brand-hero-logo">
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <h2>Product Inventory</h2>
          <p>Mass-market SKU availability for wholesale booking and retail stocking.</p>
        </div>
        
        <div class="products-grid">
          ${PREETI_PRODUCTS.map(p => `
            <div class="product-card preeti-tag">
              <div class="product-img-box">
                <span class="product-tag">Preeti Snack</span>
                <img src="${p.img}" alt="${p.name}">
              </div>
              <div class="product-info">
                <h3 class="product-title">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-spec">
                  <span>Available Packaging:</span>
                  <span class="product-variant-badge">${p.weight}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 60px; background: var(--preeti-bg); padding: 40px; border-radius: var(--radius-md); border: 1px solid rgba(27,58,140,0.1); text-align: center;">
          <h3 style="font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--preeti-blue); margin-bottom: 12px;">Interested in Booking a Wholesale Shipment of Preeti Products?</h3>
          <p style="color: var(--text-dark); max-width: 600px; margin: 0 auto 24px; opacity: 0.8;">Get distributor rates, sample shipments, and transport details straight to your warehouse.</p>
          <a href="#/distributors" class="btn btn-primary" style="background: var(--preeti-blue);">Request Wholesale Rates</a>
        </div>
      </div>
    </section>
  `;
}

// Render: Good Morning India Page (Bread)
function renderGMI() {
  return `
    <section class="brand-hero gmi">
      <div class="container brand-hero-content">
        <div class="brand-hero-text">
          <span class="hero-tagline" style="background: var(--accent-gold); color: var(--text-light); border: none;">Daily Fresh Loaves</span>
          <h1>Good Morning India Bread</h1>
          <p>GMI is our flagship industrial bread brand, trusted by hotels, sandwich stall networks, and general grocers for softness, precise slice thickness, and reliable morning delivery.</p>
        </div>
        <div class="brand-hero-img-box">
          <img src="./assets/gmi_logo.png" alt="Good Morning India Logo" class="brand-hero-logo" style="background: #FFF; padding: 12px; border-radius: 4px;">
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <h2>Bread &amp; Bakery Portfolio</h2>
          <p>Oven fresh, temperature staged, and dispatch ready every single morning.</p>
        </div>

        <div class="products-grid">
          ${BREAD_PRODUCTS.map(p => `
            <div class="product-card gmi-tag">
              <div class="product-img-box">
                <span class="product-tag">GMI Bread</span>
                <img src="${p.img}" alt="${p.name}">
              </div>
              <div class="product-info">
                <h3 class="product-title">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-spec">
                  <span>Standard Weights:</span>
                  <span class="product-variant-badge" style="background: var(--gmi-bg); color: var(--gmi-red); font-weight: 700;">${p.weight}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 60px; background: var(--gmi-bg); padding: 40px; border-radius: var(--radius-md); border: 1px solid rgba(192,39,45,0.1); text-align: center;">
          <h3 style="font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--gmi-red); margin-bottom: 12px;">Run a Hotel, School, or Sandwich Supply Chain?</h3>
          <p style="color: var(--text-dark); max-width: 600px; margin: 0 auto 24px; opacity: 0.8;">Ensure morning delivery slots direct from our plant to your kitchen door. Route contracts available for Moradabad region.</p>
          <a href="#/contact" class="btn btn-primary" style="background: var(--gmi-red);">Contact Route Manager</a>
        </div>
      </div>
    </section>
  `;
}

// Render: Process & Quality
function renderProcess() {
  const steps = [
    { title: "Sourcing Raw Material", desc: "We source high-gluten flour, food-grade yeast, pure fats, and spices from certified millers. All lots undergo moisture and dust filtering inspections upon entering our stores." },
    { title: "Automated Mixing & Proofing", desc: "Dough mixing is monitored by automatic timing and temperature control systems to guarantee yeast activation. Modern proofing chambers maintain humidity and heat scales." },
    { title: "Oven Baking", desc: "Industrial continuous conveyor ovens apply regulated zone-wise baking heat, baking loaves and rusk toasts uniformly to a rich golden color." },
    { title: "Automated Slicing & Pack", desc: "Loaves are cooled on sanitary trays, sliced cleanly by high-speed blades, and immediately sealed in moisture-barrier bags with printed batch codes." },
    { title: "Route-Wise Logistics Dispatch", desc: "Packed stock is staged into delivery truck lots. Vehicles leave our Delhi Road factory bay in pre-dawn hours for instant delivery to distributors." }
  ];

  return `
    <section class="page-hero">
      <div class="container">
        <h1>Manufacturing Process & Quality Control</h1>
        <p>No romantic artisanal hand-kneading. We operate structured, hygienic industrial production lines designed for maximum consistency.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <h2>Baking Pipeline Timeline</h2>
          <p>Every loaf and rusk package follows a rigid, repeatable five-stage conveyor journey.</p>
        </div>

        <div class="timeline">
          ${steps.map((s, index) => `
            <div class="timeline-step">
              <div class="step-num">${index + 1}</div>
              <div class="step-content">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
              </div>
            </div>
          `).join('')}
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
        <h1>Become a Stockist or Distributor</h1>
        <p>Apply to become a logistics partner for Preeti snacks and Good Morning India bread products within your town or route.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container dist-split">
        <div class="dist-benefits">
          <h3>Why Partner With Us?</h3>
          
          <div class="benefit-item">
            <div class="benefit-icon"><i data-lucide="shield"></i></div>
            <div class="benefit-text">
              <h4>Exclusive Geographic Territories</h4>
              <p>We restrict overlapping distributor route assignments. Ensure high trade volumes inside your allocated market area.</p>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon"><i data-lucide="trending-up"></i></div>
            <div class="benefit-text">
              <h4>High-Volume Margin Ratios</h4>
              <p>Enjoy stable profit structures, wholesale slab pricing, and clear GST-invoiced transactions directly from the manufacturer.</p>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon"><i data-lucide="truck"></i></div>
            <div class="benefit-text">
              <h4>Uninterrupted Morning Dispatch</h4>
              <p>Our Delhi Road facility runs 24×7. Count on stable, timely wholesale supply deliveries without gaps or unexpected stockouts.</p>
            </div>
          </div>

          <div style="background: var(--bg-primary); padding: 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-top: 36px;">
            <h4 style="font-weight: 800; font-family: var(--font-display); font-size: 15px; margin-bottom: 8px;">Distributor Requirements:</h4>
            <ul style="list-style-type: check; padding-left: 20px; font-size: 14px; color: var(--text-muted); display: flex; flex-direction: column; gap: 8px;">
              <li>• Active GSTIN registration and local trade license.</li>
              <li>• Dry storage warehouse facility (minimum 250 sq. ft.).</li>
              <li>• Setup capacity to manage morning supply truck arrivals.</li>
              <li>• Local retail market distribution vehicle / delivery vans.</li>
            </ul>
          </div>
        </div>

        <div class="contact-form-card" id="form-card-container">
          <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 800; margin-bottom: 20px;">Distributor Request Form</h3>
          <form id="distributor-form">
            <div class="form-group">
              <label for="dist-name">Contact Person Name *</label>
              <input type="text" id="dist-name" class="form-input" placeholder="Enter your full name" required>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="dist-phone">Phone / WhatsApp Number *</label>
                <input type="tel" id="dist-phone" class="form-input" placeholder="e.g. 9876543210" required>
              </div>
              <div class="form-group">
                <label for="dist-email">Email Address</label>
                <input type="email" id="dist-email" class="form-input" placeholder="name@company.com">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="dist-city">City / District *</label>
                <input type="text" id="dist-city" class="form-input" placeholder="e.g. Moradabad" required>
              </div>
              <div class="form-group">
                <label for="dist-experience">Years in FMCG / Food Trade *</label>
                <input type="text" id="dist-experience" class="form-input" placeholder="e.g. 3 years" required>
              </div>
            </div>

            <div class="form-group">
              <label for="dist-message">Warehouse details & Area Interested *</label>
              <textarea id="dist-message" class="form-input" placeholder="Describe your wholesale coverage area and current logistics infrastructure..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">
              <i data-lucide="send" style="width: 16px; height: 16px;"></i>
              Submit &amp; Open WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// Render: Gallery
function renderGallery() {
  const images = [
    { title: "Industrial Plant Layout", desc: "Production floor displaying automated bread ovens on Delhi Road.", type: "facility", img: "./assets/factory_interior.jpg" },
    { title: "Fresh Slices of GMI Bread", desc: "Soft white bread slices ready for automatic wrapper feed.", type: "bread", img: "./assets/bread/500gm.jpeg" },
    { title: "Preeti Rusk Stack", desc: "Cardamom crispy double-baked rusk snacks ready for bulk dispatch.", type: "rusk", img: "./assets/rusk_product.jpg" },
    { title: "Preeti Suji Toast", desc: "Suji toast baked cleanly with digestive seeds.", type: "rusk", img: "./assets/suji_toast.jpg" },
    { title: "Industrial Conveyors", desc: "Continuous automated ovens running multiple baking shifts daily.", type: "facility", img: "./assets/factory_interior.jpg" },
    { title: "Preeti Cookies Showcase", desc: "Golden-brown butter and cashew baked biscuits.", type: "rusk", img: "./assets/biscuit_product.jpg" }
  ];

  return `
    <section class="page-hero">
      <div class="container">
        <h1>Factory &amp; Product Gallery</h1>
        <p>A transparent visual look at our automated baking floors, cooling conveyors, and finished products.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="gallery-tabs">
          <button class="gallery-tab active" data-filter="all">Show All</button>
          <button class="gallery-tab" data-filter="facility">Production Facility</button>
          <button class="gallery-tab" data-filter="bread">Morning Bread Loaves</button>
          <button class="gallery-tab" data-filter="rusk">Rusk &amp; Biscuits</button>
        </div>

        <div class="gallery-grid" id="gallery-grid">
          ${images.map(img => `
            <div class="gallery-item" data-type="${img.type}">
              <img src="${img.img}" alt="${img.title}">
              <div class="gallery-overlay">
                <h3>${img.title}</h3>
                <p>${img.desc}</p>
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
        <h1>Contact Factory Partnership Desk</h1>
        <p>Reach out to our partners, locate our Delhi Road production unit, or schedule a sample delivery.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container contact-split">
        <div>
          <h2>Bhagyashree Food Products</h2>
          <p style="color: var(--text-muted); margin-bottom: 24px;">Our corporate plant is open to registered traders and distribution managers by appointment.</p>
          
          <div class="contact-info-list">
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="map-pin"></i></div>
              <div class="contact-info-text">
                <h3>Factory Plant Location</h3>
                <p>${BUSINESS.address}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="phone"></i></div>
              <div class="contact-info-text">
                <h3>Phone Contacts</h3>
                <p><a href="tel:${BUSINESS.phone}" style="color: var(--gmi-red); font-weight: 700;">${BUSINESS.phone}</a> (Despatch Manager)</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="mail"></i></div>
              <div class="contact-info-text">
                <h3>Corporate Email</h3>
                <p><a href="mailto:${BUSINESS.email}" style="color: var(--preeti-blue); font-weight: 700;">${BUSINESS.email}</a></p>
              </div>
            </div>
          </div>

          <div class="map-wrapper">
            <!-- Google Maps iframe pointing to Moradabad area -->
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112120.37042784534!2d78.71884485542385!3d28.84157790890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb0a6aa3b94b%3A0xc3c944439c27fca!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div class="contact-form-card" id="contact-form-container">
          <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 800; margin-bottom: 20px;">Send a Direct Message</h3>
          <form id="contact-form">
            <div class="form-group">
              <label for="contact-name">Your Full Name *</label>
              <input type="text" id="contact-name" class="form-input" placeholder="Enter name" required>
            </div>

            <div class="form-group">
              <label for="contact-phone">WhatsApp/Phone *</label>
              <input type="tel" id="contact-phone" class="form-input" placeholder="e.g. 9876543210" required>
            </div>

            <div class="form-group">
              <label for="contact-subject">Inquiry Type *</label>
              <select id="contact-subject" class="form-input" required>
                <option value="">-- Choose Subject --</option>
                <option value="Distributor Enquiry">Distributor Enquiry</option>
                <option value="Bulk Supply for Hotels/Institutions">Bulk Supply for Hotels/Institutions</option>
                <option value="Raw Material Supply offer">Raw Material Supply offer</option>
                <option value="Other Business Matters">Other Business Matters</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contact-message">Write your message *</label>
              <textarea id="contact-message" class="form-input" placeholder="Write your business details and requirements here..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <i data-lucide="send" style="width: 16px; height: 16px;"></i>
              Send WhatsApp Message
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// --- INTERACTIVE FEATURES MANAGER ---

function initInteractions(path) {
  // Render lucide icons with safety check
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 100);
  }

  // Route-Specific JS Listeners
  if (path === "/" || path === "") {
    initHeroParallax();
  } else if (path === "/gallery") {
    initGalleryFilters();
    initLightbox();
  } else if (path === "/distributors") {
    initDistributorForm();
  } else if (path === "/contact") {
    initContactForm();
  }
}

// Hero Parallax Scroll Logic
function initHeroParallax() {
  const heroStage = document.querySelector(".hero-product-stage");
  if (!heroStage) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 700) {
      heroStage.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
  }, { passive: true });
}

// Gallery Filtering Logic
function initGalleryFilters() {
  const tabs = document.querySelectorAll(".gallery-tab");
  const items = document.querySelectorAll(".gallery-item");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      // Show/Hide items
      items.forEach(item => {
        const type = item.getAttribute("data-type");
        if (filter === "all" || type === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// Lightbox/Modal Viewer for Gallery Page
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const galleryItems = document.querySelectorAll(".gallery-item img");

  galleryItems.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  if (closeBtn && lightbox) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }
}

// WhatsApp redirect helper
function redirectToWhatsApp(phone, text) {
  const formattedPhone = phone.replace(/[^0-9]/g, ""); // clean non-digits
  // Use country code +91 for India if not present
  const fullPhone = formattedPhone.startsWith("91") ? formattedPhone : "91" + formattedPhone;
  const whatsappUrl = `https://wa.me/919758805800?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank");
}

// Distributor Form WhatsApp Submissions
function initDistributorForm() {
  const form = document.getElementById("distributor-form");
  const container = document.getElementById("form-card-container");
  
  if (form && container) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("dist-name").value;
      const phone = document.getElementById("dist-phone").value;
      const email = document.getElementById("dist-email").value || "N/A";
      const city = document.getElementById("dist-city").value;
      const exp = document.getElementById("dist-experience").value;
      const message = document.getElementById("dist-message").value;

      const waMessage = `Hello Bhagyashree Food Products Team, \n\nI want to apply to become a distributor.\n\n*Details:*\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Email:* ${email}\n• *City:* ${city}\n• *Experience:* ${exp}\n• *Warehouse & Infrastructure:* ${message}`;

      // Open WhatsApp
      redirectToWhatsApp(phone, waMessage);

      // Render success screen in form container
      container.innerHTML = `
        <div class="form-success-overlay">
          <div class="success-icon">
            <i data-lucide="check" style="width: 32px; height: 32px;"></i>
          </div>
          <h3>Application Submitted!</h3>
          <p>Thank you for applying. A WhatsApp message has been generated with your details. Our dispatch and partnership director will call you shortly.</p>
          <a href="#/" class="btn btn-secondary">Return to Home</a>
        </div>
      `;
      lucide.createIcons();
    });
  }
}

// Contact Form WhatsApp Submissions
function initContactForm() {
  const form = document.getElementById("contact-form");
  const container = document.getElementById("contact-form-container");

  if (form && container) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value;
      const phone = document.getElementById("contact-phone").value;
      const subject = document.getElementById("contact-subject").value;
      const message = document.getElementById("contact-message").value;

      const waMessage = `Hello Bhagyashree Food Products,\n\nI have a general business inquiry.\n\n*Details:*\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Inquiry:* ${subject}\n• *Message:* ${message}`;

      // Open WhatsApp
      redirectToWhatsApp(phone, waMessage);

      // Render success screen in form container
      container.innerHTML = `
        <div class="form-success-overlay">
          <div class="success-icon">
            <i data-lucide="check" style="width: 32px; height: 32px;"></i>
          </div>
          <h3>Message Sent!</h3>
          <p>Your message has been packed and directed to our WhatsApp channel. Our support representative will connect with you shortly.</p>
          <a href="#/" class="btn btn-secondary">Return to Home</a>
        </div>
      `;
      lucide.createIcons();
    });
  }
}
