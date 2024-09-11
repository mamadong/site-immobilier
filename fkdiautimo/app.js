let currentSlideIndex = {
    'carouselAccueil': 0,
    'carouselTerrains': 0,
    'carouselMaisons': 0
};

function moveCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelector('.carousel-images');
    const totalSlides = images.querySelectorAll('img').length;

    currentSlideIndex[carouselId] = (currentSlideIndex[carouselId] + direction + totalSlides) % totalSlides;

    const offset = -currentSlideIndex[carouselId] * 100;
    images.style.transform = `translateX(${offset}%)`;
}

document.addEvent
