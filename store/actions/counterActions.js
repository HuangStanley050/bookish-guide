import * as actionType from "./index";

export const incrementCounter = () => ({
  type: actionType.INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: actionType.DECREMENT_COUNTER
});
