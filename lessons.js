// open/close block
const button = document.querySelector("#button");
const content = document.querySelector("#card");
button.addEventListener("click", function () {
  if (content.classList.toggle("card-hidden")) {
    button.textContent = "Open block";
  } else {
    button.textContent = "Close block";
  }
});
// accardeon
const headers = document.querySelectorAll("[data-name='accordeon-title']");
headers.forEach(function (items) {
  items.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("list-content");
  });
});
