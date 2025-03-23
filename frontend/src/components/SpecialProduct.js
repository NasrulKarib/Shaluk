import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link} from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <>
    <div className='col-4'>
        <div className='special-product-card'>
          <div className='d-flex justify-content-between'>
            <div><img src='image/kabsa.png' className='img-fluid' alt='SpecialProducts'/></div>
            <div className='Special-product-content'>
                <h5 className='owener'>Carbon</h5>
                <h6 className='title'>Carbon Special Arabian Kabsa... </h6>    
                <ReactStars count={5} value="4" edit={false} size={24} activeColor="#ffd700" />
                <p className='price'>
                    <span className='red-p'>250Tk</span> &nbsp; <strike>299Tk</strike>
                </p>
                 <div className='discount-till d-flex align-item-center gap-10'>
                    <p className='mb-0'>
                        <b>5 </b>days
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:   
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:   
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>    
                    </div> 
                 </div>
                 <Link className="btnAll my-3">Add to Cart</Link>
            </div>
          </div>  
        </div>
    </div>
    <div className='col-4'>
        <div className='special-product-card'>
          <div className='d-flex justify-content-between'>
            <div><img src='image/kala-vuna1.jpeg' className='img-fluid' alt='SpecialProducts'/></div>
            <div className='Special-product-content'>
                <h5 className='owener'>Korai Bhuna</h5>
                <h6 className='title'>Special Kala Bhuna From Korai Bhuna... </h6>    
                <ReactStars count={5} value={5} edit={false} size={24} activeColor="#ffd700" />
                <p className='price'>
                    <span className='red-p'>220Tk</span> &nbsp; <strike>240Tk</strike>
                </p>
                 <div className='discount-till d-flex align-item-center gap-10'>
                    <p className='mb-0'>
                        <b>5 </b>days
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:   
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:   
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>    
                    </div> 
                 </div>
                 <Link className="btnAll my-3">Add to Cart</Link>
            </div>
          </div>  
        </div>
    </div>
    <div className='col-4'>
        <div className='special-product-card'>
          <div className='d-flex justify-content-between'>
            <div><img src='image/burger.jpg' className='img-fluid' alt='SpecialProducts'/></div>
            <div className='Special-product-content'>
                <h5 className='owener'>Deshi</h5>
                <h6 className='title'>beef burger with double patty & melting cheese... </h6>    
                <ReactStars count={5} value="4" edit={false} size={24} activeColor="#ffd700" />
                <p className='price'>
                    <span className='red-p'>300Tk</span> &nbsp; <strike>320Tk</strike>
                </p>
                 <div className='discount-till d-flex align-item-center gap-10'>
                    <p className='mb-0'>
                        <b>5 </b>days
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:   
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:   
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>    
                    </div> 
                 </div>
                 <Link className="btnAll my-3">Add to Cart</Link>
            </div>
          </div>  
        </div>
    </div>
    
    </>
  )
}

export default SpecialProduct; 