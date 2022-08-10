import {
  AppBar,
  Typography,
  Container,
  Toolbar,
  IconButton,
} from "@mui/material";
import classes from "./index.module.css";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";


const NavBar = () => {
  return (
    <AppBar position="sticky" className={classes.bar}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <AppRegistrationIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Logistics Delivery
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
