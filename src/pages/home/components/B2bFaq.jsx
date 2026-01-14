import React from 'react'
import "../../../styles/B2bFaq.css"
import FaqAccordion from '../../../component/ui/FaqAccordion';
import { businessFaqData, homeFaqData } from '../../../constant';
const B2bFaq = () => {
  return (
    <div className="section-faqs" id="section-pd-faqs">
        <div className="common-container">
            <div className="faqs-section-container">
                <div className="faq-section-title">
                    Meer informatie & vragen
                </div>
                <div className="faq-section-desc">
                    Nog wat meer informatie nodig? Hier vind je het
                </div>
                <div className="faqs-container">
                    {
                        homeFaqData?.map((faq, index)=>{
                            return <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                        })
                    }
                     <h3 className="faq-container-title">NeverLeafs</h3>
                      {
                        businessFaqData?.map((faq, index)=>{
                            return <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                        })
                    }
                      
                </div>
            </div>
        </div>
                  

    </div>
  )
}

export default B2bFaq