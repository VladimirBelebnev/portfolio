const modals = () => {
    let btnPressed = false;
    let modalShow = true;

    const orderModal = document.querySelector('.modal-order'),
          btnsOrderModal = document.querySelectorAll('.modal-order__trigger'),
          closeOrderModal = orderModal.querySelector('.modal-order__close'),
          questionModal = document.querySelector('.modal-question'),
          closeQuestionModal = document.querySelector('.modal-question__close');

    const showModal = (selector) => {
        selector.classList.remove('hidden');
        selector.querySelector('.modal-order__content').classList.add('animate__animated', 'animate__fadeInDown');

        modalShow = false;
    };

    const hideModal = (selector) => {
        selector.classList.add('hidden');
        selector.querySelector('.modal-order__content').classList.remove('animate__animated', 'animate__fadeInDown');

        modalShow = false;
    };

    const openModal = (btns, modal) => {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                showModal(modal);

                btnPressed = true;
            });
        });
    };

    const resetForm = (selector) => {
        if (selector.querySelector('form')) {
            selector.querySelector('form').reset();
        }
    };

    const closeModal = (btn, modal) => {
        btn.addEventListener('click', () => {
            hideModal(modal);
            resetForm(modal);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                hideModal(modal);
                resetForm(modal);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' && modal) {
                hideModal(modal);
                resetForm(modal);
            }
        });
    };

    function showModalByTime() {
        setTimeout(() => {
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (!item.classList.contains('hidden')) {
                    modalShow = false;
                }
            });

            try {
                if (!btnPressed && modalShow) {
                    document.querySelector('.modal-question').classList.remove('hidden');
                    questionModal.querySelector('.modal-question__content').classList.add('animate__animated', 'animate__fadeInDown');
                }
            } catch (error) {
                console.log(error);
            }
        }, 60000);
    }

    showModalByTime();

    function showModalByScroll() {
        if (!btnPressed && modalShow && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
            try {
                document.querySelector('.modal-question').classList.remove('hidden');
                questionModal.querySelector('.modal-question__content').classList.add('animate__animated', 'animate__fadeInDown');
            } catch(error) {
                console.log(error);
            }

            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    openModal(btnsOrderModal, orderModal);
    closeModal(closeOrderModal, orderModal);

    try {
        window.addEventListener('scroll', showModalByScroll);
        closeModal(closeQuestionModal, questionModal);
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    try {
        modals();
    } catch (error) {
        console.log(err)
    }
});