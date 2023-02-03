import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  let userState = "";
  if (user) {
    userState = user.email;
  } else {
    userState = "Login";
  }
  return (
    <nav className="navbar">
      <h1>LOGO</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {userState}
      </button>
    </nav>
  );
}
