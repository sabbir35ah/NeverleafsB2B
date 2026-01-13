
import './../styles/header.css';
import leftToUpLeafs from './../assets/left-to-up-leafs.png';
import rightTopBottom from './../assets/right-top-bottom.png';
import menuIcon from './../assets/menu-icon.svg';
import logo from './../assets/logo.svg';
import phoneIcon from './../assets/phone-icon.svg';
import userIcon from './../assets/user-icon.svg';
import cartIcon from './../assets/cart-icon.svg';

const Header =()=> {
    return(
        <section className="header-section">
            <div className="header-main-container">
                <img src={leftToUpLeafs} alt="header-left-to-up-leafs" className="header-left-to-up-leafs"></img>
                <div className="b2b-container">
                    <div className="header-content-container">
                        <div className="left-content">
                            <div className="menu-btn-container">
                                <a href="#" className="menu-btn">
                                    <img src={menuIcon} alt="menu icon"></img>
                                    <span className="menu-btn-text">Menu</span>
                                </a>
                            </div>
                            <div className="schedule-btn-container">
                                <a href="#" className="header-text-btn schedule-btn">Schedule Metting</a>
                            </div>
                            <div className="resealler-btn-container">
                                <a href="#" className="header-text-btn schedule-btn">Become A Reseller?</a>
                            </div>
                        </div>
                        <div className="logo-content">
                            <a href="#" className="logo-link">
                                <img src={logo} alt="Neverleaf B2B Logo" className="logo-img"></img>
                            </a>
                        </div>
                        <div className="right-content">
                            <div className="contact-container">
                                <a href="#" className="contact-link">
                                    <img src={phoneIcon} alt="phone icon" className="contact-icon"></img>
                                    <span className="contact-info">
                                        <span className="contact-text">Contact Us</span>
                                        <span className="contact-text">+31 085 060 2795</span>
                                    </span>
                                </a>
                            </div>
                            <div className="login-container">
                                <a href="#" className="header-logo-btn login-link">
                                    <img src={userIcon} alt="user icon" className="login-icon"></img>
                                </a>
                            </div>
                            <div className="cart-container">
                                <a href="#" className="header-logo-btn cart-link">
                                    <img src={cartIcon} alt="cart icon" className="cart-icon"></img>
                                    <span className="cart-text">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={rightTopBottom} alt="header-right-to-down-leafs" className="header-right-to-down-leafs"></img>
            </div>
        </section>
    );
};

export default Header;