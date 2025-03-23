import React from 'react';
import { Link } from 'react-router-dom';

const WomenCard = () => {
  return (
    <>
    <div className='col-3'>
        <div className='medicine-card position-relative'>    
            <div className='medicine-image'>
                <img src='image/senora.jpeg' className='img-fluid' alt='medicine Card'/>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div className='medicine-details'>
                    <h6 className='owner'>Square LTD</h6>
                    <h5 className='medicine-title'>Senora Pad</h5>
                        <p className='price'>
                            <span className=''>125Tk</span> &nbsp; <strike>130Tk</strike>
                        </p>
                </div>
                <div className='cart'>
                    <Link className="btnAll mx-2">Add to Cart</Link>
                </div>           
            </div>           
        </div>
    </div>
    <div className='col-3'>
        <div className='medicine-card  position-relative'>    
            <div className='medicine-image'>
                <img src='image/joya.jpg' className='img-fluid' alt='medicine Card'/>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div className='medicine-details'>
                    <h6 className='owner'>SMC LTD</h6>
                    <h5 className='medicine-title'>Joya Sanitary Pad</h5>
                        <p className='price'>
                            <span className=''>70Tk</span> &nbsp; <strike>85Tk</strike>
                        </p>
                </div>
                <div className='cart'>
                    <Link className="btnAll mx-2">Add to Cart</Link>
                </div>           
            </div>           
        </div>
    </div>
    <div className='col-3'>
        <div className='medicine-card  position-relative'>    
            <div className='medicine-image'>
                <img src='image/ammy.png' className='img-fluid' alt='medicine Card'/>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div className='medicine-details'>
                    <h6 className='owner'>Divay Hygiene Pvt Ltd</h6>
                    <h5 className='medicine-title'>Ammy Sanitary Pad</h5>
                        <p className='price'>
                            <span className=''>110Tk</span> &nbsp; <strike>117Tk</strike>
                        </p>
                </div>
                <div className='cart'>
                    <Link className="btnAll mx-2">Add to Cart</Link>
                </div>           
            </div>           
        </div>
    </div>
    <div className='col-3'>
        <div className='medicine-card  position-relative'>    
            <div className='medicine-image'>
                <img src='image/whisper.jpg' className='img-fluid' alt='medicine Card'/>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div className='medicine-details'>
                    <h6 className='owner'>Whisper Cosmetics</h6>
                    <h5 className='medicine-title'>Whisper Napkin</h5>
                        <p className='price'>
                            <span className=''>150Tk</span> &nbsp; <strike>170Tk</strike>
                        </p>
                </div>
                <div className='cart'>
                    <Link className="btnAll mx-2">Add to Cart</Link>
                </div>           
            </div>           
        </div>
    </div>
    </>
  )
}

export default WomenCard