import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import PostReducer from "../pages/posts/post.reducer";
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const store = createStore(
  combineReducers({
    postreducer: PostReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
