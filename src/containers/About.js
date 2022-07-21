import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../wrapper';
import { images } from '../constants';

const About = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="w-full h-full py-8 flex justify-center items-center flex-wrap lg:justify-between lg:flex-nowrap m-4 mx-auto bg-gradient-to-t ml:bg-gradient-to-l from-primary/20 via-primary to-white"
      >
        <div className='w-full lg:w-3/5'>
          <h2 className="bold-text text-center mt-4 uppercase">About Me</h2>
          <p className="p-text px-4 text-center text-base ml:text-lg mt-3">Semi-Pro Footballer & Licensed Coach Drills, skills, training, highlights, and everything football.</p>
          <p className='p-text p-4 text-center text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat.</p>
        </div>
        <div className=''>
          <img src={images.aboutme} alt='me' className='h-96 ml:h-[450px] lg:h-1/2 object-contain' />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'flex-1 w-full flex-col'),
  'about',
  'bg-white',
);