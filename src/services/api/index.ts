import { api } from "./api";

import { changeTodoOrder } from "./changeTodoOrder";
import { createTodo } from "./createTodo";
import { deleteTodo } from "./deleteTodo";
import { deleteCompletedTodos } from "./deleteCompletedTodos";
import { getTodos } from "./getTodos";
import { getTodosListInfo } from "./getTodosListInfo";
import { toggleTodoDone } from "./toggleTodoDone";

export {
	api,
	changeTodoOrder,
	createTodo,
	deleteTodo,
	deleteCompletedTodos,
	getTodos,
	getTodosListInfo,
	toggleTodoDone,
};

export * as Api from ".";
