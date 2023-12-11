const email = document.querySelector('#email')


const validateEmail = () => {
    if (email.value.lenght < 1) {
        email.style.borderColor = 'red';
    }
}


const submit = document.querySelector('button')

submit.addEventListener('click', () => {
    validateEmail();
})