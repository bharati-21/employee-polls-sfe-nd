import { render, screen } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { PrimaryNavLinks } from "../components";

describe("PrimaryNavLinks", () => {
	it("should render all navigation links correctly", () => {
		render(
			<BrowserRouter>
				<PrimaryNavLinks />
			</BrowserRouter>
		);
		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Leaderboard")).toBeInTheDocument();
		expect(screen.getByText("New Poll")).toBeInTheDocument();
	});

	it("should render 'Add Poll' button with width equal to max text size in small screens", () => {
		render(
			<BrowserRouter>
				<PrimaryNavLinks isMobile={true} />
			</BrowserRouter>
		);
		expect(screen.getByText("New Poll")).toHaveStyle({
			width: "max-content",
		});
	});
});
