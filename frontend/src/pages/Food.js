import React, { useEffect, useState } from 'react';
import BreadCrum from '../components/BreadCrum';
import FoodCard1 from '../components/FoodCard1';
import Meta from '../components/Meta';
import axios from 'axios';

const Food = () => {
    const [allShops,setAllShops] = useState([])
    const [foodProducts,setFoodProducts] = useState([])
    useEffect(()=> {
      const res = axios.get("https://shaluk-backend.vercel.app/all-food-shops")
      .then((res)=> {
        setAllShops(res.data.shops)
        return axios.get("https://shaluk-backend.vercel.app/food-products")
      })
      .then((res)=> {
         setFoodProducts(res.data.products)
      })
      
    },[])
    const [grid, setGrid] = useState(4);
    return(
        <>
        <Meta title ={"Foods"}/>
        <BreadCrum title="Foods" />
        <div className='food-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-2'>
                         <h3 className='filter-title'>Filter By Restaurant</h3>
                            <div>
                                <ul className='ps-0'>
                                    {
                                        allShops?.map((shop)=> {
                                            return (
                                              <>
                                              <li>{shop.shop_name}</li>
                                              </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-2'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox" value="" id='' />
                                    <label className='form-check-label' htmlFor=''>
                                        In Stock {1}
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox"  value="" id='' />
                                    <label className='form-check-label' htmlFor=''>
                                        Out of Stock {0}
                                    </label>
                                </div>
                                </div>
                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="From"/>
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="To"/>
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block' style={{width: "100px"} }>Sort By:</p>
                            <select name='' className='form-control form-select' id=''>
                                <option value="manual">Featured</option>
                                <option value="popular" selected="selected">Popular Food</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>                
                            </select>
                            </div>
                            <div className='d-flex align-items-center gap-10 grid'>
                                <p className='totalproducts mb-0'>21 products</p>
                                <div className='d-flex gap-10 align-items-center'>
                                    <img onClick={()=>{setGrid(4);}} src='image/gr3.svg' className='d-block img-fluid' alt='grid'/>
                                    <img onClick={()=>{setGrid(12);}} src='image/gr.svg' className='d-block img-fluid' alt='grid'/>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                {/* <FoodCard1 grid={grid}/> */}
                                {
                                    foodProducts?.map((product)=> <FoodCard1 product={product} grid={grid}/>)
                                }
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
    
};

export default Food;  