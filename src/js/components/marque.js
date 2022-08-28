const marque = () => {
    const wrapper = document.querySelector('.skills'),
          marqueeLeft = document.querySelector('.left-move'),
          marqueeRight = document.querySelector('.right-move'),
          wrapperWidth = wrapper.offsetWidth,
          marqueeRightWidth = marqueeRight.scrollWidth,
          marqueeLeftWidth = marqueeLeft.scrollWidth;

    function moveLeft() {
        let currentTX = getComputedStyle(marqueeLeftWidth).transform.split(',');
        if (currentTX[4] === undefined) {
            currentTX = -1;
        } else {
            currentTX = parseFloat(currentTX[4]) - 1;
        }

        if (-currentTX >= marqueeLeftWidth) {
            marqueeLeft.style.transform = 'translateX(' + wrapperWidth + 'px)';
        } else {
            marqueeLeft.style.transform = 'translateX(' + currentTX + 'px)';
        }
    }

    function moveRight() {
        let currentTX = getComputedStyle(marqueeRightWidth).transform.split(',');
        if (currentTX[4] === undefined) {
            currentTX = 1;
        } else {
            currentTX = parseFloat(currentTX[4]) + 1;
        }

        if (-currentTX <= -marqueeRightWidth) {
            marqueeRight.style.transform = 'translateX(' + -wrapperWidth + 'px)';
        } else {
            marqueeRight.style.transform = 'translateX(' + currentTX + 'px)';
        }
    }

    setInterval(moveLeft, 40);
    setInterval(moveRight, 40);
};

window.addEventListener('DOMContentLoaded', () => {
    marque();
});