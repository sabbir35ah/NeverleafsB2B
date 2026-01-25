import React from 'react';
import tag from '../../../assets/tag.svg'
import eye from '../../../assets/eye.svg'
import truck from '../../../assets/truck.svg'
import b2b from '../../../assets/b2b.svg'
import rect from '../../../assets/rect.jpg'
import '../../../styles/B2bLogin.css';

const B2BLogin = () => {
    return (
        <div className='b2b-login-section'>
            <div className="b2b-container">
                <div className="login-text-block">
                    <div className='login-title'>Wholesale Artificial Plants for Business</div>
                    <div className='login-desc'>Exclusive pricing, live stock access, and fast delivery for registered business partners</div>
                    <div className="features">
                        <span><img src={tag} className="svg-icon" /> Wholesale Pricing</span>
                        <span><img src={eye} className="svg-icon" /> Live Stock Visibility</span>
                        <span><img src={truck} className="svg-icon" />Fast Delivery</span>
                        <span><img src={b2b} className="svg-icon" /> Dedicated B2B Support</span>
                    </div>
                </div>
                <main className="login-main-card">
                    <div className="image-side">
                        <img
                            src={rect}
                            alt="Interior with artificial plants"
                        />
                    </div>
                    <div className="form-side">
                        <div className='form-title'>Sign in to your B2B account</div>
                        <div className="form-subtitle">Access wholesale pricing and manage your orders.</div>
                        <form>
                            <div className="input-group">
                                <label className='input-title'>Email Address</label>
                                <input className='input-place' type="email" placeholder="Enter your Email Address" />
                            </div>

                            <div className="input-group">
                                <label className='input-title'>Password</label>
                                <input className='input-place' type="password" placeholder="Enter your Password" />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-container">
                                    <input type="checkbox" /> <span className='checkbox-text'>Remember me</span>
                                </label>
                                <a href="#" className="forgot-link">Forgot password</a>
                            </div>

                            <button type="submit" className="sign-in-btn">Sign in</button>
                        </form>
                        <div className="footer-link">
                            <div className='new-business'>New business?</div> <a href="#" className='get-req'>Request access</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default B2BLogin;