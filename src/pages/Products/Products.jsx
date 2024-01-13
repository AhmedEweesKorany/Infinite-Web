import React, { useState } from "react";
import im from "./ronaldo.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../Products/style.css";
import "./product";
import { useParams } from "react-router";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Products() {

  let {cate} = useParams();
  async function getData(cate){
    console.log(cate)
      const res  = await axios.get("http://localhost:3000",{params:{
        cate:cate
      }})
      console.log(res)
  }

  getData(cate)
  

// old code 
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
      <h1 style={{textAlign:"center",textTransform:"capitalize"}}>{cate} Products</h1>
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
                  <button className="btn mx-1 mt-3 btn-outline-danger"><FavoriteIcon/></button>
                  <span className="card-text float-end  mt-4  price">{item.text}</span>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>)
}

export default Products;
