import React from 'react'
import "./contactus.css"
const Contact = () => {
  return (
    <div className='body  mb-5'>
          <form className="form home-contact-us shadow mb-5">
            <h1>Contact us</h1>
            <label htmlFor="" className="form-label">Name:</label>
            <input type="text" className="form-control name" placeholder='Enter Name' />
            <label htmlFor="" className="form-label">Email:</label>
            <input type="email" className="form-control email" placeholder='Enter Email ' />
            <label htmlFor="" className="form-label">message</label>
            <textarea id='message' className='form-control message' placeholder='Enter Message'></textarea>
            <center>
            <input type="submit" value="Submit" className='submit' />
            </center>
          </form>
    </div>
  )
}

export default Contact