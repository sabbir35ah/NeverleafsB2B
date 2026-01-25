import { useState } from "react";
import InspirationPopup from "../../../component/ui/InspirationComp";
import { inspirationItems } from "../../../constant";
import '../../../styles/B2binspriration.css'
import view from '../../../assets/view.svg'
import dracaena from '../../../assets/dracaenafragrans.webp'

const InspirationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="nl-inspiration-section">
      <div className="common-container">
        <h1 className="nl-inspiration-title">Laat je inspireren</h1>
        <p className="nl-inspiration-desc">
          Ontdek onze prachtige inspiratiegalerij en zie hoe kunstplanten,
          -bomen en bloemen direct sfeer en stijl aan jouw ruimte kunnen toevoegen.
        </p>

        <div className="nl-inspiration-container">
         
            <div className="nl-inspiration-first-block">
              <div className="nl-inspiration-block">
                <div className="img-container">
                  <img
                    src={dracaena}
                    alt="inspiration"
                  />
                </div>

                <div
                  className="sc-logo"
                  onClick={() => setActiveIndex}
                >
                  <img
                    src={view}
                    alt="view"
                  />
                </div>
              </div>
            </div>
            <div className="nl-inspiration-last-block">
              <div className="nl-insp-inner-first">
                {inspirationItems.map((item, index) => (
              <div className="nl-inspiration-block">
                <div className="img-container">
                  <img
                    src={`${item.img}`}
                    alt="inspiration"
                  />
                </div>

                <div
                  className="sc-logo"
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={view}
                    alt="view"
                  />
                </div>
              </div>
          ))}

              </div>
            </div>

        </div>
      </div>

      {activeIndex !== null && (
        <InspirationPopup
          items={inspirationItems}
          startIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
};

export default InspirationSection;
