import { render } from "@testing-library/react";
import * as React from "react";
import { NotFound } from "../Pages";
import StoreProvider from "../components/StoreProvider";
import { BrowserRouter } from "react-router-dom";

describe("NotFound", () => {
	it("will match snapshot", () => {
		const view = render(
			<StoreProvider>
				<BrowserRouter>
					<NotFound />
				</BrowserRouter>
			</StoreProvider>
		);
		expect(view).toMatchSnapshot();
	});
});
