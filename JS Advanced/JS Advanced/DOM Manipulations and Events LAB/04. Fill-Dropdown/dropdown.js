function addItem() {
    const menuElement = document.getElementById("menu");
    const addBtn = document.querySelector("input[type=button]")



    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");

    const optionElement = document.createElement("option");
    optionElement.textContent = text.value;
    optionElement.setAttribute("value", value.value);

    menuElement.appendChild(optionElement);

    text.value = "";
    value.value = "";



}