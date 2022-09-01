const tabs = () =>  {
    const tabBtns = document.querySelectorAll('.block__header');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(item => {
                if (item !== btn) {
                    item.parentNode.querySelector('.block__text').classList.add('tabs-hidden');
                    item.querySelector('.block__btn').classList.remove('active');
                } else {
                    if (!item.parentNode.querySelector('.block__text').classList.contains('tabs-hidden')) {
                        btn.parentNode.querySelector('.block__text').classList.add('tabs-hidden');
                        btn.querySelector('.block__btn').classList.remove('active');
                    } else {
                        btn.parentNode.querySelector('.block__text').classList.remove('tabs-hidden');
                        btn.querySelector('.block__btn').classList.add('active');
                    }
                }
            });
        });
    });
};

tabs();