// import { useMediaQuery } from 'react-responsive';
import Navbar from "./components/Navbar.jsx";

function App() {
  // const isLargeScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  // const isPC = useMediaQuery({ query: '(min-width: 1536px)'});
  // const isTablet = useMediaQuery({ query: '(min-width: 601px)'});
  // const isMobile = useMediaQuery({ query: '(min-width: 360px)'});

  return (
    <div className='font-main h-screen bg-slate-400 m-auto p-8 ls:p-12'>
      <Navbar/>
    </div>
  )
}

export default App
