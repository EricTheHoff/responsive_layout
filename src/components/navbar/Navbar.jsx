import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { navbarOptions } from './index.js';
import MobileMenu from './MobileMenu.jsx';
import logo from '../../assets/logo.svg';
import mobileMenu from '../../assets/mobileMenu.svg';

const Navbar = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false); // Mobile menu state
  const isPC = useMediaQuery({ query: '(min-width: 1024px)' }); // Using this to determine if mobile menu should be shown or not

  return (
    <div>
      {!showMobileMenu ? // Checking if mobile menu is not expanded
        <div className='flex justify-between w-full h-20 bg-puce-100 shadow-lg lg:h-24'>
          <img className='w-8 ml-4 transition-transform md:w-12 lg:w-16 lg:ml-6 lg:cursor-pointer lg:hover:scale-110' src={logo} alt='home'/>
          {!isPC ? // Checking if the mobile menu icon should be shown.
            <img
              className='h-8 mr-4 self-center md:h-12'
              onClick={() => setShowMobileMenu(true)}
              src={mobileMenu}
              alt='menu'
            />
          : // If the mobile menu icon shouldn't be shown, render a list of nav-options
            <nav className='flex gap-16 self-center mr-6'>
              {navbarOptions.map((el, idx) => {
                return (
                  <a key={idx} className='font-arvo text-lg cursor-pointer transition-transform hover:scale-110' href='#'>{el}</a>
                )
              })}
            </nav>
          }
        </div>
      : // If the mobile menu is expanded, show the MobileMenu component.
        <div>
          <MobileMenu
            setShowMobileMenu={setShowMobileMenu}
          />
        </div>
      }
    </div>
  )
};

export default Navbar;