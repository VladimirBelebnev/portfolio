const burger = () => {
    const burger = document.querySelector('.burger'),
          mobileMenu = document.querySelector('.mobile'),
          mobileLink = document.querySelectorAll('.mobile__item')

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

    mobileLink.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow');
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    burger();
});