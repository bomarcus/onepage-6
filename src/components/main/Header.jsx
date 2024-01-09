// Header.jsx
import { Typography, Grid } from "@mui/material";
import MaoBox from "../Custom/MaoBox";

const Header = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <MaoBox display="flex" flexDirection="column" alignItems="center" p={1}>
          <MaoBox textAlign="center">
            <Typography variant="h1" component="div" color="text.primary">
              Bo Marcus Ohlsson Sand Design
            </Typography>
          </MaoBox>
        </MaoBox>
      </Grid>
    </Grid>
  );
};

export default Header;
