interface SummaryProps {
	remainingTodos: number;
}

function Summary({ remainingTodos }: SummaryProps) {
	return (
		<div>
			<p>{remainingTodos} items left</p>
			<div>
				<p>All</p>
				<p>Active</p>
				<p>Completed</p>
			</div>
			<p>Clear Completed</p>
		</div>
	);
}

export { Summary };
