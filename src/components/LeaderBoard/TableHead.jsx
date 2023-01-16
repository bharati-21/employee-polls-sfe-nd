const TableHead = ({ columns }) => {
	return (
		<thead className="text-xs uppercase bg-gray-700 text-gray-400">
			<tr>
				{columns.map((column) => (
					<th scope="col" className="px-6 py-3" key={column.id}>
						{column.name}
					</th>
				))}
			</tr>
		</thead>
	);
};

export { TableHead };
