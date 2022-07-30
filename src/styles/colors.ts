export interface IColors {
	primaryBackgroundColor: string;
	secondaryBackgroundColor: string;
	primaryColor: string;
	tertiaryColor: string;
	quaternaryColor: string;
	secondaryColor: string;
	brightBlue: string;
	cyan: string;
	purple: string;
}

export const darkColors: IColors = {
	cyan: "hsl(192, 100%, 67%)",
	purple: "hsl(280, 87%, 65%)",
	brightBlue: "hsl(220, 98%, 61%)",
	primaryColor: "hsl(234, 39%, 85%)",
	secondaryColor: "hsl(234, 11%, 52%)",
	tertiaryColor: "hsl(233, 14%, 35%)",
	quaternaryColor: "hsl(237, 14%, 26%)",
	secondaryBackgroundColor: "hsl(235, 18%, 14%)",
	primaryBackgroundColor: "hsl(235, 21%, 11%)",
};

export const lightColors: IColors = {
	cyan: "hsl(192, 100%, 67%)",
	purple: "hsl(280, 87%, 65%)",
	brightBlue: "hsl(220, 98%, 61%)",
	primaryColor: "hsl(235, 19%, 35%)",
	secondaryColor: "hsl(236, 9%, 61%)",
	tertiaryColor: "hsl(234, 39%, 85%)",
	quaternaryColor: "hsl(233, 11%, 84%)",
	secondaryBackgroundColor: "hsl(0, 0%, 98%)",
	primaryBackgroundColor: "hsl(210, 10%, 80%)",
	/* primaryBackgroundColor: "hsl(235, 40%, 75%)", */
};
