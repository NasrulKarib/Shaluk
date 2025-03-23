import React from 'react';
import { Link, useLocation} from 'react-router-dom';

const CommonCard1 = (props) => {
    const {grid} =props;
    const {product} = props;
    console.log(product)  
    let location = useLocation();
  return (
    <>
        <div className={` ${location.pathname=="/medicne"? `gr-${grid}` : "col-3"} `}>
            <div className='medicine-card  position-relative '>    
                <div className='medicine-image'>
                    <img src={product.product_image} className='img-fluid object-fit' class ="pro_image" alt='medicine Card'/>
                </div>
                <div className='d-flex justify-content-between mt-1'>
                    <div className='medicine-details'>
                        <h6 className='owner'>{product.shop_name}</h6>
                        <h5 className='medicine-title'>{product.product_name}</h5>
                        <p className={`description ${grid === 12? "d-block":"d-none"}`}>
                          {product.product_description}                       
                        </p>
                        <p className='price'>
                            <span className=''>TK. {product.product_price}</span> &nbsp;
                        </p>
                    </div>
                    <div className="cart">
                        <Link className="btnAll mx-2" state={{product}} to="/add-to-cart">Add to Cart</Link>
                    </div>           
                </div>           
            </div>
        </div>
    </>
  )
}

export default CommonCard1