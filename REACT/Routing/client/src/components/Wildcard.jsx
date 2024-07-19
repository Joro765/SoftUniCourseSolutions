import { Link } from "react-router-dom";

export default function Wildcard() {
    return (
        <>
            <div className="container wildcard">
                <h1>Page not found!</h1>
                <p>Go back to <Link to="/">Home</Link></p>
            </div>
        </>
    )
}