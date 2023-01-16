import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { AddPoll } from "../Pages";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

const combinedReducers = combineReducers({
	authedUser: "sarahode",
	loadingBar: loadingBarReducer,
});
const store = createStore(combinedReducers);

const AddPollWrapper = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AddPoll />
			</BrowserRouter>
		</Provider>
	);
};

describe("AddPoll", () => {
	it("will match snapshot", () => {
		const view = render(<AddPollWrapper />);
		expect(view).toMatchSnapshot();
	});

	it("should successfully create a new poll question on submit click", async () => {
		const jsdomAlert = window.alert;
		window.alert = jest.fn();
		const jsdomConsole = window.console;
		console.warn = jest.fn();

		render(<AddPollWrapper />);
		const optionOneText = screen.getByTestId("input-option-one-text");
		const optionTwoText = screen.getByTestId("input-option-two-text");
		const button = screen.getByRole("button");

		const optionOne = "Use TypeScript with React";
		const optionTwo = "Use JavaScript with React";

		fireEvent.change(optionOneText, { target: { value: optionOne } });
		fireEvent.change(optionTwoText, { target: { value: optionTwo } });
		fireEvent.click(button);
		await waitFor(() => {
			expect(button).toBeDisabled();
		});

		window.alert = jsdomAlert;
		console.warn = jsdomConsole;
	});
});
