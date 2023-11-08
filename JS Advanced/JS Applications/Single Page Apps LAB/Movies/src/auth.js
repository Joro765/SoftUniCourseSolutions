const guestOptions = document.getElementsByClassName("nav-item guest");
const userOptions = document.getElementsByClassName("nav-item user");

const welcomeMSG = document.getElementById("welcome-msg");


export function authUpdate() {
    if (sessionStorage.getItem("accessToken")) {
        welcomeMSG.textContent = `Welcome, ${sessionStorage.getItem("email")}`
        for (let option of guestOptions) {
            option.style.display = "none";
        }
    } else {
        for (let option of userOptions) {
            option.style.display = "none";
        }
    }
}