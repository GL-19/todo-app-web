import { darkColors, lightColors, IColors } from "./colors";

export interface ITheme {
	colors: IColors;
}

export const darkTheme: ITheme = {
	colors: darkColors,
};

export const lightTheme: ITheme = {
	colors: lightColors,
};
