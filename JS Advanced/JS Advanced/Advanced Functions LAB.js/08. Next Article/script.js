function getArticleGenerator(articles) {
    let array = articles;
    let divElement = document.getElementById("content")

    return function showNext() {
        if (array.length > 0) {
            let current = array.shift();
            let articleElement = document.createElement("article");
            articleElement.textContent = current;
            divElement.appendChild(articleElement);
        }

    }
}
