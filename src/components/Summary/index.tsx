import { useTodos } from "../../hooks/useTodos";

function Summary() {
	const { todos } = useTodos();

	function countFinished(): number {
		return todos.reduce((count, todo) => {
			if (todo.done) count++;
			return count;
		}, 0);
	}

	return (
		<>
			<h3>Summary</h3>
			<table>
				<thead>
					<tr>
						<th>Total</th>
						<th>Finished</th>
						<th>Not finished</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>{todos.length}</td>
						<td>{countFinished()}</td>
						<td>{todos.length - countFinished()}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export { Summary };
