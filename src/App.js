import React from "react";
import { render } from "react-dom";
import { Provider } from "unstated";
import "typeface-roboto";

import Root from "@root/components/Root";

import "./App.scss";

render(
  <Provider>
    <Root />
  </Provider>,
  document.getElementById("reactRoot")
);
