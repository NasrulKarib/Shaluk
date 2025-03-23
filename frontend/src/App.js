import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Food from './pages/Food';
import Medicin from './pages/Medicin';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/Profile';
import Admin1 from './pages/Admin1';
import Admin2 from './pages/Admin2';
import Admin3 from './pages/Admin3';
import Logout from './pages/Logout';
import OrderPage from './pages/OrderPage';
import AddToCart from './pages/AddToCart';
import Routers from './routes/Routers';
import { useDispatch } from 'react-redux';
import { getInfo } from './features/userQuery/userinfoSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(getInfo());
  return (
    <>
    <Routers />
    <ToastContainer
     position='top-center'
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme='light'
     />
    {/* <BrowserRouter>
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
     */}
    </>
  );
}

export default App;
