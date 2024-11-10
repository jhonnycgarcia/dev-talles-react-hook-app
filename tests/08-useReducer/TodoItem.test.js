
import { render, screen } from '@testing-library/react';
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

});