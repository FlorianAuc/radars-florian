const urlToken =
  "https://cepegra-frontend.xyz/wf11-3/wp-json/jwt-auth/v1/token";
const urlApi = "https://cepegra-frontend.xyz/wf11-3/wp-json/wp/v2";
const $connectForm = document.querySelector(".form-connect");
console.log($connectForm);

$connectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData($connectForm);

  fetch(`${urlToken}`, {
    method: "POST",
    body: data,
  })
    .then((resp) => resp.json())
    .then((responseData) => {
      if (responseData.token) {
        sessionStorage.token = responseData.token;
        if (responseData.user_display_name == "florian") {
          window.location.href = "../pages/stagiaire.html";
        } else {
          window.location.href = "../pages/formateur.html";
        }

        console.log(responseData);
      } else {
        alert("error log/pass");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
