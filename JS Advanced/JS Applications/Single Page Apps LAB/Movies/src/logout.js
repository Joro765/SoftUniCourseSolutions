import { authUpdate } from "./auth.js";


export function logout() {
    alert("SUCCESSFUL LOGOUT")
    sessionStorage.clear();
    authUpdate();
}