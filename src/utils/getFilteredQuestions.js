export const getFilteredQuestions = (questions, type, authedUser) => {
	if (type === 0) {
		return questions.filter(
			(question) =>
				!(
					question.optionOne.votes.includes(authedUser) ||
					question.optionTwo.votes.includes(authedUser)
				)
		);
	}
	return questions.filter(
		(question) =>
			question.optionOne.votes.includes(authedUser) ||
			question.optionTwo.votes.includes(authedUser)
	);
};
