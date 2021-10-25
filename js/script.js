"use strict";

const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
        nextEl: ".slider__button--next",
        prevEl: ".slider__button--prev",
    },
});
