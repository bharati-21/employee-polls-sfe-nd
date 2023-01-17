import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "react-redux-loading-bar";

import { clearQuestions, getQuestions } from "../actions";
import { clearUsers, getUsers } from "../actions";
import { _getQuestions, _getUsers } from "../_DATA";

const useInitData = () => {
	const dispatch = useDispatch();

	const initUsers = useCallback(async () => {
		dispatch(showLoading());
		const users = await _getUsers();
		const userArray = Object.values(users);
		dispatch(getUsers(userArray));
		dispatch(hideLoading());
	}, [dispatch]);

	const initQuestions = useCallback(async () => {
		dispatch(showLoading());
		const questions = await _getQuestions();
		const questionsArray = Object.values(questions);
		dispatch(getQuestions(questionsArray));
		dispatch(hideLoading());
	}, [dispatch]);

	const clearState = useCallback(async () => {
		dispatch(clearQuestions());
		dispatch(clearUsers());
	}, [dispatch]);

	return { initUsers, initQuestions, clearState };
};

export { useInitData };
