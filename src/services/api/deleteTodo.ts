import { AxiosResponse } from "axios";
import { api } from "./api";

export function deleteTodo(todoId: string): Promise<AxiosResponse> {
	return api.delete(`/todos/${todoId}`);
}
