function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textArea = document.querySelector("#inputs textarea");

   function onClick() {
      let info = textArea.value;
      let infoString = JSON.parse(info)
      let res = {};
      for (let line of infoString) {
         let [restaurantName, workers] = line.split(" - ");
         if (!res.hasOwnProperty(restaurantName)) {
            res[restaurantName] = {
               bestSalary: calcBestSalary(),
               averageSalary: calcAverageSalary(),
               workers
            }

         } else {
            res[restaurantName].workers = calcWorkers(),
               res[restaurantName].bestSalary = calcBestSalary(),
               res[restaurantName].averageSalary = calcAverageSalary()
         }

      }
   }
}