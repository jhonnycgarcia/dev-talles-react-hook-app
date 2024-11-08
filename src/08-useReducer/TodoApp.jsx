import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Poder',
        done: false,
    },
];

export const TodoApp = () => {
    const [ todos, dispatchTodos ] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1>Todo App</h1>
            <hr />
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
            </ul>
        </>
    )
}
