function validate() {
    let validEmail = /[a-z]+@[a-z]+.[a-z]+/gm;
    let emailElement = document.getElementsByTagName("input")[0];


    emailElement.addEventListener("change", onChange);

    function onChange(e) {
        if (!(emailElement.value).match(validEmail)) {
            emailElement.className = "error";
        } else {
            emailElement.className = "";
        }
    }




}