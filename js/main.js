const cardsSwiper = new Swiper(".js-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".js-arrow-next",
        prevEl: ".js-arrow-prev",
    },
});

const mediaQuery = window.matchMedia("(max-width: 430px)");

function handleMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        cardsSwiper.params.slidesPerView = 1;
        cardsSwiper.params.slidesOffsetBefore = 10;
        cardsSwiper.update();
    } else {
        cardsSwiper.params.slidesPerView = 2;
        cardsSwiper.update();
    }
}

handleMediaQuery(mediaQuery);

mediaQuery.addListener(handleMediaQuery);
