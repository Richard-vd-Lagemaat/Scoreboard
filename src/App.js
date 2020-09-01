import React from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import TitleBar from "./components/TitleBar/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Scoreboard></Scoreboard>
    </div>
  );
}

export default App;
