function toggle() {
    let btn = document.getElementsByClassName("button")[0]; // Слагаме [0] защото връща колекция и трябва да вземем бутонът от нея като масив е 
    btn.textContent = btn.textContent === "More" ? "Less" : "More"; // Ако е на More става на Less ако е на Less става на More -- toggle FUNCTIONALLITY

    let moreInfo = document.getElementById("extra")

    // В зависимост от стейта на бутона показвам или скривам текста
    if (btn.textContent === "Less") {
        moreInfo.style.display = "block"
    } else {
        moreInfo.style.display = "none"
    }
}