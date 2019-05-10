const initialState = {
    message: 'Some random message from redux state',
};

const secondReducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === 'CHANGE_MESSAGE') {
        return {
            ...newState,
            message: action.message,
        };
    } else {
        return newState;
    }
};

export default secondReducer;
