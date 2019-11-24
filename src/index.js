import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/dashboard";
import { createStore } from "redux";
import Players from "./components/players";
import counter from "./reducers";
import "./styles.css";

function App() {
  return (
    <div class="App">
      <Dashboard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
