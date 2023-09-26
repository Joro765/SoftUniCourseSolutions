function search() {
   let towns = Array.from(document.querySelectorAll("#towns li")); // Collection
   let search = document.getElementById("searchText").value;
   let result = document.getElementById("result");

   let counter = 0;

   towns.forEach(town => {
      if (town.textContent.includes(search)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         counter++;
      } else {
         town.style.textDecoration = "none";
         town.style.fontWeight = "";
      }
   })


   result.textContent = `${counter} matches found`;

}
