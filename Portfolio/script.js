const toggle = document.getElementById('toggle');
const sidebar = document.querySelector('.navdroite');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});



let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 0) {
        scrollTop = 0;
    }

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.style.top = "-100px";
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});