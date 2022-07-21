import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="hidden ml:flex justify-center items-center flex-col p-4">
    <a href='https://www.facebook.com/paul.aihe' target="_blank" rel="noreferrer noopener">
      <div className='socials-div'>
        <FaFacebookF className='w-4 h-4 text-gray hover:text-white' />
      </div>
    </a>
    <a href='https://www.instagram.com/wayofafootpauler/' target="_blank" rel="noreferrer noopener">
      <div className='socials-div'>
        <BsInstagram className='w-4 h-4 text-gray hover:text-white' />
      </div>
    </a>
  </div>
);

export default SocialMedia;