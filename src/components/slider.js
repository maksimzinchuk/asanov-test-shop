export default function slider() {
  let position = 0;

  const slidesToScroll = 1;

  const container = document.querySelector(".slider");
  const track = document.querySelector(".slider__track");
  const item = document.querySelector(".item");
  const items = document.querySelectorAll(".item");
  const btnPrev = document.querySelector(".item__control_left");
  const btnNext = document.querySelector(".item__control_right");

  const itemsCount = items.length;
  const itemWidth = item.clientWidth + 10;

  const containerWidth = container.clientWidth;

  //вычисляем количество показываемых карточек в зависимости от размера контейнера
  const slidesToShow = Math.floor(containerWidth / (itemWidth - 10));

  const movePosition = slidesToScroll * itemWidth;

  console.log(itemWidth);
  function nextSlide() {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  }

  function prevSlide() {
    const itemsLeft = Math.abs(position) / itemWidth;
    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  }

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  btnNext.addEventListener("click", nextSlide);

  btnPrev.addEventListener("click", prevSlide);

  checkBtns();

  //настройка свайпов
  container.addEventListener("touchstart", handleTouchStart, false);
  container.addEventListener("touchmove", handleTouchMove, false);

  let xDown = null;

  function handleTouchStart() {
    xDown = event.touches[0].clientX;
  }

  function handleTouchMove() {
    if (!xDown) {
      return;
    }

    let xUp = event.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) > 0) {
      if (xDiff > 0) {
        //свайп влево
        nextSlide();
      } else {
        //свайп вправо
        prevSlide();
      }

      //сбросим значение
      xDown = null;
    }
  }
}
