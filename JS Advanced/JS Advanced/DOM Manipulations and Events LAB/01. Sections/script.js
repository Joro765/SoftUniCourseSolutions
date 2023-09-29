function create(words) {
   const divWrapper = document.getElementById("content");

   // За всяка дума създаваме див и параграф - закачаме параграфа на див-а и ги добавяме в мейн див контейнера
   for (const word of words) {
      let currentP = document.createElement("p");
      currentP.textContent = word;
      currentP.style.display = "none";
      let currentDiv = document.createElement("div");
      currentDiv.appendChild(currentP);

      // Закачаме към всеки див - евент лисънър
      currentDiv.addEventListener("click", showMe);

      divWrapper.appendChild(currentDiv)

   }

   // Функцията, получава аргумент евент, който използваме за да реферираме към див-а от когото е активиран евентът.
   function showMe(event) {
      event.currentTarget.children[0].style.display = "block"
   }
}