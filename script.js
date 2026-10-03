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