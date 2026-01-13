import HeroLeft from '../../../assets/hero-left.png';
import HeroRight from '../../../assets/hero-right.png';
import HeroPerson1 from '../../../assets/hero-person-1.webp';
import HeroPerson2 from '../../../assets/hero-person-2.webp';
import '../../../styles/lnd-hero.css';
const LndHero = () => {
    return(
        <section className="b2b-hero-section">
        <div className="b2b-container hero-container">
            <img src={HeroLeft} alt="hero-left-leafs" className="hero-left-leafs"></img>
            <div className="b2b-hero-section-container">
                <div className="b2b-hero-text-container">
                    <p className="b2b-hero-small-text">Premium B2B Partner</p>
                    <h1 className="b2b-hero-text-title">Premium Artificial Plants for Professional Resellers</h1>
                    <div className="b2b-hero-text-details">
                        <p>High-quality, long-lasting artificial plants crafted for interior shops, décor businesses, hotels & retail stores.</p>
                        <ul className="b2b-hero-ul">
                            <li className="hero-ul-item">Exclusive wholesale pricing</li>
                            <li className="hero-ul-item">Fast delivery</li>
                            <li className="hero-ul-item">Ready stock</li>
                            <li className="hero-ul-item">Low MOQ</li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a className="common-btn hero-white-bg" href="#">Log in to B2B Portal</a>
                        <a className="common-btn hero-light-bg" href="#">Request Wholesale Access</a>
                    </div>
                </div>
                <div className="b2b-hero-img-container">
                    <div className="img-block">
                    <img src={HeroPerson1} alt="" width="" height=""></img>
                    </div>
                    <div className="img-block">
                    <img src={HeroPerson2} alt="" width="" height=""></img>
                    </div>
                </div>
            </div>
            <img src={HeroRight} alt="hero-right-leafs" className="hero-right-leafs"></img>
        </div>
    </section>
    );
};
export default LndHero;