import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
export default function SiteHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={5} position="static" className={classes.theme}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            HowUKTalks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
