import React from "react";
import img from "../../img/payment.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer">
      <div className="header">
        <h1>Infinite Web</h1>
      </div>
      <div className="content">
        <div className="text">
          <div className="text-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            adipisci fuga doloribus consectetur, iure blanditiis? Nesciunt totam
            itaque omnis ea rem! Ratione reiciendis voluptatibus a iusto sed
            eius veniam dolores!
          </p>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <EmailIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Knowledge base</a>
            </li>
            <li>
              <a href="#">Live chat</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
            <li>
              <a href="#">Leadership</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div>
          <p>
          Copyright ©2024. All Rights Reserved. — Designed with love by Infinite Web
          </p>
        </div>
        <div>
          <img src={img} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Footer;
