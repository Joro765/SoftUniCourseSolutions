import { html, render } from '../node_modules/lit-html/lit-html.js'

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let section = document.querySelector("tbody");



   async function loadData() {
      const response = await fetch("http://localhost:3030/jsonstore/advanced/table");
      const data = await response.json();
      const dataRes = Object.values(data);
      let result = dataRes.map(x => template(x));
      render(result, section)
   }

   loadData()


   const template = (data) => html`<tr><td>${data.firstName + data.lastName}</td><td>${data.email}</td><td>${data.course}</td></tr>`




   function onClick() {
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchText = searchElement.value;


      rowElements.forEach(row => {
         row.className = '';
      });

      if (searchText != "") {
         let filteredRows = rowElements.filter(row => {
            let values = Array.from(row.children);

            if (values.some(td => td.textContent.includes(searchText))) {
               row.className = 'select';
            }
         });

      }

      searchElement.value = '';
   }
}