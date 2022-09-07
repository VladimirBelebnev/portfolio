function marquee(selector, speed, sign) {
    const parentSelector = document.querySelector(selector);
    const firstElement = parentSelector.children[0];
    let i = 0;

    setInterval(function () {
        firstElement.style.marginLeft = `${sign}${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i = i + speed;
    }, 0);
}

try {
    window.addEventListener('load', marquee('.marquee-left', 0.2, '-'));
    window.addEventListener('load', marquee('.marquee-right', 0.2, '+'));
} catch (error) {
    console.log(error);
}