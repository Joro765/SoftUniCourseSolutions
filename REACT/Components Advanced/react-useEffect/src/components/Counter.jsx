import { useState, useEffect } from "react";



export default function Counter() {
    const [count, setCount] = useState(0);
    const [decaCount, setDecaCount] = useState(0);

    useEffect(() => {
        console.log("Component Intitialized!");
    }, [])


    useEffect(() => {
        console.log("Counter increased!");
    }, [count])


    useEffect(() => {
        console.log("DecaCount increased!");
    }, [decaCount]);


    function onClickHandler() {
        if (count % 10 === 0 && count !== 0) {
            setDecaCount(prevDecaCount => prevDecaCount + 1);
        }
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={onClickHandler}>+</button>
        </>
    )
}