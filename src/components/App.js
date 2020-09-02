import React from "react";
import "semantic-ui-css/semantic.min.css";
import "mapbox-gl/dist/mapbox-gl.css";

import Header from "./Header";
import Map from "./Map";

function App() {
  return (
    <div className="app">
      <Header />
      <Map />
    </div>
  );
}

export default App;
