import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import "./test.scss";

function App() {
  return (
    <div className="App">
      <h1 className="display-1">这编辑器牛皮</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
