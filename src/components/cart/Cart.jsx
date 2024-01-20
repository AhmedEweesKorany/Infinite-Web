import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {

  const state= useSelector(x=>x)
  const dispatch = useDispatch()
  console.log(state.cart)

    const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }

  }
  return (
   




    <div className="container">

      <div className="row ">

        <div className="table" style={{width:'66%'}}>

          {/* products */}

       {state.cart.map(item=>{
        console.log(item)
        return (
          <>
           <div className="col-md-8 col-sm-12  me-4 rounded-3">

<div className="row ">

  <div className="col-md-3 col-sm-12 mt-3">
    <img src={item.Product_img1} className='img-fluid ' alt="cart" />
  </div>

  <div className="col-md-9 col-sm-12 ">
    <h2 className='mt-4'>{item.Product_Name} </h2>
    <h5 className='mt-4'>Category: {item.Category}</h5>

    <div className="col-12 row">
      <div className=" col-md-9 mt-3">
        <div className="col-sm-12 col-8 ">
          <button className='btn btn-primary pe-3 ps-3 ' onClick={increment}> + </button>
          <span > {item.quantity}  </span>
          <button className='btn btn-primary pe-3 ps-3' onClick={decrement}>-</button>
        </div>
        <div className="col-md-4  col-sm-12">
          <h4 className='mt-3 text-danger'>{parseInt(item.Product_Price)}$</h4>
        </div>
      </div>
    </div>

    <button className='btn btn-primary me-2 mt-3'><DeleteIcon /></button>
    <button className='btn btn-danger mt-3'><FavoriteIcon /></button>

   


  </div>

</div>

</div>



<hr className='mt-4'/></>
        )
       })}



      </div>

      {/* summary */}

        <div className=" col-md-4 h-50 col-sm-12 bg-light rounded-3 mt-3 mt-md-0">

          <h2 className='mt-3'>Summary</h2>
          <hr />
          <p className='mt-4'>Products : $53.99</p>
          <p>Shipping Gratis</p>
          <hr />

          <h3>Total Amount (including VAT)</h3>
          <h4>$53.99</h4>

          <button className='btn btn-primary mt-3 mb-3 w-100'>Go to checkout</button>

        </div>

      </div>

    </div>


  )




}

export default Cart
