function search(text) {

    let word = "text";

    // Показва индекса на дадена дума докато се съдържа в текст
    while (text.includes(word)) {
        let index = text.indexOf(word);
        console.log(`Index : ${index}`);
        // След като намери думата, хваща текста след нея за да продължи напред с търсенето
        text = text.substring(index + 1, text.length)
    }


}


search("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")