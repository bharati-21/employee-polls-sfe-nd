const TableBody = ({ users = [] }) => {
	return (
		<tbody>
			{users.map(
				({
					avatarURL = "",
					name = "",
					id = "",
					questions,
					answers,
				}) => {
					const qLen = questions.length;
					const ansLen = Object.values(answers).length;
					return (
						<tr
							className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
							key={id}
						>
							<th
								scope="row"
								className="flex items-center p-4 text-gray-900 whitespace-nowrap dark:text-white min-w-[250px] w-full"
							>
								<img
									className="w-10 h-10 rounded-full object-cover flex-shrink-0"
									src={avatarURL}
									alt={name + "avatar"}
								/>
								<div className="pl-3 user-name-id">
									<div className="text-base font-semibold whitespace-pre-line">
										{name}
									</div>
									<div className="font-normal text-gray-500 whitespace-pre-line">
										{id}
									</div>
								</div>
							</th>
							<td className="p-4">{ansLen}</td>
							<td className="p-4">{qLen}</td>
						</tr>
					);
				}
			)}
		</tbody>
	);
};

export { TableBody };
