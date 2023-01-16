import { render } from "@testing-library/react";
import * as React from "react";
import { Login } from "../Pages";
import StoreProvider from "../components/StoreProvider";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
	it("will match snapshot", () => {
		const view = render(
			<StoreProvider>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</StoreProvider>
		);
		expect(view).toMatchSnapshot();
	});
});
