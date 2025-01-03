"use strict";

// Hamburger navbar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Bottom navbar megfigyelése
const bottomNavbar = document.querySelector(".bottom-navbar");
const heroSection = document.querySelector(".hero");

// Observer beállítása
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Ha a hero szekció már nem látható
      if (!entry.isIntersecting) {
        bottomNavbar.classList.remove("hidden"); // Navbar megjelenítése
      } else {
        bottomNavbar.classList.add("hidden"); // Navbar elrejtése
      }
    });
  },
  {
    threshold: 0.2, // Akkor aktiválódik, ha a hero szekció 10%-ban látható
  }
);

// Figyeljük a hero szekciót
if (heroSection) {
  heroObserver.observe(heroSection);
} else {
  console.error("Hero section not found!");
}

// Cool mouse animation
const svgContainer = document.getElementById("svgContainer");

class NewCircle {
  constructor(id, positionX, positionY, radius, fill) {
    this.id = id;
    this.positionX = positionX || 0;
    this.positionY = positionY || 0;
    this.radius = radius;
    this.fill = fill;
  }

  draw() {
    svgContainer.innerHTML += `<circle id="${this.id}" 
         cx="${this.positionX}" cy="${this.positionY}" r="${this.radius}" fill="${this.fill}" />`;
  }
}

function figureAssembly() {
  let x = 10,
    y = 7,
    r = 7;

  // Az első kör kék
  new NewCircle("mainCircle", x, y, r, "purple").draw();

  // A többi kör halványabb árnyalatokkal
}

figureAssembly();

window.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  // Az első kör követi az egeret
  gsap.to("#mainCircle", {
    duration: 0.3, // Lassan reagál
    attr: { cx: x, cy: y },
    ease: "power2.out", // Kisebb gyorsulás a szebb effekt miatt
  });
});

// Portfolio site
const portfolioItems = document.querySelectorAll(".portfolio__leftside ul li");
const portfolioSections = document.querySelectorAll(
  ".portfolio__rightside > div"
);

portfolioItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // Összes tartalom elrejtése
    portfolioSections.forEach((div) => div.classList.add("hidden"));

    // Aktív osztály eltávolítása az összes menüpontból
    portfolioItems.forEach((li) => li.classList.remove("active"));

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

// Card animation
const cards = document.querySelectorAll(".card"); // Kiválasztjuk az összes kártyát

const cardObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"; // Az animáció indítása
        observer.unobserve(entry.target); // Töröljük a figyelést, ha már egyszer látható volt
      }
    });
  },
  {
    threshold: 0.2, // Akkor indul, ha a kártya legalább 10%-ban látható
  }
);

cards.forEach((card) => {
  card.style.animationPlayState = "paused"; // Az animáció alapértelmezett szüneteltetése
  cardObserver.observe(card); // Figyeljük, mikor kerül a képernyőre
});

// Services section
const servicesSection = document.querySelector(".services");
let lastScrollTop = 0;

const servicesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const scrollDirection = window.scrollY > lastScrollTop ? "down" : "up";
      lastScrollTop = window.scrollY;

      // Ha elhagyod a szekciót lefelé
      if (!entry.isIntersecting && scrollDirection === "down") {
        servicesSection.classList.add("dark");
      }

      // Ha belépsz a szekcióba bármelyik irányból, világosodik
      if (entry.isIntersecting) {
        servicesSection.classList.remove("dark");
      }
    });
  },
  { threshold: 0.4 }
);

servicesObserver.observe(servicesSection);

// About section
const aboutSection = document.querySelector(".about");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("active"); // Aktiválás
      } else {
        aboutSection.classList.remove("active"); // Vissza az alapállapotba
      }
    });
  },
  {
    threshold: 0.4, // Az elem legalább 50%-a látható legyen
  }
);

aboutObserver.observe(aboutSection);
