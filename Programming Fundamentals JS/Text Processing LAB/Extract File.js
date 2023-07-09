function extractFiles(data) {

    // Сплитваме стринга за да стане масив и взимаме края, което е името на файла 
    let file = data.split("\\").pop();


    // Взимаме индекса на последната точка (ако са 2)
    let lastDotIndex = file.lastIndexOf(".");

    // Взимаме името на файла от индекс нула до индекса на точката (2рата точка ако са 2)
    let name = file.substring(0, lastDotIndex)

    // Взимаме разширението на файла след точката (пишем +1 за да не взимаме самата точка)
    let extension = file.substring(lastDotIndex + 1);


    // Принтираме
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}


extractFiles('C:\\Internal\\training-internal\\Template.bak.pptx')