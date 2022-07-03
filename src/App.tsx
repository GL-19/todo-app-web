import { TodosList, CreateTodoForm } from "./components";
import { Header } from "./components/Header";
import { Main } from "./styles/styles";

function App() {
	return (
		<Main>
			<Header />
			<CreateTodoForm />

			<TodosList />
		</Main>
	);
}

export default App;
