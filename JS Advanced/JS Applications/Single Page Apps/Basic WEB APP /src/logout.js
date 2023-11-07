import { authUpdate } from "./Auth.js";


export function logout() {
    alert("SUCCESSFUL LOGOUT")
    sessionStorage.clear();
    authUpdate();
}