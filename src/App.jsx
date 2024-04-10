import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header.jsx";
import CardContainer from "./components/body/CardContainer.jsx";

function App() {
  return (
    <div className='font-main h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600'>
      <Navbar/>
      <Header/>
      <CardContainer/>
    </div>
  )
}

export default App
