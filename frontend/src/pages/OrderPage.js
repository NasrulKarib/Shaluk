import React from 'react';
import {useEffect, useState} from "react";
import OrderProdInfo from '../components/OrderProdInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
const API = "";


const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  const token = userinfo?.token;
  const headers = {
      "Content-type" : "application/json",
      Authorization : `${token}`
  }   
    const navigate = useNavigate();

    useEffect(() => {
        if(userinfo?.role!=="customer") {
            navigate("/login")
        } else { 
        const user_id = userinfo.id;
        const res = axios.post("https://shaluk-backend.vercel.app/order-by-a-particular-user",{user_id},{headers})
        .then((res)=> {
            console.log(res.data.orders)
            setOrders(res.data.orders)
        })
        }
    }, [])
  return (
    <>
    <div class="order_order">
        <div class="order_top">

             <table class="order_table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Shop Name</th>
                           <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders?.map((order)=> <OrderProdInfo order ={order}/>)
                    }
                    </tbody>
            </table>

        </div>
    </div>
    </>
  )
}

export default OrderPage;