async function attachEvents() {
    // Buttons
    const loadBtn = document.getElementById("btnLoadPosts");
    loadBtn.addEventListener("click", loadPosts)

    const viewBtn = document.getElementById("btnViewPost");
    viewBtn.addEventListener("click", viewPost);

    // Selector Element
    const selectorElement = document.getElementById("posts");

    // Comment Section
    const commentSection = document.getElementById("post-comments");

    // Load posts
    async function loadPosts() {
        selectorElement.innerHTML = "";
        let response = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        let data = await response.json();
        for (const post of Object.entries(data)) {
            let id = post[1].id;
            let title = post[1].title;

            selectorElement.innerHTML += `<option value="${id}">${title}</option>`
        }
    }

    // Visualize post and comments
    async function viewPost() {
        let id = selectorElement.value;
        getPostInfo(id) // visualise post
        getComments(id); // visualise comments


    }


    // Get Info about the post
    async function getPostInfo(id) {
        let response = await fetch(`http://localhost:3030/jsonstore/blog/posts/${id}`);
        let data = await response.json();

        let content = data.body;
        let title = data.title;

        const titleElement = document.getElementById("post-title");
        const contentElement = document.getElementById("post-body");

        titleElement.textContent = title;
        contentElement.textContent = content;
    }

    // Get Comments
    async function getComments(id) {
        commentSection.innerHTML = ""
        let response = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        let data = await response.json();

        for (const comment of Object.entries(data)) {
            let postId = comment[1].postId;
            let content = comment[1].text;
            let commentId = comment[1].id;

            if (postId === id) {
                commentSection.innerHTML += `<li id="${postId}">${content}</li>`
            }

        }
    }



}

attachEvents();