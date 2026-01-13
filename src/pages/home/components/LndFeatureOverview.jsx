import '../../../styles/lnd-feature-overview.css';
import FeatureIcon1 from '../../../assets/feature-icon-1.svg';
import FeatureIcon2 from '../../../assets/feature-icon-2.svg';
import FeatureIcon3 from '../../../assets/feature-icon-3.svg';
import FeatureIcon4 from '../../../assets/feature-icon-4.svg';
const LndFeatureOverview = () => {
    return (
        <section className="b2b-feature-overview-section">
        <div className="b2b-container">
            <div className="b2b-feature-overview-section-container">
                <div className="feature-block">
                    <div className="image-container">
                        <img src={FeatureIcon1} alt="feature-icon-1" className="feature-icon"></img>
                    </div>
                    <h3 className="feature-title">5,000+</h3>
                    <p className="feature-details">Products Available</p>
                </div>
                <div className="feature-block">
                    <div className="image-container">
                    <img src={FeatureIcon2} alt="feature-icon-2" className="feature-icon"></img>
                    </div>
                    <h3 className="feature-title">10+</h3>
                    <p className="feature-details">B2B Partners</p>
                </div>
                <div className="feature-block">
                    <div className="image-container">
                    <img src={FeatureIcon3} alt="feature-icon-3" className="feature-icon"></img>
                    </div>
                    <h3 className="feature-title">3+</h3>
                    <p className="feature-details">Countries Served</p>
                </div>
                <div className="feature-block">
                    <div className="image-container">
                    <img src={FeatureIcon4} alt="feature-icon-4" className="feature-icon"></img>
                    </div>
                    <h3 className="feature-title">98%</h3>
                    <p className="feature-details">Partner Satisfaction</p>
                </div>
            </div>
        </div>
    </section>
    );
};
export default LndFeatureOverview;