import React from "react";
import Header from "./Header";
import Map from "./Map";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.scss";
const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.grid}>
        <Grid style={{ zIndex: "2" }} item>
          <Header />
        </Grid>
        <Grid item xs>
          <Map />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
