function solve() {
   // Table itteration by rows
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchField = document.getElementById("searchField");
   let tableRow = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      let searchText = searchField.value;

      // Итерираме по ред на таблицата
      for (let row of tableRow) {

         // Взимаме всички колони от конкретния ред
         let rowData = row.querySelectorAll("td");

         // Итерираме по колоните на реда
         for (let td of rowData) {
            if (searchText === "") {   // Ако въведем празен стринг демек нищо да не селектира
               row.classList.remove("select")
            } else if (td.textContent.includes(searchText)) {
               // Добавяме клас на конкретния ред
               row.classList.add("select")
               break;  // Брейк за да не продължава търсенето na същия ред ако вече сме намерили матч
            } else {
               row.classList.remove("select")
            }
         }

      }
      searchField.value = "";
   }
}
