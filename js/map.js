function makeTimer() {

    var endTime = new Date("10 Octember 2023 1:00:00 GMT+02:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");

}

setInterval(function () { makeTimer(); }, 1000);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    speed: 3000,
    autoplay: {
        enabled: false,
        delay: 0.1,
    },
    breakpoints: {
        // when window width is >= 320px
        1025: {
            slidesPerView: 3,
            spaceBetween: 16,
            slideToClickedSlide: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
            slideToClickedSlide: true,
        },
    }

});

let swiper_container = document.querySelector(".swiper-wrapper");
swiper_container.onmouseenter = () => {
    swiper.autoplay.stop();
}
swiper_container.onmouseleave = () => {
    swiper.autoplay.start();
}


let register = document.querySelectorAll('.register__now');
let card_input = document.querySelector('.card-input');
let close_card_input = card_input.querySelector('.card-input__x');
let register_btn = card_input.querySelector('.netevia-section__button');
let card_input_next = document.querySelector('.card-input__next');
let close_card_input_next = card_input_next.querySelector('.card-input__x');

if (register.length > 0) {
    register.forEach(item => {
        item.onclick = () => {
            card_input.classList.add('card-input__active');
        }
    })

    close_card_input.onclick = () => {
        card_input.classList.remove('card-input__active');
    }

    register_btn.onclick = () => {
        card_input.classList.remove('card-input__active');
        card_input_next.classList.add('card-input__next__active');
    }

    close_card_input_next.onclick = () => {
        card_input_next.classList.remove('card-input__next__active');
    }
}


