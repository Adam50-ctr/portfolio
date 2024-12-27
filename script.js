"use strict";

// Hamburger navbar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

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
