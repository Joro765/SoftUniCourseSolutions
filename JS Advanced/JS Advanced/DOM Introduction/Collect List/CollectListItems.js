function extractText() {
    let listItems = document.querySelectorAll("#items li");

    let textArea = document.querySelector("#result")


    for (const item of listItems) {
        textArea.value += item.textContent + "\n";
    }

}