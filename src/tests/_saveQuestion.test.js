import { _saveQuestion } from "../_DATA";

describe("_saveQuestion", () => {
	it("returns saved question when correct data is passed", async () => {
		const optionOneText = "Use TypeScript with React";
		const optionTwoText = "Use JavaScript with React";
		const author = "sarahedo";

		const question = {
			optionOneText,
			optionTwoText,
			author,
		};

		const response = await _saveQuestion(question);
		expect(response).toHaveProperty("id");
		expect(response).toHaveProperty("author");
		expect(response).toHaveProperty("optionOne");
		expect(response).toHaveProperty("optionTwo");
		expect(response).toHaveProperty("timestamp");

		expect(response.optionOne).toEqual({
			votes: [],
			text: optionOneText,
		});
		expect(response.optionTwo).toEqual({
			votes: [],
			text: optionTwoText,
		});
	});

	it("will throw an error if 'optionOneText' is not passed", async () => {
		const optionTwoText = "Use JavaScript with React";
		const author = "sarahedo";

		const question = {
			optionTwoText,
			author,
		};

		await expect(_saveQuestion(question)).rejects.toEqual(
			"Please provide optionOneText, optionTwoText, and author"
		);
	});

	it("will throw an error if 'optionTwoText' is not passed", async () => {
		const optionOneText = "Use TypeScript with React";
		const author = "sarahedo";

		const question = {
			optionOneText,
			author,
		};

		await expect(_saveQuestion(question)).rejects.toEqual(
			"Please provide optionOneText, optionTwoText, and author"
		);
	});

	it("will throw an error if 'author' is not passed", async () => {
		const optionOneText = "Use TypeScript with React";
		const optionTwoText = "Use JavaScript with React";

		const question = {
			optionOneText,
			optionTwoText,
		};

		await expect(_saveQuestion(question)).rejects.toEqual(
			"Please provide optionOneText, optionTwoText, and author"
		);
	});
});
