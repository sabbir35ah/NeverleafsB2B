import { trustedPartnerLogos } from '../../../constant'
import '../../../styles/B2bPartner.css'
import '../../../styles/ChoosePartner.css'
import TrustedPartners from '../../../component/ui/Trustedpartner'
import partner1 from '../../../assets/p1.jpg'
import partner2 from '../../../assets/p2.jpg'
const Choosepartners = () => {
    return (
        <section className="artificial-plants-section">
            <div className="b2b-container">
                <h2 className="trusted-heading">
                    Trusted by professional partners
                </h2>
                <div className="trusted-partners-container">
                    {trustedPartnerLogos
                        .map((item) => (
                            <TrustedPartners image={item.imgUrl} />
                        ))}
                </div>
                <div className="about-wrapper">
                    <div className="image-stack">
                        <div className="img-large">
                            <img src={partner1} alt="Professional" />
                        </div>
                        <div className="img-small">
                            <img src={partner2} alt="Working" />
                        </div>
                    </div>

                    <div className="text-content-block">
                        <div className='content-title'>Waarom kiezen voor NeverLeafs</div>
                        <div className='content-desc'>
                              <div className='desc' >
                            Of het nu winter of zomer is, onze kunstplanten blijven altijd stralend en brengen sfeer in elk interieur.
                            Ze hebben geen water of zonlicht nodig, zijn bestand tegen plagen en vereisen nauwelijks onderhoud,
                            ideaal voor een drukke levensstijl.
                            Bij NeverLeafs volgen we de nieuwste trends en vernieuwen we elk seizoen onze collectie.
                            Hoewel de aanschaf iets hoger kan liggen dan echte planten, is het een eenmalige investering,
                            omdat onze kunstplanten 10-15 jaar meegaan. Zo haal je langdurig groen en gemak in huis.
                        </div>
                        </div>
                      
                        <button className="cta-button">Bekijk Alle Kunstplanten</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Choosepartners