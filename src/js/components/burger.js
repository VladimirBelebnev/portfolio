const burger = () => {
    const burger = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.mobile');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            burger.classList.remove('active');
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow');
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    burger();
});