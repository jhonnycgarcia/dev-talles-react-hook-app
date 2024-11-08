import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del Poder',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 6,
    //     description: 'Recolectar la piedra de la Mente',
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const TodoApp = () => {
    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);

    // Guardar en localStorage los todos cuando cambien
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handlerNewTodo = (todo) => {
        console.log({ todo });
        const action = { type: 'ADD', payload: todo };
        dispatchTodos(action);
    };

    return (
        <>
            <h1>
                Todo App: 10, <small>pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar Todos</h4>
                    <hr />
                    <TodoAdd onNewTodo={handlerNewTodo}/>
                </div>

            </div>


        </>
    )
}
