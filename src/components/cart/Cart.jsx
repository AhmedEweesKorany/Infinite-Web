import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearAll, removeFromCart } from '../../rtk/slices/Cart-slice';
import { addToFav } from '../../rtk/slices/fav-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Cart = () => {
  const state = useSelector((x) => x);
  const dispatch = useDispatch();
const navigate = useNavigate()
  const [count, setCount] = useState(1);
  let product_price = 0;
  let qun = 0;

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  //init stripe payment methodes 



  return (
    <div className="container">
      <div className="row ">
        <div className="table" style={{ width: '66%' }}>
          {/* products */}
          {state.cart.map((item) => {
            product_price += +item.Product_Price;
            qun += count;
            return (
              <div key={item.Product_Id} className="col-md-8 col-sm-12 me-4 rounded-3">
                <div className="row ">
                  <div className="col-md-3 col-sm-12 mt-3">
                    <img src={item.Product_img1} className="img-fluid" alt="cart" />
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <h2 className="mt-4">{item.Product_Name} </h2>
                    <h5 className="mt-4">Category: {item.Category}</h5>
                    <div className="col-12 row">
                      <div className=" col-md-9 mt-3">
                        <div className="col-sm-12 col-8">
                          <button className="btn btn-primary pe-3 ps-3" onClick={increment}>
                            {' '}
                            +{' '}
                          </button>
                          <span> {count} </span>
                          <button className="btn btn-primary pe-3 ps-3" onClick={decrement}>
                            -
                          </button>
                        </div>
                        <div className="col-md-4  col-sm-12">
                          <h4 className="mt-3 text-danger">{parseInt(item.Product_Price)}$</h4>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary me-2 mt-3"
                      onClick={() => {
                        dispatch(removeFromCart(item));
                        toast.error("item removed !")
                      }}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => {
                        dispatch(addToFav(item));
                    toast("item added to Favourite ❤")
                      }}
                    >
                      <FavoriteIcon />
                    </button>
                  </div>
                </div>
                <hr className="mt-4" />
              </div>
            );
          })}
        </div>
        {/* summary */}
        <div className=" col-md-4 h-50 col-sm-12 bg-light rounded-3 mt-3 mt-md-0 shadow ">
          <h2 className="mt-3">Summary</h2>
          <hr />
          <p className="mt-4">Products : {product_price ? parseInt(product_price * qun) : null}$ </p>
          <p>Shipping Gratis</p>
          <hr />
          <h5>Total Amount (including 5% TAX)</h5>
          <h4>
            {product_price ? parseInt(product_price * qun + product_price * qun * 0.05) : null}$
          </h4>
          <button className="btn btn-primary mt-3 mb-3 w-100" onClick={()=>{
            dispatch(clearAll())
            Swal.fire({
              title: 'Successful Order',
              text: 'order will arrive in 2 day ',
              icon: 'success',
              confirmButtonText: 'Done!'
            })
            navigate("/")
          }}>Go to checkout</button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
