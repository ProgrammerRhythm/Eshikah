import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScroolToTop";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
