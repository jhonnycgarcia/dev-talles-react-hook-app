
export const todoReducer = (initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD':
            return [ ...initialState, payload ];
        case 'DELETE':
            return initialState.filter(todo => todo.id !== payload);
        default:
            return initialState;
    }
};