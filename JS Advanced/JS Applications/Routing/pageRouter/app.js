import page from "../node_modules/page/page.mjs"; // импортваме библиотеката
import { homeView } from "./views/home.js";
import { articlesView } from "./views/articles.js";
import { aboutView } from "./views/about.js";
import { articleDetailsView } from "./views/articleDetails.js"


// Сетъпваме спрямо даден линк да вика дадена функция
page("/home", homeView);
page("/articles", articlesView);
page("/about", aboutView);
page("/articles/:articleID", articleDetailsView) // Пренася контекст до articleDetails -- взима ид-то от бутонът read more !!!

// Стартираме руутера
page.start();