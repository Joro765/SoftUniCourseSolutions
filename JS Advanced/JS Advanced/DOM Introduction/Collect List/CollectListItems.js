function extractText() {
    let listItems = document.getElementsByTagName("li");

    let textArea = document.getElementById("result")


    for (const item of listItems) {
        textArea.value += item.textContent + "\n";
    }

}