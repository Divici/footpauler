import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { AppWrap, MotionWrap } from '../wrapper';
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'

const Footer = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_anq04qf', 'template_zkk68xb', form.current, 'j8WyUMBTgij59rMPO')

    e.target.reset()
  };


  return (
    <section className='w-11/12 my-6'>
        <h5 className='head-text'>Get In Touch</h5>
        <h2 className='text-secondary head-text text-2xl mb-6'>Contact Me</h2>

        <div className="w-full flex justify-around flex-wrap">
            <div className="flex flex-col gap-5 w-3/4 ml:w-2/5 ml:max-w-md my-6 px-6">
                <article className="bg-primary p-5 rounded-2xl text-center border-[1px] border-transparent hover:bg-secondary hover:border-primary transition ease-in-out duration-300">
                    <HiOutlineMail className='text-2xl mb-2'/>
                    <h4>Email</h4>
                    <h5>paul.aihe@gmail.com</h5>
                    <a href="mailto:paul.aihe@gmail.com" target='_blank' rel="noreferrer" className='mt-3 inline-block text-xs'>Send a Message</a> 
                </article>
                <article className="bg-primary p-5 rounded-2xl text-center border-[1px] border-transparent hover:bg-secondary hover:border-primary transition ease-in-out duration-300">
                    <RiMessengerLine className='text-2xl mb-2'/>
                    <h4>Messenger</h4>
                    <h5>Paul Aihe</h5>
                    <a href="https://m.me/paihe" target='_blank' rel="noreferrer" className='mt-3 inline-block text-xs'>Send a Message</a> 
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-3/4 ml:w-2/5' >
                <input type="text" name='name' placeholder='Your Full Name' required className='form-inputs' />
                <input type="email" name='email' placeholder='Your Email' required className='form-inputs' />
                <textarea name="message" rows="7" placeholder='Your Message' required className='form-inputs'></textarea>
                <button type='submit' className='w-full bg-secondary hover:bg-black py-4 rounded-lg font-semibold text-white transition ease-in-out duration-200'> Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'flex-1 w-full'),
  'contact',
  'bg-white',
);