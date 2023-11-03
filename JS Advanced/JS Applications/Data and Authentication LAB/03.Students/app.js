const formRef = document.getElementById("form");
const tableRef = document.getElementById("results");
let tableBody = tableRef.getElementsByTagName("tbody")[0];
const baseUrl = `http://localhost:3030/jsonstore/collections/students`;

window.onload = listStudents()


// List Students
async function listStudents() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    for (const student of Object.values(data)) {
        let firstName = student.firstName;
        let lastName = student.lastName;
        let facultyNumber = student.facultyNumber;
        let grade = student.grade;

        tableBody.innerHTML += `<td>${firstName}</td>
                                <td>${lastName}</td>
                                <td>${facultyNumber}</td>
                                <td>${grade}</td>`

    }
}



// ADD EVENT TO FORM SUBMIT
formRef.addEventListener("submit", (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);

    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let facultyNumber = formData.get("facultyNumber");
    let grade = formData.get("grade");

    let elements = Array.from(document.getElementsByTagName("input"))

    if (firstName.length > 1 && lastName.length > 1 && facultyNumber.length > 1 && grade.length >= 1) {

        let data = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }

        fetch(baseUrl, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data));

        for (const element of elements) {
            element.value = ""
        }

        tableBody.innerHTML = ""
        listStudents()
    }

})

