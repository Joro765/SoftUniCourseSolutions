// Скриване на всички секции с клас view-section
function hideAll() {
    document.querySelectorAll(".view-section").forEach(view => view.style.display = "none");
}

// Показва дадена секция
export function showView(section) {
    hideAll();
    section.style.display = "block";
}

// Update nav
export function updateNav() {
    const user = sessionStorage.getItem("email");

    if (user) {
        document.querySelectorAll(".nav-link.user")[0].textContent = `Welcome, ${sessionStorage.getItem("email")}`;
        document.querySelectorAll(".guest").forEach(element => element.style.display = "none");
        document.querySelectorAll(".user").forEach(element => element.style.display = "inline");
    } else {
        document.querySelectorAll(".user").forEach(element => element.style.display = "none");
        document.querySelectorAll(".guest").forEach(element => element.style.display = "inline");
    }
}