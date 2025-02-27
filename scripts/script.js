document.getElementById("form").addEventListener("submit", function(event) {

    // Validate Username
    const firstName = document.getElementById("firstName").value.trim();
    const firstNameError = document.getElementById("firstNameError");
    const firstNameRegex = /^[A-Z][a-z]*(?:[-'][A-Z][a-z]*)?$/;
    let correctFirstName = false;
    if (!firstNameRegex.test(firstName)) {
        firstNameError.style.display = "block";
        correctFirstName = false;
    }
    else {
        firstNameError.style.display = "none";
        correctFirstName = true;
    }

    // Validate Other names
    const otherNames = document.getElementById("otherNames").value.trim();
    const otherNamesError = document.getElementById("otherNamesError");
    const otherNamesRegex = /^([A-Z][a-z]*(?:[-'][A-Z][a-z]*)?)(?:\s+[A-Z][a-z]*(?:[-'][A-Z][a-z]*)?)?$/;
    let correctOtherNames = false;
    if (otherNames !== "" && !otherNamesRegex.test(otherNames)) {
        otherNamesError.style.display = "block";
        correctOtherNames = false;
    }
    else {
        otherNamesError.style.display = "none";
        correctOtherNames = true;
    }

    // Validate Surname
    const surname = document.getElementById("surname").value.trim();
    const surnameError = document.getElementById("surnameError");
    const surnameRegex = /^[A-Z][a-z]*(?:[-'][A-Z][a-z]*)?$/;
    let correctSurname = false;
    if (!surnameRegex.test(surname)) {
        surnameError.style.display = "block";
        correctSurname = false;
    }
    else {
        surnameError.style.display = "none";
        correctSurname = true;
    }

    // Validate Phone No.
    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\d{11}$/;
    let correctPhone = false;
    if (!phoneRegex.test(phone)) {
        phoneError.style.display = "block";
        correctPhone = false;
    }
    else {
        phoneError.style.display = "none";
        correctPhone = true;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@A-Z]+\.[^\s@A-Z]+$/;
    let correctEmail = false;
    if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        correctEmail = false;
    }
    else {
        emailError.style.display = "none";
        correctEmail = true;
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}[\]|\\:;"'<>,.?/]).{12,}$/;
    let correctPassword = false;
    if (!passwordRegex.test(password)) {
        passwordError.style.display = "block";
        correctPassword = false;
    }
    else {
        passwordError.style.display = "none";
        correctPassword = true;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    let correctConfirmPassword = false;
    if (password !== confirmPassword) {
        confirmPasswordError.style.display = "block";
        correctConfirmPassword = false;
    }
    else {
        confirmPasswordError.style.display = "none";
        correctConfirmPassword = true;
    }

    // Display Status
    if(!correctFirstName || !correctOtherNames || !correctSurname || !correctPhone || !correctPhone || !correctEmail || !correctPassword || !correctConfirmPassword) {
        event.preventDefault();
    }
    else {
        const successful = document.getElementById("successful");
        successful.style.display = "block";
    }
});