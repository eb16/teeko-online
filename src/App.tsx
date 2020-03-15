import React from "react";
import "./App.css";
import { Game } from "./features/game/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Teeko</h1>
        <Game />
      </header>
    </div>
  );
}

export default App;
