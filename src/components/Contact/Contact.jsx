import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="left">
          <h1>be in touch with us: </h1>
        </div>
        <div className="center">
          <form action="">
            <input type="email" name="email" placeholder="enter your email" />
            <input type="submit" value="JOIN US" />
          </form>
        </div>
        <div className="right">
          <span><FacebookIcon/></span>
          <span><LinkedInIcon/></span>
          <span><EmailIcon/></span>
          <span><TwitterIcon/></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
