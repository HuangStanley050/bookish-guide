import * as actionType from "../actions";
const initialState = {
  value: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case actionType.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;
