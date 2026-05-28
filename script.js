const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function changeImage(newIndex) {
    images[currentIndex].classList.remove('active');
    currentIndex = newIndex;
    images[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
        nextIndex = 0;
    }
    changeImage(nextIndex);
});

prevBtn.addEventListener('click', () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = images.length - 1;
    }
    changeImage(prevIndex);
});