// NEXORA — Interações da página inicial

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  const sections = document.querySelectorAll("main section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => observer.observe(section));
});
