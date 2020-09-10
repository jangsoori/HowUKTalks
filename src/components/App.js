import React from "react";
import Header from "./Header";
import Map from "./Map";
import "./App.scss";
import "../styles/utilites.scss";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="map">
        <Map />
      </main>
    </div>
  );
}

export default App;
