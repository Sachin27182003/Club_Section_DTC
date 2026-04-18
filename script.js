document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].style.display = "block";
    }

    showSlides();
    setInterval(showSlides, 3000);
});

// Past Events Scroll
const container = document.getElementById("scrollContainer");

const scrollAmount = 280; // adjust if needed

document.querySelector(".left-event-past").addEventListener("click", () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

document.querySelector(".right-event-past").addEventListener("click", () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});

// --- SCROLLREVEAL CONFIGURATION ---

// 1. Initialize a global ScrollReveal instance with default settings
const sr = ScrollReveal({
    distance: '60px',      // How far the element moves during animation
    duration: 2000,        // How long the animation lasts (in ms)
    delay: 200,            // How long to wait before starting
    reset: true            // True: repeats animation when scrolling back up. False: animates only once.
});

// 2. Target elements and apply specific animations

// Hero Section
sr.reveal('.hero-left', { origin: 'left', delay: 100 });
sr.reveal('.hero-right', { origin: 'right', delay: 100 });

// Section Titles
sr.reveal('.clubs-society h1, .main-title-event', { origin: 'top', delay: 100 });
sr.reveal('.clubs h2, .sub-title-event, .title-event-past', { origin: 'left', delay: 200 });

// Cards (Using 'interval' creates a staggered domino effect)
sr.reveal('.card', { origin: 'bottom', interval: 100 });
sr.reveal('.card-event', { origin: 'bottom', interval: 200 });

// Footer
sr.reveal('.left-club-footer', { origin: 'left' });
sr.reveal('.center-club-footer', { origin: 'bottom', delay: 200 });
sr.reveal('.right-club-footer', { origin: 'right', delay: 400 });