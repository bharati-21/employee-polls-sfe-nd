import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import { useInitData } from "./hooks/useInitData";
import NavRoutes from "./Routes/NavRoutes";

const App = () => {
	const { initQuestions, clearState } = useInitData();
	const { authedUser } = useSelector((state) => state);
	useEffect(() => {
		if (authedUser) {
			try {
				initQuestions();
			} catch (error) {
				console.warn(error);
				alert(
					"Error occured while initializing App. Please try again."
				);
			}
		} else {
			clearState();
		}
	}, [initQuestions, authedUser, clearState]);

	return (
		<div className="App">
			<LoadingBar
				style={{
					zIndex: 20,
					backgroundColor: "rgb(234 179 8)",
				}}
			/>
			<NavRoutes />
		</div>
	);
};

export default App;
