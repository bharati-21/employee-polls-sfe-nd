import { _getQuestions } from "../_DATA";

describe("_getQuestions", () => {
	it("returns object of object when questions are fetched", async () => {
		const response = await _getQuestions();
		expect(Object.keys(response)).toHaveLength(6);
		expect(response).toHaveProperty("8xf0y6ziyjabvozdd253nd");
		expect(response).toHaveProperty("6ni6ok3ym7mf1p33lnez");
		expect(response).toHaveProperty("am8ehyc8byjqgar0jgpub9");
		expect(response).toHaveProperty("loxhs1bqm25b708cmbf3g");
		expect(response).toHaveProperty("vthrdm985a262al8qx3do");
		expect(response).toHaveProperty("xj352vofupe1dqz9emx13r");
	});
});
