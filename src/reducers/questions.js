import {
	ADD_QUESTION,
	CLEAR_QUESTIONS,
	GET_QUESTIONS,
	REMOVE_VOTE_QUESTION,
	VOTE_QUESTION,
} from "../actions";

const questions = (state = [], action) => {
	switch (action.type) {
		case GET_QUESTIONS:
			return action.questions;
		case CLEAR_QUESTIONS:
			return action.questions;
		case VOTE_QUESTION: {
			const { questionId: qId } = action.info;
			const { option } = action.info;
			const { authedUser: user } = action.info;

			return state.map((question) =>
				question.id === qId
					? {
							...question,
							[option]: {
								...question[option],
								votes: question[option].votes.concat([user]),
							},
					  }
					: question
			);
		}
		case REMOVE_VOTE_QUESTION: {
			const { questionId: qId } = action.info;
			const { option } = action.info;
			const { authedUser: user } = action.info;

			return state.map((question) =>
				question.id === qId
					? {
							...question,
							[option]: {
								...question[option],
								votes: question[option].votes.filter(
									(u) => u !== user
								),
							},
					  }
					: question
			);
		}
		case ADD_QUESTION:
			return state.concat([action.question]);
		default:
			return state;
	}
};

export { questions };
