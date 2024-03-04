let currentIndex = 0;
const slides = document.querySelector(".slider");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  const percentage = -index * (100 / 3);
  slides.style.transform = `translateX(${percentage}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto loop to the first image when reaching the end
function autoLoop() {
  setInterval(() => {
    nextSlide();
  }, 100000);
}

// Start the auto loop
autoLoop();
