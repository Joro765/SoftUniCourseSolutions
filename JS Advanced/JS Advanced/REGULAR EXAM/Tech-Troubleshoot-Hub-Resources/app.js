window.addEventListener('load', solution);

function solution() {

  // Problem Section
  const problemSectionRef = document.getElementById("add-problem");
  const previewSectionRef = document.getElementsByClassName("preview-list")[0];
  const pendingSectionRef = document.getElementsByClassName("pending-list")[0];
  const resolvedSectionRef = document.getElementsByClassName("resolved-list")[0];

  // Fields
  const employeeRef = document.getElementById("employee");
  const categoryRef = document.getElementById("category");
  const urgencyRef = document.getElementById("urgency");
  const teamRef = document.getElementById("team");
  const problemDescRef = document.getElementById("description");

  // Buttons
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", moveToPreview);

  function moveToPreview(e) {
    e.preventDefault();
    if (employeeRef.value !== "" && categoryRef.value !== "" && urgencyRef.value !== "" && teamRef.value !== "" && problemDescRef.value !== "") {

      // Create LI
      const liElement = document.createElement("li");
      liElement.className = "problem-content";

      // Create article
      const articleElement = document.createElement("article");

      // Name element
      const nameElement = document.createElement("p");
      nameElement.textContent = `From: ${employeeRef.value}`;

      // Category element
      const categoryElement = document.createElement("p");
      categoryElement.textContent = `Category: ${categoryRef.value}`;

      // Urgency element
      const urgencyElement = document.createElement("p");
      urgencyElement.textContent = `Urgency: ${urgencyRef.value}`;

      // Assigned Team element
      const teamElement = document.createElement("p");
      teamElement.textContent = `Assigned to: ${teamRef.value}`;

      // Description element
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Description: ${problemDescRef.value}`;

      // Adding elements to article
      articleElement.appendChild(nameElement);
      articleElement.appendChild(categoryElement);
      articleElement.appendChild(urgencyElement);
      articleElement.appendChild(teamElement);
      articleElement.appendChild(descriptionElement);

      // Create buttons
      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", editProblem);


      const continueBtn = document.createElement("button");
      continueBtn.className = "continue-btn";
      continueBtn.textContent = "Continue";
      continueBtn.addEventListener("click", continueProblem);

      // Add everything to LI element
      liElement.appendChild(articleElement);
      liElement.appendChild(editBtn);
      liElement.appendChild(continueBtn);

      // Move problem to preview section
      previewSectionRef.appendChild(liElement);

      // Clear inputs
      employeeRef.value = "";
      categoryRef.value = "";
      urgencyRef.value = "";
      teamRef.value = "";
      problemDescRef.value = "";

      // Disable button
      disableBtn();
    }
  }

  function editProblem(e) {
    // Get all info
    const targetProblem = e.target.parentElement;
    const name = targetProblem.querySelectorAll("p")[0].textContent;
    const category = targetProblem.querySelectorAll("p")[1].textContent;
    const urgency = targetProblem.querySelectorAll("p")[2].textContent;
    const team = targetProblem.querySelectorAll("p")[3].textContent;
    const description = targetProblem.querySelectorAll("p")[4].textContent;

    // Split the info
    let nameArr = name.split(": ");
    nameArr.shift();
    employeeRef.value = nameArr.join(" ");

    let categoryArr = category.split(": ");
    categoryArr.shift();
    categoryRef.value = categoryArr.join(" ");

    let urgencyArr = urgency.split(": ");
    urgencyArr.shift();
    urgencyRef.value = urgencyArr.join(" ");

    let teamArr = team.split(": ");
    teamArr.shift();
    teamRef.value = teamArr.join(" ");

    let descriptionArr = description.split(": ");
    descriptionArr.shift();
    problemDescRef.value = descriptionArr.join(" ");
    debugger

    targetProblem.remove();
    enableBtn();




  }

  function continueProblem(e) {
    let currentElement = e.target.parentElement;
    let buttonsToDelete = Array.from(currentElement.querySelectorAll("button"));


    const resolveBtn = document.createElement("button");
    resolveBtn.className = "resolve-btn";
    resolveBtn.textContent = "Resolved";

    resolveBtn.addEventListener("click", resolveFunc);

    for (const element of buttonsToDelete) {
      element.remove()

    }

    currentElement.appendChild(resolveBtn);

    currentElement.remove();

    pendingSectionRef.appendChild(currentElement);


  }

  function resolveFunc(e) {
    let currentProblem = e.target.parentElement;
    let buttonsToDelete2 = Array.from(currentProblem.querySelectorAll("button"));

    for (const element of buttonsToDelete2) {
      element.remove();

    }

    const clearBtn = document.createElement("button");
    clearBtn.className = "clear-btn";
    clearBtn.textContent = "Clear";

    clearBtn.addEventListener("click", clearProblem);

    currentProblem.appendChild(clearBtn);

    currentProblem.remove();
    resolvedSectionRef.appendChild(currentProblem);

  }


  function clearProblem(e) {
    let currentElement = e.target.parentElement;
    currentElement.remove();
    enableBtn()

  }


  function disableBtn() {
    addBtn.disabled = true;
  }

  function enableBtn() {
    addBtn.disabled = false;
  }


}




