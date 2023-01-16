import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers, createStore } from "redux";

import { middleware } from "../middleware";
import { users, authedUser, questions } from "../reducers";

const combinedReducers = combineReducers({
	users,
	authedUser,
	questions,
	loadingBar: loadingBarReducer,
});

const store = createStore(combinedReducers, middleware);

export default store;
