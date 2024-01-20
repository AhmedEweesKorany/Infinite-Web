import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { notAuth } from '../../rtk/slices/isAthun';

const Navbar = () => {
const allState = useSelector(state=>state)
console.log(allState.Auth)
const state = allState.cart
const [showUser,setShowUser] = useState(false);

const dispatch = useDispatch()

const [auth,setAuth] = useState(false);
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [birth,setBirth] = useState("")


const navigate = useNavigate()

axios.defaults.withCredentials = true
useEffect(()=>{
axios.get("http://localhost:3000/userCard").then(response=>{
    console.log(response.data)
    if(response.data.authenticated === true){
        setAuth(true)
        setName(response.data.name)
        setEmail(response.data.email)
        setBirth(response.data.birth)
    }else{
        setAuth(false)
    }
})
},[])

const handelLogout = ()=>{
    axios.get("http://localhost:3000/logout").then(res=>{
        dispatch(notAuth())
        window.location.reload()
    }).catch(e=>console.log(e))
}
const userInfo = auth ?  <div className="person-info">
<div className="img">
    <img src="https://img.freepik.com/free-vector/organic-flat-business-person-meditating_23-2148911200.jpg?size=626&ext=jpg&ga=GA1.1.996181127.1705689649&semt=sph" alt="" />
</div>
<div className="content">
<h3>Hello {name}</h3>
<h4>{email}</h4>
<h5>{birth.toString()}</h5>
<button className='btn btn-outline-danger d-block  w-100 ' onClick={handelLogout}>Log Out</button>
</div>
</div>: 
<div className="person-info">
<div className="img">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhMIBwgWFQkXGBkbGBgYGR4WFRseHxgXHxgeGxUeHSgiHR4tHx4dITEhJS0rLi4uHR8zODMtNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgA+gMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgFBgIDBAH/xABBEAACAQIDBAUIBwUJAAAAAAAAAQIDBQQGEQcSITEiQVFhkRMyYnGBobHRCBcjQlNUkxQkUsHhJTNDgoOSotLw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANBzvtSsuVm8LTfl7iv8OD4Rfpz6vVzNf2x7Rqlp1y/Yqn7/JfaTXOCf3Y+k/cYvZvsiWJpxu+botuXSjRber1471R8+PZ4gYKttF2g5qrOnYaEo09eVCnvaeuo9f5H1Zf2uVl5V1cTr310n4b5YbB4PD4HDrD4OhGFFcoxSjFexHoArdPMW1LKn2lwjXdFfiwVWH+9cvE3TJ+2u33GpHC5hoKhXeiVSLbpN9/XH3olqUYzjuyXR8URvn3ZNab/Sli7RTjQuXF8OFOb7JJcvWgJGpVadamqlKacGtU09Vp2pnaV32dZ1uOSb28t5mUlgd7de9zpN8mvRf9SwsJxnHei9YvwA5gAAAAAAAAAAAAAAAAAAAAAAAAAAAABhc4XuGXct17rU504txXbJ8IrxaM0RL9IvHzoZWoYOL4VKur9UI6/FoDUdjWW55qzLVzFeFv0qct7pcVOrLite5c/AsQaNsZt0bfs+wziunUUqj795vT3JG8gAAAAAET7d8oU7lZHfsJT/faPn6c5U+vXvjz9Wp7NhmZpXvK7wGKnrisO1HvcH5j9nFewkTG4anjcHPC1lrTnGUX6mtGV82GV52zaJWtbfRlCpB+unLVfBgWLAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGfpJUZStWDrJdFVJp+txWnwJmNE2zWSV6yLVVGOtelpViuvSPnf8AFsDI7L68a+QMFOL4eSjH2x1T+BtREH0eswwxVkqWKrP7elJyiu2EuenqfxJfAAAAAAPjaS1fIrlso/fNsNTE0/7vXES9jbS+KJm2j5gp5bylXxrl9s4uFNdbnJaLw5+wjX6Odmm54m+Vo9HRUoPteu9N/ACcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ThGpBxmtYtNPs0ZzAFas32i47L87xu9pi/wBhlJypv7uj8+nL/wBy0J0ydmu25stixlvqdNab8G+nB9jX8z3X6y4DMFslb7pQUsPLxT6mn1NEB3/Ieatn9yd1y3XnPCLlOnxml2VKfWvFAWPBBWX9u9SnFUcxWvemuc6T0ftpv5m109tuUJw1lKspdnk9X7mBJR5LlcMJbMHLGY+vGGHitZSlwSRE962822lBxs1rqTqdTqNQj4LVmkbmedq2OXlE1gU+vWGHh/2fiwOeb77ctqebadrs9NrBRbVNPlp96pPs4e4sBlix4XLljpWrBroQSTfXJ9cn62YrIeRrbk7A+Twy3sZJLylV+dJ9i7I9xtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrOc862jJ+C8tcautdroUo8Zy+S72Qtjdoees6Yt4XLlCdOl/DRWskvSqvl7gLHNpc2fHOL4byK5w2XbQ7gvLYvFaTf4lduXu1Pv1PZ6/PU/wBaXyAmi85Jyve5OdxtNKVR/eXRn4x0NdnsZyXKW8qFRLs8q9COfqez1+ep/rS+Q+p7PX56n+tL5AS1a9muTrXNVKFohKouTqN1PdJ6G20o0aNNU6SUYLqWiS9hXj6ns9fnqf60vkPqez1+ep/rS+QFi1KL5M5Fcnskz5RW/Sxkd7uryTOiV22l5DmpY91XhV+J9tSf+fjp4oCygI62f7VLbmqSwWMiqFz/AIW+hN+g+3uZIoAAAAAAAAAAAAAAAAAAAAAAAAAwecMw4fK9gqXTE8d1aRj1yk/NijOECfSIu9XE3jDWKg+jGO/JdspvSPuXvAweUMt3TajmWpdr1Vl+xJ/aS7eynDs4eBYez2jAWTAxwVrw0adBdUVp7W+t97PBkmw0ct5ZoW2nHpRinN9s3xk37TPgAAAAAAAADqrUqdek6VaClBrimtU13o7QBA21jZpG003mLLFNxpRe9Upx+56cOxdq6jc9j2d5Zqs7wlwn/adHTefXOPVP19T/AKkhVqVOvSdKrDWDTTT4pp80VutUJZA2y/skHphXV3P9Op5vhqvACyoAAAAAAAAAAAAAAAAAAAAAAABBefMp3u6bXKWLpW+csC5UHv6awUYab2r6uTJ0AAAAAAAAAAAAAAAIN2t5TvVx2g4fH2u3znRlGkt6K1inGXHefVw0JyAHGGu50uZyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z" alt="" />
</div>
<div className="content">
<h4>Sign In Now</h4>
<Link to={"/login"} className='btn d-block w-100 btn-outline-primary '>Sign In</Link>
</div>
</div>

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
                <div className="item person-container">
                    <div onClick={()=>{
                        setShowUser(!showUser)
                    }} style={{cursor:"pointer"}}>
                    <PersonOutlineIcon />
                    </div>
                 {showUser ?  userInfo:""}
                </div>
                <div className="item">
                    {allState.Auth == true ?<Link to="#"><FavoriteBorderIcon/></Link>:<Link to="/login"><FavoriteBorderIcon/></Link>}
                </div>
                <div className="item cart" >
                    {allState.Auth == true ? <Link to="/cart" ><ShoppingCartOutlinedIcon/></Link>:<Link to="/login" ><ShoppingCartOutlinedIcon/></Link>}
                    <span>{state.length}</span>
                </div>
                <div className="responsive-menu">
                    <div className="menu">
                    <label htmlFor="check"><MenuIcon/></label>
                    <input type="checkbox" name="" id="check" />
                    <div className="items">
                    <div className="item">
                    <a href="/">Home</a>

                </div>
                <div className="item">
                    <a href="/about">About</a>

                </div>
                <div className="item">
                    <a href="/Contact" >Contact</a>

                </div>

                <div className="item">
                    <a href="#category">Category</a>

                </div>

            
                <div className="item">
                <a href="#"><SearchIcon/></a>

                </div>
                <div className="item">
                    <a href="/UserInfo"><PersonOutlineIcon/></a>

                </div>
                <div className="item">
                    {allState.Auth == true ?<Link to="#"><FavoriteBorderIcon/></Link>:<Link to="/login"><FavoriteBorderIcon/></Link>}
                </div>
                <div className="item cart" >
                    {allState.Auth == true ? <Link to="/cart" ><ShoppingCartOutlinedIcon/></Link>:<Link to="/login" ><ShoppingCartOutlinedIcon/></Link>}
                    <span>{state.length}</span>
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