import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemesProvider } from "./hooks/useTheme";
import { TodosProvider } from "./hooks/useTodos";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<ThemesProvider>
		<TodosProvider>
			<GlobalStyles />
			<App />
		</TodosProvider>
	</ThemesProvider>
);
