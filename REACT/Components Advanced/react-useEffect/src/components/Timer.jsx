import { useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();

        return currentSeconds;
    });


    useEffect(() => {
        setInterval(() => {
            setTime(previosTime => previosTime + 1);
        }, 1000)

    }, []);


    function addSeconds() {
        setTime(previosTime => previosTime + 10);
    }



    return (
        <>
            <h1>Timer</h1>
            <p>{time}</p>
            <button onClick={addSeconds}>Add 10 seconds</button>
        </>
    )
}