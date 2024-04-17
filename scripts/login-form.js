const form = document.getElementById('login-form');
const inputs = form.querySelectorAll('input');
const button = form.querySelector('button[type="submit"]');

function checkInputs() {
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
        }
    });
    return isValid;
}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (checkInputs()) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});