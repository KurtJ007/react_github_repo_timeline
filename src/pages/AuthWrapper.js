import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../imgs/preloader.gif";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <section className="authWrapper">
        <img src={loadingGif} alt="spinner" />
      </section>
    );
  }
  if (error) {
    return (
      <section className="authWrapper">
        <h1>{error.message}</h1>
      </section>
    );
  }
  return <>{children}</>;
}

export default AuthWrapper;
