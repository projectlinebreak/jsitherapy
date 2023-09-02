function autoScroll() {
    const container = document.querySelector('.carousel-container');
    const images = document.querySelectorAll('.carousel-container img');
    const imageWidth = images[0].clientWidth;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }, 3000); // Change image every 3 seconds (adjust as needed)
}

window.onload = autoScroll;