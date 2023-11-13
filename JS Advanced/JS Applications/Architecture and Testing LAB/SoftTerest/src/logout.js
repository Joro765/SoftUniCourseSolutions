import { showHome } from "./home.js"


export async function logout() {
    let response = await fetch("http://localhost:3030/users/logout");
    let data = await response.json();
    localStorage.clear();
    showHome();
}