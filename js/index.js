const menu = document.querySelector('#ham');
const links = document.querySelector('.navbar-nav');

menu.addEventListener('click', () => {
menu.classList.toggle('change');
links.classList.toggle('links');
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

var swiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    loop: true,
    speed: 600,
    parallax: true,
    spaceBetween:30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    
});
