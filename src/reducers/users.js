import {
	CLEAR_USERS,
	GET_USERS,
	UPDATE_ANSWERED,
	UPDATE_CREATED_QUESTIONS,
} from "../actions";

const users = (state = [], action) => {
	switch (action.type) {
		case GET_USERS:
			return action.users;
		case CLEAR_USERS:
			return action.users;
		case UPDATE_ANSWERED: {
			const { questionId, authedUser } = action.info;
			return state.map((user) =>
				user.id === authedUser
					? {
							...user,
							questions: user.questions.concat([questionId]),
					  }
					: user
			);
		}
		case UPDATE_CREATED_QUESTIONS: {
			const { questionId, authedUser } = action.info;
			return state.map((user) =>
				user.id === authedUser
					? {
							...user,
							answers: {
								...user.answers,
								[questionId]: questionId,
							},
					  }
					: user
			);
		}
		default:
			return state;
	}
};

export { users };
