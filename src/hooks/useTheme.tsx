import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

interface ThemeContextData {
	toggleTheme: () => void;
	theme: "dark" | "light";
}

type themeOptions = "dark" | "light";

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<themeOptions>("dark");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");

		if (!savedTheme) {
			localStorage.setItem("theme", "dark");
		} else {
			setTheme(savedTheme as themeOptions);
		}
	}, []);

	function toggleTheme() {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		}
	}

	return (
		<StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		</StyledThemeProvider>
	);
};

export function useTheme() {
	const context = useContext(ThemeContext);

	return context;
}
