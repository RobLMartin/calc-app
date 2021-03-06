import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

window.renderCalcApp = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
  // serviceWorker.unregister();
};

window.unmountCalcApp = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("CalcApp-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
  // serviceWorker.unregister();
}
