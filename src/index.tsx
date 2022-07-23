import { render } from "react-dom";
import App from "./App";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { TodosProvider } from "./providers/TodosProvider";
import { GlobalStyles } from "./styles/globalStyles";

const root = document.getElementById("root") as HTMLElement;

render(
	<AuthProvider>
		<TodosProvider>
			<ThemeProvider>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</TodosProvider>
	</AuthProvider>,
	root
);
