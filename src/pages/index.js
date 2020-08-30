import "./../pages/index.sass";
import slider from "./../components/slider.js";

const menuButton = document.querySelector(".header__menu-mobile");
const menu = document.querySelector(".sidebar");
const itemButton = document.querySelectorAll(".sidebar__button");

const hideButton = document.querySelector(".sidebar__button-mobile_more");

const hiddenMenu = document.querySelector(".sidebar__hidden");

const hideArrow = hideButton.querySelector(".sidebar__arrow-mobile");

const hideText = hideButton.querySelector(".sidebar__title_more");

const buyButton = document.querySelectorAll(".item__button");

const pageWidth = document.querySelector(".page");

const footerButton = document.querySelectorAll(".footer__button");
//включим слайдер
slider();

menuButton.addEventListener("click", () => {
  event.preventDefault();
  menuButton.classList.toggle("header__menu-mobile_opened");
  menu.classList.toggle("sidebar__visible");
});

itemButton.forEach((button) => {
  button.addEventListener("click", () => {
    const test = toggle.bind(button);
    test();
  });
});

function toggle() {
  if (pageWidth.clientWidth > 767) {
    return;
  }
  const leftToggle = this.closest(".sidebar__item").querySelector(
    ".sidebar__toggle_left"
  );
  const rightToggle = this.closest(".sidebar__item").querySelector(
    ".sidebar__toggle_right"
  );

  if (!this.closest(".sidebar__item").classList.contains("show")) {
    leftToggle.classList.add("sidebar__toggle_left_opened");
    rightToggle.classList.add("sidebar__toggle_right_closed");
  } else {
    leftToggle.classList.remove("sidebar__toggle_left_opened");
    rightToggle.classList.remove("sidebar__toggle_right_closed");
  }
}

function showMenu() {
  if (!hiddenMenu.classList.contains("sidebar__hidden_show")) {
    hideText.textContent = "Скрыть";
    hiddenMenu.classList.add("sidebar__hidden_show");
    hideArrow.classList.add("sidebar__arrow-mobile_up");
  } else {
    hideText.textContent = "Загрузить ещё";
    hiddenMenu.classList.remove("sidebar__hidden_show");
    hideArrow.classList.remove("sidebar__arrow-mobile_up");
  }
}

footerButton.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button
      .closest(".footer__column")
      .querySelector(".footer__column-links-mobile");
    const arrow = button.querySelector(".footer__arrow");

    if (!content.classList.contains("footer__column-links-mobile_show")) {
      content.classList.add("footer__column-links-mobile_show");
      arrow.classList.add("footer__arrow_up");
    } else {
      content.classList.remove("footer__column-links-mobile_show");
      arrow.classList.remove("footer__arrow_up");
    }
  });
});

buyButton.forEach((button) => {
  button.addEventListener("click", () => {
    const counter = button
      .closest(".item-buy-wrapper")
      .querySelector(".item__buy");
    const countNumber = counter.querySelector(".item__count");
    const countMinus = counter.querySelector(".item__button-minus");
    const countPlus = counter.querySelector(".item__button-plus");

    button.classList.add("item__button_hidden");

    counter.classList.add("item__buy_visible");

    if (counter.classList.contains("item__buy_visible")) {
      countMinus.addEventListener("click", () => {
        countNumber.textContent--;
        if (countNumber.textContent <= 0) {
          countNumber.textContent = 0;
        }
      });

      countPlus.addEventListener("click", () => {
        countNumber.textContent++;
      });
    }
  });
});

hideButton.addEventListener("click", showMenu);
