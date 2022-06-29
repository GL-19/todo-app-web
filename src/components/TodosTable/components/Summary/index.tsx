import { useTodos } from "../../../../hooks/useTodos";

function Summary() {
	const { incomplete, handleChangeTodosFilterOption, deleteCompletedTodos } = useTodos();

	return (
		<div>
			<p>{incomplete} items left</p>
			<div>
				<p onClick={() => handleChangeTodosFilterOption("all")}>All</p>
				<p onClick={() => handleChangeTodosFilterOption("incomplete")}>Active</p>
				<p onClick={() => handleChangeTodosFilterOption("done")}>Completed</p>
			</div>
			<p onClick={deleteCompletedTodos}>Clear Completed</p>
		</div>
	);
}

export { Summary };
