import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../actions/";
import { useInitData } from "../hooks/useInitData";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const { users } = useSelector((state) => state);

	const [user, setUser] = useState({
		userId: "",
		password: "",
	});

	const { initUsers } = useInitData();
	useEffect(() => {
		try {
			initUsers();
		} catch (error) {
			console.warn(error);
			alert("Error occured while fetching users. Please try again.");
		}
	}, [initUsers]);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(loginUser(user.userId));
		navigate(location?.state?.from ?? "/", { replace: true });
	};

	const handleUserSelected = (e) => {
		const id = e.target.value;
		const { password = "" } = users.find((user) => user.id === id);

		setUser({
			userId: id ?? "",
			password: password ?? "",
		});
	};

	const { userId = "", password = "" } = user;
	console.log(userId, password);

	return (
		<div className="flex h-screen items-center justify-center py-1-5 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<h1 className="text-center text-4xl">Employee Polls</h1>
				<div>
					<h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
						Sign in
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Select an option
						<select
							id="countries"
							className=" text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
							onChange={handleUserSelected}
							value={userId}
						>
							<option value="" disabled>
								Select a user
							</option>
							{users.map((u) => (
								<option key={u.id} value={u.id}>
									{u.name}
								</option>
							))}
						</select>
					</label>
					<div className="shadow-sm">
						<div className="text-left mb-4">
							<label>
								<span className="text-lg inline-block mb-1">
									Username
								</span>
								<input
									id="username"
									name="username"
									type="text"
									required
									className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
									placeholder="Username"
									disabled
									value={userId}
								/>
							</label>
						</div>
						<div className="text-left">
							<label>
								<span className="text-lg inline-block mb-1">
									Password
								</span>
								<input
									id="password"
									name="password"
									type="password"
									required
									className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
									placeholder="Password"
									disabled
									value={password}
								/>
							</label>
						</div>
					</div>

					<div>
						<input
							type="submit"
							disabled={!userId}
							className="btn-primary-full p-2 text-base"
							value="Sign in as Guest"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export { Login };
