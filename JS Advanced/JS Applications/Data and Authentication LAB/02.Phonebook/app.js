function attachEvents() {
    const loadBtn = document.getElementById("btnLoad").addEventListener("click", loadPhoneBook);
    const createBtn = document.getElementById("btnCreate").addEventListener("click", createRecord);

    const baseUrl = `http://localhost:3030/jsonstore/phonebook`;
    const ulElement = document.getElementById("phonebook");


    // LOAD ALL RECORDS
    async function loadPhoneBook() {
        ulElement.textContent = "";
        const response = await fetch(baseUrl);
        const data = await response.json();

        for (const person of Object.values(data)) {
            const liElement = document.createElement("li");
            liElement.textContent = `${person.person}: ${person.phone}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", findRecord);
            liElement.appendChild(deleteBtn);
            ulElement.appendChild(liElement);
        }
    }





    // FIND record in DB so we can delete using ID
    async function findRecord(e) {
        const currentElement = e.target.parentElement;
        let text = currentElement.textContent;
        text = text.replace("Delete", "")
        let [name, number] = text.split(": "); // number

        const response = await fetch(baseUrl);
        const data = await response.json();

        let id;

        for (const person of Object.values(data)) {
            if (person.phone === number) {
                id = person._id;
            }
        }

        // DELETE current record and remove from DOM
        deleteRecord(id);
        currentElement.remove();
    }






    // Delete from DB and from DOM
    async function deleteRecord(id) {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(id)
        })
        const result = await response.json();
        console.log(result);
    }





    // CREATES A NEW RECORD AND RELOADS
    async function createRecord() {
        const person = document.getElementById("person");
        const number = document.getElementById("phone");

        let data = {
            "person": person.value,
            "phone": number.value
        }

        const response = await fetch(baseUrl, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })

        person.value = "";
        number.value = "";

        loadPhoneBook()
    }

}

attachEvents();