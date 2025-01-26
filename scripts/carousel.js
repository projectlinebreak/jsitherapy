function autoScroll() {
    const container = document.querySelector('.carousel-container');
    const images = document.querySelectorAll('.carousel-container img');
    const totalSlides = images.length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        container.style.transform = `translateX(-${currentIndex * 25}%)`; // 25% per slide
    }, 5000); // 5-second interval
}

window.onload = autoScroll;
