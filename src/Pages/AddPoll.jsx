import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { useNavigate } from "react-router-dom";

import { updateCreatedQuestions, addQuestion } from "../actions";
import { _saveQuestion } from "../_DATA";

const OPTIONS_INITIAL_STATE = {
	optionOneText: "",
	optionTwoText: "",
};

const AddPoll = () => {
	const { authedUser } = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [options, setOptions] = useState(OPTIONS_INITIAL_STATE);
	const [loading, setLoading] = useState(false);

	const handleOptionChange = (e) => {
		const { name, value } = e.target;
		setOptions((prevOptions) => ({
			...prevOptions,
			[name]: value,
		}));
	};

	const handlePollSubmit = async (e) => {
		e.preventDefault();
		dispatch(showLoading());
		setLoading(true);
		setOptions(OPTIONS_INITIAL_STATE);
		try {
			const response = await _saveQuestion({
				...options,
				author: authedUser,
			});
			dispatch(addQuestion(response));
			dispatch(
				updateCreatedQuestions({
					authedUser,
					questionId: response.id,
				})
			);
			dispatch(hideLoading());
			navigate("/");
		} catch (error) {
			setLoading(false);
			dispatch(hideLoading());
			console.warn(error);
			alert("Error occurred while saving poll. Please try again.");
		}
	};

	const { optionOneText, optionTwoText } = options;

	return (
		<div className="min-h-[80vh] h-full max-w-6xl mx-auto p-8 w-full gap-6 flex flex-col items-center justify-center">
			<h2 className="text-3xl">Create your own Poll</h2>
			<div className="poll-form flex flex-col gap-4 mt-2 w-full max-w-[500px]">
				<h3 className="mb-4 text-xl">Would you rather</h3>
				<form
					className="flex flex-col gap-2"
					onSubmit={handlePollSubmit}
				>
					<label className="flex flex-col gap-1">
						<span>Option one</span>
						<input
							type="text"
							className="form-control border rounded-sm border-slate-400 text-sm p-1.5"
							placeholder="Option one"
							name="optionOneText"
							required
							value={optionOneText}
							onChange={handleOptionChange}
						/>
					</label>
					<label className="flex flex-col gap-1">
						<span>Option two</span>
						<input
							type="text"
							className="form-control border rounded-sm border-slate-400 text-sm p-1.5"
							placeholder="Option two"
							required
							value={optionTwoText}
							name="optionTwoText"
							onChange={handleOptionChange}
						/>
					</label>
					<input
						type="submit"
						value="Submit Poll"
						className="btn-primary mt-4 text-base"
						disabled={loading}
					/>
				</form>
			</div>
		</div>
	);
};

export { AddPoll };
