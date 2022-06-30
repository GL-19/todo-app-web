import { TodosList, CreateTodoForm } from "./components";
import { useTheme } from "./hooks/useTheme";
import { Main } from "./styles/styles";

function App() {
	const { toggleTheme, theme } = useTheme();

	return (
		<Main>
			<h1>Todos List</h1>

			<button onClick={toggleTheme}>
				{theme === "dark" ? "Change to light theme" : "Change to dark theme"}
			</button>
			<CreateTodoForm />

			<TodosList />
			<p>Drag and Drop to reorder list</p>
		</Main>
	);
}

export default App;
