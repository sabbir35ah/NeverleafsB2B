
import './../styles/header.css';
import leftToUpLeafs from './../assets/left-to-up-leafs.png';
import rightTopBottom from './../assets/right-top-bottom.png';
import menuIcon from './../assets/menu-icon.svg';
import logo from './../assets/logo.svg';
import phoneIcon from './../assets/phone-icon.svg';
import userIcon from './../assets/user-icon.svg';
import cartIcon from './../assets/cart-icon.svg';
import { Link } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';
import { useState } from 'react';
import { useCart } from '../contextApi/ContextApi';
const Header =()=> {
    const [ ismenuOpen, setIsMenuOpen ] = useState(false);
    const { cartItems } = useCart();
    
    return(
<>
        <section className="header-section">
            <div className="header-main-container">
                <img src={leftToUpLeafs} alt="header-left-to-up-leafs" className="header-left-to-up-leafs"></img>
                <div className="b2b-container">
                    <div className="header-content-container">
                        <div className="left-content">
                            <div className="menu-btn-container">
                                <a href="#" className="menu-btn" onClick={() => setIsMenuOpen(!ismenuOpen)}>
                                    <img src={menuIcon} alt="menu icon"></img>
                                    <span className="menu-btn-text">Menu</span>
                                </a>
                            </div>
                            <div className="schedule-btn-container">
                                <a href="#" className="header-text-btn schedule-btn">Schedule Metting</a>
                            </div>
                            <div className="resealler-btn-container">
                                <Link to="signup" className="header-text-btn schedule-btn">Become A Reseller?</Link>
                            </div>
                        </div>
                        <div className="logo-content">
                            <Link to="/" className="logo-link">
                                <img src={logo} alt="Neverleaf B2B Logo" className="logo-img"></img>
                            </Link>
                        </div>
                        <div className="right-content">
                            <div className="contact-container">
                                <a href="tel:+31850602795" className="contact-link">
                                    <img src={phoneIcon} alt="phone icon" className="contact-icon"></img>
                                    <span className="contact-info">
                                        <span className="contact-text">Contact Us</span>
                                        <span className="contact-text">+31 085 060 2795</span>
                                    </span>
                                </a>
                            </div>
                            <div className="login-container">
                                <Link to="login-page" className="header-logo-btn login-link">
                                    <img src={userIcon} alt="user icon" className="login-icon"></img>
                                </Link>
                            </div>
                            <div className="cart-container">
                                <Link to="cart" className="header-logo-btn cart-link">
                                    <img src={cartIcon} alt="cart icon" className="cart-icon"></img>
                                    <span className="cart-text">{cartItems.length}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={rightTopBottom} alt="header-right-to-down-leafs" className="header-right-to-down-leafs"></img>
            </div>

        </section>
            {ismenuOpen && <MenuDrawer ismenuOpen={ismenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            </>
    );
};

export default Header;