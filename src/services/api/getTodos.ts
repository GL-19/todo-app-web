import { AxiosResponse } from "axios";
import { api } from "./api";

export function getTodos(option: string): Promise<AxiosResponse> {
	return api.get("/todos", {
		params: {
			filterOption: option,
		},
	});
}
