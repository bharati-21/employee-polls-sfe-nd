const LOGIN_USER = "LOGIN_USER",
	LOGOUT_USER = "LOGOUT_USER";

const loginUser = (user) => {
	return {
		type: LOGIN_USER,
		authedUser: user,
	};
};

const logoutUser = () => {
	return {
		type: LOGOUT_USER,
		authedUser: null,
	};
};

export { loginUser, logoutUser, LOGIN_USER, LOGOUT_USER };
