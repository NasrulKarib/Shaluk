import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta';

const Product = () => {
 const location = useLocation();
 const product = location.state.product
 const {product_name,product_description,product_image,product_price,shop_name} = product;
  return (
    <>
    <Meta title ={"Product List"}/>
    <BreadCrum title="Product List" />
    <div className="prod-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="product-div">
          <div className="product-div-left">
            <div className="hover-container">
                <img src={product_image} className='prod-image mt-1' alt="watch image" />
            </div>
          </div>
          <div className="product-div-right mt-3">
            <span className="product-name"> {product_name}</span>
            <span className="product-price"> BDT {product_price}</span>
            <ReactStars count={5} value="4" edit={false} size={24} activeColor="#ffd700" />

            <p className="product-description">
              {product_description}           
            </p>
            <div className="d-flex flex-wrap">

              <Link to='/add-to-cart' state={{product}}>
              <button type="button" className="btnAll mx-2">
                <i className="fas fa-shopping-cart"> Add to cart</i>
              </button>
              </Link>
              {/* <button type="button" className="btnAll">
                <i className="fas fa-wallet"> Order Now</i>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product;