function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", gradientMove);
    gradient.addEventListener("mouseout", gradientOut);


    // Имаме параметър защото искаме да вземем допълнително инфо от браузера за това къде се намира мишката
    function gradientMove(event) {
        const gradientBoxWidth = event.target.clientWidth;
        const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById("result").textContent = percentage + "%";

    }

    // Зануляваме процентите ако мишката не е върху елемента
    function gradientOut() {
        document.getElementById("result").textContent = "";
    }



}