/* @@@@ depoimentos sscripts @@@@@ depoimentos scripts @@@@@@@@@@@@ */

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.dep-slides .slide');
    const dots = document.querySelectorAll('.indicators .dot');
    let currentIndex = 0;
    const intervalTime = 7000; // 7 segundos
    let startX = 0;
    let endX = 0;

    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }

    function selectSlide(index) {
        clearInterval(autoSlideInterval);
        changeSlide(index);
        autoSlideInterval = setInterval(autoSlide, intervalTime);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => selectSlide(index));
    });

    // Eventos de touch para swipe
    const slideContainer = document.querySelector('.dep-slides');

    slideContainer.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    slideContainer.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    slideContainer.addEventListener('touchend', () => {
        const diffX = endX - startX;
        if (diffX > 50) {
            // Swipe para a direita (voltar ao slide anterior)
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            selectSlide(currentIndex);
        } else if (diffX < -50) {
            // Swipe para a esquerda (ir ao próximo slide)
            currentIndex = (currentIndex + 1) % slides.length;
            selectSlide(currentIndex);
        }
    });

    let autoSlideInterval = setInterval(autoSlide, intervalTime);
    changeSlide(0); // Garante que o primeiro slide seja exibido
});


/* ########## depoimentos scripts ##### DEPOIMENTOS END  ############# */