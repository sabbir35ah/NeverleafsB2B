import React from 'react'
import "../../../styles/BusinessVloume.css"

const BusinessVolume = () => {
    return (
        <section className="b2b-volume-savings">
            <div className="b2b-volume-container">
                <div className="b2b-eyebrow-text">Volume Savings</div>
                <div className="b2b-volume-title">
                    Save More with Bulk & Quantity Orders
                </div>

                <div className="cards-wrapper">
                    {/* Left Card */}
                    <div className="b2b-card">
                        <div className="card-title">Cart Total Discounts</div>

                        <div className="card-content">
                            <div className="b2b-order">€500+</div>
                            <div className="b2b-discount">5% OFF</div>
                        </div>

                        <div className="card-content">
                            <div className="b2b-order">€1,000+</div>
                            <div className="b2b-discount">5% OFF</div>
                        </div>

                        <div className="card-content">
                            <div className="b2b-order">€2,500+</div>
                            <div className="b2b-discount">5% OFF</div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="b2b-card">
                        <div className="card-title">Per-Product Quantity</div>
                       <div className="card-content">
                            <div className="b2b-order">€500+</div>
                            <div className="b2b-discount">5% OFF</div>
                        </div>

                        <div className="card-content">
                            <div className="b2b-order">€1,000+</div>
                            <div className="b2b-discount">5% OFF</div>
                        </div>

                        <div className="card-content">
                            <div className="b2b-order">€2,500+</div>
                            <div className="b2b-discount">5% OFF</div>
                        </div>
                    </div>
                </div>
                <div className="b2b-eyebrow-bottom-text">
                    * Discounts apply automatically once logged in
                </div>
            </div>
        </section>
    )
}

export default BusinessVolume