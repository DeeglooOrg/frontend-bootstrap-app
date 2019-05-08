import { NUMBER_UP, NUMBER_DOWN } from "../actions";

const initialState = {
  number: 0,
  message: "Some random message from redux state"
};

const firstReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === NUMBER_UP) {
    newState.number++;
  } else if (action.type === NUMBER_DOWN) {
    newState.number--;
  } else {
    return newState;
  }

  return newState;
};

export default firstReducer;
