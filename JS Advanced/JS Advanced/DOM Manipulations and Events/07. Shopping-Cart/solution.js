function solve() {
   // Взимаме си бутоните за добавяне - всичките
   const addButtons = Array.from(document.querySelectorAll(".add-product"));
   // Взимаме си text AREA
   const textAreaElement = document.getElementsByTagName("textarea")[0];
   // Взимаме си бутона за чекаут
   const checkOutButton = document.querySelector(".checkout")


   let cart = [];
   let totalPrice = 0;

   // Минаваме с цикъл през всички адд бутони и им закачаме евент лисънър
   addButtons.forEach((addBtn) => {
      addBtn.addEventListener("click", addProduct);
   })


   // Викаме 2 пъти нагоре парънт за да стигнем до тага с инфото за продукта
   function addProduct(e) {
      const productElement = e.target.parentNode.parentNode
      // Взимаме име и цена на продукта
      const productTitle = productElement.querySelector(".product-title");
      const productPrice = productElement.querySelector(".product-line-price");

      // Функция в която ги подаваме за принтиране
      printProduct(productTitle, productPrice);

      // Добавяне в масива
      if (!(cart.includes(productTitle.textContent))) {
         cart.push(productTitle.textContent);
         totalPrice += Number(productPrice.textContent)
      } else {
         totalPrice += Number(productPrice.textContent)
      }

      // Принтираме в текст ареа
      function printProduct(product, price) {
         textAreaElement.textContent += `Added ${product.textContent} for ${price.textContent} to the cart.\n`
      }

   }

   // Слагаме евент лисънър на чек аут бутона
   checkOutButton.addEventListener("click", checkOut);

   // Функция за чек аут бутона. която принтира и премахва евент лисънърите на всички адд бутони
   function checkOut() {
      addButtons.forEach((addBtn) => {
         addBtn.removeEventListener("click", addProduct);
      })
      textAreaElement.textContent += `You bought ${cart.join(", ")} for ${totalPrice.toFixed(2)}.`
      checkOutButton.removeEventListener("click", checkOut);
   }

}