import { TodosList, CreateTodoForm } from "../../components";
import { Header } from "../../components/Header";
import { useTodos } from "../../providers/TodosProvider";
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
