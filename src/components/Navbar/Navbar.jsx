import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./navbar.css";
import logo from "./img/logofin.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {}
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/fc">
                <p className="item animasi-left-right">Finacial Course</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/fa">
                <p className="item animasi-left-right">Financial Article</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fr">
                <p className="item animasi-left-right">Financial Record</p>
              </NavLink>
            </li>

            <li>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <button className="tombollogin m-2">Login</button>
              </NavLink>
            </li>
            <li className="nav-item profile">
              <NavLink className="nav-link" to="/profile">
                <p className="item animasi-left-right">{name}</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
