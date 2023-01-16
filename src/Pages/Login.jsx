import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../actions/";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(loginUser("sarahedo"));
		navigate(location?.state?.from ?? "/", { replace: true });
	};
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
					<div className="-space-y-px shadow-sm">
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
									className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Username"
									disabled
									value="sarahedo"
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
									className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Password"
									disabled
									value="password123"
								/>
							</label>
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="group relative flex w-full justify-center rounded border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer text-md"
							value="Sign in as Guest"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export { Login };
