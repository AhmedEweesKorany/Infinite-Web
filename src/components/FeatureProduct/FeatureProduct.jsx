import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFav, removeFromFav } from '../../rtk/slices/fav-slice';
import { ToastContainer, toast } from 'react-toastify';
import Slider from "react-slick";
import axios from 'axios';
import { addToCart } from '../../rtk/slices/Cart-slice';
import { useDispatch } from 'react-redux';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const FeatureProduct = ({ type }) => {
  const dispatch = useDispatch()
  const [getdata,setGetdata] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/popular").then(res=>{
      setGetdata(res.data)
    })
  },[])
  const data = [
    {
      "id": 1,
      "img": "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 1",
      "isNew": true,
      "oldPrice": 30.00,
      "newPrice": 24.99
    },
    {
      "id": 2,
      "img": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 2",
      "isNew": false,
      "oldPrice": 45.00,
      "newPrice": 39.99
    },
    {
      "id": 3,
      "img": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 3",
      "isNew": true,
      "oldPrice": 20.00,
      "newPrice": 15.99
    },
    {
      "id": 4,
      "img": "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 4",
      "isNew": false,
      "oldPrice": 55.00,
      "newPrice": 49.99
    }
  ]
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className='featureproduct'>

      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quisquam sequi ea possimus doloribus alias tempore, laboriosam voluptates recusandae repellat, quas mollitia molestiae sunt illum a id corrupti dolores facilis! Voluptates excepturi modi explicabo, saepe architecto porro magnam distinctio fugiat impedit debitis eaque blanditiis!</p>
      </div>
      
      <>
     <div className="container">
        <div className="row" style={{gap:"20px"}}>

        {/* <OwlCarousel className='owl-theme' loop margin={10} nav> */}

            {
              getdata.map((item)=>{
                    return (
                   <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5 "  style={{width:"280px"}} key={item.Product_Id}>
                <div className="card pro-card">
                <a href={`#`}>
                  <img src={item.Product_img1} alt="" className="card-img-top card-img" loading="lazy" style={{height:"200px",minHeight:"fit-content",padding:"20px"}} />
                  </a>
                  <div className="card-body">
                    <h6 className="card-title mt-2">{item.Product_Name}</h6>
             
                    <button className="btn mt-3 btn-dark" onClick={()=>{
                    dispatch(addToCart(item))
                    toast.success("item added successfully")
                  }}>add to cart</button>
                  <button className="btn mx-1 mt-3 btn-outline-danger no-hover " onClick={()=>{
                    // add item to washlist here
                    dispatch(addToFav(item))
                    toast("item added to Favourite ❤")
                  }}><FavoriteIcon className="svgnohover"/></button>
                
                    <h4 className="card-text float-end  mt-4  price">{parseInt(item.Product_Price)}$</h4>
                  </div>
                </div>
              </div>
                    )
                  })
                  
                  
                }
                {/* </OwlCarousel> */}
        </div>
    </div>
<ToastContainer/>
   </>
    </div>
  )
}

export default FeatureProduct