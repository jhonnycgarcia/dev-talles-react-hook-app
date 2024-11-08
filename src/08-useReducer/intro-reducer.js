console.log('intro-reducer');

const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del Alma',
        done: false,
    }
];

export const todoReducer = (state = initialState, action = {}) => {

    if(action.type === 'ADD_TODO') {
        return [ ...state, action.payload ];
    }

    return state;
};


let todos = todoReducer();
console.log('todos', todos);

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}

const addTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log('state', todos);