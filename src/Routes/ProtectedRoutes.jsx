import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Navbar } from "../components";

const ProtectedRoutes = () => {
	const { authedUser } = useSelector((state) => state);
	const location = useLocation();
	return authedUser ? (
		<>
			<Navbar />
			<Outlet />
		</>
	) : (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	);
};

export { ProtectedRoutes };
