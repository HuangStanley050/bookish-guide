import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const composeEnhancers = compose(
  typeof window !== "undefined" && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

const store = createStore(rootReducer, composeEnhancers);

export default store;
