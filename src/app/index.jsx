import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";
import Theme from "../components/theme";
export default () => (
  <BrowserRouter>
    <Theme>
      <Routes />
    </Theme>
  </BrowserRouter>
);
