import "./cardprofile.css";
import Profile from "../Profile/img/fp.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const Cardprofile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      setEmail(decoded.email);
    } catch (error) {}
  };

  const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/logout');
        navigate("/login");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="container my-5">

    <div>
      <div className="profile-title">
        <p> My Profile</p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "1250px",
          height: "720px",
          left: "95px",
          top: "157px",
          display: "flex",
          flexdirection: "column",
          alignitems: "flex-start",
          gap: "50px",
        }}
      >
        <div className="profile-card">
          <img className="profile-pict" src={Profile} />
          <div className="profile-nama"><p>{name}</p></div>
          <div className="profile-cardprofile">
            <div className="profile-profile">Profile</div>
            <div className="profile-record">Record</div>
            <div className="profile-saved">Saved</div>
          </div>
          <button className="profile-button" onClick={Logout}></button>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card2 mb-6">
          <div className="profile-card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="profile-pro"> Profile</h6>
              </div>
              <div className="col-sm-9-text-sexondary profile-desc"> Nama </div>
              <p className="profile-desc1"> {name}</p>
              <div className="col-sm-9-text-sexondary profile-desc">
                {" "}
                Email{" "}
              </div>
              <p className="profile-desc1"> {email}</p>
              <div className="col-sm-9-text-sexondary profile-desc">
                Password
              </div>
              <p className="profile-desc1">*******</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Cardprofile;
