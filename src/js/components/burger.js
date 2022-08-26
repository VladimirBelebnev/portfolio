const burger = () => {
    const burger = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.mobile');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            burger.classList.remove('active');
            mobileMenu.classList.add('hidden');
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    burger();
});