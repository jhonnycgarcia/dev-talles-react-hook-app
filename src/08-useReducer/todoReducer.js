
export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ADD':
            throw new Error('Action type ADD not implemented');
    
        default:
            return initialState;
    }
};