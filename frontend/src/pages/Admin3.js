import React, { useEffect, useState } from 'react';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { errorToast, successToast } from './toast';

const Admin3 = () => {
      const navigate = useNavigate()
      const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      const token = userinfo?.token;
      const headers = {
      "Content-type" : "application/json",
      Authorization : `${token}`
  }

     const [orders,setOrders] = useState([])
     const [flag,setFlag] = useState(true)
      useEffect(()=> {
            const userinfo = JSON.parse(localStorage.getItem("userinfo"))
            if(userinfo?.role!=="admin") {
              navigate("/login")
            }
       const res = axios.get("https://shaluk-backend.vercel.app/get-all-orders",{headers})
       .then((res)=> {
          setOrders(res.data.orders)        
       })
      },[flag])

      const handleOrderStatusChange = async (order_id) => {
            console.log(order_id)
            const res = await axios.put("https://shaluk-backend.vercel.app/change-order-status",{order_id},{headers})
            .then((res)=> {
                  console.log(res.data)
                  if(res.data.message==="Successfully updated order status") {
                        successToast(res.data.message)
                        setOrders([])
                        setFlag(!flag)
                  } else {
                        errorToast(res.data.message)
                  }
            })
      }
  return (
    <>
              <div class="header">
              <div class="name">Shaluk.</div>  
              <div class="right">

              <Link to="/admin1">
            <button class="admin_btnAll"> 
                  Add new Shop
            </button>
            </Link>
            <Link to="/admin2">     
                <button class="admin_btnAll">
                   Add new Product
                </button>
            </Link>

            <Link to="/admin3">     
                <button class="admin_btnAll">
                   Orders
                </button>
            </Link>

            <Link to="/logout">
            <button class="admin_btnAll"> 
                  Signout
                </button>
            </Link>
                   
              </div>

         </div> 
    <Meta title ={"Admin Panel"}/>
        <BreadCrum title="Admin Panel" />
        
        <div className='admin-wrapper home-wrapper-2'>
          
          <div class="order_product">
            <div class="top">

                  <div class="add_text">
                       Orders:
                  </div>

                              
                  <table>
                        <thead>
                        <tr>
                              <th>
                                    Order no
                              </th>
                              <th>
                                    Customer name
                              </th>

                              <th>
                                    Address
                              </th>

                              <th>
                                    Mobile
                              </th>

                              <th>
                                    Shop name 
                              </th>

                              <th>
                                    product name 
                              </th>
                              <th>
                                    product quantity
                              </th>
                              <th>
                                    Total Price
                              </th>
                              <th>
                                    Order Status
                              </th>
                  
                        </tr>

                        </thead>

                        <tbody>


                              {/* <td  data-label="Order no">1</td>
                              <td daa-label="Customer name">Gourab</td>
                              <td data-label="Address">QK hall cuet</td>
                              <td data-label="Mobile">017XXXXXXXX</td>
                              <td data-label="Shop Nmae">Carbon</td>
                              <td data-label="Product name">Chili chicken</td>
                              <td data-label="Product quantiry">2</td>
                              <td data-label="Total price">300TK</td> */}
                              {
                                    orders?.map((order)=> {
                                          const {order_id,name,address,phone_number,shop_name,product_name,
                                          quantity,price,order_status} = order
                                      return (
                                          <>
                                          
                                         <tr>
                                         <td data-label="Order no">{order_id}</td>
                                          <td data-label="Customer name">{name}</td>
                                          <td data-label="Address">{address}</td>
                                          <td data-label="Phone Number">{phone_number}</td>
                                          <td data-label="Shop Name">{shop_name}</td>
                                          <td data-label="Product Name">{product_name}</td>
                                          <td data-label="Product Quantity">{quantity}</td>
                                          <td data-label="Total Price">{price}</td>
                                          <td>
                                         {
                                          order_status === "Pending" ? 
                                          <button onClick={()=>handleOrderStatusChange(order_id)} class="order_now">
                                          Confirm order
                                          </button>  :  <button class="order_now">{order_status}</button>
                                         }
                                          </td>
                                         </tr>
                                          </>
                                      )
                                    })
                              }



                        </tbody>

                  </table>




                  
            

            </div>

         </div>
          
        </div>
    </>
  )
}

export default Admin3;