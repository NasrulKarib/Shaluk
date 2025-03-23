import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import axios from 'axios';

const Shop = () => {
  const [products,setProducts] = useState([])
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shop_name = searchParams.get('s');
 useEffect(()=> {
  const res = axios.post("https://shaluk-backend.vercel.app/products-by-a-specific-shop",{shop_name})
  .then((res)=> {
    setProducts(res.data.products)
  })
 },[shop_name])
  return (
    <>
    <Meta title ={"Shop Page"}/>
    <BreadCrum title="Shop Page" />
    <div>
      <h1 class="rname">
        {shop_name}
      </h1>
    {
       products?.map((product)=> {
        const {product_name,product_price,product_image,product_description} = product
        return (
          <>
           <div className='row shop'>
            <div class="shop_top ">
              
              <div class="shop_t1">
                <img class="shop_P_image" src={product_image}/>
                <div class="shop_r1">
                    <div class="shop_h1">
                      {product_name}
                    </div>

                    
                    <div class="shop_d1">
                                {product_description}
                      </div>

                    <div class="shop_p1">

                            
                            <div class="shop_tk">
                                Tk {product_price}
                            </div>
                            
                            <Link to="/add-to-cart" state={{product}}>
                            <button class="shop_bt1">
                                Add To Cart
                            </button>
                            </Link>

                    </div>

                          

                </div>
              </div>

              </div>
            </div>
          
          </>
        )
       })
    }
     
      {/* <div class="outs">
        <div class="tag2">
            Combo Meal
        </div>
        <div class="top">
          <div class="t1">
            <img class="P_image" src="image/pata_chomchom.jpg"/>

            <div class="a1">
                <div class="h1">
                  Mexican Sub Sandwich
                </div>
                <div class="tk">
                    Tk 140
                </div>
                <button class="bt1">
                    Click here
                </button>

            </div>
          </div>
          <div class="t1">
            <img class="P_image" src="image/pata_chomchom.jpg"/>
            <div class="a1">
                <div class="h1">
                  Mexican Sub Sandwich
                </div>
                <div class="tk">
                    Tk 140
                </div>
                <button class="bt1">
                    Click here
                </button>

            </div>
          </div>
          <div class="t1">
            <img class="P_image" src="image/pata_chomchom.jpg"/>

            <div class="a1">
                <div class="h1">
                  Mexican Sub Sandwich
                </div>
                <div class="tk">
                    Tk 140
                </div>
                <button class="bt1">
                    Click here
                </button>
            </div>
          </div>  
        </div>
      </div> */}
    </div>
    </>
  )
}

export default Shop;