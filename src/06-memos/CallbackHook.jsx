import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (value) => { setCounter((prev) => prev + value) },
      [],
    );

    useEffect(() => {
        // increment();
    }, [increment])
    

    return (
        <>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={() => increment(5)} />
        </>
    )
}
