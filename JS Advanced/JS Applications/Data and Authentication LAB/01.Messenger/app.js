function attachEvents() {
    const baseUrl = `http://localhost:3030/jsonstore/messenger`;

    const textArea = document.getElementById("messages");
    const authorElement = document.getElementsByTagName("input")[0];
    const messageContentElement = document.getElementsByTagName("input")[1];
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");

    sendBtn.addEventListener("click", addMessage);
    refreshBtn.addEventListener("click", loadMessages);



    // Добавяне на съобщение в базата
    function addMessage() {
        let author = authorElement.value;
        let content = messageContentElement.value;

        if (author.length > 0 && content.length > 0 && author !== " " && content !== " ") {

            let data = {
                author: author,
                content: content
            }

            fetch(baseUrl, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(err => console.log(err));

            authorElement.value = "";
            messageContentElement.value = "";
        }

    }

    // Зареждане на всички съобщения от базата
    async function loadMessages() {
        textArea.value = "";

        try {
            let response = await fetch(baseUrl)
            let data = await response.json();

            let messages = Object.values(data);

            for (const message of messages) {
                textArea.value += `${message.author}: ${message.content}\n`

            }
            textArea.value = textArea.value.trim() // TRIM понеже остава празен ред...


        } catch (error) {
            console.log(error);
        }

    }
}

attachEvents();