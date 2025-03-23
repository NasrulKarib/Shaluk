import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import {AiFillDelete} from 'react-icons/ai';
import Meta from '../components/Meta';
import { useEffect } from 'react';
import { useState } from 'react';
import { errorToast, successToast } from './toast';
import axios from 'axios';
const Cart = () => {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  const token = userinfo?.token;
  const headers = {
      "Content-type" : "application/json",
      Authorization : `${token}`
  }   
    const navigate = useNavigate();
    const [cartProducts,setCartProducts] =  useState([]);
    const [click,setClick] = useState(true)
    let price = 0;
    useEffect(()=> {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"))
      if(userinfo?.role!=="customer") {
        navigate("/login")
      } else {
        const getCartProducts = JSON.parse(localStorage.getItem("cartproducts"));
        if(getCartProducts!==null) {
            setCartProducts(getCartProducts)
        }
      }
    },[click])

    const handleProductDelete = product_id => {
        console.log(product_id)
        const filteredProducts = cartProducts.filter((cartProduct)=> cartProduct.product_id!==product_id);
        const updatedLocalStorage = JSON.stringify(filteredProducts)
        localStorage.setItem("cartproducts",updatedLocalStorage)
        successToast("Product is removed successfully from the cart")
        setClick(!click)
    }
    const [value,setValue] = useState(cartProducts[0]?.quantity || 1)
    const handleIncDec = (e,product_id) => {
       setValue(parseInt(e.target.value))
       const updatedCartProduct = cartProducts?.map((obj)=> {
        if(obj.product_id===product_id) {
            return {
                ...obj,
                quantity : parseInt(e.target.value)
            }
        }
        return {...obj}
       })
       const updatedLocalStorage = JSON.stringify(updatedCartProduct);
       localStorage.setItem("cartproducts",updatedLocalStorage);
       setCartProducts([])
       setClick(!click)
    }
    const handleOrder = async () => {
        const product_id = cartProducts[0].product_id;
        const quantity = cartProducts[0].quantity;
        const price = cartProducts[0].product_price
        const user_id = userinfo.id
        const res = await axios.post("https://shaluk-backend.vercel.app/place-order",{product_id,quantity,price,user_id},{headers})
        .then((res)=> {
            if(res.data.message==="Order is placed Successfully") {
                successToast(res.data.message)
                localStorage.removeItem("cartproducts")
                setCartProducts([])
                setClick(!click)
               
            } else {
                errorToast(res.data.message)
            }
        })
    }
  return (
    <>
    <Meta title ={"Cart Page"}/>
    <BreadCrum title="Cart Page" />

    <div className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                   
                    {
                        
                        cartProducts?.map((product)=> {
                            price = price + product.quantity*product.product_price
                            return (
                                <>
                                 <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 d-flex gap-15 align-items-center'>
                            <div className='w-25 mt-0'>
                                <img src={product.product_image} alt='Product-images' className='img-fluid'/>
                            </div>
                            <div className='w-75'>
                                <h5>{product.product_name}</h5>
                               
                            </div>
                        </div> 
                        <div className='cart-col-2'>
                            <h5 className='price'>{(product.product_price)}</h5>
                        </div> 
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type='number' className="w-30 form-control"
                                 min={1} onChange={(e)=>handleIncDec(e,product.product_id)} value={value} name='inc_dec' id=''/>
                         
                            </div>
                           
                            <div>
                                <AiFillDelete onClick={()=>handleProductDelete(product.product_id)} className=''/>
                            </div>
                           
                        </div> 
                        <div className='cart-col-4'>
                            <h5 className='price'>{(product.product_price)*product.quantity} TK</h5>
                        </div>  

                    </div>
                                </>
                            )
                        })
                    }
                    <div className='col-12 py-1 mt-4'>
                        <Link to="/" className='btnC button'>Continue to Shipping</Link>
                        <div className='d-flex flex-column align-items-end'>
                            <h4>Sub-Total: {price} Tk</h4>
                            <p>Taxes and Shipping calculated at checkout</p>
                            {
                                cartProducts?.length>0 && 
                                <button onClick={handleOrder} className='btnC'>Place Order</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default Cart;