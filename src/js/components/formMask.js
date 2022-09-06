const formMask = () => {
    const phoneMask = () => {
        let setCursorPosition = (position, element) => {
            element.focus();

            if (element.setSelectionRange) {
                element.setSelectionRange(position, position);
            } else if (element.createTextRange) {
                let range = element.createTextRange();

                range.collapse(true);
                range.moveEnd('character', position);
                range.moveStart('character', position);
                range.select();
            }
        };

        function createMask(event) {
            let matrix = '+7 (___) ___ __ __',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, a => {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }

            if (this.value.charAt(1) != '7') {
                this.value = '';
                this.blur();
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    };

    phoneMask();

    const textMask = () => {
        const textInputs = document.querySelectorAll('[name="text"]');

        textInputs.forEach(input => {
            input.addEventListener('keypress', event => {
                if (event.key.match(/[^а-яё]/ig)) {
                    event.preventDefault();
                }
                if (input.value.match(/[a-z]/ig)) {
                    input.value = '';
                }
            });
        });
    };

    textMask();
};

window.addEventListener('DOMContentLoaded', () => {
    formMask();
});