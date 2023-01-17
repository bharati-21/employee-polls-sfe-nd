import { useSelector } from "react-redux";

import { TableBody, TableHead } from "../components";
import { getSortedUsersByQuestionsAnswers } from "../utils";

const TABLE_HEADINGS = [
	{
		id: 0,
		name: "Name",
	},
	{
		id: 1,
		name: "Answered",
	},
	{
		id: 2,
		name: "Created",
	},
];

const LeaderBoard = () => {
	const {
		users = [],
		questions = [],
		authedUser = "",
	} = useSelector((state) => state);

	const sortedUsers = getSortedUsersByQuestionsAnswers(users);
	const isDataLoading = questions.length === 0 || users.length === 0;

	return isDataLoading ? null : (
		<div className="min-h-[90vh] h-full w-full max-w-6xl mx-auto p-8 flex flex-col gap-4 justify-center">
			<h1 className="text-3xl">Leaderboard</h1>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-400">
					<TableHead columns={TABLE_HEADINGS} />
					<TableBody users={sortedUsers} authedUser={authedUser} />
				</table>
			</div>
		</div>
	);
};

export { LeaderBoard };
