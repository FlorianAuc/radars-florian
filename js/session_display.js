document.addEventListener("DOMContentLoaded", () => {
  const session = document.querySelector(".session-creation");
  const addSessionDisplay = document.querySelector(".add_session");
  const sessionDisplay = document.querySelector(".session");
  console.log(session);
  session.addEventListener("click", (e) => {
    e.preventDefault();
    session.classList.add("hidden");
    sessionDisplay.classList.add("hidden");
    addSessionDisplay.classList.remove("hidden");
  });
});
