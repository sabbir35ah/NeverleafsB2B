import React from 'react'
import "../../../styles/BusinessProcess.css"

const BusinessProcess = () => {
  return (
   <section className="b2b-process-section">
        <div className="b2b-container">
            <div className="b2b-process-text-block">
                <div className="b2b-process-eyebrow">How It Works</div>
                <div className="b2b-process-title">A Simple & Efficient Wholesale Ordering Process</div>
            </div>

            <div className="b2b-steps-container">
                <div className="b2b-step-card">
                    <div className="b2b-step-number">01</div>
                    <div className="b2b-step-title">Browse The Collection</div>
                    <div className="b2b-step-description">Explore our full range of premium artificial plants.</div>
                </div>

                <div className="b2b-step-card">
                    <div className="b2b-step-number">02</div>
                    <div className="b2b-step-title">Add Products & Quantities</div>
                    <div className="b2b-step-description">Check live stock and select your required quantities.</div>
                </div>

                <div className="b2b-step-card">
                    <div className="b2b-step-number">03</div>
                    <div className="b2b-step-title">Place Your Order</div>
                    <div className="b2b-step-description">Complete checkout and receive instant order confirmation.</div>
                </div>

                <div className="b2b-step-card">
                    <div className="b2b-step-number">04</div>
                    <div className="b2b-step-title">Fast Delivery</div>
                    <div className="b2b-step-description">Your products are packed carefully and delivered within days.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessProcess