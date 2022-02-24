import React from 'react'

const AdminLogin = () => {
  return (
    <div className='checkout-form'>
            <form className='c-form'>
            <h4>Admin Login</h4>
                <div className='c-form-inner'>
                    <div className='c-form-inputs'>
                        <label className='text-label'>Username</label>
                        <div>
                            <input className='text-input' type='text' placeholder='Username'/>
                        </div>
                    </div>
                </div>
                <div className='c-form-inner'>
                    <div className='c-form-inputs'>
                        <label className='text-label'>Password</label>
                        <div>
                            <input className='text-input' type='password' placeholder='Password'/>
                        </div>
                    </div>
                </div>
                <div className='submit-button'>
                    <a href='/check'>Submit</a>
                </div>
            </form>
        </div>
  )
}

export default AdminLogin