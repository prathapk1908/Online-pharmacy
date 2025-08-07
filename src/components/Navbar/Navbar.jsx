import './Navbar.css' 
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
   const [Menu,setMenu]=useState("Home");
   const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='Navbar'>
      <div className='Navbar-logo1'>
         <Link to='/'><img src={assets.logo} className='logo'/> </Link>
          <h2> Online Pharmacy</h2>
      </div>
         <ul className='Navbar-menu'>
            <Link to='/' onClick={()=> setMenu("Home")} className={Menu==="Home"?"active":""}> Home</Link>
            <li><a href='#ExploreMenu' onClick={()=> setMenu("About")} className={Menu==="About"?"active":""}> Health </a></li>
            <li><a href='#Product-display' onClick={()=> setMenu("Products")} className={Menu==="Products"?"active":""}> Products</a></li>
            <li><a href='#Footer' onClick={()=> setMenu("Contact-Us")} className={Menu==="Contact-Us"?"active":""}> Contact-Us</a></li>
         </ul>
            <div className="Navbar-right">
                <img src={assets.search_icon} alt='' className='search_icon'/>
                <div className='Navbar-search-icon'>
                   <Link to='/cart'> <img src={assets.basket_icon} alt='' className='basket_icon'/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                  <button onClick={()=>setShowLogin(true)}>sigin</button>

            </div>

    </div>
  )
}

export default Navbar