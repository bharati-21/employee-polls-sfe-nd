import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-8 p-8">
			<h1 className="text-4xl">404! Page Not Found!</h1>
			<Link to="/" className="btn-primary">
				Go Back Home
			</Link>
		</div>
	);
};

export { NotFound };
