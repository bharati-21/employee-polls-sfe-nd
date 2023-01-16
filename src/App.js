import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import { useInitData } from "./hooks/useInitData";
import NavRoutes from "./Routes/NavRoutes";

const App = () => {
	const { initData, clearState } = useInitData();
	const { authedUser } = useSelector((state) => state);
	useEffect(() => {
		if (authedUser) {
			try {
				initData();
			} catch (error) {
				console.warn(error);
				alert(
					"Error occured while initializing App. Please try again."
				);
			}
		} else {
			clearState();
		}
	}, [initData, authedUser, clearState]);

	return (
		<div className="App">
			<LoadingBar
				style={{
					zIndex: 20,
				}}
			/>
			<NavRoutes />
		</div>
	);
};

export default App;
