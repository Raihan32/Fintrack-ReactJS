import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

import foto from "./login.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });

      navigate("/", { replace: true });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <MDBContainer>
      <Helmet>
        <title>Fintrack | LogIn</title>
      </Helmet>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5 ">
            <MDBIcon
              fas
              icon="crow fa-3x me-3 v"
              style={{ color: "#709085" }}
            />
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>
            <form onSubmit={Auth}>
              <p>{msg}</p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                // label="Email address"s
                type="email"
                placeholder="Email address"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                // label="Password"
                type="password"
                size="lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-info mb-4 px-5 mx-5 w-100"
                color="info"
              >
                Login
              </button>
            </form>
            <p className="ms-5">
              Don't have an account?{" "}
              <a href="/register" className="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src={foto}
            alt="Login image"
            style={{
              objectFit: "cover",
              objectPosition: "left",
              height: "550px",
              width: "550px",
            }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
