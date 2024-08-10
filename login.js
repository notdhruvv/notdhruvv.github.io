const form = document.getElementById('login-form');

const passwordInput = form.querySelector('input[type="password"]');
const showPasswordCheckbox = document.querySelector('input[type="checkbox"]');

showPasswordCheckbox.addEventListener('change', function() {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    // Replace these with your actual database of usernames and passwords
    const usernames = ['Esha', 'esha2001@'];
    const passwords = ['Dhruvv', 'nunnumera@2001'];

    let isLoginSuccessful = false;

    for (let i = 0; i < usernames.length; i++) {
        if (username === usernames[i] && password === passwords[i]) {
            isLoginSuccessful = true;
            break;
        }
    }

    if (isLoginSuccessful) {
        // Successful login, redirect to the home page
        window.location.href = url(index.html);
    } else {
        // Invalid login, show alert
        alert('Wrong username or password.');
    }

    // Check if username starts with capital letter and is at least 4 characters long
    if (!/^[A-Z]+.{3,}$/.test(username)) {
        alert('Username must start with a capital letter and be at least 4 characters long.');
        return false;
    }

    // Check if password has at least 8 characters long and contains at least one special character from (@#$&)
    if (!/^.{8,}$/.test(password) || !/[@#$&]/.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one special character from (@#$&).');
        return false;
    }
});
