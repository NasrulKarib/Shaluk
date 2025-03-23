import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <> 
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='image/deshi-logo.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>1 July, 2023</p>
                <h5 className='title'>A healthy food for your necessaries</h5>
                <p className='desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis ...
                </p>
                <Link to="/" className='button btnAll'>
                    Read More
                </Link>
            </div>
        </div>
    </div>
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='image/astana-logo.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>1 january, 2023</p>
                <h5 className='title'>Healthy Food For You and Your Family</h5>
                <p className='desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis ...
                </p>
                <Link to="/" className='button btnAll'>
                    Read More
                </Link>
            </div>
        </div>
    </div>    
    </>
    
  )
}

export default BlogCard;