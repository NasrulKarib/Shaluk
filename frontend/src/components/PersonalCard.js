import React from 'react';
import { Link } from 'react-router-dom';

const PersonalCard = ({products}) => {
  return (
    <>
   {
    products?.slice(5,11).map((product)=> {
        return (
            <>
                <div className='col-2'>
        <div className='personal-card  position-relative'>    
            <div className='medicine-image'>
                <img src={product.product_image} className='img-fluid' alt='medicine Card'/>
        </div>
            <div className='medicine-details'>
                <h6 className='owner'>{product.shop_name}</h6>
                <h5 className='medicine-title'>{product.product_name}</h5>
                    <p className='price'>
                        <span className=''>125Tk</span> &nbsp; <strike>{product.product_price}Tk</strike>
                    </p>
                <Link className="btnAll" to="/add-to-cart" state={{product}}>Add to Cart</Link>          
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

export default PersonalCard;