import React from "react";
import "./footer.css";
import img from "../../img/payment.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h5>Categories</h5>
          <span>link</span>
          <span>link</span>
          <span>link</span>
          <span>link</span>
          <span>link</span>
        </div>
        <div className="item">
        <h5>Links</h5>
          <span>link</span>
          <span>link</span>
          <span>link</span>
          <span>link</span>
          <span>link</span>
        </div>
        <div className="item">
          <h5>About</h5>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            libero quaerat impedit expedita possimus nisi sit nam explicabo
            recusandae magnam, architecto ex exercitationem veritatis rem? Nihil
            accusamus aspernatur minima? Totam!
          </span>
        </div>
        <div className="item">
          <h5>Contact</h5>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium temporibus quisquam facilis aut ducimus? Nisi repellat
            voluptatibus ipsa quasi voluptatem, in quibusdam eveniet quod maxime
            accusantium, omnis veritatis delectus voluptas.
          </span>
        </div>
      </div>
      <div className="bottom">

        <div className="item">
            <h3 className="logo">INFINITE WEB <span>@all Rights Resaved</span></h3>
        </div>
        
        <div className="item">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
