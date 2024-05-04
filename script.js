document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu ul');
        
    menuToggle.addEventListener('click', () => {
    // Toggle class 'active' pada menu saat tombol hamburger diklik
    menu.classList.toggle('active');
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const kotaks = document.querySelectorAll('.kotak');

    function checkScroll() {
    kotaks.forEach(kotak => {
        if (isElementInViewport(kotak)) {
        kotak.classList.add('animated');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Panggil checkScroll saat halaman dimuat dan saat scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
