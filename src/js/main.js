document.addEventListener("DOMContentLoaded", () => {
    // Initial mobile nav state
    let toggle = document.querySelector('.menu-toggle');
    let nav = document.querySelector('.primary-nav');

    if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        nav.classList.add('nav-closed');
    }

    // Mobile nav toggle function
    toggle.addEventListener('click', function () {
        if (nav.classList.contains('nav-closed')) {
            nav.classList.remove('nav-closed');
            nav.classList.add('nav-open');
        } else if (nav.classList.contains('nav-open')) {
            nav.classList.remove('nav-open');
            nav.classList.add('nav-closed');
        }
    });
});