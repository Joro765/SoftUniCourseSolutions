function sumTable() {
    // Взимаме всички редове на таблицата
    let table = document.querySelectorAll("table tr");
    let total = 0;

    // Минаваме през всеки ред от таблицата и взимаме само цената от всеки ред
    index = 0;
    for (let row of table) {
        index++;

        //Пропускаме първия и последния ред от таблицата
        if (index > 1 && index < table.length) {
            total += Number(row.children[1].textContent);
        }

    }

    // Закачаме цената на елемента с таг SUM
    document.getElementById("sum").textContent = total;

}