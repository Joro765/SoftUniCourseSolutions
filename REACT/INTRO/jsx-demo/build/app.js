// Get root html element
var rootHtmlElement = document.getElementById("root");

// Create react root elemet
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
var headingSectionElement = React.createElement(
    "heading",
    { className: "site-heading" },
    React.createElement(
        "h1",
        null,
        "Hello From JSX!"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is amazing"
    )
);

// render content
rootReactElement.render(headingSectionElement);