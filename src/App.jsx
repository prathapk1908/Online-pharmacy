import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import ProductDisplay from './components/ProductDisplay/ProductDisplay'
import Loginpopup from './components/LoginPage/Loginpopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin? <Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
       </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App