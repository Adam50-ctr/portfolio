document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next-button");
  const step2NextButton = document.getElementById("step2-next");
  const step3NextButton = document.getElementById("step3-next");
  const submitButton = document.getElementById("submit-button");

  const step1Form = document.getElementById("step1");
  const step2Form = document.getElementById("step2");
  const step3Form = document.getElementById("step3");
  const step4Form = document.getElementById("step4");

  const step1Indicator = document.getElementById("step1In");
  const step2Indicator = document.getElementById("step2In");
  const step3Indicator = document.getElementById("step3In");
  const step4Indicator = document.getElementById("step4In");

  // Lépés 1 -> Lépés 2
  nextButton.addEventListener("click", () => {
    step1Form.style.display = "none";
    step2Form.style.display = "flex";

    step1Indicator.classList.remove("active");
    step2Indicator.classList.add("active");
  });

  // Lépés 2 -> Lépés 3
  step2NextButton.addEventListener("click", () => {
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
  submitButton.addEventListener("click", () => {
    alert("Köszönjük! Az összes adatot elküldtük!");
  });
});
