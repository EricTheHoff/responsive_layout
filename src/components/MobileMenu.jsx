import PropTypes from 'prop-types';
import closeMobileMenu from '../assets/closeMobileMenu.svg';
import mobileMenuImg from '../assets/mobileMenuImg.svg';

const MobileMenu = ({ setShowMobileMenu }) => {
  const menuOptions = ['Home','Recipes','Contact','About Me',]
  return (
    <div className='w-full h-screen bg-light-brown-100 relative'>
      <div className='flex justify-end'>
        <img
          className='h-8 mr-4 mt-6'
          onClick={() => setShowMobileMenu(false)}
          src={closeMobileMenu}
          alt='close'
        />
      </div>
      <div className='flex flex-col'>
        {menuOptions.map((el, idx) => {
          return (
            <div key={idx} className='flex my-8 ml-4'>
              <div className='h-6 w-1 bg-chocolate-100'/>
              <a className='ml-2 font-arvo' href='#'>{el}</a>
            </div>
          )
        })}
      </div>
      <div className='absolute -bottom-12 -left-12'>
        <img src={mobileMenuImg} alt='circles'/>
      </div>
    </div>
  )
};

MobileMenu.propTypes = {
  setShowMobileMenu: PropTypes.func.isRequired,
};

export default MobileMenu;