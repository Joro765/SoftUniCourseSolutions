function addItem() {
    let newElement = document.getElementById("newItemText").value;
    let list = document.getElementById("items");

    // Валидация за празен стринг
    if (newElement.length < 1) {
        return;
    }

    // Създавам нов LI tag и му давам стойността от инпута
    let listItem = document.createElement('li');
    listItem.textContent = newElement;

    // Създаваме REMOVE линк, който ще може да трие listItem-a
    let removeLink = document.createElement("a");

    // Добавяме текста към елемента и му закачаме евент
    removeLink.textContent = "[Delete]"
    removeLink.href = "#";
    removeLink.addEventListener("click", deleteItem);

    // Добавяме REMOVE елемента в LI елемента
    listItem.appendChild(removeLink);

    // Добавяме LI елемента в бодито
    list.appendChild(listItem);

    // Функцията, която трие
    function deleteItem() {
        listItem.remove()
    }

    // Зануляваме инпута след въвеждане
    document.getElementById("newItemText").value = ""
}