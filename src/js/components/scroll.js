import { scrollIntoView } from "seamless-scroll-polyfill";

const easyScrolling = () => {
    const links = document.querySelectorAll('.link');

    links.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();

            const id = item.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section.classList.contains('about') || section.classList.contains('form')) {
                scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                });
            } else {
                scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    easyScrolling();
});