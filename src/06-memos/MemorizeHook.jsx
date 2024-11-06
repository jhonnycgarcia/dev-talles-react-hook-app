import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumbers = 100) => {
    for (let i = 0; i < iterationNumbers; i++) {
        console.log('heavyStuff...', i);
    }
    return `${iterationNumbers} iterations done`;
}

export const MemorizeHook = () => {
    const { counter, increment, decrement } = useCounter(100);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary mt-2"
                onClick={() => decrement()}
            >
                -1
            </button>
            <button
                className="btn btn-primary mt-2"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-primary mt-2"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
