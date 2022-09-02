const tabs = () =>  {
    const tabs = document.querySelectorAll('.quastion__block');

    tabs.forEach(tab => {
        const tabHeader = tab.querySelector('.block__header'),
              tabContent = tab.querySelector('.block__text'),
              tabBtn = tab.querySelector('.block__btn');

        tabHeader.addEventListener('click', () => {
            tab.style.maxHeight = '180px';

            tabs.forEach(item => {
                if (item !== tab) {
                    item.querySelector('.block__text').classList.add('tabs-hidden');
                    item.style.maxHeight = '180px';
                    item.querySelector('.block__btn').classList.remove('active');
                }
            });

            if (tabContent.classList.contains('tabs-hidden')) {
                tab.style.maxHeight = '700px';
                tabContent.classList.remove('tabs-hidden');
                tabBtn.classList.add('active');
            } else {
                tabContent.classList.add('tabs-hidden');
                tab.style.maxHeight = '180px';
                tabBtn.classList.remove('active');
            }
        });
    });
};

tabs();