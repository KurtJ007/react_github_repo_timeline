import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jzmlsu93.us.auth0.com"
      clientId="hv6mT6gc03vPoAA8fFGVAvbjVAZ50J2Y"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  rootElement
);
