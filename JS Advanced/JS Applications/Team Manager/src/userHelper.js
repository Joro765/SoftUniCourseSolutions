// Помощни функции за обработване на userData в sessionStorage

function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
}


function setUserData(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}


function getUserID() {
    const userData = getUserData();
    return userData._id;
}


function clearUserData() {
    sessionStorage.clear();
}


export const userHelper = {
    getUserData,
    setUserData,
    getUserID,
    clearUserData
}