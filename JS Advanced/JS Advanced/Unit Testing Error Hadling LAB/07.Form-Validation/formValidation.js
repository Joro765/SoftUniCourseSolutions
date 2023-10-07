function validate() {
    // Element references and eventListeners
    const formRef = document.getElementById("registerForm");
    const checkButton = document.getElementById("company");
    const companyInfo = document.getElementById("companyInfo");
    const validDiv = document.getElementById("valid");
    checkButton.addEventListener("change", checkBtn);
    formRef.addEventListener("submit", submitForm);

    // REGEX
    const usernamePattern = /^[A-Za-z0-9]{3,20}$/gm;
    const passwordPattern = /^[A-Za-z0-9_]{5,15}$/gm;
    const emailPattern = /^[A-Za-z0-9]+[@][A-Za-z0-9]+[.][A-Za-z0-9]+$/gm;

    // CheckBox button toggle
    function checkBtn(e) {
        if (e.target.checked === false) {
            e.target.checked === true
        } else {
            e.target.checked === false
        }

        if (e.target.checked === true) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }
    }

    // SUBMIT FORM Function
    function submitForm(e) {
        e.preventDefault()
        const inputFields = e.target.getElementsByTagName("input") // Input fields - collection
        const usernameField = inputFields[0];
        const emailField = inputFields[1];
        const passwordField = inputFields[2];
        const confirmPasswordField = inputFields[3];
        //const isCompanyCheckButton = inputFields[4];
        const companyNumber = inputFields[5];

        let isValid = true;


        // Username validation
        if (!usernamePattern.test(usernameField.value)) {
            usernameField.style.borderColor = "red";
            isValid = false;
        } else {
            usernameField.style.borderColor = "none";
        }

        // Email validation
        if (!emailPattern.test(emailField.value)) {
            emailField.style.borderColor = "red";
            isValid = false;
        } else {
            emailField.style.borderColor = "none";
        }

        // Password validation
        if (!passwordPattern.test(passwordField.value)) {
            passwordField.style.borderColor = "red";
            isValid = false;
        } else {
            passwordField.style.borderColor = "none";
        }

        // Confirm Password validation
        if (confirmPasswordField.value !== passwordField.value) {
            passwordField.style.borderColor = "red";
            confirmPasswordField.style.borderColor = "red";
            isValid = false;
        } else {
            confirmPasswordField.style.borderColor = "none";
        }

        // CheckBox validation if checkbox is checked!
        if (checkButton.checked === true) {
            if (!(companyNumber.value >= 1000 && companyNumber.value <= 9999)) {
                companyNumber.style.borderColor = "red";
                isValid = false;
            } else {
                companyNumber.style.borderColor = "none";
            }
        }

        if (isValid === true) {
            validDiv.style.display = "block";
        }

        formRef.removeEventListener("submit", submitForm);

    }
}
