import { AxiosResponse } from "axios";
import { api } from "./api";

export function toggleTodoDone(todoId: string): Promise<AxiosResponse> {
	return api.patch(`/todos/${todoId}`);
}
