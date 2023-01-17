import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PrimaryNavLinks } from "./";
import { useInitData } from "../hooks/useInitData";
import { logoutUser } from "../actions";

const Navbar = () => {
	const { authedUser } = useSelector((state) => state);
	const navigate = useNavigate();
	const { clearState } = useInitData();
	const dispatch = useDispatch();

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const handleMobileMenuChange = (show) => {
		setShowMobileMenu(show);
	};

	const handleLogout = () => {
		clearState();
		dispatch(logoutUser());
		navigate("/login");
	};

	return (
		<div className="max-w-100 sticky top-0 z-10 shadow-md bg-slate-800 text-gray-100 py-4 px-8 flex flex-col gap-4 justify-start">
			<nav className="flex justify-between items-center max-w-6xl mx-auto w-full">
				<div className="mobile-primary-nav sm:hidden flex items-center">
					<button
						className="btn-icon flex items-center"
						onClick={() => handleMobileMenuChange(true)}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
				<div className="hidden primary-nav sm:flex gap-8 items-center">
					<PrimaryNavLinks />
				</div>
				<div className="secondary-nav flex items-center gap-4">
					<h4 className="text-sm">{authedUser}</h4>
					<button
						className="btn-primary min-w-[80px] p-1.5 justify-center"
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			</nav>
			<div
				className={`flex flex-col justify-start items-start gap-2 sm:hidden absolute bg-slate-800 text-gray-100 p-4 h-screen left-0 top-0 w-[200px] transition-transform ease-in ${
					showMobileMenu ? "translate-x-0" : "translate-x-[-10000px]"
				}`}
			>
				<button
					className="btn-icon self-end"
					onClick={(e) => handleMobileMenuChange(false)}
				>
					<FontAwesomeIcon icon={faClose} />
				</button>
				<PrimaryNavLinks isMobile={true} />
			</div>
		</div>
	);
};

export { Navbar };
