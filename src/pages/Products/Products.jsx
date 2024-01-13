import React, { useState } from "react";
import im from "./ronaldo.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../Products/style.css";
function Products() {
  let pro = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit autem distinctio cumque ",
      text: "10000$",
    },
  ];
  return (
    <div>
      <div className="products">
        <div className="row">
          <img src={im} className="top-img" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {pro.map((item) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5">
                <div className="card pro-card">
                  <img src={im} alt="" className="card-img-top card-img" />
                  <div className="card-body">
                    <h6 className="card-title mt-2">{item.title}</h6>
                    <button className="btn mt-3 btn-dark">add to cart</button>
                    <span className="card-text price">{item.text}</span>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
