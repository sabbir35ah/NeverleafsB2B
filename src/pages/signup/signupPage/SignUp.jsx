import React from 'react';
import '../../../styles/SignUp.css';
import rect from '../../../assets/rect.jpg'

const Signup = () => {
  return (
    <section className='b2b-request-section'>
        <div className="b2b-container">
      <div className="req-text-block">
        <div className='req-title'>Wholesale Artificial Plants for Business</div>
        <div className='req-des'>Exclusive pricing, live stock access, and fast delivery for registered business partners</div>
      </div>

      
      <main className="business-req-main-card">
        <div className="image-side">
          <img 
            src={rect}
            alt="Interior with artificial plants" 
          />
        </div>
        <div className="form-side">
          <div className='req-form-title'>Request B2B Access</div>
          <div className="req-form-subtitle">Get approved to unlock exclusive wholesale pricing, live stock updates, and bulk ordering for your business.</div>

          <form>
            <div className="input-group full-width">
              <label className='input-title'>Business Name</label>
              <input type="text" placeholder="Your Business Name" />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className='input-title'>Business Email</label>
                <input type="email" placeholder="Your Email Address" />
              </div>
              <div className="input-group">
                <label className='input-title'>Phone Number</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>
            </div>

            <div className="input-group full-width">
              <label className='input-title'>Contact Person Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="input-group full-width">
              <label className='input-title'>Website / Instagram (Optional)</label>
              <input type="text" placeholder="Tell us about your business..." />
            </div>

            <button type="submit" className="submit-btn">Submit Request</button>
          </form>

          <div className="footer-note">
            Our team will review your request and get back to you within 24 hours. +31 6 1234 5678
          </div>
        </div>
      </main>
    </div>
    </section>
    
  );
};

export default Signup;