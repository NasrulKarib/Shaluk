import React from 'react'
import {toast} from 'react-toastify'
const successToast = message => {
    toast.success(message, {
        position : "top-center",
        autoClose : 2000,
        hideProgressBar : false,
        closeOnClick : true,
        pauseOnHover : true,
        progress : undefined,
        theme : "light"
    })
}

const errorToast = message => {
    toast.error(message, {
        position : "top-center",
        autoClose : 2000,
        hideProgressBar : false,
        closeOnClick : true,
        pauseOnHover : true,
        progress : undefined,
        theme : "light"
    })
}

export {successToast,errorToast}