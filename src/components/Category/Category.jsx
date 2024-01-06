import React from "react";
import "./category.css";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <button>
            <Link className="link" to={"/products/1"}>children</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <button>
            <Link className="link" to={"/products/2"}>women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <button>
            <Link className="link" to={"/products/3"}>men</Link>
          </button>
        </div>
      </div>
      <div className="col coll">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <button>
                <Link className="link" to={"/products/4"}>shose</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/9595073/pexels-photo-9595073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <button>
                <Link className="link" to={"/products/5"}>Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4032368/pexels-photo-4032368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <button>
            <Link className="link" to={"/products/6"}>New Seazon</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
