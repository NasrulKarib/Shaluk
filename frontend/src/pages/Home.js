import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import FoodCard from '../components/FoodCard';
import SpecialProduct from '../components/SpecialProduct';
import CommonCard from '../components/CommonCard';
import WomenCard from '../components/WomenCard';
import PersonalCard from '../components/PersonalCard';
import Container from '../components/Container'; 
import FoodCard1 from '../components/FoodCard1';
import axios from 'axios';

const Home = () => {
  const [medicineProducts,setMedicineProducts] = useState([])
  const [foodProducts,setFoodProducts] = useState([])
  useEffect(()=> {
  const res = axios.get("https://shaluk-backend.vercel.app/medicine-products")
  .then((res)=> {
    setMedicineProducts(res.data.products)
    return axios.get("https://shaluk-backend.vercel.app/food-products")
  })
  .then((res)=> {
    setFoodProducts(res.data.products)
  })
  },[])
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src='image/banner.jpg' alt='main banner' className='ba img-fluid rounded-3'></img>
              <div className='main-banner-content position-absolute'>
                <h5>20% OFF</h5>
                <p>Buy 1000 BDT or Plus</p>
                <button className='btnAll'>Order now</button>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='row pb-2'>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='small-banner position-relative' >
                <img src='image/banner01.jpg' alt='small banner' className='ba-small img-fluid rounded-3'></img>
                <div className='small-banner-content position-absolute'>
                  <h5>Explore Now</h5>
                  <p>With Quality</p>
                  <button className='btnAll'>Order now</button>
                </div>  
              </div>
              <div className='small-banner position-relative'>
                <img src='image/slider5.jpg' alt='small banner' className='ba-small img-fluid rounded-3'></img>
                <div className='small-banner-content position-absolute'>
                  <h5>Explore Now</h5>
                  <p>With Quality</p>
                  <button className='btnAll'>Order now</button>
                </div>                
              </div>
            </div>
            </div>
            <div className='row pt-2'>
              <div className='d-flex flex-wrap  justify-content-between align-items-center'>
              <div className='small-banner position-relative '>
                <img src='image/banner02.jpg' alt='small banner' className='ba-small img-fluid rounded-3'></img>
                <div className='small-banner-content position-absolute'>
                  <h5>Explore Now</h5>
                  <p>With Quality</p>
                  <button className='btnAll'>Order now</button>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='image/slider4.jpg' alt='small banner' className='ba-small img-fluid rounded-3'></img>
                <div className='small-banner-content position-absolute'>
                  <h5>Explore Now</h5>
                  <p>With Quality</p>
                  <button className='btnAll'>Order now</button>
                </div>               
              </div>
              </div>
            </div>
            </div>           
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='text-center '>
                  <img src='image/service.png'  alt='services'/>
                    <div>
                      <h6>Free Shipping</h6>
                      <p>From all orders Over 100BDT</p>
                    </div>
                </div>                
                <div className='text-center '>
                <img src='image/service-02.png' alt='services'/>
                    <div>
                      <h6>Daily Surprise Offers</h6>
                      <p>Save upto 20%</p>
                    </div>
                </div>
                <div className='text-center '>
                <img src='image/service-04.png' alt='services'/>
                    <div>
                      <h6>Popular Items Today</h6>
                      <p>Grab The Items now</p>
                    </div>
                </div>
                <div className='text-center '>
                <img src='image/service-03.png' alt='services'/>
                    <div>
                      <h6>Support 24/7</h6>
                      <p>Enjoy our company</p>
                    </div>
                </div>                
              </div>
            </div>
        </div>
    </Container>
    <Container class1="marquee-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <div className='marquee-line-wrapper card-wrapper'>
            <Marquee className='d-flex'>
             <div className='mx-4 mb-2'>
                <img src='image/carbon-logo.jpg' className='mimg' alt="brand"/>
              </div>
              <div className='mx-4 mb-2'>
                <img src='image/astana-logo.jpg' className='mimg' alt="brand"/>
              </div>
              <div className='mx-4 mb-2 '>
                <img src='image/deshi-logo.jpg'  className='mimg' alt="brand"/>
              </div>
              <div className='mx-4 mb-2'>
                <img src='image/kashbon-logo.png'  className='mimg' alt="brand"/>
              </div>
              <div className='mx-4 mb-2'>
                <img src='image/parmachy.jpg'  className='mimg' alt="brand"/>
              </div>
              <div className='mx-4 mb-2'>
                <img src='image/korai.jpg'  className='mimg' alt="brand"/>
              </div>
              <div className='mx-4 mb-2'>
                <img src='image/medicare-logo.png'  className='mimg' alt="brand"/>
              </div>
            </Marquee>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="common-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>OTC Medicine</h3>
          </div>
          <CommonCard products={medicineProducts}/>
        </div>
    </Container>
    <Container class1="personal-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Personal Care</h3>
          </div>
          <PersonalCard products={medicineProducts}/>
    </div>
    </Container>
    <Container class1="women-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Women's Choice</h3>
          </div>
          <WomenCard/>
    </div>
    </Container>
    <Container class1="famous-wrapper home-wrapper-2 py-5">



    <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='image/famous.jpeg'className='famous-image img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='famh5'>Summer Offer!</h5>
                  <h6  className='famh6'>Carbon's Spicy Corner</h6>
                  <p  className='famp'>on buying more than 499Tk</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='image/famous1.jpg'className='famous-image img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>Couple Offer!</h5>
                  <h6>Astana's Spicy Corner</h6>
                  <p>on buying more than 399Tk</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='image/famous2.jpeg'className='famous-image img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>Combo Offer!</h5>
                  <h6>Korai Bhuna's Corner</h6>
                  <p>on buying more than 449Tk</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='image/famous3.jpeg'className='famous-image img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>Summer Offer!</h5>
                  <h6>Kashbon's Corner</h6>
                  <p>on buying more than 490Tk</p>
                </div>
              </div>
            </div>
          </div>





    </Container>
    <Container class1="popular-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Popular Food Items</h3>
          </div>
          <FoodCard products={foodProducts}/>
        </div>
    </Container>
    
    <Container class1="Special-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Items For Today</h3>
          </div>
          <SpecialProduct/>
        </div> 
    </Container>
    {/* <Container class1="blog-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Recommended Items</h3>
          </div>
          <div className='row'>
            <FoodCard/>
          </div>
        </div>
    </Container> */}
    <Container class1="personal-wrapper home-wrapper-2 py-5">
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>About of Restaraunts</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
        </div>
    </Container>
    </>
    
  )
}

export default Home;