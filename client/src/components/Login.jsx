import React from "react";
import { Link } from "react-router-dom";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
  
  const google = () => {
    window.open('http://localhost:8000/login', "_self")
  }

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Login to continue</h1>
        <div className="loginButton google" onClick={google}>Login</div>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
