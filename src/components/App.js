import React from "react";
import Header from "./Header";
import Map from "./Map";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.scss";
<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
}));

=======
import "../styles/utilites.scss";
>>>>>>> fixNew
function App() {
  const classes = useStyles();

  return (
<<<<<<< HEAD
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
=======
    <div className="app">
      <Header />
      <main className="map">
        <Map />
      </main>
    </div>
>>>>>>> fixNew
  );
}

export default App;
