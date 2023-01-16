import { LOGIN_USER, LOGOUT_USER } from "../actions";

const authedUser = (state = null, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return action.authedUser;
		case LOGOUT_USER:
			return null;
		default:
			return state;
	}
};

export { authedUser };
