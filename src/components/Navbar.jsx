import { useState } from 'react';
import MobileMenu from './MobileMenu.jsx';
import logo from '../assets/logo.svg';
import mobileMenu from '../assets/mobileMenu.svg';

const Navbar = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false);

  return (
    <div>
      {!showMobileMenu ?
        <div className='flex justify-between w-full h-20 bg-puce-100 shadow-lg'>
          <img className='w-8 ml-4' src={logo} alt='home'/>
          <img
            className='h-8 mr-4 mt-6'
            onClick={() => setShowMobileMenu(true)}
            src={mobileMenu}
            alt='menu'
          />
        </div>
      :
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