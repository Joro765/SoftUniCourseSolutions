import { showDetails } from "./details.js";

const main = document.querySelector("main"); // main
const topicContainer = document.querySelector("div.topic-title"); // section for all topics
const topicCreateSection = document.querySelector("div.new-topic-border"); // topic create section
const form = topicCreateSection.querySelector("form");
form.addEventListener("submit", onSubmit);

const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click", clearForm);



// Clear form input fields
function clearForm(e) {
    e.preventDefault();
    form.reset();
}



// При зареждане на хоум - заместваме целия мейн с topic create section и отдолу всички направени topics
export async function renderHome() {
    const topics = await getAllTopics();
    topicContainer.innerHTML = "";
    Object.values(topics).forEach(topic => {
        const template = renderTopics(topic);
        template.querySelector("a").addEventListener("click", showDetails);
        topicContainer.appendChild(template);
    })


    main.replaceChildren(topicCreateSection);
    main.appendChild(topicContainer);
}


async function getAllTopics() {
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
    const data = await response.json();
    return data;
}




// Create a new POST
async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let title = formData.get("topicName");
    let username = formData.get("username");
    let post = formData.get("postText");
    const createDate = new Date();

    if (!title || !username || !post) {
        throw new Error("Fields cannot be empty!");
    }


    let data = {
        title,
        username,
        post,
        createDate
    }


    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })
    let postData = await response.json();
    form.reset();



}








// Render topics on DOM from the server
function renderTopics(topic) {
    let topicElement = document.createElement("div");
    topicElement.classList.add("topic-container");

    topicElement.innerHTML = `<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href="#" class="normal" data-id="${topic._id}">
            <h2>${topic.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${topic.createDate}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${topic.username}</span></p>
                </div>
            </div>


        </div>
    </div>
</div>`

    return topicElement;
}