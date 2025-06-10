// ******************* Slider hero *******************
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}

setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}, 5000);



// ******************* Slider About *******************

let gSlides = document.querySelectorAll('.g-slide');
let gIndex = 0;

setInterval(() => {
    gSlides[gIndex].classList.remove('active');
    gIndex = (gIndex + 1) % gSlides.length;
    gSlides[gIndex].classList.add('active');
}, 3000); // تغيير كل 4 ثواني







// ******************* Nav Taps *******************

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // شيل active من كل الأزرار
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

        // فعّل الزر اللي تم الضغط عليه
        btn.classList.add('active');

        // أخفي كل المحتويات
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // أظهر المحتوى المرتبط بزر التبويب
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});









// ******************* slide partners *******************

const swiper = new Swiper(".partnersSwiper", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
    },
});
