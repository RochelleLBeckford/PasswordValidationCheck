const card = document.querySelector('.card');
const usernameInput = document.querySelector('.username input');
const passwordInput = document.querySelector('.password input');
const hideIcon = document.querySelector('.password span');
const singUpBtn = document.querySelector('.sign-up-btn');
const message = document.querySelector('.message');
const requirements = document.querySelector('.requirements');
const successMessage = document.querySelector('.success-message');
const requirementItems = document.querySelectorAll('.requirements li');

let errorFlg;

const validationRegexArr = [
    {i: 0, regex: /[A-Z]/ }, // ~ At least 1 uppercase character
    {i: 1, regex: /[a-z]/ }, // ~ At least 1 lowercase character
    {i: 2, regex: /[0-9]/ }, // ~ At least 1 number
    {i: 3, regex: /[^A-Za-z0-9]/ }, // ~ At least 1 special character
    {i: 4, regex: /.{8,}/ } // ~ At least 8 characters
]

// & Password Validation Check 
passwordInput.addEventListener('keyup', (e) => {
    // ~ Reset value
    passwordInput.style.border = 'none';
    errorFlg = 0;

    // ~ Check
    validationRegexArr.forEach( item => {
        const isValid = item.regex.test(e.target.value);
        const messageItem = requirementItems[item.i];

        if (isValid === true) {
            messageItem.classList.add('valid');
            messageItem.firstElementChild.innerText = 'done';
        } 
        else {
            messageItem.classList.remove('valid');
            messageItem.firstElementChild.innerText = 'fiber_manual_record';
            errorFlg = 1;
        }

    })
})

// & Hide or Show Password
hideIcon.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    hideIcon.innerText = passwordInput.type === 'password' ? 'visibility' : 'visibility off';
})

// & When focus password input 
passwordInput.addEventListener('focus', () => {
    requirements.classList.add('show');
    successMessage.classList.remove('show');
})

// & SignUp button click
singUpBtn.addEventListener('click', () => {
    if (errorFlg === 0) {
        requirements.classList.remove('show');
        successMessage.classList.add('show');
    }
    else {
        passwordInput.focus();
        passwordInput.style.border = '1px solid red';
    }
})
