import { useState } from "react";
import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3rwf5ja', 'template_1qwfpqc', form.current, 'jcz3Eer47hVnQrmdZ')
        .then((result) => {
          console.log(result.text);
          setDone(true); 
        }, (error) => {
          console.log(error.text);
        });
    };
  
  
    
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
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name'/>
                <input type='emali' name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type='submit' value='send' className='button but'/>
                <span>{done && "Thanks for contacting me"}</span>
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