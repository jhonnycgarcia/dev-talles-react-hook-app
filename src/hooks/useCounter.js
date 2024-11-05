import { useState } from "react";

export const userCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    return {
        counter,
    };
}