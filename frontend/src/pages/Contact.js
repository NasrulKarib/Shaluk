import React from 'react';
import BreadCrum from '../components/BreadCrum';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title ={"Contact Us"}/>
      <BreadCrum title="Contact Us" />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
             <div className='col-12'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1127101471952!2d91.96928247502422!3d22.46239842957028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2sChittagong%20University%20of%20Engineering%20and%20Technology%20(CUET)!5e0!3m2!1sen!2sbd!4v1690006707557!5m2!1sen!2sbd" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>
             <div className='col-12 mt-3'>
                <div className='contact-inner-wrapper d-flex justify-content-between gap-10'>
                  <div>
                    <h3 className='contact-title mb-4'>Contact</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <input type='text' className='form-control' placeholder='Name'/>
                      </div>
                      <div>
                        <input type='email' className='form-control' placeholder='Email'/>
                      </div>
                      <div>
                        <input type='tel' className='form-control' placeholder='Mobile Number'/>
                      </div>
                      <div>
                        <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comment' style={{resize:'none'}}></textarea>
                      </div>
                      <div>
                        <button className='btnAll'>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                      <div className='d-flex  justify-content-end'>
                        <div className='res m-auto'>
                          <div className='mb-3'>
                            <h5 className='contact-title'>Carbon</h5>
                            <a
                              href="tel:+880 1871-514514"
                              className="mt-3 d-block mb-1 text-black"
                            >
                              +880 1871-514514
                            </a>
                            <a
                              href="mailto:carbon@gmail.com"
                              className="mt-2 d-block mb-0 text-black"
                            >
                              carbon@gmail.com
                            </a>
                          </div>
                          <div className='mb-3'>
                            <h5 className='contact-title'>Astana</h5>
                            <a
                              href="tel:+880 1984-994433"
                              className="mt-3 d-block mb-1 text-black"
                            >
                              +880 1984-994433
                            </a>
                            <a
                              href="mailto:astana12@gmail.com"
                              className="mt-2 d-block mb-0 text-black"
                            >
                              astana12@gmail.com
                            </a>
                          </div>
                          <div  className='mb-3'>
                            <h5 className='contact-title'>Kashbon</h5>
                            <a
                              href="tel:+880 1813-566307"
                              className="mt-3 d-block mb-1 text-black"
                            >
                              +880 1813-566307
                            </a>
                            <a
                              href="mailto:kashbon34@gmail.com"
                              className="mt-2 d-block mb-0 text-black"
                            >
                              kashbon34@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className='res m-auto'>
                          <div  className='mb-3'>
                            <h5 className='contact-title'>Deshi</h5>
                            <a
                              href="tel:+880 1886-931833"
                              className="mt-3 d-block mb-1 text-black"
                            >
                              +880 1886-931833
                            </a>
                            <a
                              href="mailto:deshi56@gmail.com"
                              className="mt-2 d-block mb-0 text-black"
                            >
                              deshi56@gmail.com
                            </a>
                          </div>
                          <div  className='mb-3'>
                            <h5 className='contact-title'>Korai Bhuna</h5>
                            <a
                              href="tel:+880 1819-642727"
                              className="mt-3 d-block mb-1 text-black"
                            >
                              +880 1819-642727
                            </a>
                            <a
                              href="mailto:koraibhuna@gmail.com"
                              className="mt-2 d-block mb-0 text-black"
                            >
                              koraibhuna@gmail.com
                            </a>
                          </div>
                          <div  className='mb-3'>
                            <h5 className='contact-title'>Medicine-A-Lopt</h5>
                            <a
                              href="tel:+880 1777-281691"
                              className="mt-3 d-block mb-1 text-black"
                            >
                              +880 1777-281691
                            </a>
                            <a
                              href="mailto:medicalcenter@cuet.ac.bd"
                              className="mt-2 d-block mb-0 text-black"
                            >
                              medicalcenter@cuet.ac.bd
                            </a>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;