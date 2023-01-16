const GET_USERS = "GET_USERS",
	CLEAR_USERS = "CLEAR_USERS",
	UPDATE_CREATED_QUESTIONS = "UPDATE_CREATED_QUESTIONS",
	UPDATE_ANSWERED = "UPDATE_ANSWERED";

const getUsers = (users) => {
	return {
		type: GET_USERS,
		users,
	};
};

const clearUsers = () => {
	return {
		type: CLEAR_USERS,
		users: [],
	};
};

const updateCreatedQuestions = (info) => {
	return {
		type: UPDATE_CREATED_QUESTIONS,
		info,
	};
};

const updateAnswered = (info) => {
	return {
		type: UPDATE_ANSWERED,
		info,
	};
};

export {
	getUsers,
	GET_USERS,
	clearUsers,
	CLEAR_USERS,
	updateCreatedQuestions,
	updateAnswered,
	UPDATE_CREATED_QUESTIONS,
	UPDATE_ANSWERED,
};
