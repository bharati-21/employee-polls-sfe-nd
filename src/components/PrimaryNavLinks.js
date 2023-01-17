import { Link } from "react-router-dom";

const PrimaryNavLinks = ({ isMobile }) => {
	return (
		<>
			<Link to="/" className="link text-gray-100">
				Home
			</Link>
			<Link to="/leaderboard" className="link text-gray-100">
				Leaderboard
			</Link>
			<Link
				to="/add"
				className={`btn-primary-full-outline text-gray-100 text ${
					isMobile ? "w-max" : "w-full"
				}`}
			>
				New Poll
			</Link>
		</>
	);
};

export { PrimaryNavLinks };
