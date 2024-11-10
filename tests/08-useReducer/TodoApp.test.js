import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en TodoApp', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Recolectar la piedra del Alma',
                done: false,
            },
            {
                id: 2,
                description: 'Recolectar la piedra del Poder',
                done: true,
            }
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handlerNewTodo: jest.fn(),
        handlerDeleteTodo: jest.fn(),
        handlerToggleTodo: jest.fn(),
    });

    test('debe de renderizar el componente', () => {
        render(<TodoApp />);

        expect(screen.getByText('Recolectar la piedra del Alma')).toBeTruthy();
        expect(screen.getByText('Recolectar la piedra del Poder')).toBeTruthy();
    });

});