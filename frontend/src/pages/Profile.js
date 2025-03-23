import React, { useEffect, useState } from "react";
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { errorToast, successToast } from "./toast";
const Profile = () => {
  const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  const token = userinfo?.token;
  const headers = {
      "Content-type" : "application/json",
      Authorization : `${token}`
  }
  const [user,setUser] = useState({})
  
  const user_id = userinfo?.id
  useEffect(()=> {
      const res = axios.post("https://shaluk-backend.vercel.app/user-profile",{user_id})
      .then((res)=> {
        setUser(res.data.user[0])
      })
  },[])

 const handleSubmit = async () => {
  const name = user?.name;
  const user_id = user?.user_id;
  const address = user?.address;
  const phone_number = user?.phone_number;
  console.log(user)
  if(typeof name==='undefined' || typeof address==='undefined' || typeof phone_number==='undefined') {
    errorToast("Please filled out all the field")
  }
  else {
    const res = await axios.put("https://shaluk-backend.vercel.app/update-profile",{user_id,address,name,phone_number},{headers})
    .then((res)=> {
      if(res.data.message==="Successfully updated user profile") {
        successToast(res.data.message)
      } else {
        errorToast(res.data.message)
      }
    })
  }
 }

 
 const handleChange = e => {
  setUser((prev)=> ({
    ...prev,
    [e.target.name] : e.target.value
  }))
 }


    return (
      <>
        <Meta title ={"My Profile"}/>
        <BreadCrum title="My Profile" />
        
        <div className='profile-wrapper'>
          <div className='container-xxl'>
          <div class="prof">
      <div class="profile">
        <div class="add_text">Profile:</div>


       
        {/* 
      

        <div className="profile-img my-5">
          <img src="image/prof.jpg" alt="profile-image"/>
        </div> */}
     
        <div class="p_s_name">
          <div class="p_s_n">Name:</div>
          <input class="p_s_n_d" type="text" onChange={handleChange} required name="name" value={user?.name|| ""} />
        </div>

        <div class="p_s_name">
          <div class="p_s_n">Mobile:</div>
          <input class="p_s_n_d" type="text" onChange={handleChange} name="phone_number"  placeholder="" value={user?.phone_number || ""} />
        </div>

        <div class="p_s_name">
          <div class="p_s_n">Email:</div>
          <input class="p_s_n_d" type="email" value={user?.email} readOnly  />
        </div>

        <div class="p_s_name">
          <div class="p_s_n">Address:</div>
          <input class="p_s_n_d" onChange={handleChange} name="address"  type="text" value={user?.address || ""} />
        </div>

        <button class="prof_btnAll" onClick={handleSubmit}>Save Chage</button>


      </div>
    
    
    </div>

    {/* <div class="add_product mb-3">
      <div class="top">
        <div class="add_text">Change Password:</div>

        <div class="products">
          <div class="p_name">Current Password:</div>
          <input class="name_text" type="password" placeholder="" />
        </div>

        <div class="products">
          <div class="p_name">New Password:</div>
          <input class="name_text" type="Password" placeholder="" />
        </div>

        <button class="btnAll">Save</button>
      </div>
    </div> */}
          </div>
        </div>
      </>
    );
  }
  
  export default Profile;