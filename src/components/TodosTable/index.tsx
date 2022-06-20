import { useTodos } from "../../hooks/useTodos";

function TodosTable() {
	const { todos, toggleTodoDoneStatus, deleteTodo } = useTodos();

	return (
		<table>
			<tr>
				<th>Status</th>
				<th>Priority</th>
				<th>Deadline</th>
				<th>Name</th>
				<th>Created At</th>
				<th></th>
				<th></th>
			</tr>

			{todos.map((todo) => (
				<tr key={todo.id}>
					<td>
						<input
							type="checkbox"
							checked={todo.done}
							onChange={() => toggleTodoDoneStatus(todo.id)}
						/>
					</td>
					<td>{todo.priority}</td>
					<td>{todo.deadline}</td>
					<td>{todo.name}</td>
					<td>{todo.created_at}</td>
					<td>
						<button onClick={() => console.log("Click on update")}>update</button>
					</td>
					<td>
						<button onClick={() => deleteTodo(todo.id)}>delete</button>
					</td>
				</tr>
			))}
		</table>
	);
}

export { TodosTable };
