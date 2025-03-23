import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import axios from 'axios';
import { errorToast, successToast } from './toast';
import { useDispatch } from 'react-redux';
import { getInfo } from '../features/userQuery/userinfoSlice';
import { BsCheckLg } from 'react-icons/bs';
const Login = () => {
    console.log("Called")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginInfo,setLoginfo] = useState({
        email : '',
        password : ''
    })
    const {email,password} = loginInfo;
    const handleChange = e => {
        setLoginfo((prev)=> ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const res = await axios.post("https://shaluk-backend.vercel.app/login",loginInfo)
        .then((res)=> {
            setLoginfo({
                email : "",
                password:""
            })
            if(res.data.message==="User is logged in successfully") {
                const userinfo = {
                    id : res.data.userinfo.user_id,
                    name : res.data.userinfo.name,
                    token : res.data.token,
                    role : res.data.userinfo.role
                }
                const string = JSON.stringify(userinfo);
                localStorage.setItem("userinfo",string);
                
                dispatch(getInfo());
                successToast(res.data.message)
                if(res?.data?.userinfo?.role==="customer") {
                    navigate("/");
                } else if(res?.data?.userinfo?.role==="admin") {
                    navigate("/admin1")
                }
            } else {
                errorToast(res.data.message);
            }
        })

    }
  return (
    <> 
      <Meta title ={"Login"}/>
     <BreadCrum title="Login" />

     <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>Login</h3>
                    <form action='' onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                        <div>
                            <input type='email' value={email} onChange={handleChange} name='email' placeholder="email" className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='password' value={password} onChange={handleChange}  placeholder="Password" className='form-control'/>
                        </div>
                        <div>
                            <Link to="/forgot-password">Forgot Password</Link>
                            <div className='d-flex mt-3 justify-content-center gap-15 align-items-center'>
                                <button className='btnAll' type='submit'>login</button>
                                <Link to="/Signup" className='btnAll signup'>SignUp</Link>
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

export default Login;