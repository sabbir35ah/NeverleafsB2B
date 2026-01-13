import '../../../styles/b2bchoose.css'
import BusinessChooseCard from '../../../component/ui/BusinessChooseCard';
import{ businessChooseData}  from '../../../constant';

import React from 'react'

const B2bChoose = () => {
    return (
        <section className="strategy-section">
            <div className="b2b-container">
                <div className="strategy-content">
                    <div className="strategy-content-top-title" >
                        <div className='strategy-content-eyebrow'>
                            Why Choose Us
                        </div>
                        <div className="strategy-content-top-title-text">
                            Why Businesses Choose Neverleafs
                        </div>
                    </div>
                    <div className="strategy-section-cards">
                        {
                           businessChooseData.map((item, index) => (
                                <BusinessChooseCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default B2bChoose