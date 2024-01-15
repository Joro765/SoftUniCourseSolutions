
// Функция, която взима цялото инфо за юзера от sessionStorage и го парсва
const userData = {
    getUserData: () => JSON.parse(sessionStorage.getItem("userData")), // взима данните от sessionStorage
    setUserData: (data) => sessionStorage.setItem("userData", JSON.stringify(data)), // запазва данните в sessionStorage
    getUserID: () => JSON.parse(sessionStorage.getItem("userData"))._id,
    clearUserData: () => sessionStorage.clear()
}

// Updates nav depending on user/guest
export function updateNav() {
    const userNav = document.querySelector(".user");
    const guestNav = document.querySelector(".guest");

    const userInfo = userData.getUserData();
    if (userInfo) {
        userNav.style.display = "block";
        guestNav.style.display = "none";
    } else {
        guestNav.style.display = "block";
        userNav.style.display = "none";
    }
}


export { userData }

