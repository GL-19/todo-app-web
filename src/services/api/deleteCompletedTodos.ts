import { AxiosResponse } from "axios";
import { api } from "./api";

export function deleteCompletedTodos(): Promise<AxiosResponse> {
	return api.delete("/todos", {
		params: {
			option: "completed",
		},
	});
}
