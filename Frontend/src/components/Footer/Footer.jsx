import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footer_logo from 'Frontend/src/assets/logo_big.png'
import instagram_icon from 'Frontend/src/assets/instagram_icon.png'
import pinterest_icon from 'Frontend/src/assets/pinterest_icon.png'
import whatsapp_icon from 'Frontend/src/assets/whatsapp_icon.png'

const Footer = () => {
  return (
 <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>ItalPont</p>
        </div>
        <ul className="footer-links">
            <Link to='/'>Termékek</Link>
            <Link to='/'>Kiszállítás</Link>
            <Link to='/'>Rólunk</Link>
            <Link to='/'>Kapcsolat</Link>
            <Link to='/'>Adatvédelem</Link>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copryright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer