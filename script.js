const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      menuButton.textContent = "☰";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();


// ============================================================
// FORMULARIO DE CONTACTO (Formspree)
// ============================================================
const contactForm = document.querySelector(".contact-form");
const formSuccess = document.getElementById("formSuccess");

if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector(".form-submit");
    const originalText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        contactForm.hidden = true;
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
      alert("Something went wrong. Please try again or email me directly at marrerodayan82@gmail.com");
    }
  });
}

// ============================================================
// SISTEMA DE IDIOMAS (EN / ES)
// ============================================================

const translations = {
  en: {
    // NAV
    "nav.work": "Work",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.rates": "Rates",
    "nav.metrics": "Metrics",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Let's talk",

    // HERO
    "hero.eyebrow": "TECH • UGC • SHORT-FORM VIDEO",
    "hero.title1": "Making tech feel",
    "hero.title2": "useful, simple",
    "hero.title3": "and human.",
    "hero.intro": "I'm Dayan, a technology content creator and UGC creator focused on practical product demonstrations, honest-style reviews, and short videos that help people understand how products fit into real life.",
    "hero.cta1": "Explore my work",
    "hero.cta2": "Contact me",
    "hero.meta1": "Available for remote projects worldwide",
    "hero.meta2": "Content in English & Spanish",
    "hero.followers": "INSTAGRAM COMMUNITY",
    "hero.followersLabel": "followers",
    "hero.niche": "Tech made practical",
    "hero.nicheSub": "Gadgets · Tips · Product demos",

    // PROOF STRIP
    "proof.1": "PRODUCT DEMOS",
    "proof.2": "TECH REVIEWS",
    "proof.3": "SHORT-FORM VIDEO",
    "proof.4": "UGC STORYTELLING",
    "proof.5": "PRODUCT EDUCATION",

    // WORK
    "work.eyebrow": "SELECTED PROJECTS",
    "work.title1": "Content that shows",
    "work.title2": "the product in action.",
    "work.desc": "A selection of product-focused video concepts and creator work. Replace the sample cards with your final videos, photos, and live links.",

    // ABOUT
    "about.eyebrow": "THE CREATOR BEHIND THE CONTENT",
    "about.quote": "\"Good tech content doesn't just show what a product does. It shows why it matters.\"",
    "about.author": "Dayan Marrero · Tech & UGC Creator",
    "about.eyebrow2": "A LITTLE ABOUT ME",
    "about.title1": "Technology, without",
    "about.title2": "the unnecessary jargon.",
    "about.p1": "I create technology-focused content for people who want to get more out of their devices and discover useful products. My style combines clear explanations, practical demonstrations, and a creator-first approach designed for social platforms.",
    "about.p2": "From gadgets and connectivity products to everyday tech tips, I aim to make each video informative, relatable, and easy to watch.",
    "about.point1": "Clear communication",
    "about.point1sub": "Turning features into simple benefits.",
    "about.point2": "Product-first storytelling",
    "about.point2sub": "Showing how products work in real situations.",
    "about.point3": "Platform-native videos",
    "about.point3sub": "Vertical content designed for social feeds.",

    // STATS
    "stats.eyebrow": "CREATOR SNAPSHOT",
    "stats.title1": "A community built around",
    "stats.title2": "technology.",
    "stats.desc": "Use current, verifiable figures here. Update these numbers whenever your insights change.",
    "stats.followers": "INSTAGRAM FOLLOWERS",
    "stats.followersSub": "Technology-focused audience",
    "stats.format": "CONTENT FORMAT",
    "stats.formatValue": "Short-form",
    "stats.formatSub": "Reels and vertical video",
    "stats.niche": "CORE NICHE",
    "stats.nicheValue": "Technology",
    "stats.nicheSub": "Gadgets, tips, product demos",

    // SKILLS
    "skills.eyebrow": "WHAT I CAN CREATE",
    "skills.title1": "From product feature",
    "skills.title2": "to scroll-stopping video.",
    "skills.s1": "UGC video creation",
    "skills.s1desc": "Vertical, social-first videos that introduce a product and communicate its value.",
    "skills.s2": "Product demonstrations",
    "skills.s2desc": "Feature walkthroughs, practical use cases, and clear product explanations.",
    "skills.s3": "Reviews & tutorials",
    "skills.s3desc": "Informative product reviews and easy-to-follow technology tips.",
    "skills.s4": "Video storytelling",
    "skills.s4desc": "Hooks, concise scripts, and a clear message tailored to each platform.",

    // SERVICES
    "services.eyebrow": "WHAT I OFFER",
    "services.title1": "Services built for",
    "services.title2": "brands that need content.",
    "services.desc": "Pick a single deliverable or combine them into a custom package. Every project is tailored to your product, audience, and platform.",
    "services.ugc.title": "UGC Video",
    "services.ugc.desc": "Vertical, social-first videos that introduce your product and show how it fits into real life. Perfect for Reels, TikTok, and paid ads.",
    "services.ugc.li1": "1 video (15–60s)",
    "services.ugc.li2": "Script + hook",
    "services.ugc.li3": "Vertical 9:16",
    "services.ugc.li4": "1 round of revisions",
    "services.demo.title": "Product Demo",
    "services.demo.desc": "A clear, practical walkthrough of your product's features and how they work — ideal for tech, gadgets, and connectivity products.",
    "services.demo.li1": "Feature walkthrough",
    "services.demo.li2": "Real use cases",
    "services.demo.li3": "Short-form video",
    "services.demo.li4": "1 round of revisions",
    "services.review.title": "Review & Tutorial",
    "services.review.desc": "Honest-style reviews and easy-to-follow tutorials that help your audience understand the product and trust the brand.",
    "services.review.li1": "Review or how-to",
    "services.review.li2": "Voiceover or on-cam",
    "services.review.li3": "Vertical video",
    "services.review.li4": "1 round of revisions",
    "services.pack.title": "Content Package",
    "services.pack.desc": "Multiple videos delivered together for a full campaign — best value and consistency for your brand's social presence.",
    "services.pack.li1": "3–5 videos",
    "services.pack.li2": "Consistent style",
    "services.pack.li3": "Priority delivery",
    "services.pack.li4": "Revisions included",
    "services.note": "All services include usage rights for organic social. Paid ads & whitelisting available on request.",
    "services.cta": "Download Media Kit",

    // RATES
    "rates.eyebrow": "RATES & PRICING",
    "rates.title1": "Every project is",
    "rates.title2": "quoted individually.",
    "rates.desc": "Pricing depends on scope, deliverables, and usage. Request a custom quote for your project and I'll get back to you with a tailored proposal.",
    "rates.label": "Custom quote",
    "rates.cta": "Request a quote",
    "rates.note": "All prices are tailored to your project. Final quote includes scope, deliverables, timeline, and full usage rights.",
    "rates.badge": "BEST VALUE",

    // METRICS
    "metrics.eyebrow": "BEST PERFORMING VIDEOS",
    "metrics.title1": "Real results from",
    "metrics.title2": "real content.",
    "metrics.desc": "A snapshot of my top-performing videos on Instagram. Each card shows the actual metrics from the platform — views, reach, and engagement.",
    "metrics.btn": "View video",
    "metrics.tag": "TOP VIDEO",

    // TESTIMONIALS
    "testimonials.eyebrow": "WHAT PEOPLE SAY",
    "testimonials.title1": "Trusted by brands",
    "testimonials.title2": "and creators.",
    "testimonials.desc": "Real messages, real feedback, real results. Here's what brands and followers have said about my content.",
    "testimonials.proofHeading": "REAL COLLABORATION PROPOSALS",

    // FAQ
    "faq.eyebrow": "FREQUENTLY ASKED QUESTIONS",
    "faq.title1": "Everything you need",
    "faq.title2": "to know before we start.",
    "faq.desc": "Quick answers to the most common questions about working together.",

    // CONTACT
    "contact.eyebrow": "OPEN TO COLLABORATIONS",
    "contact.title1": "Have a product that",
    "contact.title2": "deserves to be seen?",
    "contact.desc": "Let's create useful, engaging content for your brand.",
    "contact.form.name": "Your name",
    "contact.form.namePh": "Jane Doe",
    "contact.form.email": "Your email",
    "contact.form.emailPh": "jane@brand.com",
    "contact.form.brand": "Brand / Company",
    "contact.form.brandPh": "Brand name",
    "contact.form.service": "Service interested in",
    "contact.form.servicePh": "Select a service",
    "contact.form.message": "Tell me about your project",
    "contact.form.messagePh": "What product are we talking about? What's the goal?",
    "contact.form.submit": "Send message",
    "contact.form.success": "Message sent!",
    "contact.form.successDesc": "Thanks for reaching out. I'll get back to you within 24–48 hours.",
    "contact.mediaKit": "Media Kit",

    // FOOTER
    "footer.tagline": "Technology Content Creator · UGC Creator",
    "footer.backTop": "Back to top",
    "footer.rights": "All rights reserved."
  },

  es: {
    // NAV
    "nav.work": "Trabajo",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.services": "Servicios",
    "nav.rates": "Tarifas",
    "nav.metrics": "Métricas",
    "nav.testimonials": "Testimonios",
    "nav.faq": "FAQ",
    "nav.contact": "Hablemos",

    // HERO
    "hero.eyebrow": "TECH • UGC • VIDEO CORTO",
    "hero.title1": "Haciendo que la tech se sienta",
    "hero.title2": "útil, simple",
    "hero.title3": "y humana.",
    "hero.intro": "Soy Dayan, creador de contenido tecnológico y UGC enfocado en demostraciones prácticas de productos, reseñas honestas y videos cortos que ayudan a las personas a entender cómo los productos encajan en la vida real.",
    "hero.cta1": "Explora mi trabajo",
    "hero.cta2": "Contáctame",
    "hero.meta1": "Disponible para proyectos remotos en todo el mundo",
    "hero.meta2": "Contenido en inglés y español",
    "hero.followers": "COMUNIDAD EN INSTAGRAM",
    "hero.followersLabel": "seguidores",
    "hero.niche": "Tech hecha práctica",
    "hero.nicheSub": "Gadgets · Tips · Demos de producto",

    // PROOF STRIP
    "proof.1": "DEMOS DE PRODUCTO",
    "proof.2": "RESEÑAS TECH",
    "proof.3": "VIDEO CORTO",
    "proof.4": "STORYTELLING UGC",
    "proof.5": "EDUCACIÓN DE PRODUCTO",

    // WORK
    "work.eyebrow": "PROYECTOS SELECCIONADOS",
    "work.title1": "Contenido que muestra",
    "work.title2": "el producto en acción.",
    "work.desc": "Una selección de conceptos de video enfocados en producto. Reemplaza las tarjetas de ejemplo con tus videos, fotos y links finales.",

    // ABOUT
    "about.eyebrow": "EL CREADOR DETRÁS DEL CONTENIDO",
    "about.quote": "\"El buen contenido tech no solo muestra qué hace un producto. Muestra por qué importa.\"",
    "about.author": "Dayan Marrero · Creador Tech y UGC",
    "about.eyebrow2": "UN POCO SOBRE MÍ",
    "about.title1": "Tecnología, sin",
    "about.title2": "la jerga innecesaria.",
    "about.p1": "Creo contenido enfocado en tecnología para personas que quieren sacarle más provecho a sus dispositivos y descubrir productos útiles. Mi estilo combina explicaciones claras, demostraciones prácticas y un enfoque creator-first diseñado para redes sociales.",
    "about.p2": "Desde gadgets y productos de conectividad hasta tips tech del día a día, busco que cada video sea informativo, cercano y fácil de ver.",
    "about.point1": "Comunicación clara",
    "about.point1sub": "Convirtiendo características en beneficios simples.",
    "about.point2": "Storytelling con el producto primero",
    "about.point2sub": "Mostrando cómo funcionan los productos en situaciones reales.",
    "about.point3": "Videos nativos para cada plataforma",
    "about.point3sub": "Contenido vertical diseñado para feeds sociales.",

    // STATS
    "stats.eyebrow": "RESUMEN DEL CREADOR",
    "stats.title1": "Una comunidad construida alrededor de la",
    "stats.title2": "tecnología.",
    "stats.desc": "Usa cifras actuales y verificables aquí. Actualiza estos números cuando cambien tus estadísticas.",
    "stats.followers": "SEGUIDORES EN INSTAGRAM",
    "stats.followersSub": "Audiencia enfocada en tecnología",
    "stats.format": "FORMATO DE CONTENIDO",
    "stats.formatValue": "Video corto",
    "stats.formatSub": "Reels y video vertical",
    "stats.niche": "NICHO PRINCIPAL",
    "stats.nicheValue": "Tecnología",
    "stats.nicheSub": "Gadgets, tips, demos de producto",

    // SKILLS
    "skills.eyebrow": "QUÉ PUEDO CREAR",
    "skills.title1": "De la característica del producto",
    "skills.title2": "al video que detiene el scroll.",
    "skills.s1": "Creación de video UGC",
    "skills.s1desc": "Videos verticales, social-first, que presentan un producto y comunican su valor.",
    "skills.s2": "Demostraciones de producto",
    "skills.s2desc": "Recorridos por las funciones, casos de uso reales y explicaciones claras.",
    "skills.s3": "Reseñas y tutoriales",
    "skills.s3desc": "Reseñas informativas y tips tech fáciles de seguir.",
    "skills.s4": "Storytelling en video",
    "skills.s4desc": "Hooks, guiones concisos y un mensaje claro adaptado a cada plataforma.",

    // SERVICES
    "services.eyebrow": "QUÉ OFREZCO",
    "services.title1": "Servicios hechos para",
    "services.title2": "marcas que necesitan contenido.",
    "services.desc": "Elige un servicio individual o combínalos en un paquete personalizado. Cada proyecto se adapta a tu producto, audiencia y plataforma.",
    "services.ugc.title": "Video UGC",
    "services.ugc.desc": "Videos verticales, social-first, que presentan tu producto y muestran cómo encaja en la vida real. Perfecto para Reels, TikTok y ads pagados.",
    "services.ugc.li1": "1 video (15–60s)",
    "services.ugc.li2": "Guion + hook",
    "services.ugc.li3": "Vertical 9:16",
    "services.ugc.li4": "1 ronda de revisiones",
    "services.demo.title": "Demo de Producto",
    "services.demo.desc": "Un recorrido claro y práctico por las funciones de tu producto y cómo funcionan — ideal para tech, gadgets y productos de conectividad.",
    "services.demo.li1": "Recorrido por funciones",
    "services.demo.li2": "Casos de uso reales",
    "services.demo.li3": "Video corto",
    "services.demo.li4": "1 ronda de revisiones",
    "services.review.title": "Reseña y Tutorial",
    "services.review.desc": "Reseñas honestas y tutoriales fáciles de seguir que ayudan a tu audiencia a entender el producto y confiar en la marca.",
    "services.review.li1": "Reseña o how-to",
    "services.review.li2": "Voz en off o en cámara",
    "services.review.li3": "Video vertical",
    "services.review.li4": "1 ronda de revisiones",
    "services.pack.title": "Paquete de Contenido",
    "services.pack.desc": "Varios videos entregados juntos para una campaña completa — la mejor relación calidad-precio y consistencia para la presencia social de tu marca.",
    "services.pack.li1": "3–5 videos",
    "services.pack.li2": "Estilo consistente",
    "services.pack.li3": "Entrega prioritaria",
    "services.pack.li4": "Revisiones incluidas",
    "services.note": "Todos los servicios incluyen derechos de uso para redes sociales orgánicas. Ads pagados y whitelisting disponibles bajo pedido.",
    "services.cta": "Descargar Media Kit",

    // RATES
    "rates.eyebrow": "TARIFAS Y PRECIOS",
    "rates.title1": "Cada proyecto se",
    "rates.title2": "cotiza individualmente.",
    "rates.desc": "El precio depende del alcance, entregables y uso. Solicita una cotización personalizada para tu proyecto y te responderé con una propuesta a medida.",
    "rates.label": "Cotización personalizada",
    "rates.cta": "Solicitar cotización",
    "rates.note": "Todos los precios se adaptan a tu proyecto. La cotización final incluye alcance, entregables, plazo y derechos de uso completos.",
    "rates.badge": "MEJOR VALOR",

    // METRICS
    "metrics.eyebrow": "VIDEOS CON MEJOR RENDIMIENTO",
    "metrics.title1": "Resultados reales de",
    "metrics.title2": "contenido real.",
    "metrics.desc": "Una muestra de mis videos con mejor rendimiento en Instagram. Cada tarjeta muestra las métricas reales de la plataforma — vistas, alcance e interacción.",
    "metrics.btn": "Ver video",
    "metrics.tag": "VIDEO TOP",

    // TESTIMONIALS
    "testimonials.eyebrow": "LO QUE DICEN",
    "testimonials.title1": "Confiado por marcas",
    "testimonials.title2": "y creadores.",
    "testimonials.desc": "Mensajes reales, feedback real, resultados reales. Esto es lo que han dicho marcas y seguidores sobre mi contenido.",
    "testimonials.proofHeading": "PROPUESTAS REALES DE COLABORACIÓN",

    // FAQ
    "faq.eyebrow": "PREGUNTAS FRECUENTES",
    "faq.title1": "Todo lo que necesitas",
    "faq.title2": "saber antes de empezar.",
    "faq.desc": "Respuestas rápidas a las preguntas más comunes sobre trabajar juntos.",

    // CONTACT
    "contact.eyebrow": "ABIERTO A COLABORACIONES",
    "contact.title1": "¿Tienes un producto que",
    "contact.title2": "merece ser visto?",
    "contact.desc": "Creemos contenido útil y atractivo para tu marca.",
    "contact.form.name": "Tu nombre",
    "contact.form.namePh": "Juan Pérez",
    "contact.form.email": "Tu email",
    "contact.form.emailPh": "juan@marca.com",
    "contact.form.brand": "Marca / Empresa",
    "contact.form.brandPh": "Nombre de la marca",
    "contact.form.service": "Servicio de interés",
    "contact.form.servicePh": "Selecciona un servicio",
    "contact.form.message": "Cuéntame sobre tu proyecto",
    "contact.form.messagePh": "¿De qué producto hablamos? ¿Cuál es el objetivo?",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.success": "¡Mensaje enviado!",
    "contact.form.successDesc": "Gracias por escribir. Te responderé en 24–48 horas.",
    "contact.mediaKit": "Media Kit",

    // FOOTER
    "footer.tagline": "Creador de Contenido Tech · Creador UGC",
    "footer.backTop": "Volver arriba",
    "footer.rights": "Todos los derechos reservados."
  }
};

// ============================================================
// LÓGICA DE CAMBIO DE IDIOMA
// ============================================================
function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Actualizar atributo lang del <html>
  document.documentElement.lang = lang === "es" ? "es" : "en";

  // Traducir todos los elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Traducir placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Actualizar botones activos
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Guardar preferencia
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  // Refrescar AOS
  if (window.AOS && typeof AOS.refresh === "function") {
    AOS.refresh();
  }
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  // Leer idioma guardado o usar inglés por defecto
  let savedLang = "en";
  try {
    savedLang = localStorage.getItem("lang") || "en";
  } catch (e) {}

  setLanguage(savedLang);

  // Listeners de los botones
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});

