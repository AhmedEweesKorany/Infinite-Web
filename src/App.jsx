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
import axios from "axios";
import AboutUs from "./pages/AboutUs/AboutUs";

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
      }
      
    ]
  }
]); 
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
