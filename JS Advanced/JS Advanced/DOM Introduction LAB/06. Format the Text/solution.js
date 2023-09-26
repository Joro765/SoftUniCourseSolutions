function solve() {
  let text = document.getElementById("input").value;
  let target = document.getElementById("output");

  let sentences = text.split(".");

  let buff = "";
  let count = 0;
  for (let sentence of sentences) {

    if (sentence.length > 0) {
      buff += `${sentence}.`
      count++;
    } else {
      continue;
    }


    if (count == 3) {
      target.innerHTML += `<p>${buff}</p>`;
      buff = "";
      count = 0;
    }


  }
  target.innerHTML += `<p>${buff}</p>`;

}