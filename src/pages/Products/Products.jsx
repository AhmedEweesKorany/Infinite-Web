import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../Products/style.css";
import "./product";
import { useParams } from "react-router";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/Cart-slice";
import { Link } from "react-router-dom";
import { addToFav } from "../../rtk/slices/fav-slice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'

function Products() {


  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  let {cate} = useParams();
  const [data,setData] = useState([]);
  async function getData(cate){
      const res  = await axios.get("http://localhost:3000",{params:{
        cate:cate
      }}).then(data=>setData(data.data))
  }


  useEffect(()=>{
    getData(cate)
  },[])
  // pagination 

  const items = 4
  const [cur,setCur] = useState(1)
  const numOfPage = Math.ceil(data.length/items)
  let eachPage = [];
  for(let i = 1;i<=numOfPage;i++){
    eachPage.push(i);
  }
  const startIndex = (cur-1) * items
  const endIndex = startIndex + items

  const dataPerPage = data.slice(startIndex,endIndex)

return (
  <div>
    <div className="products">
      <h1 style={{textAlign:"center",textTransform:"capitalize"}}>{cate} Products</h1>
      <div className="container">
        <div className="row">
          {dataPerPage.length > 0  ? dataPerPage.map((item) => {
            const Price = Math.round(item.Product_Price)
            return (
           
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5" key={item.Product_Id}>
              <div className="card pro-card">
              <a href={`/product/${item.Product_Id}`}>
                <img src={item.Product_img1} alt="" className="card-img-top card-img" loading="lazy" />
                </a>
                {item.isNew ? <span className="newSeazon">New Seazon</span>:null}
                <div className="card-body">
                  <h6 className="card-title mt-2">{item.Product_Name}</h6>
                 {state.Auth == true ? <button className="btn mt-3 btn-dark" onClick={()=>{
                    dispatch(addToCart(item))
                    toast.success("item added successfully")
                  }}>add to cart</button>: <Link className="btn mt-3 btn-dark" to={"/login"}>add to cart</Link>}
                  {state.Auth == true ?<button className="btn mx-1 mt-3 btn-outline-danger no-hover " onClick={()=>{
                    // add item to washlist here
                    dispatch(addToFav(item))
                    toast("item added to Favourite ❤")
                  }}><FavoriteIcon className="svgnohover"/></button>:<Link to={"/login"} className="btn mx-1 mt-3 btn-outline-danger no-hover "><FavoriteIcon className="svgnohover"/></Link>}
                  <h4 className="card-text float-end  mt-4  price">${Price}</h4>
                </div>
              </div>
            </div>
          
            );
          }):<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <span class="loader"></span>
            </div>}

          <div className="pagination">
          <div className="icons">
        <div className="icon" onClick={()=>{
          if(cur == 1){
            return;
          }
          setCur(cur - 1 )
        }}>
          <WestOutlinedIcon />
        </div>
            {eachPage.map(item=>{
              if(item == cur){
                return(<>
                  <div className="icon" style={{background:"#000",color:"#fff"}}>
                    {item}
                  </div>
                  </>)
              }
              return(<>
              <div className="icon" onClick={()=>{
                setCur(item)
              }}>
                {item}
              </div>
              </>)
            })}
        <div className="icon" onClick={()=>{
          if(cur == numOfPage){
            return;
          }
          setCur(cur + 1)
        }} >
          <EastOutlinedIcon />
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
  </div>
)}

export default Products;
