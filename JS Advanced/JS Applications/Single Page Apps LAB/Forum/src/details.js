const main = document.querySelector("main"); // мейн
const commentSection = document.getElementById("comments"); // секцията с коментарите
commentSection.remove();

// При зареждане на детайлите, подменяме целия мейн с comment секцията
export async function showDetails(e) {
    let id = e.target.parentElement.dataset.id;
    main.replaceChildren(commentSection)
}




// Взимане на пост по ид от базата
async function getTopic(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
    const data = await response.json();
    return data;

}


function createTopicTemplate() {
    return `<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

    <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
        sint
        dolorem quam,
        accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
        nostrum facilis ipsum dolorem deserunt illum?</p>
</div>`
}


