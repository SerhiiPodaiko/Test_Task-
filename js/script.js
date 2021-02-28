"use strict";

(function () {
    const burger = document.querySelector('.burger-menu');
    const burgerList = document.getElementById('burger-list');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        burgerList.classList.toggle('burger-list_active');
    });
}());

//Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 25,
    responsiveClass: true,
    nav: true,
    responsive:{
        0: {
            items:1,
            nav:true
        },
        600:{
            items: 4,
            nav: true
        },
        1000:{
            items: 3,
            nav: true,
            loop: false
        }
    }
});

//Progress bar
$(window).scroll(function () {
    let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
    $("#progress-bar").width(ratio + '%');
});

//Btn to top
let btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {

    if (window.scrollY >= 700) {
       btnTop.classList.add('active');
    } else {
        btnTop.classList.remove('active');
    }
});

btnTop.addEventListener('click', () => {
    $("html,body").animate({ scrollTop:0 },900);
});



