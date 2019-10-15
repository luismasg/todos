import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./reducer";
import Thunk from "redux-thunk";

export default createStore(
  Reducers,
  {},
  composeWithDevTools({ name: "To dos" })(applyMiddleware(Thunk))
);
