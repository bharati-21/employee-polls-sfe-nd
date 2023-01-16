const GET_QUESTIONS = "GET_QUESTIONS",
	CLEAR_QUESTIONS = "CLEAR_QUESTIONS",
	VOTE_QUESTION = "VOTE_QUESTION",
	REMOVE_VOTE_QUESTION = "REMOVE_VOTE_QUESTION",
	ADD_QUESTION = "ADD_QUESTION";

const getQuestions = (questions) => {
	return {
		type: GET_QUESTIONS,
		questions,
	};
};

const clearQuestions = () => {
	return {
		type: CLEAR_QUESTIONS,
		questions: [],
	};
};

const voteQuestion = (info) => {
	return {
		type: VOTE_QUESTION,
		info,
	};
};

const removeVoteQuestion = (info) => {
	return {
		type: REMOVE_VOTE_QUESTION,
		info,
	};
};

const addQuestion = (question) => {
	return {
		type: ADD_QUESTION,
		question,
	};
};

export {
	getQuestions,
	GET_QUESTIONS,
	clearQuestions,
	CLEAR_QUESTIONS,
	voteQuestion,
	VOTE_QUESTION,
	removeVoteQuestion,
	REMOVE_VOTE_QUESTION,
	addQuestion,
	ADD_QUESTION,
};
