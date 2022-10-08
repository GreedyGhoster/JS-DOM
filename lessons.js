const button = document.querySelector("#button");
const content = document.querySelector("#card");
button.addEventListener("click", function () {
  content.classList.toggle("card-hidden");
});
