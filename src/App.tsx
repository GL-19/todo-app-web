import { TodosList, CreateTodoForm } from "./components";
import { Header } from "./components/Header";
import { Router } from "./routes";
import { Main } from "./styles/styles";

function App() {
	/* return (
		<Main>
			<Header />
			<CreateTodoForm />
			<TodosList />
		</Main>
	); */
	return <Router />;
}

export default App;
