
import React, { useEffect } from 'react';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../../rtk/slices/Cart-slice';
import { addToFav } from '../../rtk/slices/fav-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Product() {

  const [count, setCount] = useState(1);

  const [data,setData] = useState([])

  const state = useSelector(x=>x)
  console.log(state)
  const dispatch = useDispatch()

  const id = +useParams().id

  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:3000/product/${id}`).then(res=>{
      setData(res.data[0])
      console.log(data)
      console.log(true)
      
    })
  },[])



  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }

  }
  return (
    <>
      <div className="container" >
        <div className="row m-auto">


          <div id="carouselExampleIndicators" className="carousel slide col-md-4 col-sm-10 col-xs-10 " data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={data.Product_img1} className="d-block w-100 img" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={data.Product_img2} className="d-block w-100 img" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
              <span className="visually-hidden text-dark">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden text-dark">Next</span>
            </button>
          </div>


          <div className="col-7">
            <h2>{data.Product_Name}</h2>
            <h4 className="text-primary">{parseInt(data.Product_Price)}$</h4>
            <h3>
              Category: {data.Category}
            </h3>
            <div className="mb-4">
              <button className="btn btn-secondary" onClick={decrement}>-</button>
              <span> {count} </span>
              <button className="btn btn-secondary" onClick={increment}>+</button>
            </div>
            {state.Auth == true ? <button className="btn btn-primary rounded-0 w-25 mb-4" onClick={()=>{
              //send qunatitiy to store 
              for(let i=0;i<count;i++){
                dispatch(addToCart(data))
                toast.success("item added successfully")
              }
            }}>
              <AddShoppingCartIcon />Add to cart
            </button> : <Link to={"/login"} className="btn btn-primary rounded-0 w-25 mb-4">
              <AddShoppingCartIcon />Add to cart
            </Link>}

            <div className="row mb-5">
              {state.Auth == true ? <a className="col-3" style={{ textDecoration: 'none',cursor:"pointer"}} onClick={()=>{
                // add item to wash list

                dispatch(addToFav(data))
                toast("item added to Favourite ❤")
              }}>
                <FavoriteBorderIcon /> add to wish list
              </a>:<Link to="/login" className="col-3" style={{ textDecoration: 'none' }}>
                <FavoriteBorderIcon /> add to wish list
              </Link>}
            </div>


            <hr />
            <p>{data.Product_Description}</p>
           
          </div>
        </div>
      <ToastContainer/>
      </div>
    </>
  );
}

export default Product;
