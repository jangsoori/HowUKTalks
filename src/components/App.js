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
import "../styles/utilites.scss";
=======
const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
}));

>>>>>>> master
function App() {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <div className="app">
      <Header />
      <main className="map">
        <Map />
      </main>
    </div>
=======
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
>>>>>>> master
  );
}

export default App;
