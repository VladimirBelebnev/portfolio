import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation ]);

const slider = () => {
    const worksSlider = new Swiper('.works__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        speed: 500,
        navigation: {
            nextEl: '.works__next',
            prevEl: '.works__prev',
        },
        pagination: {
            el: '.works__pagination',
            clickable: true,
        },
        breakpoints: {
            993: {
                slidesPerView: 3,
            },
            301: {
                slidesPerView: 1,
            }
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    slider();
});