let currentIndex = 0;
const texts = ["A Web Developer", "A Writer", "A Reader"];
const changingText = document.getElementById('changing-text');

setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    changingText.textContent = texts[currentIndex];
}, 1500); // Change text every 3000 milliseconds (3 seconds)