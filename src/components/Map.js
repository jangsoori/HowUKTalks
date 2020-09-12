import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAccents, selectAccent } from "../redux/actions";
import Markers from "./Markers";
import { Route } from "react-router-dom";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import AccentDetailsWindow from "./AccentDetails/AccentDetailsWindow";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  map: {
    height: "100%",
  },
}));

function Map(props) {
  const classes = useStyles();

  const { data, getAccents } = props;
  console.log(props);
  useEffect(() => {
    getAccents();
  }, []);
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 54.55,
    lng: -2.4333,
  };
  return (
    <Box className={classes.map}>
      <Route path="/">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Markers data={data} />
            <Route path="/:id" component={AccentDetailsWindow} />

            <></>
          </GoogleMap>
        </LoadScript>
      </Route>
    </Box>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { data: state.accents };
};
export default connect(mapStateToProps, { getAccents, selectAccent })(Map);
