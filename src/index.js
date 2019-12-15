import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./test.scss";

function App() {
  return (
    <div className="App">
      <h1>tewst</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);