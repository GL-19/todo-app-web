import { Summary } from "./components/Summary";
import { TodosTable } from "./components/TodosTable";

function App() {
	return (
		<>
			<h1>Todos List</h1>
			<Summary />
			<TodosTable />
		</>
	);
}

export default App;
