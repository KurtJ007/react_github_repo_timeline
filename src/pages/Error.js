import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Error = () => {
  return (
    <div className="Error">
      <h1>404</h1>
      <h3>Sorry, the page you have tried does not exist.</h3>
      <Button variant="primary" size="lg">
        <Link className="errorBack" to="/">
          Back Home
        </Link>
      </Button>
    </div>
  );
};

export default Error;
