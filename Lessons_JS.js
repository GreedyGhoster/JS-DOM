// open/close block ------------
const button = document.querySelector("#button");
const content = document.querySelector("#card");
button.addEventListener("click", function () {
  if (content.classList.toggle("card-hidden")) {
    button.textContent = "Open block";
  } else {
    button.textContent = "Close block";
  }
});
// accardeon ------------
const headers = document.querySelectorAll("[data-name='accordeon-title']");
headers.forEach(function (items) {
  items.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("list-content");
  });
});
// Tabs ------------
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
// Modal window ------------
const buttonOpenModals = document.querySelectorAll("[data-modal-open]");
const buttonCloseModals = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal-window]");
// Открытие модалки
buttonOpenModals.forEach(function (opener) {
  opener.addEventListener("click", function () {
    const openModal = document.querySelector("#" + this.dataset.modalOpen);
    openModal.classList.remove("hidden-parentblock");
    // исключение при нажатии с целью закрыть окно
    openModal
      .querySelector(".modal-content")
      .addEventListener("click", function (stoper) {
        stoper.stopPropagation();
      });
  });
});
// Закрытие по нажатию
buttonCloseModals.forEach(function (closer) {
  closer.addEventListener("click", function () {
    const closeModal = this.closest("[data-modal-window]");
    closeModal.classList.add("hidden-parentblock");
  });
});
// Закрытие по фейду
allModals.forEach(function (fade) {
  fade.addEventListener("click", function () {
    this.classList.add("hidden-parentblock");
  });
});

// Only 1 Modal window ------------

// const buttonOpenModal = document.querySelector("[data-modal-open]");
// const ModalContent = document.querySelector("[data-modal-window]");
// const buttonCloseModal = document.querySelector("[data-modal-close]");
// buttonOpenModal.addEventListener("click", function () {
//   ModalContent.classList.remove("hidden-parentblock");
// });
// buttonCloseModal.addEventListener("click", function () {
//   ModalContent.classList.add("hidden-parentblock");
// });
// // Закрытие окна при нажатии вне контента
// ModalContent.addEventListener("click", function () {
//   ModalContent.classList.add("hidden-parentblock");
// });
// // исключение при нажатии с целью закрыть окно
// ModalContent.querySelector(".modal-content").addEventListener(
//   "click",
//   function (stoper) {
//     stoper.stopPropagation();
//   }
// );
