const formRef = document.getElementsByTagName("form")[0];
const loadBtn = document.getElementById("loadBooks");

const url = `http://localhost:3030/jsonstore/collections/books`

const authorElement = document.getElementsByTagName("input")[0];
const titleElement = document.getElementsByTagName("input")[1];


loadBtn.addEventListener("click", loadBooks);


formRef.addEventListener("submit", createBook)

function createBook(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const author = formData.get("author");
    const title = formData.get("title");

    if ((author !== " " && author.length > 0) && (title !== " " && title.length > 0)) {

        let data = {
            author,
            title
        }

        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(data => console.log(data))

        authorElement.value = "";
        titleElement.value = "";
    }
}



async function loadBooks() {
    const tableSection = document.getElementsByTagName("tbody")[0];
    tableSection.innerHTML = ""

    let response = await fetch(url);
    let data = await response.json();

    for (const book of Object.values(data)) {
        let trElement = document.createElement("tr");

        let tdElement1 = document.createElement("td");
        tdElement1.textContent = `${book.title}`;

        let tdElement2 = document.createElement("td");
        tdElement2.textContent = `${book.author}`;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editRecord);

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", delRecord);

        let buttons = document.createElement("td");

        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);

        buttons.appendChild(editBtn);
        buttons.appendChild(delBtn);

        trElement.appendChild(buttons);

        tableSection.appendChild(trElement)

    }
}


async function editRecord(e) {
    let currentRecord = e.target.parentElement.parentElement;
    let bookTitle = currentRecord.getElementsByTagName("td")[0].textContent;
    let bookAuthor = currentRecord.getElementsByTagName("td")[1].textContent;

    let formHeading = document.getElementsByTagName("h3")[0];
    let titleElement = document.getElementsByTagName("input")[0];
    let authorElement = document.getElementsByTagName("input")[1];
    formHeading.textContent = "Edit FORM";
    titleElement.value = bookTitle;
    authorElement.value = bookAuthor;

    let formElement = document.getElementsByTagName('form')[0];
    let submitBtn = formElement.querySelectorAll("button")[0];
    submitBtn.textContent = "Save";

    submitBtn.removeEventListener("submit", createBook);
    formRef.removeEventListener("submit", createBook)
    submitBtn.addEventListener("click", async (e) => {
        let response = await fetch(url);
        let data = await response.json();

        let id;

        for (const [key, value] of Object.entries(data)) {
            if (value.title === bookTitle) {
                id = key;
            }
        }

        let body = {
            "author": bookAuthor,
            "title": bookTitle
        }


        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => console.log(data));

    });





}



async function delRecord(e) {
    let currentRecord = e.target.parentElement.parentElement;
    let bookTitle = currentRecord.getElementsByTagName("td")[0].textContent;

    let response = await fetch(url);
    let data = await response.json();

    let id;

    for (const [key, value] of Object.entries(data)) {
        if (value.title === bookTitle) {
            id = key;
            fetch(`${url}/${id}`, {
                method: "Delete",
                headers: { "Content-type": "application/json" }
            }).then(response => response.json())
                .then(data => console.log(data));

            currentRecord.remove()
        }
    }





}
