import { AxiosResponse } from "axios";
import { api } from "./api";

export function getTodos(option?: "completed" | "incompleted"): Promise<AxiosResponse> {
	return api.get("/todos", {
		params: {
			filterOption: option,
		},
	});
}
