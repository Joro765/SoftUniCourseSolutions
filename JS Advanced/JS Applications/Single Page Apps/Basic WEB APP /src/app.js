import { router } from './router.js';
import { authUpdate } from './Auth.js';
authUpdate(); // Update STATE AFTER LOAD


// Навигация евент лисънърс за всички бутони общо
const navigationElement = document.querySelector('.navigation');
navigationElement.addEventListener("click", (e) => {
    e.preventDefault();

    // Ако елементът има tagName му взимаме href
    if (e.target.tagName == "A") { // проверка дали е anchor element защото ако не е може да няма href атрибут !!!
        let url = new URL(e.target.href); // pathname ще ни върне разширението на линка за да може да  навигираме по него !!!

        document.querySelector(".active").classList.remove("active"); // махаме клас за цвят от елемента
        e.target.classList.add("active"); // добавяме клас за цвят на кърънт натиснатия бутон

        router(url.pathname);
    }
})