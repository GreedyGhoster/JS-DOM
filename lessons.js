const button = document.querySelector("#button");
const content = document.querySelector("#card");
button.addEventListener("click", function () {
  content.classList.toggle("card-hidden");
  if (content.classList.contains("card-hidden")) {
    button.textContent = "Open block";
  } else {
    button.textContent = "Close block";
  }
});
