import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
const cart = () => {

    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

  }
  return (
   




    <div className="container">

      <div className="row ">

        <div className="table " style={{width:'66%'}}>

          {/* products */}

        <div className="col-md-8 col-sm-12  me-4 rounded-3">

          <div className="row ">

            <div className="col-md-3 col-sm-12 mt-3">
              <img src="https://i.pinimg.com/564x/7e/d4/95/7ed495880da71820c4d69dc08cc50243.jpg" className='img-fluid ' alt="cart" />
            </div>

            <div className="col-md-9 col-sm-12 ">
              <h2 className='mt-4'>Paper Plane t-shirt </h2>
              <h5 className='mt-4'>Color: Sleeve</h5>
              <p className='mt-4'>Size: M</p>

              <div className="col-12 row">
                <div className=" col-md-9 mt-3">
                  <div className="col-sm-12 col-8 ">
                    <button className='btn btn-primary pe-3 ps-3 ' onClick={increment}> + </button>
                    <span > {count}  </span>
                    <button className='btn btn-primary pe-3 ps-3' onClick={decrement}>-</button>
                  </div>
                  <div className="col-md-4  col-sm-12">
                    <h4 className='mt-3 text-danger'>$49.99</h4>
                  </div>
                </div>
              </div>

              <button className='btn btn-primary me-2 mt-3'><DeleteIcon /></button>
              <button className='btn btn-danger mt-3'><FavoriteIcon /></button>

             


            </div>

          </div>

        </div>

        

<hr className='mt-4'/>



        <div className="col-md-8 col-sm-12  me-4 rounded-3">

          <div className="row">

            <div className="col-md-3 col-sm-12 mt-3">
              <img src="https://i.pinimg.com/564x/56/5a/cc/565acc2eca392d809eab6807182c0ae5.jpg" className='img-fluid' alt="cart" />
            </div>

            <div className="col-md-9 col-sm-12">
              <h2 className='mt-4'>Black cotton t-shirt </h2>
              <h5 className='mt-4'>Color: Back</h5>
              <p className='mt-4'>Size: Xl</p>

              <div className="col-12 ">
                <div className=" col-md-8  mt-3">
                  <div className="col-sm-12 col-8 ">
                    <button className='btn btn-primary pe-3 ps-3 ' onClick={increment}> + </button>
                    <span> {count} </span>
                    <button className='btn btn-primary pe-3 ps-3' onClick={decrement}>-</button>
                  </div>
                  <div className="col-md-4  col-sm-12">
                    <h4 className='mt-3 text-danger'>$120.50</h4>
                  </div>
                </div>
              </div>

              <button className='btn btn-primary me-2 mt-3 mb-4'><DeleteIcon /></button>
              <button className='btn btn-danger mt-3  mb-4'><FavoriteIcon /></button>

              


            </div>

          </div>

        </div>

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

export default cart
