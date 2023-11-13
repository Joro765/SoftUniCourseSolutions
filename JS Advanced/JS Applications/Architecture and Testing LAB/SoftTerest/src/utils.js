

export function updateAuth() {
    let user = localStorage.getItem("email");
    if (user) {
        document.querySelectorAll("nav li.user").forEach(element => element.style.display = "block");
        document.querySelectorAll("nav li.guest").forEach(element => element.style.display = "none");
    } else {
        document.querySelectorAll("nav li.user").forEach(element => element.style.display = "none");
        document.querySelectorAll("nav li.guest").forEach(element => element.style.display = "block");
    }
}