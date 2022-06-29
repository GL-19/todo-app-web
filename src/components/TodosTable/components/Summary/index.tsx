interface SummaryProps {
	remainingTodos: number;
	onClick: (option: "all" | "done" | "incomplete") => void;
}

function Summary({ remainingTodos, onClick }: SummaryProps) {
	return (
		<div>
			<p>{remainingTodos} items left</p>
			<div>
				<p onClick={() => onClick("all")}>All</p>
				<p onClick={() => onClick("incomplete")}>Active</p>
				<p onClick={() => onClick("done")}>Completed</p>
			</div>
			<p>Clear Completed</p>
		</div>
	);
}

export { Summary };
