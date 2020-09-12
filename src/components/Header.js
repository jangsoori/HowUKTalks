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
  title: {
    fontWeight: "300",
    "& > span": {
      fontWeight: "400",
    },
  },
}));
export default function SiteHeader() {
  const classes = useStyles();
  return (
<<<<<<< HEAD
    <header className="header grid">
      <h1 className="header-logo">
        How<span>UK</span>Talks
      </h1>
    </header>
=======
    <div className={classes.root}>
      <AppBar elevation={5} position="static" className={classes.theme}>
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.title}>
            How<span>UK</span>Talks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
>>>>>>> master
  );
}
