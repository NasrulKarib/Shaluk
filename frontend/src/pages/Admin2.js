import React, { useEffect, useState } from 'react';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsCheckLg } from 'react-icons/bs';
import { errorToast, successToast } from './toast';
const Admin2 = () => {
      const navigate = useNavigate()
      const [allShops,setAllShops] = useState([]);
      const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      const token = userinfo?.token;
      const headers = {
      "Content-type" : "application/json",
      Authorization : `${token}`
  }
      useEffect(()=> {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"))
      if(userinfo?.role!=="admin") {
            navigate("/login")
      }
         const res =  axios.get("https://shaluk-backend.vercel.app/all-shops")
         .then((res)=> {
            setAllShops(res.data.shops)
         })
      },[])

      const [productInfo,setProductInfo] = useState({
            product_name : "",
            product_description : "",
            product_price : 0,
            product_image : "",
            shop_id : allShops[0]?.shop_id || ""
            
      })

      const {product_name,product_description,product_price,product_image,shop_id} = productInfo;
      
      const handleProductImage = async e => {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append("image",file);
          await axios.post("https://api.imgbb.com/1/upload?key=87b7ec1ad2930bf60fd72ea5d3f9d10b",formData)
          .then((res)=> {
            console.log(res.data.data)
            setProductInfo((prev)=> ({
                  ...prev,
                  product_image : res.data.data.url
            }))
          })
      }
      const handleChange = async e => {
         setProductInfo((prev)=> ({
            ...prev,
            [e.target.name] : e.target.value
         }))
      }
      const handleSubmit = async e => {
          console.log(productInfo)
          if(shop_id.length===0) {
            let shop_id = allShops[0].shop_id;
            const res =await axios.post("https://shaluk-backend.vercel.app/add-product",{
               product_name,
               product_description,
               product_price,
               product_image,
               shop_id

            },{headers})
            .then((res)=> {
                  if(res.data.message==="Product is added Successfully") {
                        successToast(res.data.message)
                        setProductInfo({
                              product_name : "",
                              product_description : "",
                              product_price : 0,
                              product_image : "",
                              shop_id : allShops[0]?.shop_id || ""
                        })
                  } else {
                        errorToast(res.data.message)
                  }
            })
          } else {
            const res = await axios.post("https://shaluk-backend.vercel.app/add-product",productInfo,{headers})
               .then((res)=> {
                  console.log(res.data)
                     if(res.data.message==="Product is added Successfully") {
                        setProductInfo({
                              product_name : "",
                              product_description : "",
                              product_price : 0,
                              product_image : "",
                              shop_id : allShops[0]?.shop_id || ""
                        })
                           successToast(res.data.message)
                     } else {
                           errorToast(res.data.message)
                     }
               })
          }
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
                              Add new Product:
                        </div>
                  

                  <div 
                  class="products">
                        <div class="p_name">
                        Product name:
                        </div>
                        <input class="name_text" type="text" name='product_name' value={product_name} onChange={handleChange} type="text" placeholder=""/>
                        
                  </div>

                  <div 
                  class="products">
                        <div class="p_name">
                        Product Details:
                        </div>
                        <input class="name_text" type="text" name='product_description' value={product_description} onChange={handleChange} type="text" placeholder=""/>
                        
                  </div>

                  <div 
                  class="products">
                        <div class="p_name">
                        Product Price:
                        </div>
                        <input class="name_text" type="number" name='product_price' value={product_price} onChange={handleChange} type="text" placeholder=""/>
                        
                  </div>

                  <div class="products">
                        <div class="p_name">
                        Select Shop :
                        </div>

                        <select name="shop_id" value={shop_id} onChange={handleChange} required class="shop_type">
                              {
                                    allShops?.map((shop)=> {
                                          const {shop_id,shop_name} = shop
                                          return (
                                          <>
                                          <option value={shop_id}>{shop_name}</option>
                                          </>
                                          )
                                    })
                              }
                              {/* <option value="Medicine">Medicine</option>
                              <option value="Food">Food</option> */}

                        </select>
                        
                  </div>
                  <div 
                  class="products">
                        <div class="p_name">
                              Product Image:
                        </div>
                        <input class="name_text" onChange={handleProductImage} type="file" placeholder=""/>
                        
                  </div>
                  
            <button class="btn" onClick={handleSubmit}>
                  Add Product
                  </button>
                  </div>

            </div>

        </div>
        
        

    </>
  )
}

export default Admin2;