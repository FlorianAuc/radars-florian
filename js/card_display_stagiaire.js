document.addEventListener("DOMContentLoaded", () => {
  const evaluationStagiaire = document.querySelectorAll(
    ".evaluation-stagiaire"
  );
  const nextLink = document.querySelector(".nextQ");
  const btnSubmit = document.querySelector(".submit");

  let currentQ = 0;
  nextLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentQ < evaluationStagiaire.length - 1) {
      evaluationStagiaire[currentQ].classList.add("hidden");
      currentQ++;
      evaluationStagiaire[currentQ].classList.remove("hidden");
      if (currentQ == evaluationStagiaire.length - 1) {
        nextLink.classList.add("hidden");
        btnSubmit.classList.remove("hidden");
      }
    }
  });
});
