window.addEventListener("load", solve);
function solve() {
    const formButtonRef = document.getElementById("form-btn");
    const inProgressRef = document.getElementById("in-progress");
    const finishedSection = document.getElementById("finished");
    const clearBtn = document.getElementById("clear-btn");
    formButtonRef.addEventListener("click", getFormInfo);
    clearBtn.addEventListener("click", clearList);

    // Полетата на формата
    const firstNameRef = document.getElementById("first-name");
    const lastNameRef = document.getElementById("last-name");
    const ageRef = document.getElementById("age");
    const genderRef = document.getElementById("genderSelect");
    const formTextAreaRef = document.getElementById("task");
    const progessCounterRef = document.getElementById("progress-count");
    let counter = 0;


    // Натискане на събмит бутон от форма
    function getFormInfo(e) {
        // Проверка за празни полета
        if (firstNameRef.value != "" && lastNameRef.value != "" && ageRef.value != "" && genderRef.value != "" && formTextAreaRef.value != "") {

            // Създаване на нов ЛИ елемент
            const li = document.createElement("li");
            li.className = "each-line";

            // Article
            const article = document.createElement("article");

            // H4
            const header = document.createElement("h4");
            header.textContent = `${firstNameRef.value} ${lastNameRef.value}`;

            // P - age and gender
            const genderAge = document.createElement("p");
            genderAge.textContent = `${genderRef.value}, ${ageRef.value}`;

            // Dish desc P
            const description = document.createElement("p");
            description.textContent = `Dish description: ${formTextAreaRef.value}`;

            // Fill up article
            article.appendChild(header);
            article.appendChild(genderAge);
            article.appendChild(description);

            // Fill up LI element
            li.appendChild(article);

            // Buttons
            const editBtn = document.createElement("button");
            const completeBtn = document.createElement("button");

            // Classes for buttons
            editBtn.className = "edit-btn";
            editBtn.textContent = "Edit";
            completeBtn.className = "complete-btn";
            completeBtn.textContent = "Mark as complete";

            // Events for buttons
            editBtn.addEventListener("click", editItem);
            completeBtn.addEventListener("click", completeItem);

            // Attach buttons to li Element
            li.appendChild(editBtn);
            li.appendChild(completeBtn);


            // Увеличваме брояча за поръчки
            counter++;
            progessCounterRef.textContent = counter;

            // Зачистване полетата на формата
            inProgressRef.appendChild(li)
            firstNameRef.value = "";
            lastNameRef.value = "";
            ageRef.value = "";
            genderRef.value = "Male";
            formTextAreaRef.value = "";
        }
    }



    // Функция за едит бутон
    function editItem(e) {
        // Взимаме инфото от таба за да го преместим
        let dishInfo = e.target.parentElement
        let names = dishInfo.getElementsByTagName("h4")[0];
        let genderAndAge = dishInfo.getElementsByTagName("p")[0];
        let discDescription = dishInfo.getElementsByTagName("p")[1];

        let namesArr = names.textContent;
        let [firstName, lastName] = namesArr.split(" ");
        let genderAndAgeArr = genderAndAge.textContent;
        let [gender, age] = genderAndAgeArr.split(", ");

        let discDesc = discDescription.textContent;
        let discDescArr = discDesc.split(": ")
        discDescArr.shift();
        let finalDiscDesc = discDescArr.join("");

        // Местим инфото
        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        ageRef.value = age;
        genderRef.value = gender;
        formTextAreaRef.value = finalDiscDesc;

        e.target.parentElement.remove();
        counter--;
        progessCounterRef.textContent = counter;
    }


    // Функция за къмплийт бутон
    function completeItem(e) {
        let liElement = e.target.parentElement;
        let editBtn = liElement.querySelectorAll("button")[0];
        let completeBtn = liElement.querySelectorAll("button")[1];

        editBtn.remove();
        completeBtn.remove();
        finishedSection.appendChild(liElement);
        counter--;
        progessCounterRef.textContent = counter;

    }


    // Взимаме всички ли тагове в секцията правим ги на масив за да ги обходим и трием
    function clearList(e) {
        let elements = e.target.parentElement.querySelectorAll("li");
        let elementsArray = Array.from(elements);

        for (const element of elementsArray) {
            element.remove()
        }
    }

}
