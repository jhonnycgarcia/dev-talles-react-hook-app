import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onReset } = useForm({ description: '' });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(description.length <= 1) { return; }

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        onReset();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué necesitas hacer?"
                className="form-control"
                value={description}
                name="description"
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}
