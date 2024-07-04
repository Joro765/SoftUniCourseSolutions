import { useState } from "react";

import KillCounter from "./KillCounter";

export default function Counter() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }


    let countText = `Positive: ${count}`;
    let color = "green";

    if (count < 0) {
        countText = `Negative: ${count}`;
        color = "red";
    }

    return (
        <>
            <KillCounter count={count} />
            {count < 16 && <button onClick={increment}>+</button>}
            <p style={{ color }}>{countText}</p>
            <button onClick={decrement}>-</button>

        </>
    )

}

