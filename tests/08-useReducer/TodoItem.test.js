
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en TodoItem', () => {
    const todo = {
        id: 1,
        description: 'Recolectar la piedra del Alma',
        done: false,
    };
    
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    test('debe de renderizar el componente', () => {
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}
        />);

        const li = screen.getByRole('listitem');
        expect(li.className).toBe('list-group-item d-flex justify-content-between');

        const span = screen.getByLabelText('item-description');
        expect(span.className).toContain('align-self-center');
        expect(span.className).not.toContain('text-decoration-line-through');
        expect(span.textContent).toBe(todo.description);
    });

    test('debe de mostrar el componente con el estado done', () => {
        todo.done = true;
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}
        />);

        const span = screen.getByLabelText('item-description');
        expect(span.className).toContain('text-decoration-line-through');
    });

    test('span debe llamar el Toggle todo cuando se hace click', () => {
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}
        />);

        const span = screen.getByLabelText('item-description');
        fireEvent.click(span);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('el botón delete de llamar el onDeleteTodo cuando se hace click', () => {
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}
        />);

        // const button = screen.getByLabelText('delete-btn');
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });

});