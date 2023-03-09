import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-form'>
        <div className='c-left'>
           <div className='awe'>
            <span> Get in touch</span>
            <span>Contact me</span>
            <div 
                className='blur s-blur1'
                style={{ background: '#ABF1FF94' }}
            ></div>
            </div> 
        </div>

        {/*right side*/}
        <div classNmae='c-right'>
            <form>
                <input type='text' name='user_name' className='user' placeholder='Name'/>
                <input type='emali' name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type='submit' value='send' className='button but'/>
                <div 
                    className='blur c-blur1'
                    style={{ background: 'purple' }}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact