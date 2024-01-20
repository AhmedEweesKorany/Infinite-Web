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
// bootstrap link
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
//main css file 
import "./main.css"

import AboutUs from "./pages/AboutUs/AboutUs";
import SingUp from "./pages/Login&Signup/SignUp";

import Suc from "./pages/Login&Signup/Suc";
import Login from "./pages/Login&Signup/Login";
import UserinfoCard from "./components/UserinfoCard/UserinfoCard";

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
        path:'/Product/:cate/:id',
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
      }
      
    ]
  },{
    path:"/Signup",
    element:<SingUp/>
  },{
    path:"/suc-signup",
    element:<Suc/>
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
