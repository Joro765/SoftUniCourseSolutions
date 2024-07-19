import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "./Developers";

export default function DeveloperDetails() {
    const [developer, setDeveloper] = useState({});
    const [stack, setStack] = useState([]);
    const params = useParams();
    const navigate = useNavigate(); // за редиректи !!!

    useEffect(() => {
        async function loadDeveloper() {
            const response = await fetch(`${baseUrl}/${params.developerId}`);

            if (response.statusTexttext == "No Content" || response.statusText == "Not Found") {
                // Redirect
                navigate("/");
                return;
            }

            const result = await response.json();
            setDeveloper(result);
            setStack(result.stack);
        }

        loadDeveloper();
    }, []);

    return (
        <div className="developer-details-container">
            <h1>Developer Contacts</h1>
            <div className="developer-information">
                <h3>Name: {developer.name}</h3>
                <h4>Email: {developer.email} </h4>
                <h4>Role: {developer.role}</h4>
                <ul>Teck Stack:
                    {stack.map((tech) => (<li key={tech}>{tech}</li>))}
                </ul>
                <h4>Price: {developer.price}</h4>
            </div>
            <div className="developer-details-buttons">
                <button>Hire Developer</button>
                <button>Message Developer</button>
            </div>
        </div>
    )
}