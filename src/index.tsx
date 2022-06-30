import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";
import { TodosProvider } from "./hooks/useTodos";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<ThemeProvider theme={darkTheme}>
		<TodosProvider>
			<GlobalStyles />
			<App />
		</TodosProvider>
	</ThemeProvider>
);
