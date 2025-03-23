import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { useSelector } from 'react-redux';
const Header = () => {
  const userinfo = useSelector((state)=>state.userinfo.userinfo)
  const role = userinfo?.role;
  return(
  <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0'>Free shipping and Returns in CUET</p>
            </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>
              Hotline: <a className='text-white' href='tel:+880 1977913439'>+880 1977913439</a>
            </p>
          </div>
        </div>
      </div>

    </header>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-2'>
            <h1><Link className="logo text-white"><span>S</span>haluk.</Link></h1>
          </div>
          <div className='col-5'>
          <div className="input-group">
            <input type="text" className="form-control py-2" 
            placeholder="Search Product Here..."
             aria-label="Search Product Here..." 
             aria-describedby="basic-addon2"
            />
            <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
          </div>
          </div>
          <div className='col-5'>
            <div className="header-upper-links d-flex align-items-center justify-content-between">
             <div>
                <Link to="/profile" className='d-flex align-items-center gap-10 text-white'>
                  <img src='image/compare.svg' alt='compare'></img>
                  <p className='mb-0 mx-1'>
                    My <br></br> Profile
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/orderpage' className='d-flex align-items-center text-white justify-content-between'>
                  <img src='image/compare.svg' alt='compare'></img>
                  <p className='mb-0 mx-1'>
                    Order <br></br> Products
                  </p>
                </Link>
              </div>
              <div>
              <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                  <img src='image/wishlist.svg' alt='wishlist'></img>
                  <p className='mb-0 mx-1'>
                    Favourite <br></br> Wishlists
                  </p>
                </Link>
              </div>
              <div>
              {
                role==="customer" ?
                <Link to="/logout" className='d-flex align-items-center gap-10 text-white'>
                <img src='image/user.svg' alt='user'></img>
                <p className='mb-0 mx-1'>
                  Logout 
                </p>
              </Link> :   
                <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
                <img src='image/user.svg' alt='user'></img>
                <p className='mb-0 mx-1'>
                  Login 
                </p>
              </Link>           
              }
              </div>
              <div>
              <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                  <img src='image/cart.svg' alt='cart'></img>
                  {/* <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark mx-2'>0</span>
                    <p className=' mb-0'>BDT: 0 Tk</p>

                  </div> */}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 '>
           <div className='menu-bottom  d-flex justify-content-between align-items-center '>
            <div className='menu-links mx-auto  my-3'>
            <div className="d-flex gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/food">Foods</NavLink>
                    <NavLink to="/medicne">Medicines</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
             </div>
            </div>
            </div> 
          </div>
        </div>
      </div>

    </header>
    

  </>
  );
};

export default Header;
