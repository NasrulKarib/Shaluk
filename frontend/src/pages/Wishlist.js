import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
        <Meta title ={"Wishlist Page"}/>
        <BreadCrum title="Wishlist Page" />
        <div className='wishlist-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <button className='btnAll position-absolute cross mb-1 mx-2'>Delete</button>
                            <div className='wishlist-card-image'>
                            <img src='image/burger.jpg' alt='burger' className='w-100 img-fluid'/>
                            </div>
                            <div className='py-3'>
                                <h5 className='title'>Carbon Spicy two layer burger with melting Cheese</h5>
                                <h6 className='price'>220 Tk</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <button className='btnAll position-absolute cross mb-1 mx-2'>Delete</button>
                            <div className='wishlist-card-image'>
                            <img src='image/burger.jpg' alt='burger' className='w-100 img-fluid'/>
                            </div>
                            <div className='py-3'>
                                <h5 className='title'>Carbon Spicy two layer burger with melting Cheese</h5>
                                <h6 className='price'>220 Tk</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist;