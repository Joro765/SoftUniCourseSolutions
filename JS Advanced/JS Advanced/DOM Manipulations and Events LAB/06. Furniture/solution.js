function solve() {
  const initialTextArea = document.querySelectorAll("textarea")[0];
  const getListButton = document.querySelectorAll("button")[0];
  const table = document.querySelector("tbody");

  getListButton.addEventListener("click", addElement);

  function addElement(e) {

    let elementsList = JSON.parse(initialTextArea.value);
    for (const element of elementsList) {
      let product = element; // Object with properties

      // Table row
      let trElement = document.createElement("tr");

      // Image TD
      let tdElement1 = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", product.img)
      tdElement1.appendChild(imgElement);

      // Name TD
      let tdElement2 = document.createElement("td");
      let pNameElement = document.createElement("p");
      pNameElement.textContent = product.name;
      tdElement2.appendChild(pNameElement);

      // Price TD
      let tdElement3 = document.createElement("td");
      let pPriceElement = document.createElement("p");
      pPriceElement.textContent = product.price;
      tdElement3.appendChild(pPriceElement);

      // Decoration TD
      let tdElement4 = document.createElement("td");
      let pDecorationElement = document.createElement("p");
      pDecorationElement.textContent = product.decFactor;
      tdElement4.appendChild(pDecorationElement);

      // Checkbox TD
      let tdElement5 = document.createElement("td");
      let pCheckBoxElement = document.createElement("input");
      pCheckBoxElement.setAttribute("type", "checkbox");
      pCheckBoxElement.setAttribute("disabled", "");
      tdElement5.appendChild(pCheckBoxElement);

      trElement.appendChild(tdElement1);
      trElement.appendChild(tdElement2);
      trElement.appendChild(tdElement3);
      trElement.appendChild(tdElement4);
      trElement.appendChild(tdElement5);

      table.appendChild(trElement)

    }

    const radioButtons = Array.from(document.querySelectorAll("input"));

    for (const radioButton of radioButtons) {
      radioButton.disabled = false
      radioButton.addEventListener("click", markItem);
    }


    let productsBuy = [];
    let total = 0;
    let avgDecFactor = 0;



    // RADIO BUTTONS КОИТО РАБОТЯТ!!!!!
    function markItem(e) {
      if (!(e.currentTarget.hasAttribute('checked'))) {
        e.currentTarget.setAttribute('checked', "");
      } else {
        e.currentTarget.removeAttribute('checked', "");
      }

    }




    const resultTextArea = document.querySelectorAll("textarea")[1];
    const buyButton = document.querySelectorAll("button")[1];
    buyButton.addEventListener("click", buyItems);

    function buyItems(e) {
      const markedProducts = Array.from(document.querySelectorAll("input[type=checkbox]"));

      for (const product of markedProducts) {
        if (product.checked === true) {  //// ПРОВЕРКА ЗА СТЕЙТ НА РАДИО БУТОН !!!!!
          let productInfo = product.parentElement.parentElement;
          let productInfoSelector = productInfo.querySelectorAll("p");
          let productName = productInfoSelector[0].textContent;
          let productPrice = productInfoSelector[1].textContent;
          let productDecoration = productInfoSelector[2].textContent;
          productPrice = Number(productPrice);
          productDecoration = Number(productDecoration)
          productsBuy.push(productName);
          total += productPrice;
          avgDecFactor += productDecoration;
        }

        let text = `Bought furniture: ${productsBuy.join(", ")}\n`
        let text2 = `Total price: ${total.toFixed(2)}\n`
        let text3 = `Average decoration factor: ${avgDecFactor / productsBuy.length}`
        resultTextArea.textContent = text + text2 + text3
      }


    }
  }

}