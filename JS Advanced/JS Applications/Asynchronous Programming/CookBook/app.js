const baseUrl = 'http://localhost:3030';

// Взимаме всички рецепти
fetch(`${baseUrl}/jsonstore/cookbook/recipes`)
    .then(response => response.json())
    .then(recipes => {
        renderRecipes(Object.values(recipes));
    })
    .catch(err => err)



function renderRecipes(recipes) {
    const mainElement = document.getElementsByTagName("main")[0];
    mainElement.innerHTML = ""
    for (const recipe of recipes) {
        mainElement.innerHTML += `<article class="preview">
                                  <div class="title">
                                  <h2>${recipe.name}</h2>
                                  </div>
                                  <div class="small">
                                  <img src="${recipe.img}">
                                  </div>
                                  </article>`
    }
    addEvents()
}



function addEvents() {
    const articles = Array.from(document.getElementsByTagName("article"));

    for (const article of articles) {
        article.addEventListener("click", showMore);
    }
}

function showMore(e) {
    let articleElement = e.currentTarget;
    let recipeName = articleElement.getElementsByTagName("h2")[0];
    let id;

    if (recipeName.textContent === "Recipe 1") {
        id = "01";
    } else if (recipeName.textContent === "Recipe 2") {
        id = "02";
    } else {
        id = "03";
    }

    fetch(`${baseUrl}/jsonstore/cookbook/details/${id}`)
        .then(response => response.json())
        .then(data => {

            let ingredients = ``;
            for (const ing of data.ingredients) {
                ingredients += `<li>${ing}</li>`;

            }

            let steps = ``;
            for (const step of data.steps) {
                steps += `<p>${step}</p>`;

            }

            articleElement.innerHTML = `<article>
                                        <h2>${data.name}</h2>
                                        <div class="band">
                                        <div class="thumb">
                                            <img src="${data.img}">
                                            </div>
                                            <div class="ingredients">
                                            <h3>Ingredients:</h3>
                                            <ul>
                                            ${ingredients}
                                            </ul>
                                            </div>
                                            </div>
                                            <div class="description">
                                            <h3>Preparation</h3>
                                            ${steps}
                                            </div>
                                            </article>`;

        })
        .catch(err => err)


}


