// Get root html element
const rootHtmlElement = document.getElementById("root");

// Create react root elemet
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);


// Create basic react element
const headingSectionElement = (
    <heading className="site-heading">
        <h1>Hello From JSX!</h1>
        <h2>JSX is amazing</h2>
    </heading>
);

// render content
rootReactElement.render(headingSectionElement);