async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    const mainSection = document.getElementById("main");

    let response = await fetch(url);
    let data = await response.json();

    for (const person of Object.entries(data)) {
        let username = person[1].username;
        let email = person[1].email;
        let age = person[1].age;


        mainSection.innerHTML += `<div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${username}" disabled readonly />
        <div class="user1Username" hidden = "true">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="${age}" disabled readonly />
        </div>
        
        <button>Show more</button>
    </div>`

    }

    let allProfileCards = Array.from(document.getElementsByClassName("profile"));

    for (const card of allProfileCards) {
        let btn = card.getElementsByTagName("button")[0];
        btn.addEventListener("click", showMore);

    }

    function showMore(e) {
        let radioBtn = e.target.parentElement.getElementsByTagName("input")[1];
        if (radioBtn.checked) {
            let toggle = e.target.parentElement.getElementsByClassName("user1Username")[0];
            toggle.hidden = false;
            e.target.textContent = "Hide it";
            e.target.removeEventListener("click", showMore)
            e.target.addEventListener("click", hideInfo);
        }
    }


    function hideInfo(e) {
        let radioBtn = e.target.parentElement.getElementsByTagName("input")[1];
        if (radioBtn.checked) {
            let toggle = e.target.parentElement.getElementsByClassName("user1Username")[0];
            toggle.hidden = true;
            e.target.textContent = "Show more";
            e.target.removeEventListener("click", hideInfo)
            e.target.addEventListener("click", showMore);
        }
    }




}