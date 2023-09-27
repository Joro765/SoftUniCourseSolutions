function deleteByEmail() {
    let inputText = document.getElementsByTagName('input')[0].value;
    let tableRows = Array.from(document.querySelectorAll("#customers tr"));
    let divText = document.getElementById("result");

    // Delete first row because it does not hold INFO
    tableRows.shift();


    // Итерираме по всеки ред TR от таблицата
    for (let row of tableRows) {

        // Взимаме TD = полетата от реда TR 
        let rowData = row.querySelectorAll("td")

        // Итерираме по полетата 
        for (let td of rowData) {
            if (td.textContent === inputText) {
                console.log(row.parentNode.removeChild(row));       // Ако намерим съвпадение трием реда TR
                divText.textContent = "Deleted."
                document.getElementsByTagName('input')[0].value = "";
            } else {
                divText.textContent = "Not found."
                document.getElementsByTagName('input')[0].value = ""
            }
        }

    }
}