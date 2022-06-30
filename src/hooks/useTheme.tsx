import { ThemeProvider } from "styled-components";
import { createContext, ReactNode, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

interface ThemeContextData {
	toggleTheme: () => void;
	theme: "dark" | "light";
}

interface ThemesProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemesProvider({ children }: ThemesProviderProps) {
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	function toggleTheme() {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	}

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	return context;
}
