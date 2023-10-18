window.addEventListener("load", solve);
function solve() {
  const fNameRef = document.getElementById("first-name");
  const lNameRef = document.getElementById("last-name");
  const ageRef = document.getElementById("age");
  const storyTitleRef = document.getElementById("story-title");
  const genreRef = document.getElementById("genre");
  const storyTextRef = document.getElementById("story");

  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", publishStory);

  const previewSectionRef = document.getElementById("preview-list");
  const mainDivRef = document.getElementById("main");


  function publishStory(e) {
    if (fNameRef.value !== "" && lNameRef.value !== "" && ageRef.value !== "" && storyTitleRef.value !== "" && genreRef.value !== "" && storyTextRef.value !== "") {

      // LI Element
      const liElement = document.createElement("li");
      liElement.classList = "story-info";

      // Article Element
      const articleElement = document.createElement("article");

      // Heading
      const headingElement = document.createElement("h4");
      headingElement.textContent = `Name: ${fNameRef.value} ${lNameRef.value}`;

      // Age paragraph
      const ageElement = document.createElement("p");
      ageElement.textContent = `Age: ${ageRef.value}`;

      // Title paragraph
      const titleElement = document.createElement("p");
      titleElement.textContent = `Title: ${storyTitleRef.value}`;

      // Genre paragraph
      const genreElement = document.createElement("p");
      genreElement.textContent = `Genre: ${genreRef.value}`;

      // Story paragraph
      const storyTextElement = document.createElement("p");
      storyTextElement.textContent = storyTextRef.value;

      // Adding elements to article element
      articleElement.appendChild(headingElement);
      articleElement.appendChild(ageElement);
      articleElement.appendChild(titleElement);
      articleElement.appendChild(genreElement);
      articleElement.appendChild(storyTextElement);

      // Adding article element to LI element
      liElement.appendChild(articleElement);

      // Buttons - create
      const saveBtn = document.createElement("button");
      saveBtn.classList = "save-btn";
      saveBtn.textContent = "Save Story";

      const editBtn = document.createElement("button");
      editBtn.classList = "edit-btn";
      editBtn.textContent = "Edit Story";

      const deleteBtn = document.createElement("button");
      deleteBtn.classList = "delete-btn";
      deleteBtn.textContent = "Delete Story";

      // Buttons add events
      saveBtn.addEventListener("click", saveStory);
      editBtn.addEventListener("click", editStory);
      deleteBtn.addEventListener("click", deleteStory);

      // Adding buttons to LI Element
      liElement.appendChild(saveBtn);
      liElement.appendChild(editBtn);
      liElement.appendChild(deleteBtn);

      // Add LI element to preview section
      previewSectionRef.appendChild(liElement);

      // Clear input fields
      fNameRef.value = "";
      lNameRef.value = "";
      ageRef.value = "";
      storyTitleRef.value = "";
      genreRef.value = "Disturbing";
      storyTextRef.value = "";

      // заключваме бутонът
      disableBtn()

    }
  }


  function saveStory(e) {
    const elementsToRemove = Array.from(mainDivRef.children);
    for (const element of elementsToRemove) {
      element.remove()

    }
    const finalHeader = document.createElement("h1");
    finalHeader.textContent = "Your scary story is saved!";
    mainDivRef.appendChild(finalHeader)
  }

  function editStory(e) {

    // Взимаме информацията от полетата
    const storyPreview = e.target.parentElement;
    const storyInfo = storyPreview.children[0];
    const names = storyInfo.querySelectorAll("h4")[0].textContent;
    const age = storyInfo.querySelectorAll("p")[0].textContent;
    const title = storyInfo.querySelectorAll("p")[1].textContent;
    const genre = storyInfo.querySelectorAll("p")[2].textContent;
    const storyText = storyInfo.querySelectorAll("p")[3].textContent;

    // Махаме 2те точки от полетата
    const namesArr = names.split(": ");
    namesArr.shift();
    let namesString = namesArr.join(" ");
    let namesArrFinal = namesString.split(" ");


    fNameRef.value = namesArrFinal[0];
    lNameRef.value = namesArrFinal[1];


    const ageArr = age.split(": ");
    ageArr.shift();

    ageRef.value = ageArr[0];


    const titleArr = title.split(": ");
    titleArr.shift();

    storyTitleRef.value = titleArr[0];

    const genreArr = genre.split(": ");
    genreArr.shift();

    genreRef.value = genreArr[0];

    storyTextRef.value = storyText;

    // Махаме ли елемента и отключваме бутонът
    storyPreview.remove();

    enableBtn()




  }


  function deleteStory(e) {
    const storyPreview = e.target.parentElement;
    storyPreview.remove()
    enableBtn()

  }



  // Toggle за бутони - дисейбъл и ънейбъл викам си когато ми трябва!!!!
  function disableBtn() {
    publishBtn.disabled = true;
  }

  function enableBtn() {
    publishBtn.disabled = false;
  }


}
