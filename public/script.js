const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
const cardWidth = 200 + 16; // Card width + gap (adjust based on CSS gap)

/* Event listeners for navigation */
prevBtn.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    sliderContainer.style.transform = `translateX(${-scrollAmount}px)`;
});

nextBtn.addEventListener('click', () => {
    scrollAmount += cardWidth;
    sliderContainer.style.transform = `translateX(${-scrollAmount}px)`;
});
