




import React from 'react';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Product() {


  const [count, setCount] = useState(0);

  const state = useSelector(x=>x)
  const dispatch = useDispatch()



  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

  }
  return (
    <>
      <div className="container" >
        <div className="row m-auto">


          <div id="carouselExampleIndicators" className="carousel slide col-md-4 col-sm-10 col-xs-10 ">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://i.pinimg.com/564x/a0/77/26/a077260f6befb7ad5f6c612a2a8dbb7f.jpg" className="d-block w-100 img" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/736x/85/7a/09/857a09fc8d7bfd1938d299a85d85ee1d.jpg" className="d-block w-100 img" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/564x/41/42/0c/41420c8efdf8fc06137bb3ba905b0bb6.jpg" className="d-block w-100 img" alt="..." />
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
            <h2>white mocha coat</h2>
            <h4 className="text-primary">$329</h4>
            <p>
              Shop Oversized Longline Trench Coat and other curated products on LTK, the easiest way to shop everything
              from your favorite creators.
            </p>
            <div className="mb-4">
              <button className="btn btn-secondary" onClick={decrement}>-</button>
              <span> {count} </span>
              <button className="btn btn-secondary" onClick={increment}>+</button>
            </div>
            {state.Auth == true ? <button className="btn btn-primary rounded-0 w-25 mb-4" onClick={()=>{
              //send qunatitiy to store 

            }}>
              <AddShoppingCartIcon />Add to cart
            </button> : <Link to={"/login"} className="btn btn-primary rounded-0 w-25 mb-4">
              <AddShoppingCartIcon />Add to cart
            </Link>}

            <div className="row mb-5 d-block ">
              {state.Auth == true ? <button className="col-3" style={{ textDecoration: 'none' }} onClick={()=>{
                // add item to wash list
              }}>
                <FavoriteBorderIcon /> add to wish list
              </button>:<Link to="/login" className="col-3" style={{ textDecoration: 'none' }}>
                <FavoriteBorderIcon /> add to wish list
              </Link>}
            </div>

            <div>
              <span className="text-secondary">vendor:polo</span>
              <br />
              <span className="text-secondary">vendor:polo</span>
              <br />
              <span className="text-secondary">vendor:polo</span>
            </div>

            <hr />
            <p>Description</p>
            <hr width="20%" />
            <p>Description</p>
            <hr width="20%" />
            <p>Description</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
