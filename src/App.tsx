import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import "./App.css";
import { Game } from "./features/game/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Teeko</h1>
        <DndProvider backend={Backend}>
          <Game />
        </DndProvider>
      </header>
    </div>
  );
}

export default App;
