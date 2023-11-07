const homeSection = document.querySelector(".home"); // Взимаме си секцията от ДОМ дървото
const url = "http://localhost:3030/data/recipes";
const recipeList = homeSection.querySelector(".recipe-list");

// Експортваме тази функция към роутер-а за да визуалириза хоум секцията когато е необходимо !!!
export function renderHome() {
    fetch(url)
        .then(response => response.json())
        .then(recipes => {
            renderRecipes(recipes); // Викаме функция, която взима всички рецепти и ги обработва
            homeSection.style.display = "block";
        })


}

// Взима всички рецепти от респонса
function renderRecipes(recipes) {
    const fragment = document.createDocumentFragment(); // създава фрагмент - невидим дом елемент за да е по-бързо добавянето

    recipes.forEach(x => {
        fragment.appendChild(renderRecipe(x)); // Извиква друга функция за моделиране на всяка рецепта и ги добавя във фрагмента
    })

    recipeList.innerHTML = ""; // зачисваме за да не става дублиране
    recipeList.appendChild(fragment); // Добавяме всичко от фрагмента в дом-а
}

// Обработва всяка една рецепта
function renderRecipe(recipe) {
    const recipeElement = document.createElement("article");
    recipeElement.classList.add("preview");
    recipeElement.innerHTML = `<div class="title">
                               <h2>${recipe.name}</h2>
                               </div>
                               <div class="small">
                               <img src="${recipe.img}" alt="">
                               </div>`;

    return recipeElement; // Връща елемент за всяка една рецепта
} 
