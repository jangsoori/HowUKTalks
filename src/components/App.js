import React from "react";
import "semantic-ui-css/semantic.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Header from "./Header";
import Map from "./Map";
import "./App.css";
import Popup from "./Popup";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="content">
        <Map />
        <Popup />
      </section>
    </div>
  );
}

export default App;
