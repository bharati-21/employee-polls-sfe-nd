import { Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./ProtectedRoutes";
import {
	Home,
	AddPoll,
	LeaderBoard,
	Question,
	Login,
	NotFound,
} from "../Pages";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/" element={<Home />} />
				<Route path="/leaderboard" element={<LeaderBoard />} />
				<Route path="/questions/:questionId" element={<Question />} />
				<Route path="/add" element={<AddPoll />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/error" element={<NotFound />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default NavRoutes;
