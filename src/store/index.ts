import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { newsReducer } from "./reducers/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
