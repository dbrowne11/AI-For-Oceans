import { createTheme } from "@mui/material/styles";
import { blue, lightBlue, orange, red } from "@mui/material/colors";
import "@fontsource/raleway";

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: "Raleway, Arial",
		h1: {
			fontSize: "2.5rem",
			textTransform: "uppercase",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h3: {
			fontSize: "1.8rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h4: {
			fontSize: "1.6rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h5: {
			fontSize: "1.2rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h6: {
			fontSize: "1rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
	},
	palette: {
		primary: {
			light: "#4f83cc",
			main: lightBlue[900],
			dark: "#002f6c",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ffad42",
			main: orange[700],
			dark: "#bb4d00",
			contrastText: "#000",
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
