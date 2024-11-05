import { userCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter } = userCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary">-1</button>
            <button className="btn btn-primary">Reset</button>
            <button className="btn btn-primary">+1</button>
        </>
    )
}
