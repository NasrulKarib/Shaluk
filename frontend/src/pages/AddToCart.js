import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import axios from 'axios';
import { errorToast, successToast } from './toast';
import { useDispatch } from 'react-redux';
import { getInfo } from '../features/userQuery/userinfoSlice';
import { BsCheckLg } from 'react-icons/bs';
import { useEffect } from 'react';
const AddToCart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userinfo = JSON.parse(localStorage.getItem("userinfo"))
    useEffect(()=> {
        if(userinfo?.role!=="customer") {
              navigate("/login")
        } else {
            const storage = JSON.parse(localStorage.getItem("cartproducts"));
      if (storage !== null) {
        const checkexisting = storage?.filter(
          (p) => p.product_id === location.state.product.product_id
        );
        if (checkexisting.length === 0) {
          const product = {
            ...location.state.product,
            quantity: 1,
          };
          const products = [...storage, product];
          const set = JSON.stringify(products);
          localStorage.setItem("cartproducts", set);
          successToast("Product Added to cart");
          navigate("/")
        } else {
          errorToast("Product was already added to cart")
          navigate("/")
        }
      } else {
        const product = {
          ...location.state.product,
          quantity: 1,
        };
        const products = [product];
        const set = JSON.stringify(products);
        localStorage.setItem("cartproducts", set);
        successToast("Product Added to cart");
        navigate("/")
      }
        }
        
    },[])
  return (
    <> 
     
    </>
  )
}

export default AddToCart;