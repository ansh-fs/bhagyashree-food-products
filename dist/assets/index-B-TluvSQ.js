(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const l={address:"Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad, Uttar Pradesh - 244001",phone:"+91 97588 05800",email:"info@bhagyashreefoodproducts.com"},b=[{name:"Good Morning India Fresh White Bread",desc:"Soft, oven-fresh white bread slice, ideal for daily breakfast toast, sandwiches, and family dining.",weight:"500g Pack",variants:"Standard Slices",img:"./assets/bread/500gm.jpeg"},{name:"Good Morning India Premium Bread",desc:"Richly formulated bread baked for extra softness and nutritious morning family table breakfasts.",weight:"600g Family Pack",variants:"Large Loaf",img:"./assets/bread/600gm.jpeg"},{name:"Good Morning India Special Sandwich Bread",desc:"Specially crafted soft slice bread in vibrant red pouch, perfect for quick morning snacks.",weight:"350g Pack",variants:"Sandwich Slices",img:"./assets/bread/350gm.jpeg"},{name:"Good Morning India Fresh Sandwich Bread",desc:"Delicate orange packaging sandwich bread baked to standard softness and clean slice texture.",weight:"300g Pack",variants:"Daily Pack",img:"./assets/bread/300gm.jpeg"},{name:"Good Morning India Classic Sandwich Bread",desc:"Compact everyday sandwich loaf packed with fresh grain nutrition for daily consumption.",weight:"220g Value Pack",variants:"Value Pack",img:"./assets/bread/220gm.jpeg"},{name:"Good Morning India Gattu Sandwich Bread",desc:"Signature blue & green checked package sandwich bread offering great slice volume and texture.",weight:"Gattu Special Pack",variants:"Special Edition",img:"./assets/bread/GATTU.jpeg"}],f=[{name:"Preeti Biscottis – Classic",desc:"100% eggless handmade biscuits in classic orange packaging. Crispy, crunchy and perfect with tea.",weight:"Assorted Pack",variants:"Classic Orange",img:"./assets/rusk/preeti_biscottis_orange.jpg"},{name:"Preeti Biscottis – Dry Fruits",desc:"Premium dry fruits variant of our signature eggless handmade biscuits. Rich, nutty and delicious.",weight:"Assorted Pack",variants:"Dry Fruits Special",img:"./assets/rusk/preeti_biscottis_dryfruits.jpg"},{name:"Preeti Biscottis – Premium",desc:"100% eggless handmade biscuit in tall premium pack. For a healthier, fresh, rich and tasty treat.",weight:"Premium Pack",variants:"Premium Orange",img:"./assets/rusk/preeti_biscottis_tall.jpg"},{name:"Keshav Bread Suji Toast",desc:"Tasty and crunchy bread suji toast made with finest semolina. A delightful tea-time companion.",weight:"Standard Pack",variants:"Suji Toast",img:"./assets/rusk/keshav_suji_toast.jpg"},{name:"Preeti Bread Rusk Toast",desc:"Double-baked crispy bread rusk toast with 0% artificial preservatives. Premium quality guaranteed.",weight:"Standard Pack",variants:"Bread Rusk",img:"./assets/rusk/preeti_rusk_toast.jpg"}],y=["Vishal Mega Mart","Swiggy Instamart","Blinkit","Zepto","Reliance Smart","Burger Singh","KFC Franchise Network","BigBasket","Vishal Mega Mart","Swiggy Instamart","Blinkit","Zepto"],k={"/":h,"/about":x,"/brands":S,"/brands/preeti":P,"/brands/good-morning-india":B,"/process":I,"/distributors":E,"/gallery":M,"/contact":A};function m(){const t=(window.location.hash||"#/").substring(1),i=k[t]||h,s=document.getElementById("router-view");s&&(s.className="fade-in-up",s.innerHTML=i(),window.scrollTo(0,0)),w(t),L(t)}function w(e){document.querySelectorAll(".nav-link").forEach(a=>{a.classList.remove("active")});let i=e;e.startsWith("/brands/")&&(i="/brands");const s=document.querySelector(`.nav-link[href="#${i}"]`);s&&s.classList.add("active")}window.addEventListener("scroll",()=>{const e=document.getElementById("header-nav");window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")});const u=document.getElementById("mobile-toggle"),p=document.getElementById("nav-menu");u&&p&&u.addEventListener("click",()=>{p.classList.toggle("active");const e=u.querySelector("i");p.classList.contains("active")?e.setAttribute("data-lucide","x"):e.setAttribute("data-lucide","menu"),lucide.createIcons()});document.addEventListener("click",e=>{e.target.classList.contains("nav-link")&&(p.classList.remove("active"),u.querySelector("i").setAttribute("data-lucide","menu"),lucide.createIcons())});const g=document.getElementById("nav-cta-btn");g&&g.addEventListener("click",()=>{window.location.hash="#/contact"});window.addEventListener("hashchange",m);window.addEventListener("load",m);function h(){return`
    <!-- HERO SECTION (FMCG CORPORATE) -->
    <section class="hero" id="hero-section">
      <div class="container hero-grid">
        <div class="hero-text-col">
          <h1 class="hero-title">Freshly Baked<br>Every Morning.</h1>
          <p class="hero-desc">Delivering soft, hygienic and delicious bread made with quality ingredients for families, retailers and distributors.</p>
          
          <div class="hero-actions">
            <a href="#/brands" class="btn btn-primary hero-btn-primary">
              <span>Explore Products</span>
              <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
            </a>
            <a href="#/distributors" class="btn btn-secondary hero-btn-secondary">
              <i data-lucide="handshake" style="width: 18px; height: 18px;"></i>
              <span>Become a Distributor</span>
            </a>
          </div>

          <!-- FACTUAL TRUST STRIP -->
          <div class="hero-trust-strip">
            <div class="trust-strip-item">
              <span class="trust-strip-dot"></span>
              <span>FSSAI Licensed</span>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-dot"></span>
              <span>GST Registered</span>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-dot"></span>
              <span>Udyam Registered</span>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-dot"></span>
              <span>Est. 2012</span>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-dot"></span>
              <span>24×7 Production</span>
            </div>
          </div>
        </div>

        <div class="hero-visual-col">
          <!-- Multi-Brand Product Carousel Showcase (GMI & Preeti) -->
          <div class="hero-product-stage">
            <div class="hero-product-card-wrapper">
              <div class="hero-carousel" id="hero-carousel">
                <div class="hero-carousel-track">
                  <!-- Slide 0: GMI 500g Bread -->
                  <div class="hero-slide active" data-index="0">
                    <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Fresh White Bread 500g" class="hero-product-main-img">
                    <div class="hero-product-badge">
                      <span class="badge-brand gmi">Good Morning India</span>
                      <span class="badge-sub">Fresh White Bread • 500g</span>
                    </div>
                  </div>
                  <!-- Slide 1: Preeti Bread Rusk Toast -->
                  <div class="hero-slide" data-index="1">
                    <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Preeti Bread Rusk Toast" class="hero-product-main-img">
                    <div class="hero-product-badge">
                      <span class="badge-brand preeti">Preeti</span>
                      <span class="badge-sub">Bread Rusk Toast • 0% Preservatives</span>
                    </div>
                  </div>
                  <!-- Slide 2: GMI 600g Premium Bread -->
                  <div class="hero-slide" data-index="2">
                    <img src="./assets/bread/600gm.jpeg" alt="Good Morning India Premium Bread 600g" class="hero-product-main-img">
                    <div class="hero-product-badge">
                      <span class="badge-brand gmi">Good Morning India</span>
                      <span class="badge-sub">Premium Bread • 600g Family Pack</span>
                    </div>
                  </div>
                  <!-- Slide 3: Preeti Biscottis Classic -->
                  <div class="hero-slide" data-index="3">
                    <img src="./assets/rusk/preeti_biscottis_orange.jpg" alt="Preeti Biscottis Classic" class="hero-product-main-img">
                    <div class="hero-product-badge">
                      <span class="badge-brand preeti">Preeti</span>
                      <span class="badge-sub">Handmade Biscottis • 100% Eggless</span>
                    </div>
                  </div>
                  <!-- Slide 4: GMI Special Sandwich Bread -->
                  <div class="hero-slide" data-index="4">
                    <img src="./assets/bread/350gm.jpeg" alt="Good Morning India Sandwich Bread 350g" class="hero-product-main-img">
                    <div class="hero-product-badge">
                      <span class="badge-brand gmi">Good Morning India</span>
                      <span class="badge-sub">Sandwich Bread • 350g</span>
                    </div>
                  </div>
                  <!-- Slide 5: Keshav Bread Suji Toast -->
                  <div class="hero-slide" data-index="5">
                    <img src="./assets/rusk/keshav_suji_toast.jpg" alt="Keshav Bread Suji Toast" class="hero-product-main-img">
                    <div class="hero-product-badge">
                      <span class="badge-brand preeti">Preeti Range</span>
                      <span class="badge-sub">Keshav Suji Toast • Crunchy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Carousel Dots -->
            <div class="hero-carousel-dots" id="hero-carousel-dots">
              <button class="carousel-dot active" data-slide="0" aria-label="Slide 1"></button>
              <button class="carousel-dot" data-slide="1" aria-label="Slide 2"></button>
              <button class="carousel-dot" data-slide="2" aria-label="Slide 3"></button>
              <button class="carousel-dot" data-slide="3" aria-label="Slide 4"></button>
              <button class="carousel-dot" data-slide="4" aria-label="Slide 5"></button>
              <button class="carousel-dot" data-slide="5" aria-label="Slide 6"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SUB-BRAND DISTINCTION SECTION -->
    <section class="brand-duo-section">
      <div class="container">
        <div class="brand-duo-heading">
          <h2>Our Core Manufacturing Verticals</h2>
          <p>Two focused product portfolios serving breakfast tables and tea-time snacks across Uttar Pradesh.</p>
        </div>
        <div class="brand-duo-grid">
          <!-- Preeti Brand Card -->
          <a href="#/brands/preeti" class="brand-duo-card preeti">
            <div class="brand-duo-info">
              <img src="./assets/preeti_logo.png" alt="Preeti Rusk & Biscuits" class="brand-duo-logo">
              <h3>Preeti</h3>
              <p>Double-baked crispy rusks, eggless handmade biscottis, and light digestive suji toast for wholesale distribution.</p>
              <span class="brand-duo-link">View Preeti Range <i data-lucide="arrow-right" style="width: 15px; height: 15px;"></i></span>
            </div>
            <div class="brand-duo-img">
              <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Preeti Rusk & Toast Products">
            </div>
          </a>

          <!-- Good Morning India Brand Card -->
          <a href="#/brands/good-morning-india" class="brand-duo-card gmi">
            <div class="brand-duo-info">
              <img src="./assets/gmi_logo.png" alt="Good Morning India Bread" class="brand-duo-logo">
              <h3>Good Morning India</h3>
              <p>Fresh white loaves, sandwich bread, sweet buns, and burger buns with morning route dispatch reliability.</p>
              <span class="brand-duo-link">View Bread Range <i data-lucide="arrow-right" style="width: 15px; height: 15px;"></i></span>
            </div>
            <div class="brand-duo-img">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Bread Products">
            </div>
          </a>
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
          ${[{icon:"factory",title:"Automated Baking Plant",desc:"Equipped with continuous automated ovens, steel proofing setups, and hygienic conveyor feeds."},{icon:"check-circle",title:"Standardized QC Lines",desc:"Rigorous FSSAI compliant checking protocols for flour quality, yeast balance, and baking temperatures."},{icon:"truck",title:"Morning Dispatch Fleet",desc:"Strategically located on Delhi Road to launch fresh delivery trucks before dawn daily."},{icon:"users",title:"B2B Distribution Network",desc:"Supporting over 150 wholesale distributors and wholesale hubs throughout UP and neighboring districts."}].map(t=>`
            <div class="pillar-card">
              <div class="pillar-icon">
                <i data-lucide="${t.icon}"></i>
              </div>
              <h3>${t.title}</h3>
              <p>${t.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CHANNEL PARTNERS MARQUEE -->
    <section class="marquee-container">
      <div class="marquee-title">Supplying to Leading Logistics & Grocery Outlets</div>
      <div class="marquee-content">
        ${y.map(t=>`
          <div class="marquee-item">
            <i data-lucide="store" style="width: 18px; height: 18px;"></i>
            <span>${t}</span>
          </div>
        `).join("")}
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
  `}function x(){return`
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
          <p>Our plant located at Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad, Uttar Pradesh - 244001 runs multiple automated production shifts daily. Raw material arrivals (premium wheat flour, edible dairy oils, spices, sugar) undergo sensory checking before storage. Standard baking temperature programs ensure that each loaf of Good Morning India bread matches the freshness, weight, and flavor of the next.</p>
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
  `}function S(){return`
    <section class="page-hero">
      <div class="container">
        <h1>Product Catalogues & Brands</h1>
        <p>Explore specialized daily staples and snacks manufactured across our automated bread and cookie production lines.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="brands-grid">
          <!-- Preeti Card -->
          <div class="brand-showcase-card preeti">
            <div class="brand-card-header preeti">
              <img src="./assets/preeti_logo.png" alt="Preeti Logo" class="brand-logo-img">
              <h2>Preeti Tea-Time Range</h2>
              <p>Special double-baked crispy rusks (sweet cardamom and milk flavors), light digestible saunf suji toast, and crumbly butter cookies built to keep tea dipping delicious.</p>
              <a href="#/brands/preeti" class="btn btn-primary" style="background: var(--preeti-blue);">View Preeti Catalogue</a>
            </div>
            <div class="brand-preview-img-container">
              <img src="./assets/rusk/preeti_rusk_toast.jpg" alt="Preeti Rusk range">
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
            <div class="brand-preview-img-container">
              <img src="./assets/bread/500gm.jpeg" alt="Good Morning India Bread range">
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function P(){return`
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
          ${f.map(e=>`
            <div class="product-card preeti-tag">
              <div class="product-img-box">
                <span class="product-tag">Preeti Snack</span>
                <img src="${e.img}" alt="${e.name}">
              </div>
              <div class="product-info">
                <h3 class="product-title">${e.name}</h3>
                <p class="product-desc">${e.desc}</p>
                <div class="product-spec">
                  <span>Available Packaging:</span>
                  <span class="product-variant-badge">${e.weight}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="brand-cta-box preeti">
          <h3>Interested in Booking a Wholesale Shipment of Preeti Products?</h3>
          <p>Get distributor rates, sample shipments, and transport details straight to your warehouse.</p>
          <a href="#/distributors" class="btn btn-primary" style="background: var(--preeti-blue);">Request Wholesale Rates</a>
        </div>
      </div>
    </section>
  `}function B(){return`
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
          ${b.map(e=>`
            <div class="product-card gmi-tag">
              <div class="product-img-box">
                <span class="product-tag">GMI Bread</span>
                <img src="${e.img}" alt="${e.name}">
              </div>
              <div class="product-info">
                <h3 class="product-title">${e.name}</h3>
                <p class="product-desc">${e.desc}</p>
                <div class="product-spec">
                  <span>Standard Weights:</span>
                  <span class="product-variant-badge" style="background: var(--gmi-bg); color: var(--gmi-red); font-weight: 700;">${e.weight}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="brand-cta-box gmi">
          <h3>Run a Hotel, School, or Sandwich Supply Chain?</h3>
          <p>Ensure morning delivery slots direct from our plant to your kitchen door. Route contracts available for Moradabad region.</p>
          <a href="#/contact" class="btn btn-primary" style="background: var(--gmi-red);">Contact Route Manager</a>
        </div>
      </div>
    </section>
  `}function I(){return`
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
          ${[{title:"Sourcing Raw Material",desc:"We source high-gluten flour, food-grade yeast, pure fats, and spices from certified millers. All lots undergo moisture and dust filtering inspections upon entering our stores."},{title:"Automated Mixing & Proofing",desc:"Dough mixing is monitored by automatic timing and temperature control systems to guarantee yeast activation. Modern proofing chambers maintain humidity and heat scales."},{title:"Oven Baking",desc:"Industrial continuous conveyor ovens apply regulated zone-wise baking heat, baking loaves and rusk toasts uniformly to a rich golden color."},{title:"Automated Slicing & Pack",desc:"Loaves are cooled on sanitary trays, sliced cleanly by high-speed blades, and immediately sealed in moisture-barrier bags with printed batch codes."},{title:"Route-Wise Logistics Dispatch",desc:"Packed stock is staged into delivery truck lots. Vehicles leave our Delhi Road factory bay in pre-dawn hours for instant delivery to distributors."}].map((t,i)=>`
            <div class="timeline-step">
              <div class="step-num">${i+1}</div>
              <div class="step-content">
                <h3>${t.title}</h3>
                <p>${t.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function E(){return`
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
  `}function M(){return`
    <section class="page-hero">
      <div class="container">
        <h1>Factory &amp; Product Gallery</h1>
        <p>A transparent visual look at our automated baking floors, packaging lines, and finished products.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="gallery-tabs">
          <button class="gallery-tab active" data-filter="all">Show All</button>
          <button class="gallery-tab" data-filter="facility">Production Facility</button>
          <button class="gallery-tab" data-filter="packaging">Packaging</button>
          <button class="gallery-tab" data-filter="bread">Bread Products</button>
          <button class="gallery-tab" data-filter="rusk">Rusk &amp; Biscuits</button>
        </div>

        <div class="gallery-grid" id="gallery-grid">
          ${[{title:"Bread Production Line",desc:"Workers handling fresh bread loaves on the stainless steel production conveyor belt.",type:"facility",img:"./assets/gallery/bread_production_line.jpg"},{title:"Factory Floor Overview",desc:"Full view of the bakery floor — racks loaded with thousands of fresh loaves and industrial ovens running.",type:"facility",img:"./assets/gallery/factory_floor_overview.jpg"},{title:"Automated Conveyor System",desc:"Precision automated conveyor belt with bread molds moving through the baking station.",type:"facility",img:"./assets/gallery/automated_conveyor.jpg"},{title:"Packaging Station",desc:"Trained operator at the weighing and sealing station, packaging fresh bread for dispatch.",type:"packaging",img:"./assets/gallery/packaging_station.jpg"},{title:"Packaging Conveyor Line",desc:"Wrapped bread loaves on the packaging conveyor belt, ready for distribution.",type:"packaging",img:"./assets/gallery/packaging_conveyor.jpg"},{title:"Good Morning India – 500g",desc:"Our flagship 500g Fresh White Bread in vibrant red and yellow packaging.",type:"bread",img:"./assets/bread/500gm.jpeg"},{title:"Good Morning India – 600g",desc:"Premium 600g family pack bread, baked for extra softness.",type:"bread",img:"./assets/bread/600gm.jpeg"},{title:"Good Morning India – 350g",desc:"Special 350g sandwich bread in distinctive maroon packaging.",type:"bread",img:"./assets/bread/350gm.jpeg"},{title:"Good Morning India – Gattu",desc:"Signature Gattu Special Pack sandwich bread in blue and green packaging.",type:"bread",img:"./assets/bread/GATTU.jpeg"},{title:"Preeti Biscottis – Classic",desc:"100% eggless handmade biscuits in vibrant orange packaging.",type:"rusk",img:"./assets/rusk/preeti_biscottis_orange.jpg"},{title:"Preeti Bread Rusk Toast",desc:"Crispy double-baked bread rusk toast — 0% artificial preservatives.",type:"rusk",img:"./assets/rusk/preeti_rusk_toast.jpg"},{title:"Keshav Bread Suji Toast",desc:"Tasty and crunchy bread suji toast made with the finest semolina.",type:"rusk",img:"./assets/rusk/keshav_suji_toast.jpg"}].map(t=>`
            <div class="gallery-item" data-type="${t.type}">
              <img src="${t.img}" alt="${t.title}" data-title="${t.title}" data-desc="${t.desc}">
              <div class="gallery-overlay">
                <h3>${t.title}</h3>
                <p>${t.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function A(){return`
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
                <p>${l.address}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="phone"></i></div>
              <div class="contact-info-text">
                <h3>Phone Contacts</h3>
                <p><a href="tel:${l.phone}" style="color: var(--gmi-red); font-weight: 700;">${l.phone}</a></p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="mail"></i></div>
              <div class="contact-info-text">
                <h3>Corporate Email</h3>
                <p><a href="mailto:${l.email}" style="color: var(--preeti-blue); font-weight: 700;">${l.email}</a></p>
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
  `}function L(e){typeof lucide<"u"?lucide.createIcons():setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},100),e==="/"||e===""?R():e==="/gallery"?(T(),C()):e==="/distributors"?j():e==="/contact"&&G()}function R(){const e=document.querySelectorAll(".hero-slide"),t=document.querySelectorAll(".carousel-dot");if(e.length===0)return;let i=0,s;function a(d){e.forEach(c=>c.classList.remove("active")),t.forEach(c=>c.classList.remove("active")),e[d].classList.add("active"),t[d].classList.add("active"),i=d}function r(){a((i+1)%e.length)}function o(){s=setInterval(r,3500)}function n(){clearInterval(s),o()}t.forEach(d=>{d.addEventListener("click",()=>{a(parseInt(d.getAttribute("data-slide"))),n()})}),o()}function T(){const e=document.querySelectorAll(".gallery-tab"),t=document.querySelectorAll(".gallery-item");e.forEach(i=>{i.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),i.classList.add("active");const s=i.getAttribute("data-filter");t.forEach(a=>{const r=a.getAttribute("data-type");s==="all"||r===s?a.style.display="block":a.style.display="none"})})})}function C(){const e=document.getElementById("lightbox"),t=document.getElementById("lightbox-img"),i=document.getElementById("lightbox-title"),s=document.getElementById("lightbox-desc"),a=document.getElementById("lightbox-close");document.querySelectorAll(".gallery-item").forEach(o=>{o.addEventListener("click",()=>{const n=o.querySelector("img");n&&(t.src=n.src,i&&(i.textContent=n.getAttribute("data-title")||""),s&&(s.textContent=n.getAttribute("data-desc")||""),e.classList.add("active"))})}),a&&e&&(a.addEventListener("click",()=>{e.classList.remove("active")}),e.addEventListener("click",o=>{o.target===e&&e.classList.remove("active")}))}function v(e,t){const i=e.replace(/[^0-9]/g,"");i.startsWith("91")||""+i;const s=`https://wa.me/919758805800?text=${encodeURIComponent(t)}`;window.open(s,"_blank")}function j(){const e=document.getElementById("distributor-form"),t=document.getElementById("form-card-container");e&&t&&e.addEventListener("submit",i=>{i.preventDefault();const s=document.getElementById("dist-name").value,a=document.getElementById("dist-phone").value,r=document.getElementById("dist-email").value||"N/A",o=document.getElementById("dist-city").value,n=document.getElementById("dist-experience").value,d=document.getElementById("dist-message").value,c=`Hello Bhagyashree Food Products Team, 

I want to apply to become a distributor.

*Details:*
• *Name:* ${s}
• *Phone:* ${a}
• *Email:* ${r}
• *City:* ${o}
• *Experience:* ${n}
• *Warehouse & Infrastructure:* ${d}`;v(a,c),t.innerHTML=`
        <div class="form-success-overlay">
          <div class="success-icon">
            <i data-lucide="check" style="width: 32px; height: 32px;"></i>
          </div>
          <h3>Application Submitted!</h3>
          <p>Thank you for applying. A WhatsApp message has been generated with your details. Our dispatch and partnership director will call you shortly.</p>
          <a href="#/" class="btn btn-secondary">Return to Home</a>
        </div>
      `,lucide.createIcons()})}function G(){const e=document.getElementById("contact-form"),t=document.getElementById("contact-form-container");e&&t&&e.addEventListener("submit",i=>{i.preventDefault();const s=document.getElementById("contact-name").value,a=document.getElementById("contact-phone").value,r=document.getElementById("contact-subject").value,o=document.getElementById("contact-message").value,n=`Hello Bhagyashree Food Products,

I have a general business inquiry.

*Details:*
• *Name:* ${s}
• *Phone:* ${a}
• *Inquiry:* ${r}
• *Message:* ${o}`;v(a,n),t.innerHTML=`
        <div class="form-success-overlay">
          <div class="success-icon">
            <i data-lucide="check" style="width: 32px; height: 32px;"></i>
          </div>
          <h3>Message Sent!</h3>
          <p>Your message has been packed and directed to our WhatsApp channel. Our support representative will connect with you shortly.</p>
          <a href="#/" class="btn btn-secondary">Return to Home</a>
        </div>
      `,lucide.createIcons()})}
