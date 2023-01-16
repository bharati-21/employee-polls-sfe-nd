import { render, screen } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components";
import StoreProvider from "../components/StoreProvider";

const NavbarWrapper = () => {
	return (
		<StoreProvider>
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</StoreProvider>
	);
};

describe("Navbar", () => {
	it("should render three buttons in the navbar correctly", () => {
		render(<NavbarWrapper />);
		expect(screen.getAllByRole("button")).toHaveLength(3);
	});

	it("should render logout button in the navbar correctly", () => {
		render(<NavbarWrapper />);
		expect(
			screen
				.getAllByRole("button")
				.find((button) => button.textContent === "Logout")
		).not.toBeNull();
	});
});
