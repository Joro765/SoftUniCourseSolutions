function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/gm;
    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", onChange);

    function onChange() {
        if (!(emailInput.value).match(pattern)) {
            emailInput.className = "error"
        } else {
            emailInput.className = ""
        }
    }



}