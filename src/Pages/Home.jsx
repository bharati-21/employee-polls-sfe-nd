import { useState } from "react";
import { useSelector } from "react-redux";

import { FilteredQuestions } from "../components";
import { getFilteredQuestions, getSortedQuestionsByTimestamp } from "../utils";

const TABS = [
	{
		tabIndex: 0,
		tabName: "Unanswered",
	},
	{
		tabIndex: 1,
		tabName: "Answered",
	},
];

const Home = () => {
	const [activeTab, setActiveTab] = useState(0);
	const { questions, authedUser } = useSelector((state) => state);

	const filteredQuestions = getFilteredQuestions(
		questions,
		activeTab,
		authedUser
	);
	const sortedFilteredQuestions =
		getSortedQuestionsByTimestamp(filteredQuestions);

	const handleToggleTab = (e) => {
		const { value } = e.target;
		setActiveTab(parseInt(value));
	};

	return (
		<div className="min-h-screen p-8 max-w-6xl flex flex-col justify-start mx-auto">
			<div
				className="relative w-full p-5 py-6 h-8 flex justify-start gap-8 shadow-2xl shadow-900/20 overflow-hidden transition items-center bg-slate-800 text-gray-100 text-lg"
				role="tablist"
				aria-label="tabs"
			>
				{TABS.map(({ tabName, tabIndex }) => (
					<button
						role="tab"
						className={`inline-block hover:text-yellow-400 font-semibold ${
							activeTab === tabIndex
								? "border-b-2 border-b-yellow-500"
								: "border-b-none"
						}`}
						value={tabIndex}
						onClick={handleToggleTab}
						key={tabIndex}
					>
						{tabName}
					</button>
				))}
			</div>
			<FilteredQuestions filteredQuestions={sortedFilteredQuestions} />
		</div>
	);
};

export { Home };
