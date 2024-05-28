const http = require("http");
const fs = require("fs");
const querystring = require("querystring");


// Списък от котки - масив с обекти за всяка котка
const cats = [
    {
        id: 1,
        name: "Tommy",
        imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
        description: "Sweet baby cat, that will eat you in your sleep.",
        breed: "Bamboo cat"
    },
    {
        id: 2,
        name: "Vasi",
        imageUrl: "https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960",
        description: "Sweet baby cat, that will eat you in your sleep.",
        breed: "Persian cat"
    },
    {
        id: 3,
        name: "Joro",
        imageUrl: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?cs=srgb&dl=pexels-tranmautritam-2194261.jpg&fm=jpg",
        description: "Sweet baby cat, that will eat you in your sleep.",
        breed: "Bamboo cat"
    }

]

// Темплейт за всяка котка, който получава котките една по една
const catTemplate = (cat) => `
<li>
    <img src=${cat.imageUrl}
    alt="Black Cat">
    <h3>${cat.name}</h3>
    <p><span>Breed: </span>${cat.breed}</p>
    <p><span>Description: </span>${cat.description}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="">Change Info</a></li>
        <li class="btn delete"><a href="">New Home</a></li>
    </ul>
</li>`


// Сървър
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./views/home.html", { encoding: "utf-8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                res.end();
            }

            res.writeHead(200, {
                "content-type": "text/html"
            });

            // Заменяме плейсхолдъра за котка с всяка една от котките
            res.write(result.replace("%%cat%%", cats.map(cat => catTemplate(cat)).join("")));
            res.end();

        })


    } else if (req.url === "/styles/site.css") {
        fs.readFile("./views/site.css", { encoding: "utf-8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                res.end();
            }

            res.writeHead(200, {
                "content-type": "text/css"
            });
            res.write(result);
            res.end();

        })

    } else if (req.url === "/cats/add-cat" && req.method === "GET") { // зареждане на страницата за добавяне на котка
        fs.readFile("./views/addCat.html", { encoding: "utf-8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                res.end();
            }

            res.writeHead(200, {
                "content-type": "text/html"
            });

            res.write(result);
            res.end();

        })


    } else if (req.url = "/cats/add-cat" && req.method === "POST") { // добавяне на котка с метод гет на същата страница
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("close", () => {
            const result = querystring.parse(body);
            cats.push(result);

            res.writeHead(302, {    // редирект
                "location": "/"
            }
            )
            res.end();
        })

    } else {
        res.writeHead(404, {
            "content-type": "text/html"
        });
        res.write("<h1>No Content</h1>");
        res.end();
    }
})


server.listen(3000);
console.log("Server is listening on port 3000...");