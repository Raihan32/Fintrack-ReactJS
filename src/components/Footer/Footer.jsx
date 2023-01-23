import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import logoputih from "./img/logoputih.png";
import sosmed from "./img/sosmed.png";
import { RxTwitterLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  // dyanmic year
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="kaki">
        <div className="footer">
          <div className="platfooter">
            <div className="isiplat">
              <div className="logoplat">
                <img src={logoputih} alt="" />
                <p className="logodes">
                  Designed and Developed by Hustler Team
                </p>
                {/* <img src={sosmed} alt="" /> */}
                <div className="footer-icons">
                  <div class="ig">
                    <BsInstagram size={44} />
                  </div>
                  <div class="youtube">
                    <FiYoutube size={44} />
                  </div>
                  <div class="facebook">
                    <AiOutlineFacebook size={44} />
                  </div>
                  <div class="twitter">
                    <RxTwitterLogo size={44} />
                  </div>
                </div>
              </div>
              <div className="desplat">
                <p className="textfooter">
                  Take your finances to the next levels!
                </p>
                <p className="logodes">Don't hesite, money matters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="barfooter">
        <div className="container m-2">
          <p>
            © <span>{year} </span>
            Financial Tracking Co., Ltd. All rights reserved.
          </p>
        </div>
        <div className="about">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/about"
          >
            <p>About Us</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/privacyolicy"
          >
            <p>Privacy Policy</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
