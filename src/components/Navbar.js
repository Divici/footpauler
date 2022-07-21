import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white/25 app__navbar">
      <div className="flex justify-start items-center">
        <img src={images.logo} alt="logo" className='w-52 xl:w-[300px]' />
      </div>

      <ul className="flex-1 hidden ml:flex justify-center items-center list-none">
        {['home', 'about', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text my-0 mx-4 cursor-pointer flex-col" key={`link-${item}`}>
            <div className='w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px] hover:bg-secondary' />
            <a href={`#${item}`} className='text-gray no-underline flex-col uppercase font-medium transition-all duration-300 ease-in-out hover:text-secondary'>{item}</a>
          </li>
        ))}
      </ul>

      <div className="w-9 h-9 rounded-[50%] relative flex ml:hidden justify-center items-center bg-secondary">
        <HiMenuAlt4 onClick={() => setToggle(true)} className='w-[70%] h-[70%] text-white cursor-pointer' />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='fixed top-0 bottom-0 right-0 z-[5] p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-white'
          >
            <HiX onClick={() => setToggle(false)} className='w-9 h-9 text-secondary my-2 mx-4 cursor-pointer' />
            <ul className='list-none m-0 p-0 h-full w-full flex ml:hidden justify-start items-start flex-col '>
              {['home', 'about', 'work', 'contact'].map((item) => (
                <li key={item} className='m-4' >
                  <a href={`#${item}`} onClick={() => setToggle(false)} className='text-gray no-underline text-base uppercase font-medium transition-all duration-300 ease-in-out hover:text-secondary' >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;