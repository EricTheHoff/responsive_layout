import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// Media assets
import home from '../assets/home.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  const hideMenuIcon = useMediaQuery({ query: '(min-width: 1536px)' }); // Breakpoint between showing and hiding menu icon

  return (
    <div className={`flex justify-between text-lg tablet:text-2xl pc:text-3xl ls:text-4xl transition-height ease-in-out ${showMenu ? 'h-40 tablet:h-44' : 'h-20 pc:h-24 ls:h-28'}`}> {/* Navbar container */}
      <img className='w-12 tablet:w-16 pc:w-20 pc:cursor-pointer ls:w-24 hover:pc:scale-110 transition-transform ease-in-out' src={home} alt='home'/> {/* Home icon */}
      {hideMenuIcon ? // Should collapsable menu be hidden?
        <div className='flex self-center'>
          <a className='cursor-pointer hover:pc:scale-110 transition-transform ease-in-out'>Link 1</a>
          <a className='cursor-pointer hover:pc:scale-110 transition-transform ease-in-out mx-80'>Link 2</a> {/* Left-right margin for spacing */}
          <a className='cursor-pointer hover:pc:scale-110 transition-transform ease-in-out'>Link 3</a>
        </div>
      :
        <>
          <div className={`self-center transition-opacity ease-in-out ${showMenu ? '' : 'opacity-0'}`}> {/* Navlink container */}
            <ul>
              <li>
                <a>Link 1</a>
              </li>
              <li className='my-10'> {/* Top-bottom margin for spacing */}
                <a>Link 2</a>
              </li>
              <li>
                <a>Link 3</a>
              </li>
            </ul>
          </div>
          {showMenu ? // Should menu or close icon be displayed?
            <>
              <img
                className='w-12 tablet:w-16'
                src={close}
                alt='close'
                onClick={() => setShowMenu(false)}
              />
            </>
          :
            <img
              className='w-12 tablet:w-16'
              src={menu}
              alt='menu'
              onClick={() => setShowMenu(true)}
            />
          }
        </>
      } {/* End of 'Should collapsable menu be hidden?' */}
    </div>
  )
};

export default Navbar;