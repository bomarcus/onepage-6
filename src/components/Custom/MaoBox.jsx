import { Box, useTheme } from "@mui/material";

const MaoBox = (props) => {
  const theme = useTheme();

  // Access custom styles from theme
  const customStyles = theme.components.MaoBox.styleOverrides.root;

  return (
    <Box
      {...props}
      sx={{
        ...customStyles,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default MaoBox;
