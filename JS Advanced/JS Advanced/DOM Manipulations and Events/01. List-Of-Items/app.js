function addItem() {
    let inputText = document.getElementById("newItemText");
    let target = document.getElementById("items");

    let newElement = document.createElement("li");

    newElement.textContent = inputText.value;

    target.appendChild(newElement);
    inputText.value = "";
}