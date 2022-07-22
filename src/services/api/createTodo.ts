import { AxiosResponse } from "axios";
import { api } from "./api";

interface CreateTodoForm {
	name: string;
}

export function createTodo(data: CreateTodoForm): Promise<AxiosResponse> {
	return api.post("/todos", {
		body: {
			name: data.name,
		},
	});
}
