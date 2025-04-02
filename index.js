function validateForm() {

    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';

    let isValid = true;


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (name === '') {
        document.getElementById('name-error').innerText = 'Name is required';
        isValid = false;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('email-error').innerText = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address';
        isValid = false;
    }


    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (password === '') {
        document.getElementById('password-error').innerText = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('password-error').innerText = 'Password must be at least 6 characters long';
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('password-error').innerText = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        isValid = false;
    }

    return isValid;
}
