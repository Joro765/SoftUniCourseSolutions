function focused() {
    // Взимаме всички инпути и ги правим на масив
    const inputFields = Array.from(document.getElementsByTagName("input"));

    // За всеки инпут от масива му закачаме евент лисънъри за 2та стейта
    inputFields.forEach(input => {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlur);
    });

    // e - ни носи информацията за моментно таргетирания елемент. Така си взимаме кой е елемента който е за обработка
    // Сменяме му класа в зависимост от евента
    function inputFocus(e) {
        e.target.parentNode.className = "focused"
    }

    function inputBlur(e) {
        e.target.parentNode.className = ""
    }
}
