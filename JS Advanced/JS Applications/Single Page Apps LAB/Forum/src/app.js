import { renderHome } from "./home.js";


document.querySelector("nav a").addEventListener("click", renderHome); // при натискане на бутон HOME презарежда home страницата

// Рендериране на хоум страницата веднага при влизане в сайта
renderHome()