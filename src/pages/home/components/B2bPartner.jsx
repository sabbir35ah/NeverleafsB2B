import React from 'react'
import '../../../styles/B2bPartner.css'
import { businessPartnerData } from '../../../constant'
import PartnerCatalog from '../../../component/ui/PartnerCatalog'
import { trustedPartnerLogos } from '../../../constant'
import TrustedPartners from '../../../component/ui/Trustedpartner'
const B2bPartner = () => {
    return (
        <section className="artificial-plants-section">
            <div className="b2b-container">
                <h2 className="trusted-heading">
                    Trusted by professional partners
                </h2>
                <div className="trusted-partners-container">
                {trustedPartnerLogos.map((item) => (
                    <TrustedPartners image={item.imgUrl} />
                ))}
                </div>
                <div className='text-content'>
                    <div className='left-text'>
                        <div className='eyebrow-text'>
                            Our Collections
                        </div>
                        <div className='partner-title'>
                            Explore Our Wholesale Collections
                        </div>
                        <div className='partner-description'>
                            Carefully curated plant collections trusted by retailers across Europe.
                        </div>
                    </div>
                    <div className='collection-link'>
                        <a href="#">View All Collections<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                            <path d="M1.14286 5.61897H12.5714L8.81143 1.92227C8.70431 1.81782 8.61929 1.69355 8.56127 1.55662C8.50325 1.4197 8.47337 1.27284 8.47337 1.12451C8.47337 0.976176 8.50325 0.829313 8.56127 0.69239C8.61929 0.555467 8.70431 0.431194 8.81143 0.326739C9.02556 0.117465 9.31522 0 9.61714 0C9.91907 0 10.2087 0.117465 10.4229 0.326739L15.3257 5.15829C15.755 5.57779 15.9974 6.14755 16 6.74259C15.9944 7.33373 15.7522 7.89891 15.3257 8.31565L10.4229 13.1472C10.3163 13.2512 10.1899 13.3336 10.051 13.3896C9.91207 13.4456 9.76327 13.4742 9.6131 13.4737C9.46294 13.4732 9.31435 13.4436 9.17581 13.3866C9.03728 13.3296 8.91152 13.2464 8.80571 13.1416C8.69991 13.0368 8.61612 12.9126 8.55915 12.776C8.50217 12.6394 8.47312 12.4931 8.47365 12.3455C8.47418 12.1978 8.50428 12.0517 8.56224 11.9155C8.62019 11.7793 8.70487 11.6557 8.81143 11.5517L12.5714 7.86621H1.14286C0.839752 7.86621 0.549061 7.74783 0.334733 7.53711C0.120406 7.32639 0 7.04059 0 6.74259C0 6.44459 0.120406 6.15879 0.334733 5.94807C0.549061 5.73735 0.839752 5.61897 1.14286 5.61897Z" fill="#546248" />
                        </svg></span></a>
                    </div>
                </div>

                <div className="artificial-plants-container">
                    {
                        businessPartnerData.map((item) => (
                            <PartnerCatalog link={item.linkUrl} image={item.imgUrl} title={item.title} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default B2bPartner