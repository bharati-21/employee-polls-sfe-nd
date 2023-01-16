import { render } from "@testing-library/react";
import * as React from "react";
import { Question } from "../Pages";
import StoreProvider from "../components/StoreProvider";
import { BrowserRouter } from "react-router-dom";

describe("Question", () => {
	it("will match snapshot", () => {
		const view = render(
			<StoreProvider>
				<BrowserRouter>
					<Question />
				</BrowserRouter>
			</StoreProvider>
		);
		expect(view).toMatchSnapshot();
	});
});
