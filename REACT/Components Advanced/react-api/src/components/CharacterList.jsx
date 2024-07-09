import { useState, useEffect } from "react";
import Character from "./Character";


const baseUrl = "https://swapi.dev/api/";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch(`${baseUrl}/people`);
            const result = await response.json();
            setCharacters(result.results);
        }

        getCharacters();
    }, []);





    return (
        <>
            <h2>Characters</h2>
            <ul>
                {characters.map(character => <Character key={character.name} character={character.name} />)}
            </ul>
        </>
    )
}