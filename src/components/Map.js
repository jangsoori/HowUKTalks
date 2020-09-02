import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReactMapGL from "react-map-gl";
import Popup from "./Popup";
import "./Map.css";
import { getAccents, selectAccent } from "../redux/actions";
import Markers from "./Markers";
import Preview from "./Preview";

function Map({ data, getAccents, selectAccent }) {
  //Set map location for UK
  const [viewport, setViewport] = useState({
    // height: "100%",
    // width: "100%",
    latitude: 54.55,
    longitude: -2.4333,
    zoom: 4,
  });

  useEffect(() => {
    getAccents();
  }, []);

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        height="100%"
        width="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport);
        }}
      >
        <Markers data={data} />
        <Preview />
      </ReactMapGL>
      {/* <Popup /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.accents };
};
export default connect(mapStateToProps, { getAccents, selectAccent })(Map);
