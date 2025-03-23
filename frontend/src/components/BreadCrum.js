import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrum = (props) => {
    const { title } = props;
  return (
    <div className='breadcrum mb-0 py-4'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <p className='mb-0 text-center'>
                    <Link to="/" className='text-dark'>
                        Home &nbsp;
                    </Link>
                    / {title}
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BreadCrum;