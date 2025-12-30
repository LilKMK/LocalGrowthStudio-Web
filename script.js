(function () {
  const removePreloader = () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      preloader.remove();
    }, 700);
  };

  // 1️⃣ Intento normal (cuando todo carga bien)
  window.addEventListener("load", removePreloader);

  // 2️⃣ Failsafe absoluto (aunque TODO falle)
  setTimeout(removePreloader, 2200);


})();

// Apple-style reveal (seguro)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, .service-card");

elements.forEach((el, i) => {
  el.classList.add("reveal");

  requestAnimationFrame(() => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 160);
  });
});

});
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelectorAll("[data-parallax]").forEach(el => {
    const speed = el.getAttribute("data-parallax");
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.querySelectorAll("a, button, .btn").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
});

const scrollObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section, .service-card").forEach(el => {
  el.classList.add("scroll-fade");
  scrollObserver.observe(el);
});

const transition = document.getElementById("page-transition");

document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", e => {
      e.preventDefault();
      transition.classList.add("active");

      setTimeout(() => {
        window.location = link.href;
      }, 600);
    });
  }
});


