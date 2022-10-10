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
// Tabs
const tabHeaders = document.querySelectorAll("[data-tab]");
const contentsTab = document.querySelectorAll("[data-tab-content]");
tabHeaders.forEach(function (item) {
  item.addEventListener("click", function () {
    const tabContent = document.querySelector("#" + this.dataset.tab);
    contentsTab.forEach(function (items) {
      items.classList.add("hidden-tab");
    });
    tabContent.classList.remove("hidden-tab");
  });
});
