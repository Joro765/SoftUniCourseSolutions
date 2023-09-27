function addItem() {
    let inputText = document.getElementById("newItemText");
    let target = document.getElementById("items");
    if (inputText.value !== "") {
        let newElement = document.createElement("li");

        newElement.textContent = inputText.value;

        target.appendChild(newElement);
    }
    inputText.value = ""
}