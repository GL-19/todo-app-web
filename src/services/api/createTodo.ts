import { AxiosResponse } from "axios";
import { api } from "./api";

interface CreateTodoForm {
	name: string;
}

export function createTodo(data: CreateTodoForm): Promise<AxiosResponse> {
	console.log(data, data.name);

	return api.post("/todos", {
		name: data.name,
	});
}
