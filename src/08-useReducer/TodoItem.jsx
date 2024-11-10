import PropTypes from "prop-types";

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={ `align-self-center ${todo.done ? 'text-decoration-line-through' : ''}` }
          aria-label='item-description'
          onClick={() => onToggleTodo(todo.id)}
        >
            {todo.description}
        </span>
        <button 
          className="btn btn-outline-danger"
          aria-label='delete-btn'
          onClick={() => onDeleteTodo(todo.id)}
        >
            Borrar
        </button>
    </li>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
}
