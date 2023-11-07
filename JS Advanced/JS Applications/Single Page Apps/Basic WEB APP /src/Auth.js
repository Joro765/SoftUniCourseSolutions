const guestNavigation = document.querySelector("#guest");
const userNavigation = document.querySelector("#user");


export function authUpdate() {

    if (sessionStorage.getItem("accessToken")) {
        userNavigation.style.display = "inline";
        guestNavigation.style.display = "none";
    } else {
        guestNavigation.style.display = "inline";
        userNavigation.style.display = "none";
    }
}