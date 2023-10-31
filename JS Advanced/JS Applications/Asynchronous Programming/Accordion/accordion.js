async function solution() {
    let baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let mainSection = document.getElementById("main");




    let response = await fetch(baseUrl);
    let data = await response.json();
    for (const element of Object.entries(data)) {
        let id = element[1]._id
        let title = element[1].title;

        mainSection.innerHTML += `<div class="accordion">
        <div class="head">
            <span>${title}</span>
            <button class="button" id="${id}">More</button>
        </div>
        <div class="extra">
        </div>
    </div>`

    }

    let buttons = Array.from(document.getElementsByTagName("button"));

    for (const button of buttons) {
        button.addEventListener("click", showMore);
    }


    async function showMore(e) {
        let id = e.target.id;
        let info = e.target.parentElement.parentElement.getElementsByClassName("extra")[0];

        let response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
        let data = await response.json();
        let pElement = document.createElement("p");
        pElement.textContent = data.content;
        info.appendChild(pElement);
        info.style.display = "block";
        let btn = e.target;
        btn.removeEventListener("click", showMore);
        btn.textContent = "LESS"
        btn.addEventListener("click", showLess);
    }

    function showLess(e) {
        let btn = e.target;
        let pElement = e.target.parentElement.parentElement.querySelector("p");
        let info = e.target.parentElement.parentElement.getElementsByClassName("extra")[0];
        info.style.display = "none";
        pElement.remove()
        btn.removeEventListener("click", showLess);
        btn.textContent = "MORE";
        btn.addEventListener("click", showMore)

    }

}