import React, { useRef } from "react";
import Header from "./Header";
import Map from "./Map";
import "./App.scss";
import "../styles/utilites.scss";
function App() {
  //Ref used to close mobile menu
  const appRef = useRef();
  return (
    <div ref={appRef} className="app">
      <Header />
      <main className="map">
        <Map appRef={appRef} />
      </main>
    </div>
  );
}

export default App;
