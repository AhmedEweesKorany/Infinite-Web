import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="lgoin template p-4 d-flex align-items-center  justify-content-center  100-w 100-vh">
     <div className='w-100 shadow p-5 rounded '>
     <form action="
        ">

            <h2 className='text-center'>Sign In</h2>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" name="Email" placeholder='Enter Your Email' className='form-control ' />
            </div>

            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter Your Password' className='form-control' />
            </div>
            <div className='mb-2'>
                <p>Not a member! <Link to={"/signup"}>Create An Account</Link></p>
            </div>


            <div className='d-grid'>
                <button type='sumbit' className='btn btn-primary '>Log in</button>
            </div>
        </form>
     </div>
    </div>
  )
}

export default Login