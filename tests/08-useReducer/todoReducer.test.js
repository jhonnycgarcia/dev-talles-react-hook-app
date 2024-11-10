import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {
    const initialState = [
        {
            id: 1,
            todo: 'Recolectar la piedra del Alma',
            done: false,
        },
    ];

    test('debe de retornar el estado inicial', () => {
        const newState = todoReducer(initialState, { });
        expect(newState).toEqual(initialState);
    });

    test('debe de agregar un nuevo item', () => {
        const action = { 
            type: 'ADD', 
            payload: { 
                id: 2, 
                todo: 'Recolectar la piedra del Poder', 
                done: false 
            } 
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de borrar un item', () => {
        const action = { 
            type: 'DELETE', 
            payload: 1 
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        expect(newState).not.toContain(action.payload);
    });

    test('debe de cambiar el estado del item', () => {
        const action = { 
            type: 'TOGGLE', 
            payload: 1 
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    });

});