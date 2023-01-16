import { render } from "@testing-library/react";
import * as React from "react";
import { LeaderBoard } from "../Pages";
import StoreProvider from "../components/StoreProvider";
import { BrowserRouter } from "react-router-dom";

describe("LeaderBoard", () => {
	it("will match snapshot", () => {
		const view = render(
			<StoreProvider>
				<BrowserRouter>
					<LeaderBoard />
				</BrowserRouter>
			</StoreProvider>
		);
		expect(view).toMatchSnapshot();
	});
});
