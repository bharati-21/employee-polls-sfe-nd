import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { removeVoteQuestion, voteQuestion, updateAnswered } from "../actions/";
import { _saveQuestionAnswer } from "../_DATA";

const Question = () => {
	const { questionId } = useParams();
	const {
		questions = [],
		users = [],
		authedUser,
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const question = useMemo(() => {
		return questions.find((question) => question.id === questionId) ?? {};
	}, [questions, questionId]);
	const {
		author = "",
		optionOne: { text: textOne = "", votes: votesOne = [] } = {},
		optionTwo: { text: textTwo = "", votes: votesTwo = [] } = {},
	} = question;

	const user = useMemo(() => {
		return users.find((user) => user.id === author) ?? {};
	}, [users, author]);
	const { avatarURL = "" } = user;

	const isValidQuestion = Object.keys(question).length !== 0;

	useEffect(() => {
		// invalid question id
		if (questions.length && !isValidQuestion) {
			navigate("/error", { replace: true });
		}
	}, [navigate, question, questions, isValidQuestion]);

	const getQuestionOption = (option) => {
		switch (option) {
			case "1":
				return "optionOne";
			case "2":
				return "optionTwo";
			default:
				return 0;
		}
	};

	const isAuthorAnswered = (option) => {
		switch (option) {
			case 1:
				if (votesOne.includes(authedUser)) {
					return true;
				}
				return false;
			case 2:
				if (votesTwo.includes(authedUser)) {
					return true;
				}
				return false;
			default:
				return false;
		}
	};

	const handleVoteQuestion = async (e) => {
		const { value } = e.target;
		const option = getQuestionOption(value);

		setLoading(true);

		// optimistic update
		dispatch(voteQuestion({ questionId, option, authedUser }));
		try {
			await _saveQuestionAnswer({
				authedUser,
				qid: questionId,
				answer: option,
			});
			dispatch(
				updateAnswered({
					authedUser,
					questionId,
				})
			);
			setLoading(false);
		} catch (error) {
			alert("Some error occurred while voting. Please try again.");
			dispatch(
				removeVoteQuestion({
					questionId,
					option,
					authedUser,
				})
			);
			setLoading(false);
		}
	};

	const isLoading = !isValidQuestion || !questions.length || !users.length;
	const btnDisabled = loading || isAuthorAnswered(1) || isAuthorAnswered(2);

	return isLoading ? null : (
		<div className="min-h-[90vh] h-full mx-auto p-8 max-w-6xl w-full justify-center items-center flex flex-col">
			<img
				className="inline-block h-[150px] w-[150px] rounded-full ring-2 object-cover ring-white"
				src={avatarURL}
				alt={`${authedUser} avatar`}
			/>
			<div className="question-wrapper p-1 flex flex-wrap gap-8 justify-center">
				<h1 className="text-xl mt-5">Would you rather</h1>
				<div className="question-options-container flex flex-wrap gap-2 w-full">
					<div className="option-one flex flex-col flex-1 justify-between">
						<span className="border-gray-300 border-2 border-b-0 py-1.5 flex-1">
							{textOne}
						</span>
						<button
							className={
								isAuthorAnswered(1)
									? "btn-voted"
									: "btn-primary"
							}
							disabled={btnDisabled}
							value={1}
							onClick={handleVoteQuestion}
						>
							Vote
						</button>
					</div>
					<div className="option-two flex flex-col flex-1 justify-between">
						<span className="border-gray-300 border-2 border-b-0 py-1.5 flex-1">
							{textTwo}
						</span>
						<button
							className={
								isAuthorAnswered(2)
									? "btn-voted"
									: "btn-primary"
							}
							disabled={btnDisabled}
							value={2}
							onClick={handleVoteQuestion}
						>
							Vote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Question };
