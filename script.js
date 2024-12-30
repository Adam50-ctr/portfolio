"use strict";

// Hamburger navbar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const bottomNavbar = document.querySelector(".bottom-navbar");
const heroSection = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Portfolio site
document
  .querySelectorAll(".portfolio__leftside ul li")
  .forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // Összes tartalom elrejtése
      document
        .querySelectorAll(".portfolio__rightside > div")
        .forEach((div) => div.classList.add("hidden"));

      // Aktív osztály eltávolítása az összes menüpontból
      document
        .querySelectorAll(".portfolio__leftside ul li")
        .forEach((li) => li.classList.remove("active"));

      // Megfelelő tartalom megjelenítése
      const targetClass = [
        "Leno__website",
        "lumina__website",
        "wedding__website",
        "timer__website",
      ][index];
      document.querySelector(`.${targetClass}`).classList.remove("hidden");

      // Aktív osztály hozzáadása a kiválasztott menüponthoz
      item.classList.add("active");
    });
  });

window.addEventListener("scroll", () => {
  const heroBottom = heroSection.getBoundingClientRect().bottom;
  if (heroBottom < 500) {
    bottomNavbar.classList.remove("hidden");
  } else {
    bottomNavbar.classList.add("hidden");
  }
});

// card animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card"); // Kiválasztjuk az összes kártyát

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"; // Az animáció indítása
          observer.unobserve(entry.target); // Töröljük a figyelést, ha már egyszer látható volt
        }
      });
    },
    {
      threshold: 0.3, // Akkor indul, ha a kártya legalább 10%-ban látható
    }
  );

  cards.forEach((card) => {
    card.style.animationPlayState = "paused"; // Az animáció alapértelmezett szüneteltetése
    observer.observe(card); // Figyeljük, mikor kerül a képernyőre
  });
});
