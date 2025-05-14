let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
}

function startPresentation() {
    document.querySelector('#startButton').style.display = 'none';
    showSlide(0); // Start from the first slide

    // Optional: Auto-transition between slides every 5 seconds (for automated presentation)
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
