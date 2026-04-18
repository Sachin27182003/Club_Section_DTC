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
