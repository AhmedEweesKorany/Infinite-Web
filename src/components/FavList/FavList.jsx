import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFav } from '../../rtk/slices/fav-slice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const FavList = () => {

    const state  = useSelector(x=>x.Fav)
    const dispatch = useDispatch()

    console.log(state)
  return (
   <>
     <div className="container">
        <div className="row">
            {
                state.map((item)=>{
                    return (
                        <>
                   <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5 " >
                <div className="card pro-card">
                <a href={`#`}>
                  <img src={item.Product_img1} alt="" className="card-img-top card-img" loading="lazy" />
                  </a>
                  <div className="card-body">
                    <h6 className="card-title mt-2">{item.Product_Name}</h6>
                    <button className="btn mt-3 btn-danger" onClick={()=>{
                        toast("item added to Favourite ❤")
                      dispatch(removeFromFav(item))
                    }}>Remove From Favourite</button>
                
                    <h4 className="card-text float-end  mt-4  price">{parseInt(item.Product_Price)}$</h4>
                  </div>
                </div>
              </div>
                        </>
                    )
                })
                
                
            }
        </div>
    </div>
<ToastContainer/>
   </>
   
  )
}

export default FavList