const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.classList.contains("contact-form")) {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const original = button.textContent;
    button.textContent = "Enviado ✅";
    button.disabled = true;

    setTimeout(() => {
      form.reset();
      button.textContent = original;
      button.disabled = false;
    }, 1600);
  }
});
