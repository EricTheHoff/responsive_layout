// import { useMediaQuery } from 'react-responsive';
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

function App() {
  // const isLargeScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  // const isPC = useMediaQuery({ query: '(min-width: 1536px)'});
  // const isTablet = useMediaQuery({ query: '(min-width: 601px)'});
  // const isMobile = useMediaQuery({ query: '(min-width: 360px)'});

  return (
    <div className='font-main h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600'>
      <Navbar/>
      {/* <MobileMenu/> */}
    </div>
  )
}

export default App
