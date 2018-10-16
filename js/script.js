let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let autoBtn = document.querySelector('.autoplay');
let currentImg = 0;
let animationPlayState = false;
let images = ['img/slide-1.jpg','img/slide-2.jpg','img/slide-3.jpg','img/slide-4.jpg'];
let totalImages = images.length;
let slidesWrapper = document.querySelector('.slider-wrapper');
let imageWidth = Number.parseInt(getComputedStyle(slidesWrapper.querySelector('img')).width);

// Функція анімації
function animate(elem, from, to) {
    // Змінна, яка зберігає напрямок анімації:
    // -1, якщо анімація справа наліво (наступна картинка)
    // 1, якщо анімація зліва направл (попередня картинка)
    let direction = from > to ? -1 : 1;
    // Поточний зсув
    let pos = 0;
    // На скільки загалом потрібно зсунути. Множимо на direction, щоб уникнути мінуса
    let endPoint = direction * (to - from);
    // Задаємо крок (скільки зсувів потрібно зробити). Для прикладу, 200
    let step = endPoint / 200;

    // Зсув на 1 кадр щомілісекунди
    let animationInterval = setInterval(function () {
        // Збільшуємо pos на крок анімації
        pos += step;
        // Якщо pos не дійшов до кіцевої точки - змінити left для елемента.
        // Знову таки, щоб left змінювався у правильному напрямку, множимо pos на direction.
        // Якщо pos дійшов до кіцевої точки - зупиняємо анімацію
        if(pos < endPoint){
            elem.style.left = from + direction * pos + 'px';
        } else {
            clearInterval(animationInterval);
        }
    }, 1);
}
function nextSlide() {
    let prev = currentImg;
    currentImg++;
    if(currentImg >= totalImages) {
        currentImg = 0;
    }
    let next = currentImg;
    animate(slidesWrapper, -prev*imageWidth, -next*imageWidth);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', function () {
    let prev = currentImg;
    currentImg--;
    if(currentImg < 0) {
        currentImg = totalImages - 1;
    }
    let next = currentImg;
    animate(slidesWrapper, -prev*imageWidth, -next*imageWidth);
});
let interval;
autoBtn.addEventListener('click', function () {
    let i = autoBtn.querySelector('i');
    i.classList.toggle('fa-play-circle');
    i.classList.toggle('fa-pause-circle');
    animationPlayState = !animationPlayState;

    if(animationPlayState) {
        interval = setInterval(function () {
            nextSlide();
        }, 2000);

    } else {
        clearInterval(interval);
    }
});