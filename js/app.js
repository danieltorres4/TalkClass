document.addEventListener('DOMContentLoaded', function() {
    startApp();
});

function startApp() {
    scrollNav();
    fixedNav();
}

function scrollNav() {
    const enlace = document.querySelector('about-us');
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccionScroll = e.target.attributes.href.value
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({behavior: "smooth"});
    });
}

function fixedNav() {
    const bar = document.querySelector('.header');
    const video = document.querySelector('.video');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {

        if(video.getBoundingClientRect().bottom < 0) {
            bar.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            bar.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    })
}