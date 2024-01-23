import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
//main css file 
import "./main.css"
// react-slick 

import AboutUs from "./pages/AboutUs/AboutUs";
import SingUp from "./pages/Login&Signup/SignUp";
import Cart from "./components/cart/Cart"

import Login from "./pages/Login&Signup/Login";
import UserinfoCard from "./components/UserinfoCard/UserinfoCard";
import FavList from "./components/FavList/FavList";
import CenterMode from "./components/fake/Contact";


const Layout = ()=>{

  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Products/:cate',
        element:<Products/>
      },
      {
        path:'/Product/:id',
        element:<Product/>
      },
      {
        path:"/Contact",
        element:<ContactUs/>
      },{
        path: "/about",
        element: <AboutUs/>
      },{
        path:"/UserInfo",element:<UserinfoCard/>
      },{
        path:"/cart",
        element:<Cart/>
      },{
        path:"/favlist",
        element:<FavList/>
      }
      
    ]
  },{
    path:"/Signup",
    element:<SingUp/>
  },{
    path:"/login",
    element:<Login/>
  }
]); 
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
