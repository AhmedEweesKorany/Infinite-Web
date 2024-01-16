import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="signup template p-4 d-flex align-items-center  justify-content-center  100-w 100-vh">
    <div className='w-100 shadow p-5 rounded '>
    <form action="
       ">

           <h2 className='text-center'>Sign Up</h2>
           <div className='mb-2'>
               <label htmlFor="name">Full Name</label>
               <input type="text" name="name" placeholder='Enter Your Name' className='form-control ' />
           </div>

           <div className='mb-2'>
               <label htmlFor="email">Email</label>
               <input type="email" name="Email" placeholder='Enter Your Email' className='form-control ' />
           </div>

           <div className='mb-2'>
               <label htmlFor="password">Password</label>
               <input type="password" name="password" placeholder='Enter Your Password' className='form-control' />
           </div>

           <div className='mb-2'>
               <label htmlFor="password">Confirm Password</label>
               <input type="password" name="password" placeholder='Enter Your Password' className='form-control' />
           </div>
           <div className='mb-2'>
                <p>Already Have One! <Link to={"/login"}>Sign In!</Link></p>
            </div>
           <div className='d-grid'>
               <button type='sumbit' className='btn btn-primary '>Register</button>
           </div>
       </form>
    </div>
   </div>
  )
}

export default Signup