import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      () => { setCounter((prev) => prev + 1) },
      [],
    );

    useEffect(() => {
        // increment();
    }, [increment])
    

    return (
        <>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}
