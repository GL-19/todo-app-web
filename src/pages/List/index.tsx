import { TodosList, CreateTodoForm } from "../../components";
import { Header } from "../../components/Header";
import { Main } from "../../styles/styles";

export function ListPage() {
	return (
		<Main>
			<Header />
			<CreateTodoForm />
			<TodosList />
		</Main>
	);
}
