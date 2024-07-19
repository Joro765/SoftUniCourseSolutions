import DeveloperCard from "./DeveloperCard";
import { useState, useEffect } from "react";


export const baseUrl = "http://localhost:3030/data/developers";



export default function DevelopersList() {
    console.log("render");
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        async function getDevelopers() {
            const response = await fetch(baseUrl);
            const result = await response.json();

            setDevelopers(result);
        }

        getDevelopers();

    }, []);



    return (
        <>
            <div className="developers-section">
                {developers.map((developer) => (<DeveloperCard key={developer._id} props={developer} />))}
            </div>
        </>
    )
}