let correctFirstName = false;
let correctOtherNames = false;
let correctSurname = false;
let correctPhone = false;
let correctEmail = false;
let correctPassword = false;
let correctConfirmPassword = false;

document.getElementById("form").addEventListener("submit", function(event) {

    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    const firstNameRegex = /^[A-Z][a-z]*(?:[-'][A-Z][a-z]*)?$/;
    if (!firstNameRegex.test(firstName.value)) {
        firstNameError.style.display = "block";
        correctFirstName = false;
    }
    else {
        firstNameError.style.display = "none";
        correctFirstName = true;
    }

    const otherNames = document.getElementById("otherNames");
    const otherNamesError = document.getElementById("otherNamesError");
    const otherNamesRegex = /^([A-Z][a-z]*(?:[-'][A-Z][a-z]*)?)(?:\s+[A-Z][a-z]*(?:[-'][A-Z][a-z]*)?)?$/;
    if (!otherNamesRegex.test(otherNames.value)) {
        otherNamesError.style.display = "block";
        correctOtherNames = false;
    }
    else {
        otherNamesError.style.display = "none";
        correctOtherNames = true;
    }

    const surname = document.getElementById("surname");
    const surnameError = document.getElementById("surnameError");
    const surnameRegex = /^[A-Z][a-z]*(?:[-'][A-Z][a-z]*)?$/;
    if (!surnameRegex.test(surname.value)) {
        surnameError.style.display = "block";
        correctSurname = false;
    }
    else {
        surnameError.style.display = "none";
        correctSurname = true;
    }

    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.style.display = "block";
        correctPhone = false;
    }
    else {
        phoneError.style.display = "none";
        correctPhone = true;
    }

    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@A-Z]+\.[^\s@A-Z]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display = "block";
        correctEmail = false;
    }
    else {
        emailError.style.display = "none";
        correctEmail = true;
    }

    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}[\]|\\:;"'<>,.?/]).{12,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.style.display = "block";
        correctPassword = false;
    }
    else {
        passwordError.style.display = "none";
        correctPassword = true;
    }

    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password.value != confirmPassword.value) {
        confirmPasswordError.style.display = "block";
        correctConfirmPassword = false;
    }
    else {
        confirmPasswordError.style.display = "none";
        correctConfirmPassword = true;
    }

    if(!correctFirstName || !correctOtherNames || !correctSurname || !correctPhone || !correctPhone || !correctEmail || !correctPassword || !correctConfirmPassword) {
        event.preventDefault();
    }
});