import { _getUsers } from "../_DATA";

describe("_getUsers", () => {
	it("returns object of object when users are fetched", async () => {
		const response = await _getUsers();
		expect(Object.keys(response)).toHaveLength(4);
		expect(response).toHaveProperty("sarahedo");
		expect(response).toHaveProperty("tylermcginnis");
		expect(response).toHaveProperty("mtsamis");
		expect(response).toHaveProperty("zoshikanlu");
	});
});
