import React from 'react'
import NavNew from '../components/NavNew'
import Footer from "components/Footer";
import '../style/checkoutform.css'

const CheckoutForm = () => {
  return (
    <div>
    <NavNew />
        <div className='checkout-form'>
            <form className='c-form'>
                <div className='c-form-inner'>
                    <div className='c-form-inputs'>
                        <label className='text-label'>First Name</label>
                        <input type='text' placeholder='N/D' className='text-input' />
                    </div>
                    <div className='c-form-inputs'>
                        <label className='text-label'>Last Name</label>
                        <input type='text' placeholder='N/D' className='text-input' />
                    </div>
                </div>
                <div className='c-form-inner'>
                    <div className='c-form-inputs'>
                        <label className='text-label'>Mobile Phone Number</label>
                        <div>
                            <input className='text-input' id='code' type='text' placeholder='+234'/>
                            <input className='text-input' id='num' type='text' placeholder=''/>
                        </div>
                    </div>
                </div>
                <div className='c-form-inner'>
                    <div className='c-form-inputs'>
                        <label className='text-label'>Email Address</label>
                        <div>
                            <input className='text-input' type='email' placeholder='Email address'/>
                        </div>
                    </div>
                </div>
                <div className='c-form-inner'>
                    <div className='c-form-inputs'>
                        <label className='text-label'>Address</label>
                        <textarea className='text-area' row='10' cols='24' ></textarea>
                    </div>
                </div>
                <div className='submit-button'>
                    <a href='/check'>Submit</a>
                </div>
            </form>
        </div>
    <Footer />
    </div>
  )
}

export default CheckoutForm