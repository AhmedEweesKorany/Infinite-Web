import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">  
            <div className="item">
                <Link to="/products/1">Men</Link>

            </div>
            <div className="item">
                <Link to="/products/2">Women</Link>

            </div>
            <div className="item">
                <Link to="/products/3">Children</Link>

            </div>
            <div className="item">
                <Link to="/products/4">Accessories</Link>

            </div>
            </div>
            <div className="center">
    <Link to="/">INGINITE WEB</Link>
            </div>
            <div className="right">
            <div className="item">
                <Link to="/">Home</Link>

            </div>
            <div className="item">
                <Link to="/about">About</Link>

            </div>
            <div className="item">
                <Link to="/Contact">Contact</Link>

            </div>
            <div className="item">
            <Link to="#"><SearchIcon/></Link>

            </div>
            <div className="item">
                <Link to="#"><PersonOutlineIcon/></Link>

            </div>
            <div className="item">
                <Link to="#"><FavoriteBorderIcon/></Link>

            </div>
            <div className="item cart">
                <Link to="#"><ShoppingCartOutlinedIcon/></Link>
                <span>0</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar