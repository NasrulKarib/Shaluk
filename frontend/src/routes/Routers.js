import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Food from "../pages/Food";
import Medicin from "../pages/Medicin";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import OrderPage from "../pages/OrderPage";
import Admin1 from "../pages/Admin1";
import Admin2 from "../pages/Admin2";
import Admin3 from "../pages/Admin3";
import Logout from "../pages/Logout";
import AddToCart from "../pages/AddToCart";


const Routers = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/food' element={<Food/>} />
              <Route path='/medicne' element={<Medicin/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/shop' element={<Shop/>} />
              <Route path='/wishlist' element={<Wishlist/>} />
              <Route path='/cart' element={<Cart/>} />  
              <Route path='/profile' element={<Profile/>} /> 
              <Route path='/orderpage' element={<OrderPage/>} /> 
    
            </Route>
            <Route path='/admin1' element={<Admin1/>} />
            <Route path='/admin2' element={<Admin2/>} />
            <Route path='/admin3' element={<Admin3/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/add-to-cart' element={<AddToCart />} />
          </Routes>    
        </BrowserRouter>
    )
}
export default Routers;