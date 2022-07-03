import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme";
import { TodosProvider } from "./hooks/useTodos";
import { GlobalStyles } from "./styles/globalStyles";

const root = document.getElementById("root") as HTMLElement;

render(
	<TodosProvider>
		<ThemeProvider>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</TodosProvider>,
	root
);
