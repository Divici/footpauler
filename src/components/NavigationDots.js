/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

const NavigationDots = ({ active }) => (
  <div className="hidden ml:flex justify-center items-center flex-col p-4 fixed right-4 top-1/2">
    {
      ['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-3 h-3 rounded-[50%] bg-[#cbcbcb] m-2 transition-colors duration-200 ease-in-out hover:bg-brown"
          style={active === item ? { backgroundColor: '#31ac48' } : {}}
        />
      ))
    }
  </div>
);

export default NavigationDots;