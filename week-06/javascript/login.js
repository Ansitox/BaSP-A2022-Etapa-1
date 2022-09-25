window.onload = function () {
    var loginEmail = document.getElementById('email');
    var emailErrorBox = document.getElementById('email-error');
    var loginPassword = document.getElementById('password');
    var passwordErrorBox = document.getElementById('password-error');
    var loginButton = document.getElementById('login-btn');
    
    // EMAIL VALIDATION
    loginEmail.onblur = function validateEmail() {
        var email = loginEmail.value;
        
        if (email.length == 0) {
            emailErrorBox.innerHTML = 'Email is required';
            return false;
        }
        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailErrorBox.innerHTML = 'Invalid email format';
            return false;
        } 
        return true;
    }
    loginEmail.onfocus = function() {
        emailErrorBox.innerHTML = '';
    }

    // PASSWORD VALIDATION
    loginPassword.onblur = function validatePassword() {
        var password = loginPassword.value;
        
        if (password.length == 0) {
            passwordErrorBox.innerHTML = 'Password is required';
            return false;
        }
        if (!password.match(/^[A-Za-z0-9]+$/)) {
            passwordErrorBox.innerHTML = 'Must contain only numbers and letters';
            return false;
        } 
        if (password.match(/^[A-Za-z]+$/)) {
            passwordErrorBox.innerHTML = 'Must have numbers';
            return false;
        } 
        if (password.match(/^[0-9]+$/)) {
            passwordErrorBox.innerHTML = 'Must have letters';
            return false;
        }
        if (password.length < 8) {
            passwordErrorBox.innerHTML = 'Must have at least 8 characters'
            return false;
        }
        return true;
    }
    loginPassword.onfocus = function() {
        passwordErrorBox.innerHTML = '';
    }

    loginButton.onclick = function(e) {
        e.preventDefault();
    } 
}
