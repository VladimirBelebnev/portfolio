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
    
    const servicesSlider = new Swiper('.services__slider', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        navigation: {
            nextEl: '.services__next',
            prevEl: '.services__prev',
        },
        pagination: {
            el: '.services__pagination',
            clickable: true,
        },
        breakpoints: {
            1681: {
                slidesPerView: 3,
                spaceBetween: 120,
            },
            1401: {
                slidesPerView: 3,
                spaceBetween: 80,
            },
            1171: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            993: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1,
            }
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    slider();
});