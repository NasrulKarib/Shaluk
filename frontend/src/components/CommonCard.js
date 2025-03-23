import React from 'react';
import { Link } from 'react-router-dom';

const CommonCard = ({products}) => {
  return (
    <>
    {/* <div className='col-3'>
        <div className='medicine-card  position-relative'>    
            <div className='medicine-image'>
                <img src='image/Metformin.jpeg' className='img-fluid' alt='medicine Card'/>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div className='medicine-details'>
                    <h6 className='owner'>Actavis</h6>
                    <h5 className='medicine-title'>Metformin 500mg</h5>
                        <p className='price'>
                            <span className=''>6Tk</span> &nbsp; <strike>7Tk</strike>
                        </p>
                </div>
                <div className='cart'>
                    <Link className="btnAll mx-2" to="/add-to-cart">Add to Cart</Link>
                </div>           
            </div>           
        </div>
    </div> */}
    {
        products?.slice(0,4).map((product)=> {
            return (
                <>
                <div className='col-3'>
        <div className='medicine-card  position-relative'>    
            <div className='medicine-image'>
                <img src={product.product_image} className='img-fluid' alt='medicine Card'/>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div className='medicine-details'>
                    <h6 className='owner'>{product.shop_name}</h6>
                    <h5 className='medicine-title'>{product.product_name}</h5>
                        <p className='price'>
                            <span className=''>{product.product_price}Tk</span> &nbsp; 
                        </p>
                </div>
                <div className='cart'>
                    <Link className="btnAll mx-2" state={{product}} to="/add-to-cart">Add to Cart</Link>
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

export default CommonCard;