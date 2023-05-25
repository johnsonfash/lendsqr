import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/bootstrap.scss";
import "./styles/form.scss";
import "./styles/variables.scss";
import "./styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.Fragment>
);
