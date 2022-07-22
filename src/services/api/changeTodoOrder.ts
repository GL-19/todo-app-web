import { AxiosResponse } from "axios";
import { api } from "./api";

export function changeTodoOrder(
	todoId: string,
	newOrder: number
): Promise<AxiosResponse> {
	return api.post("/todos", {
		body: {
			id: todoId,
			newOrder,
		},
	});
}
