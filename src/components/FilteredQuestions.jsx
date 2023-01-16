import React from "react";
import { Link } from "react-router-dom";

const FilteredQuestions = ({ filteredQuestions }) => {
	return (
		<div className="bg-slate-200 flex flex-wrap justify-center gap-8 px-8 py-4">
			{!filteredQuestions.length ? (
				<h1 className="text-2xl">You're all caught up!</h1>
			) : (
				filteredQuestions.map(({ id, author, timestamp = "" }) => (
					<div
						className="max-w-sm p-4 bg-white rounded-sm shadow-md flex flex-col justify-start items-center gap-2"
						key={id}
					>
						<h5 className="font-bold tracking-tight text-slate-900">
							{author}
						</h5>
						<p className="text-gray-700 text-sm dark:text-gray-400">
							{new Date(timestamp).toLocaleTimeString() +
								" | " +
								new Date(timestamp).toLocaleDateString()}
						</p>
						<Link
							to={`/question/${id}`}
							className="mt-4 btn-primary-full text-xs font-semibold"
						>
							View Poll
						</Link>
					</div>
				))
			)}
		</div>
	);
};

export { FilteredQuestions };
