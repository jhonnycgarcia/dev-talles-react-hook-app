import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";


export const TodoApp = () => {
    const { 
        todos, 
        todosCount,
        pendingTodosCount,
        handlerNewTodo, 
        handlerDeleteTodo, 
        handlerToggleTodo
    } = useTodos();

    return (
        <>
            <h1>
                Todo App: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handlerDeleteTodo}
                        onToggleTodo={handlerToggleTodo}
                    />
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
