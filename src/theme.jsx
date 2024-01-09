import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#496350", // Your desired color for primary elements
    },
    secondary: {
      main: "#e615d7", // Your desired color for secondary elements
    },
    error: {
      main: "#f44336", // Default red color for error
    },
    warning: {
      main: "#ff9800", // Default orange color for warnings
    },
    info: {
      main: "#2196f3", // Default blue color for informational messages
    },
    success: {
      main: "#4caf50", // Default green color for success messages
    },
    text: {
      primary: "#2a382e", // Your desired color for primary text
      secondary: "grey", // Your desired color for secondary text
    },
    background: {
      default: "#496350", // Your desired background color
      paper: "#fff", // Default white color for paper backgrounds
    },
  },
  typography: {
    fontFamily: "Droid Serif",
    h1: {
      fontWeight: 900, // Example weight for h1
      fontSize: "2.5rem", // Example font size for h1
      fontStyle: "italic",
      fontFamily: "'Roboto', sans-serif",
    },
    h2: {
      fontWeight: 500, // Example weight for h2
      fontSize: "2rem", // Example font size for h2
      fontFamily: "'Roboto', sans-serif",
    },
    h3: {
      fontWeight: 500, // Example weight for h3
      fontSize: "1.75rem", // Example font size for h3
      fontFamily: "'Roboto', sans-serif",
    },
    h4: {
      fontWeight: 500, // Example weight for h4
      fontSize: "1.5rem", // Example font size for h4
      fontFamily: "'Roboto', sans-serif",
    },
    h5: {
      fontWeight: 500, // Example weight for h5
      fontSize: "1.25rem", // Example font size for h5
      fontFamily: "'Roboto', sans-serif",
    },
    h6: {
      fontWeight: 500, // Example weight for h6
      fontSize: "0.2rem", // Example font size for h6
      fontFamily: "'Roboto', sans-serif",
    },
    body1: {
      fontWeight: 500,
      fontSize: "1rem", // 16px
      fontFamily: "'Roboto', sans-serif",
    },
    body2: {
      fontWeight: 400, // Example weight for body2
      fontSize: "1rem", // Example font size for body2
      fontFamily: "'Roboto', sans-serif",
    },
    // You can add other typography settings here
  },
  components: {
    MaoBox: {
      styleOverrides: {
        root: {
          backgroundColor: "#496350", // primary main color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "inherit", // Change this to inherit
          fontFamily: "'Roboto', sans-serif",
          "&:hover": {
            color: "white", // Remove the extra # symbol
            backgroundColor: "transparent", // Keep the background transparent on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#496350",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "'Roboto', sans-serif",
          margin: "1rem",
          width: "25ch",
          // ... other styles you want to apply to all TextFields
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontFamily: "'Roboto', sans-serif",
          color: "inherit", // Set your desired text color here
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: "'Roboto', sans-serif",
          color: "inherit", // Set your desired text color here
        },
      },
    },
  },
  props: {
    MuiButton: {
      size: "small",
      variant: "text",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
    // You can add other default props here
  },
});

theme = responsiveFontSizes(theme);

export default theme;
