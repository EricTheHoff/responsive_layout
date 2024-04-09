import PropTypes from 'prop-types';
import { navbarOptions } from './index.js';
import closeMobileMenu from '../../assets/closeMobileMenu.svg';
import mobileMenuImg from '../../assets/mobileMenuImg.svg';

const MobileMenu = ({ setShowMobileMenu }) => {
  return (
    <div className='w-full h-screen bg-light-brown-100 relative'>
      <div className='flex justify-end'>
        <img
          className='h-8 mr-4 mt-6 md:h-12 md:mt-4'
          onClick={() => setShowMobileMenu(false)}
          src={closeMobileMenu}
          alt='close'
        />
      </div>
      <div className='flex flex-col'>
        {navbarOptions.map((el, idx) => {
          return (
            <div key={idx} className='flex my-8 ml-4 md:my-12 md:ml-8'>
              <div className='h-6 w-1 bg-chocolate-100 md:h-8'/> {/* Colored bar next to mobile menu options */}
              <a className='ml-2 font-arvo md:text-2xl' href='#'>{el}</a>
            </div>
          )
        })}
      </div>
      <div className='absolute -bottom-12 -left-12 md:-left-16'> {/* Div for misc image at the bottom of the mobile menu */}
        <img className='md:w-96' src={mobileMenuImg} alt='circles'/>
      </div>
    </div>
  )
};

MobileMenu.propTypes = { // Defining props for MobileMenu
  setShowMobileMenu: PropTypes.func.isRequired,
};

export default MobileMenu;