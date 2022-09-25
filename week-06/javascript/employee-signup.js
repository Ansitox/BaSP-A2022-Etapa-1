window.onload = function () {
    var firstName = document.getElementById('first-name');
    var firstNameErrorBox = document.getElementById('firstName-error');
    var lastName = document.getElementById('last-name');
    var lastNameErrorBox = document.getElementById('lastName-error');
    var dni = document.getElementById('dni');
    var dniErrorBox = document.getElementById('dni-error');
    /* var birthDate = document.getElementById('birth-date');
    var birthDateErrorBox = document.getElementById('birthDate-error'); */
    var phoneNumber = document.getElementById('phone');
    var phoneNumberErrorBox = document.getElementById('phone-error');
    /* var address = document.getElementById('address');
    var addressErrorBox = document.getElementById('address-error'); */
    var location = document.getElementById('location');
    var locationErrorBox = document.getElementById('location-error');
    var postalCode = document.getElementById('postal-code');
    var postalCodeErrorBox = document.getElementById('postalCode-error');
    var email = document.getElementById('email');
    var emailErrorBox = document.getElementById('email-error');
    var repeatEmail = document.getElementById('repeat-email');
    var repeatEmailErrorBox = document.getElementById('repeatEmail-error');
    var password = document.getElementById('password');
    var passwordErrorBox = document.getElementById('password-error');
    var repeatPassword = document.getElementById('repeat-password');
    var repeatPasswordErrorBox = document.getElementById('repeatPassword-error');

    var signupButton = document.getElementById('signup-btn');

    //FIRST NAME VALIDATION
    firstName.onblur = function validateFirstName() {
        var firstNameV = firstName.value;
        
        if (firstNameV.length == 0) {
            firstNameErrorBox.innerHTML = 'First name is required';
            return false;
        } 
        if (!firstNameV.match(/^[A-Za-zÁÉÍÓÚáéíóú]*$/)) {
            firstNameErrorBox.innerHTML = 'Must have only letters';
            return false;
        }
        if (!firstNameV.match(/^[A-ZÁÉÍÓÚ]/)) {
            firstNameErrorBox.innerHTML = 'Must start with a capital letter';
            return false;
        }
        if (firstNameV.length < 4) {
            firstNameErrorBox.innerHTML = 'Must have at least 4 characters'
            return false;
        }
        return true;
    }

    firstName.onfocus = function() {
        firstNameErrorBox.innerHTML = '';
    }

    //LAST NAME VALIDATION
    lastName.onblur = function validateLastName() {
        var lastNameV = lastName.value;
        
        if (lastNameV.length == 0) {
            lastNameErrorBox.innerHTML = 'Last name is required';
            return false;
        } 
        if (!lastNameV.match(/^[A-Za-zÁÉÍÓÚáéíóú]*$/)) {
            lastNameErrorBox.innerHTML = 'Must have only letters';
            return false;
        }
        if (!lastNameV.match(/^[A-ZÁÉÍÓÚ]/)) {
            lastNameErrorBox.innerHTML = 'Must start with a capital letter';
            return false;
        }
        if (lastNameV.length < 4) {
            lastNameErrorBox.innerHTML = 'Must have at least 4 characters'
            return false;
        }
        return true;
    }

    lastName.onfocus = function() {
        lastNameErrorBox.innerHTML = '';
    }

    //DNI VALIDATION
    dni.onblur = function validateDni() {
        var dniV = dni.value;
        
        if (dniV.length == 0) {
            dniErrorBox.innerHTML = 'DNI is required';
            return false;
        } 
        if (!dniV.match(/^[0-9]*$/)) {
            dniErrorBox.innerHTML = 'Must have only numbers';
            return false;
        }
        if (dniV.length < 8) {
            dniErrorBox.innerHTML = 'Must have at least 8 characters'
            return false;
        }
        return true;
    }

    dni.onfocus = function() {
        dniErrorBox.innerHTML = '';
    }

    /* //BIRTH DATE VALIDATION
    birthDate.onblur = function validateBirthDate() {
        var birthDateV = birthDate.value;
        
        if (birthDate.required) {
            birthDate.innerHTML = 'Birth date is required';
            return false;
        } 
        if (!dniV.match(/^[0-9]*$/)) {
            dniErrorBox.innerHTML = 'Must have only numbers';
            return false;
        }
        if (dniV.length < 8) {
            dniErrorBox.innerHTML = 'Must have at least 8 characters'
            return false;
        }
        return true;
    }

    birthDate.onfocus = function() {
        birthDateErrorBox.innerHTML = '';
    } */

    //PHONE NUMBER VALIDATION
    phoneNumber.onblur = function validatePhoneNumber() {
        var phoneNumberV = phoneNumber.value;
        
        if (phoneNumberV.length == 0) {
            phoneNumberErrorBox.innerHTML = 'Phone number is required';
            return false;
        } 
        if (!phoneNumberV.match(/^[0-9]*$/)) {
            phoneNumberErrorBox.innerHTML = 'Must have only numbers';
            return false;
        }
        if (phoneNumberV.length !== 10) {
            phoneNumberErrorBox.innerHTML = 'Must have 10 characters'
            return false;
        }
        return true;
    }

    phoneNumber.onfocus = function() {
        phoneNumberErrorBox.innerHTML = '';
    }

    //LOCATION VALIDATION
    location.onblur = function validateLocation() {
        var locationV = location.value;
        
        if (locationV.length == 0) {
            locationErrorBox.innerHTML = 'Location is required';
            return false;
        } 
        if (!locationV.match(/^[A-Za-zÁÉÍÓÚáéíóú]*$/)) {
            locationErrorBox.innerHTML = 'Must have only letters';
            return false;
        }
        if (location.length < 4) {
            locationErrorBox.innerHTML = 'Must have 10 characters'
            return false;
        }
        return true;
    }

    location.onfocus = function() {
        locationErrorBox.innerHTML = '';
    }

    //POSTAL CODE VALIDATION
    postalCode.onblur = function validateLocation() {
        var postalCodeV = postalCode.value;
        
        if (postalCodeV.length == 0) {
            postalCodeErrorBox.innerHTML = 'Postal code is required';
            return false;
        } 
        if (!postalCodeV.match(/^[0-9]*$/)) {
            postalCodeErrorBox.innerHTML = 'Must have only numbers';
            return false;
        }
        if (postalCodeV.length < 4) {
            postalCodeErrorBox.innerHTML = 'Must have between 4 and 5 characters';
            return false;
        } else if (postalCodeV.length > 5) {
            postalCodeErrorBox.innerHTML = 'Must have between 4 and 5 characters';
            return false;
        }
        return true;
    }

    postalCode.onfocus = function() {
        postalCodeErrorBox.innerHTML = '';
    }

    //EMAIL VALIDATION
    email.onblur = function validateEmail() {
        var emailV = email.value;
        
        if (emailV.length == 0) {
            emailErrorBox.innerHTML = 'Email is required';
            return false;
        } 
        if (!emailV.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailErrorBox.innerHTML = 'Invalid email format';
            return false;
        } 
        return true;
    }

    email.onfocus = function() {
        emailErrorBox.innerHTML = '';
    }

    //REPEAT EMAIL VALIDATION
    repeatEmail.onblur = function validateRepeatEmail() {
        var emailV = email.value;
        var repeatEmailV = repeatEmail.value;
        
        if (repeatEmailV.length == 0) {
            repeatEmailErrorBox.innerHTML = 'This field is required';
            return false;
        } 
        if (repeatEmailV !== emailV) {
            repeatEmailErrorBox.innerHTML = 'Unmatching email ';
            return false;
        } 
        return true;
    }

    repeatEmail.onfocus = function() {
        repeatEmailErrorBox.innerHTML = '';
    }

    //PASSWORD VALIDATION
    password.onblur = function validatePassword() {
        var passwordV = password.value;
        
        if (passwordV.length == 0) {
            passwordErrorBox.innerHTML = 'This field is required';
            return false;
        } 
        if (!passwordV.match(/^[A-Za-z0-9]+$/)) {
            passwordErrorBox.innerHTML = 'Must contain only numbers and letters';
            return false;
        } 
        if (passwordV.match(/^[A-Za-z]+$/)) {
            passwordErrorBox.innerHTML = 'Must have numbers';
            return false;
        } 
        if (passwordV.match(/^[0-9]+$/)) {
            passwordErrorBox.innerHTML = 'Must have letters';
            return false;
        }
        if (passwordV.length < 8) {
            passwordErrorBox.innerHTML = 'Must have at least 8 characters'
            return false;
        }
        return true;
    }

    password.onfocus = function() {
        passwordErrorBox.innerHTML = '';
    }

    //REPEAT PASSWORD VALIDATION
    repeatPassword.onblur = function validateRepeatPassword() {
        var passwordV = password.value;
        var repeatPasswordV = repeatPassword.value;
        
        if (repeatPasswordV.length == 0) {
            repeatPasswordErrorBox.innerHTML = 'This field is required';
            return false;
        } 
        if (repeatPasswordV !== passwordV) {
            repeatPasswordErrorBox.innerHTML = 'Unmatching email ';
            return false;
        } 
        return true;
    }

    repeatPassword.onfocus = function() {
        repeatPasswordErrorBox.innerHTML = '';
    }
}