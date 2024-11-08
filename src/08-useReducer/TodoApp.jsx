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
    const [todos, dispatchTodos] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1>
                Todo App: 10, <small>pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map((todo) => (
                                <li 
                                    key={todo.id}
                                    className="list-group-item d-flex justify-content-between"
                                >
                                    <span className="align-self-center">
                                        Item1
                                    </span>
                                    <button className="btn btn-outline-danger">
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar Todos</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="¿Qué necesitas hacer?"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                </div>

            </div>


        </>
    )
}
