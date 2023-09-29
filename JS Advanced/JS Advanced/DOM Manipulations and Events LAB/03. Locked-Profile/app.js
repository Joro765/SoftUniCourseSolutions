function lockedProfile() {
    let profiles = Array.from(document.querySelectorAll(".profile"))
    let state = "";

    for (const profile of profiles) {
        let showBtn = profile.querySelector("button");
        showBtn.addEventListener("click", showInfo);
        let checkBoxLocked = profile.querySelectorAll(".profile input[type=radio]")[0];
        let checkBoxUnlocked = profile.querySelectorAll(".profile input[type=radio]")[1];
        checkBoxLocked.addEventListener("click", locked);
        checkBoxUnlocked.addEventListener("click", unlocked);

    }

    function showInfo(e) {
        let hiddenInfo = e.currentTarget.previousElementSibling;


        if (e.currentTarget.textContent === "Show more") {
            hiddenInfo.style.display = "block"
            e.currentTarget.textContent = "Hide it"
        } else {
            hiddenInfo.style.display = "";
            e.currentTarget.textContent = "Show more"
        }
    }



    function locked(e) {
        let btn = e.currentTarget.parentElement.querySelector("button")
        btn.removeEventListener("click", showInfo)
    }

    function unlocked(e) {
        let btn = e.currentTarget.parentElement.querySelector("button")
        btn.addEventListener("click", showInfo)
    }
}