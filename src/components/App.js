import React from "react";
import Header from "./Header";
import Map from "./Map";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Header />
      <section className="content">
        <Map />
      </section>
    </div>
  );
}

export default App;
