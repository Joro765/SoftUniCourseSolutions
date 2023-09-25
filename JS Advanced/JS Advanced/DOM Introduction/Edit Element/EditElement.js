function editElement(referenceElement, match, replacer) {

    // Променя текстов елемент
    let content = referenceElement.textContent;
    while (content.includes(match)) {
        content = content.replace(match, replacer);
    }

    referenceElement.textContent = content;



}


// const matcher = new RegExp(match, "g");
// const edited = content.replace(matcher, replacer);
// referenceElement.textContent = edited;


