import React from 'react'
import '../../../styles/B2bPartner.css'
import { businessPartnerData } from '../../../constant'
import PartnerCatalog from '../../../component/ui/PartnerCatalog'
const B2bPartner = () => {
    return (
        <section class="artificial-plants-section">
            <div class="b2b-container">
                <div className="section-intro">

                    
                </div>

                <h2 class="title" data-stage="50">Kunstplanten</h2>
                <div class="artificial-plants-container">
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