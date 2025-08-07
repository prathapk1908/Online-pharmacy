import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' id='Footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquid non nam blanditiis nisi architecto, quia error doloremque inventore eveniet molestiae dolores aut quas similique dolore placeat commodi corrupti eligendi! </p>
                    <div className="footer-content-icons">
                       <img src={assets.insta_icon} alt=''/>
                        <img src={assets.face_book_icon} alt=''/>
                    </div>
                </div>

                <div className="footer-content-center">

                    <h2>Pharmacy</h2>

                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                
                
                <div className="footer-content-right">
                     <h2>Get In Touch</h2>
                     <ul>
                        <li>+ 1-22-33-44-789</li>
                        <li>prathap@gmail.com</li>
                     </ul>
                </div>
            </div>
            <hr/>
            <p className='copyright-footer'>prathap 2025 @ web dev </p>
        </div>
        
        
        
  )
}

export default Footer