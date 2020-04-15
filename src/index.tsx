import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./store";
import ChangeLanguage from "./components/ChangeLanguage";

ReactDOM.render(
  <Provider store={Store}>
    <ChangeLanguage />
    <App />
  </Provider>,
  document.getElementById("root")
);
