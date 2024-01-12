import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  return (
        <div className='main-navbar'>
            <div className="navbar-container">
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
                    <a href="#category">Category</a>

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
                <div className="responsive-menu">
                    <div className="menu">
                    <label htmlFor="check"><MenuIcon/></label>
                    <input type="checkbox" name="" id="check" />
                    <div className="items">
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
                    <a href="#category">Category</a>

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

                    {/* <div className="close">
                        <CloseIcon/>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar