// Scroll to top effect
const backToBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToBtn.classList.add("active");
  } else {
    backToBtn.classList.remove("active");
  }
});

// Left and right slider in section topic

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");

const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);

let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

// Next slide

const slideNext = function () {
  const slideEnd = currentSlidePos > totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);

// Previous slide

const slidePrev = function () {
  if (currentSlidePos < 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
};

sliderPrevBtn.addEventListener("click", slidePrev);
