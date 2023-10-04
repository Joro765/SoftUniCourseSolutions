function solve() {
    const taskRef = document.getElementById("task");
    const taskDescRef = document.getElementById("description");
    const taskDateRef = document.getElementById("date");

    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);


    function onSubmit(event) {
        event.preventDefault(); // Спира страницата да се презарежда !!!
        const taskName = taskRef.value;
        const taskDesc = taskDescRef.value;
        const taskDate = taskDateRef.value;

        if (!taskName || !taskDesc || !taskDate) {
            return;
        }

        let section = document.querySelectorAll("section")[1].children[1];
        section.parentElement.children[1].appendChild(createArticle(taskName, taskDesc, taskDate));
        taskRef.value = "";
        taskDescRef.value = "";
        taskDateRef.value = "";


    }


    function createArticle(name, description, date) {
        let articleElement = document.createElement("article");

        articleElement.innerHTML = `
        <h3>${name}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
        </div>
        `

        const startButton = articleElement.querySelectorAll("button")[0];
        const deleteButton = articleElement.querySelectorAll("button")[1];

        startButton.addEventListener("click", moveArticle)
        deleteButton.addEventListener("click", deleteArticle)
        return articleElement;
    }

    function moveArticle(event) {
        const article = event.target.parentElement.parentElement;
        const buttons = article.querySelectorAll("button");
        const deleteButton = buttons[0];
        const finishButton = buttons[1];

        deleteButton.textContent = "Delete";
        deleteButton.classList.remove("green");
        deleteButton.classList.add("red");
        finishButton.textContent = "Finish";
        finishButton.classList.remove("red");
        finishButton.classList.add("orange");
        deleteButton.addEventListener("click", deleteArticle);
        finishButton.addEventListener("click", finishArticle);

        document.querySelectorAll("section")[2].children[1].appendChild(article);

    }

    function deleteArticle(event) {
        const article = event.target.parentElement.parentElement;
        article.remove()
    }

    function finishArticle(event) {
        const article = event.target.parentElement.parentElement;
        document.querySelectorAll("section")[3].appendChild(article);
        let button1 = article.querySelectorAll("button")[0];
        let button2 = article.querySelectorAll("button")[1];
        button1.remove();
        button2.remove();

    }
}