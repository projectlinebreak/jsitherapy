// Intersection Observer configuration
const options = {
    threshold: 0.5, // Fire when at least 50% of the element is visible
};

// Intersection Observer callback function
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animation has been applied
        }
    });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Elements to animate
const animateElements = document.querySelectorAll(".animate-on-scroll");

// Observe each animate element
animateElements.forEach((element) => {
    observer.observe(element);
});
