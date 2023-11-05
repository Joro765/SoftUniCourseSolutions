const loginRegisterButtons = document.getElementById("guest");
const logoutBtnSection = document.getElementById("user");
const welcomeMsg = document.querySelector(".email span"); // welcome msg
const catchesRef = document.getElementById("catches");
catchesRef.innerHTML = ""; // initial empty section
const loadBtn = document.getElementsByClassName("load")[0];
const addCatchBtn = document.querySelector("#addForm button");
const addForm = document.getElementById("addForm");
addForm.addEventListener("submit", addCatch);

loadBtn.addEventListener("click", loadAll);


const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logoutFunc);

// След логин/регистър редиректвам към хоум и правя проверка в SessionStorage 
// ако има запис скривам бутоните за логин и регистър ако няма скривам logout бутон
if (sessionStorage.getItem("email")) {
    loginRegisterButtons.style.display = "none"
    welcomeMsg.textContent = sessionStorage.getItem("email");
    addCatchBtn.disabled = false;
} else {
    logoutBtn.style.display = "none";
    welcomeMsg.textContent = "guest";
    addCatchBtn.disabled = true;
}



// LOGOUT - трием всичко в SessionStorage и връщаме на хоум пейдж
async function logoutFunc() {

    let response = await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: { "x-authorization": sessionStorage.getItem("accessToken") }
    })
    let data = response.json()

    sessionStorage.clear();
    window.location.href = "./index.html";
}


// Зареждане на всички риби
async function loadAll() {
    let response = await fetch("http://localhost:3030/data/catches");
    let data = await response.json();
    catchesRef.innerHTML = ""
    data.forEach(e => {
        console.log(e._ownerId);
        const catches = generateCatches(e)
        catchesRef.appendChild(catches)
    });
}


// Създаване на нова риба като елемент
function generateCatches(e) {
    const div = document.createElement("div");
    div.classList.add("catch");

    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${e.angler}">
    <label>Weight</label>
    <input type="text" class="weight" value="${e.weight}">
    <label>Species</label>
    <input type="text" class="species" value="${e.species}">
    <label>Location</label>
    <input type="text" class="location" value="${e.location}">
    <label>Bait</label>
    <input type="text" class="bait" value="${e.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${e.captureTime}">
    <button class="update" data-id="${e._id}" disabled>Update</button>
    <button class="delete" data-id="${e._id}" disabled>Delete</button>`

    // Ако текущият юзер е собсветник на поста да му се отключат бутоните
    if (e._ownerId === sessionStorage.getItem("userID")) {
        const btns = div.querySelectorAll("button");
        Array.from(btns).forEach(x => {
            x.disabled = false
            if (x.classList.contains("delete")) {
                x.addEventListener("click", onDelete);
            }
            if (x.classList.contains("update")) {
                x.addEventListener("click", onUpdate);
            }
        })
    }

    return div;
}



// Добавяне на нова риба в базата
async function addCatch(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let angler = formData.get("angler");
    let weight = formData.get("weight");
    let species = formData.get("species");
    let location = formData.get("location");
    let bait = formData.get("bait");
    let captureTime = formData.get("captureTime");

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error("Missing params!")
    }

    const data = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-authorization": sessionStorage.getItem("accessToken")
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        })
    }

    // Добавяне, ресетване на форма и презареждане
    let response = await fetch("http://localhost:3030/data/catches", data)
    let result = await response.json();
    e.target.reset(); // reset form data fields
    loadAll()

}


// Триене на риба от базата
async function onDelete(e) {
    let id = e.target.dataset.id;

    let response = await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "x-authorization": sessionStorage.getItem("accessToken")
        }
    })
    let data = await response.json()
    loadAll()
}


// Ъпдейтване на риба от базата
async function onUpdate(e) {

}
