function solve() {
  let originalText = document.getElementById("text").value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;

  let result = [];
  let buff = "";

  switch (convention) {
    case "Camel Case":
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] !== " ") {
          buff += `${originalText[i]}`
        } else {
          result.push(buff);
          buff = "";
          i++;
          buff += `${originalText[i].toUpperCase()}`;
        }
      }
      result.push(buff)
      break;


    case "Pascal Case":
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] !== " ") {
          buff += `${originalText[i]}`
        } else {
          buff = buff[0].toUpperCase() + buff.slice(1);
          result.push(buff);
          buff = "";
          i++;
          buff += `${originalText[i].toUpperCase()}`;
        }
      }
      result.push(buff)
      break;

    default: result.push("Error!");
  }


  document.getElementById("result").textContent = result.join("")
}