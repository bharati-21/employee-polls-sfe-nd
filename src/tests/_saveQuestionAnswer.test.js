import { _saveQuestionAnswer } from "../_DATA";

describe("_saveQuestionAnswer", () => {
	it("returns true to indicate answersaved when correct data is passed", async () => {
		const authedUser = "sarahedo";
		const qid = "6ni6ok3ym7mf1p33lnez";
		const answer = "optionOne";

		const answerInfo = {
			authedUser,
			qid,
			answer,
		};

		const response = _saveQuestionAnswer(answerInfo);
		await expect(response).resolves.toBeTruthy();
	});

	it("throws an error if 'authedUser' is not passed", async () => {
		const qid = "6ni6ok3ym7mf1p33lnez";
		const answer = "optionOne";

		const answerInfo = {
			qid,
			answer,
		};

		const response = _saveQuestionAnswer(answerInfo);
		await expect(response).rejects.toEqual(
			"Please provide authedUser, qid, and answer"
		);
	});

	it("throws an error if 'qid' is not passed", async () => {
		const authedUser = "sarahedo";
		const answer = "optionOne";

		const answerInfo = {
			authedUser,
			answer,
		};

		const response = _saveQuestionAnswer(answerInfo);
		await expect(response).rejects.toEqual(
			"Please provide authedUser, qid, and answer"
		);
	});

	it("throws an error if 'answer' is not passed", async () => {
		const authedUser = "sarahedo";
		const qid = "6ni6ok3ym7mf1p33lnez";

		const answerInfo = {
			authedUser,
			qid,
		};

		const response = _saveQuestionAnswer(answerInfo);
		await expect(response).rejects.toEqual(
			"Please provide authedUser, qid, and answer"
		);
	});
});
