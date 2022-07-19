import { motion } from 'framer-motion';

import { AppWrap } from '../wrapper';
import { images } from '../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="flex-1 w-full h-full flex-col lg:flex-row pt-24 px-4 pb-8 sm:pb-0 sm:px-8 app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex-[0.65] flex flex-col justify-start items-start h-full mx-8"
    >
      <div className="w-full flex justify-end items-end lg:justify-start lg:items-start flex-col">
        <div className="py-4 px-8 bg-white rounded-2xl flex-row w-auto shadow-xl shadow-black/20 app__flex">
          <span className='text-secondary text-[2.5rem]'>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Paul</h1>
          </div>
        </div>

        <div className="py-4 px-8 bg-white rounded-2xl w-auto shadow-xl shadow-black/20 flex-col mt-12 app__flex">
          <p className="p-text w-full uppercase text-right">A Soccer Coach</p>
          <p className="p-text w-full uppercase text-right">& Trainer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="flex-1 h-full flex justify-end items-end relative lg:my-8 pt-2"
    >
      <img src={images.profile} alt="profile_bg" className='w-full object-contain z-[1]' />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="flex-[0.75] flex w-full flex-row flex-wrap lg:flex-col justify-evenly items-start h-full lg:ml-4 ml-0"
    >
      {[images.ball1, images.player, images.ball2].map((circle, index) => (
        <div className="circle-cmp app__flex first:w-24 first:h-24 first:m-0 w-40 h-40 m-7 last:w-16 last:h-16 last:m-0 rounded-[50%] bg-white shadow-xl shadow-black/20" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" className='w-3/5 h-3/5' />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');