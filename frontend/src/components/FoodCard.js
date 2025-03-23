import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const FoodCard = ({products}) => {
  return (
    <>

    {
        products?.slice(0,6).map((product)=> {
            return (
                <>
                 <div className='col-2'>
        <div className='food-card food-wrapper home-wrapper-2 position-relative'>    
            <div className='food-image'>
                <img src={product.product_image} className='img-fluid' alt='Food Card'/>
            </div>
            <div className='food-details'>
                <h6 className='owner'>{product.shop_name}</h6>
                <h5 className='food-title'>{product.product_name}</h5>
                <ReactStars count={5} value="4" edit={false} size={24} activeColor="#ffd700" />
                <p className='price'>{product.product_price}TK</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-10'>
                    <br/>
                    <Link>
                    <img src='image/wish.svg' alt='ProductComapre'/>
                    </Link>
                    <Link to="/product" state={{product}}>
                    <img src='image/view.svg' alt='view'/>
                    </Link>
                    <Link to="/add-to-cart" state={{product}}> 
                    <img src='image/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
                </>
            )
        })
    }
   
    </>
    
  )
}

export default FoodCard;