import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout as logoutAction } from '../features/user.js'

const Home = ({ user }) => {

  const dispatch = useDispatch();
  dispatch(login({ id: user.id, name: user.displayName, email: user.emails[0].value, photo: user.photos[0].value, }))

  const logout = () => {
    dispatch(logoutAction())
    window.open("http://localhost:8000/logout", "_self");
  };

  return (
    <div style={{ textAlign: "center", margin: "3rem" }}>
      <h1>Dear {user?.displayName}</h1>

      <p>
        You are viewing this page because you are logged in or you just signed
        up
      </p>

      <div>
        <button
          onClick={logout}
          style={{
            color: "red",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
        <Link
          to="/chat"
          style={{
            textDecoration: "none",
            border: "1px solid gray",
            padding: "0.5rem 1rem",
            backgroundColor: "whitesmoke",
            color: "#333",
          }}
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Home;
