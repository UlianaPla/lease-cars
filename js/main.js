const tabItems = document.querySelectorAll(".tabs__btn-item"),
  tabContents = document.querySelectorAll(".tabs__content-item");

tabItems.forEach(function (elem) {
  elem.addEventListener("click", open);
});

function open(event) {
  const targetBtn = event.currentTarget;
  const attribute = targetBtn.getAttribute("data-button");

  tabItems.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });

  targetBtn.classList.add("tabs__btn-item--active");

  tabContents.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");

    if (attribute == item.id) item.classList.add("tabs__content-item--active");
  });
}

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
