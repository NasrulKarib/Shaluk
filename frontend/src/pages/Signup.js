import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import { useState } from 'react';
import axios from 'axios';
import { errorToast, successToast } from './toast';

const Signup = () => {
 const navigate = useNavigate();
  const [signupInfo,setSignupInfo] = useState({
    name : "",
    email : "",
    password : "",
    address : "",
    phone_number : "",
    role : "customer"
  })
  const { name ,email,password,address,phone_number} = signupInfo;
  const handleChange = e => {
    setSignupInfo((prev)=> ({
        ...prev,
        [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("https://shaluk-backend.vercel.app/register",signupInfo)
    .then((res)=> {
        console.log(res.data.message)
        if(res.data.message==="User is created Successfully") {
            setSignupInfo({
               name : "",
               email : "",
               password : "",
               phone_number : "",
               address : "",
               role : "customer"
            })
            successToast(res.data.message)
            navigate("/login")
        } else {
            errorToast(res.data.message)
        }
    })

  }
  return (
    <>
        <Meta title ={"Sign Up"}/>
        <BreadCrum title="Sign Up" />
        <div className='signup-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>Sign Up</h3>
                    <form action='' onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                        <div>
                            <input type='text' name='name' value={name} onChange={handleChange}  placeholder="Name" className='form-control'/>
                        </div>
                        <div>
                            <input type='text' name='phone_number' value={phone_number} onChange={handleChange} placeholder="Phone Number" className='form-control'/>
                        </div>
                        <div>
                            <input type='email' name='email' value={email} onChange={handleChange} placeholder="email" className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='password' value={password} onChange={handleChange}  placeholder="Password" className='form-control'/>
                        </div>
                        <div>
                            <input type='text' name="address" value={address} onChange={handleChange} placeholder='Enter address' className='form-control' />
                        </div>
                        <div>
                        <div className='d-flex mt-3 justify-content-center gap-15 align-items-center'>
                         <button className='btnAll' type='submit'>Create</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Signup;