export const getSortedUsersByQuestionsAnswers = (users) =>
	users.sort((userA, userB) => {
		const questionsLenB = userB.questions.length;
		const answersLenB = Object.values(userB.answers).length;
		const totalB = questionsLenB + answersLenB;

		const questionsLenA = userA.questions.length;
		const answersLenA = Object.values(userA.answers).length;
		const totalA = questionsLenA + answersLenA;

		return totalB - totalA;
	});
