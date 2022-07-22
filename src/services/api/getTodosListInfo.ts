import { AxiosResponse } from "axios";
import { api } from "./api";

export function getTodosListInfo(): Promise<AxiosResponse> {
	return api.get("/todos/info/count");
}
