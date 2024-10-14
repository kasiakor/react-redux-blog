import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { postReducer } from "../reducers/postReducer";

const middlewares = [reduxThunk, logger];
const middlewareEnhancers = applyMiddleware(...middlewares);

const store = createStore(
  postReducer,
  composeWithDevTools(middlewareEnhancers)
);

export default store;
