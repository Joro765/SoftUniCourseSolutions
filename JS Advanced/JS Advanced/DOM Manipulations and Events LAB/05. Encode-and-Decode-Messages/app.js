function encodeAndDecodeMessages() {
    const initialTextArea = document.querySelectorAll("textarea")[0];
    const resultTextArea = document.querySelectorAll("textarea")[1];
    const sendButton = document.querySelectorAll("button")[0];
    const translateButton = document.querySelectorAll("button")[1];

    sendButton.addEventListener("click", encriptMessage);
    translateButton.addEventListener("click", translateMessage)

    let encriptetMessage = "";
    let resultMessage = "";



    function encriptMessage() {
        let msg = initialTextArea.value
        let encriptetMessage = "";
        for (let i = 0; i < msg.length; i++) {
            let current = msg.charCodeAt(i);
            current += 1;
            encriptetMessage += `${String.fromCharCode(current)}`
        }

        resultTextArea.value = encriptetMessage;
        initialTextArea.value = "";
    }

    function translateMessage() {
        let msg = resultTextArea.value;
        let decriptetMessage = "";
        for (let i = 0; i < msg.length; i++) {
            let current = msg.charCodeAt(i);
            current -= 1;
            decriptetMessage += `${String.fromCharCode(current)}`
        }

        resultTextArea.value = decriptetMessage;

    }



}