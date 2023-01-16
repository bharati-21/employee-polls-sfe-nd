import { render } from "@testing-library/react";
import * as React from "react";
import { Home } from "../Pages";
import StoreProvider from "../components/StoreProvider";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
	it("will match snapshot", () => {
		const view = render(
			<StoreProvider>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</StoreProvider>
		);
		expect(view).toMatchSnapshot();
	});
});
