export const getSortedQuestionsByTimestamp = (questions) =>
	questions.sort(
		(questionA, questionB) => questionB.timestamp - questionA.timestamp
	);
