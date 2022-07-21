import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../wrapper';
import abouts from '../constants/data';

const About = () => {
  return (
    <div>
      <h2 className="head-text">I Know that <span className='text-secondary'>Good Coaches</span> <br />make  <span className='text-secondary'>Passionate Players</span></h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="w-48 md:w-56 ml:w-64 flex justify-start items-start flex-col m-8"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} className='w-full h-44 md:h-52 ml:h-60 round-[15px] object-cover' />
            <h2 className="bold-text mx-auto mt-5">{about.title}</h2>
            <p className="p-text text-center text-base ml:text-lg mt-3">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'flex-1 w-full flex-col'),
  'about',
  'bg-white',
);