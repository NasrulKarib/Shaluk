import React, { useEffect, useState } from 'react';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import axios from 'axios';
import { errorToast, successToast } from './toast';

const Admin1 = () => {
  const navigate = useNavigate(); 
 const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  const token = userinfo?.token;
  const headers = {
      "Content-type" : "application/json",
      Authorization : `${token}`
  }
  const [shopInfo,setShopInfo] = useState({
      shop_name : "",
      shop_address : "",
      shop_type : "Medicine",
      shop_number : ""

  })

  useEffect(()=> {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"))
      if(userinfo?.role!=="admin") {
            navigate("/login")
      }
  },[])
  const {shop_name,shop_address,shop_type,shop_number} = shopInfo;

  const handleChange = e => {
      setShopInfo((prev)=> ({
            ...prev,
            [e.target.name] : e.target.value
      }))
  }

  const handleSubmit = async e => {
      // console.log(shopInfo)
      const res = await axios.post("https://shaluk-backend.vercel.app/add-shop",shopInfo,{headers})
      .then((res)=> {
            console.log(res.data)
            if(res.data.message==="Shop is added Successfully") {
                  setShopInfo({
                        shop_name : "",
                        shop_address : "",
                        shop_type : "Medicine",
                        shop_number : ""
                  })
                  successToast(res.data.message)
            } else {
                  errorToast(res.data.message)
            }
      })
      .catch((error)=> {
            console.log(error)
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
            <Link to="/">
            <button class="admin_btnAll"> 
                  Signout
                </button>
            </Link>
                
                   
              </div>

         </div> 
    <Meta title ={"Admin Panel"}/>
        <BreadCrum title="Admin Panel" />
        

        <div class="add_new">
            <div class="add_product">
                  <div class="top">
                        <div class="add_text">
                              Add new Shop:
                        </div>
                  <div 
                  class="products">
                        <div class="p_name">
                        Shop name:
                        </div>
                        <input class="name_text" required name="shop_name" value={shop_name} onChange={handleChange} type="text" placeholder=""/>
                        
                  </div>

                  <div class="products">
                        <div class="p_name">
                        Shop Type:
                        </div>

                        <select required name="shop_type" value={shop_type} onChange={handleChange} required class="shop_type">
                              <option value="Medicine">Medicine</option>
                              <option value="Food">Food</option>

                        </select>
                        
                  </div>

                  <div 
                  class="products">
                        <div class="p_name">
                        Shop Address:
                        </div>
                        <input required class="name_text" name="shop_address" value={shop_address} onChange={handleChange} type="text" placeholder=""/>
                        
                  </div>

                  <div 
                  class="products">
                        <div class="p_name">
                        Mobile number:
                        </div>
                        <input required class="name_text" name="shop_number" value={shop_number} onChange={handleChange} type="text" placeholder=""/>
                        
                  </div>

                  {/* <div class="s_name">
                        <div class="s_n">
                        Email:
                        </div>
                        <input 
                        class="s_n_d"
                        type="email" placeholder=""/>
                        
                  </div> */}


                  
            <button class="btn" onClick={handleSubmit}>
                  Add Shop
                  </button>
                  </div>

            </div>
        </div>

    
    </>
  )
}

export default Admin1;