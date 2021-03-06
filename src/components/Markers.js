import React from "react";
import { Marker } from "@react-google-maps/api";

import { connect } from "react-redux";
import { selectAccent } from "../redux/actions";
import history from "../history";
function Markers({ data, selectAccent }) {
  const renderMarkers = () => {
    return (
      data &&
      //convert to array first
      Object.values(data).map((accent) => {
        return (
          <Marker
            className="marker"
            title={accent.name}
            key={accent.name}
            position={{ lat: accent.coords.lat, lng: accent.coords.lng }}
            onClick={(e) => {
              selectAccent(accent);

              history.push(`/${accent.id}`);
            }}
          >
            <div className="preview">{accent.name}</div>
          </Marker>
        );
      })
    );
  };
  return renderMarkers();
}

export default connect(null, { selectAccent })(Markers);
