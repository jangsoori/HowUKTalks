import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function SiteHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            HowUKTalks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
