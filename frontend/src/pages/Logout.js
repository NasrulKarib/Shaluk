import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import axios from 'axios';
import { errorToast, successToast } from './toast';
import { useDispatch } from 'react-redux';
import { getInfo } from '../features/userQuery/userinfoSlice';
import { BsCheckLg } from 'react-icons/bs';
import { useEffect } from 'react';
const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=> {
      localStorage.removeItem("userinfo");
      dispatch(getInfo())
      navigate("/login")

    },[])
  return (
    <> 
     
    </>
  )
}

export default Logout;