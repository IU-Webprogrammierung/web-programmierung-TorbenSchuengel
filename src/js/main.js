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

    let scrollToTopBtn = document.getElementById("scroll-top-btn");
    let rootElement = document.documentElement;

    scrollToTopBtn.addEventListener("click", scrollToTop);
    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function handleScroll() {
        // Do something on scroll
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal) > 0.4) {
            // Show button
            scrollToTopBtn.classList.add("show-btn");
        } else {
            // Hide button
            scrollToTopBtn.classList.remove("show-btn");
        }
    }

    document.addEventListener("scroll", handleScroll);
});
