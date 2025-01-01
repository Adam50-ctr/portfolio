document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");
  const step3NextButton = document.getElementById("step3-next");
  const step4NextButton = document.getElementById("step4-next");

  const step1Form = document.getElementById("step1-form");
  const step2Form = document.getElementById("step2-form");
  const step3Form = document.getElementById("step3-form");
  const step4Form = document.getElementById("step4-form");

  const step1Indicator = document.getElementById("step1");
  const step2Indicator = document.getElementById("step2");
  const step3Indicator = document.getElementById("step3");
  const step4Indicator = document.getElementById("step4");

  // Lépés 1 -> Lépés 2
  nextButton.addEventListener("click", () => {
    step1Form.style.display = "none";
    step2Form.style.display = "flex";

    step1Indicator.classList.remove("active");
    step2Indicator.classList.add("active");
  });

  // Lépés 2 -> Lépés 3
  submitButton.addEventListener("click", () => {
    step2Form.style.display = "none";
    step3Form.style.display = "flex";

    step2Indicator.classList.remove("active");
    step3Indicator.classList.add("active");
  });

  // Lépés 3 -> Lépés 4
  step3NextButton.addEventListener("click", () => {
    step3Form.style.display = "none";
    step4Form.style.display = "flex";

    step3Indicator.classList.remove("active");
    step4Indicator.classList.add("active");
  });

  // Step 4 - Befejezés (példa, ha szükséges feldolgozás)
  step4NextButton.addEventListener("click", () => {
    alert("Köszönjük! Az összes adatot elküldtük!");
  });
});

document.getElementById("step4-next").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;
  const projectDetails = document.getElementById("project").value;
  const budget = document.getElementById("budget").value;
  const timeline = document.getElementById("timeline").value;

  const selectedServices = Array.from(
    document.querySelectorAll('input[name="service"]:checked')
  ).map((checkbox) => checkbox.value);

  // Az adatok bekészítése JSON formátumban
  const data = {
    name,
    email,
    company,
    projectDetails,
    selectedServices,
    budget,
    timeline,
  };

  // Adatok küldése szerverre
  fetch("https://yourserver.com/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Siker:", result);
      alert("Az adatok sikeresen elküldve a szerverre!");
    })
    .catch((error) => {
      console.error("Hiba:", error);
      alert("Hiba történt az adatok elküldésekor.");
    });
});
