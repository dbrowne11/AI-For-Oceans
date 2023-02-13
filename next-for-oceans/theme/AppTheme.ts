import { createTheme, Theme } from '@mui/material';
import { blue } from '@mui/material/colors';

// define light theme colors
export const lightTheme: Theme = createTheme({
    palette: {
        mode: "light",
    },
});

// define dark theme colors
export const darkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fc5a8d",
        },
        secondary: {
            main: blue[500],
        },
    },
});