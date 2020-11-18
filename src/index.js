import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GithubProvider } from "./context/context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  rootElement
);
