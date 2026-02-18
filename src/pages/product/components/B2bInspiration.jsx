import { inspirationItems } from "../../../constant";
import '../../../styles/B2binspriration.css'
import view from '../../../assets/view.svg'
import dracaena from '../../../assets/dracaenafragrans.webp'
import PopUp from "../../../component/ui/PopUp";
import React from "react";
import { useState } from "react";

const InspirationSection = () => {

   const [modalShow, setModalShow] = useState(false);
   const pop = () => {
    setModalShow(true);
   }
  
console.log("inspirationItems:", inspirationItems);

  return (
    <section className="nl-inspiration-section">
      <div className="common-container">
        <h1 className="nl-inspiration-title">Be inspired</h1>
        <p className="nl-inspiration-desc">
          Discover our beautiful inspiration gallery and see how artificial plants,
          trees and flowers can directly add atmosphere and style to your space.
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
                  onClick={pop}
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
                {inspirationItems.map((item) => (
              <div className="nl-inspiration-block">
                <div className="img-container">
                  <img
                    src={`${item.img}`}
                    alt="inspiration"
                  />
                </div>

                <div
                  className="sc-logo"
                  onClick={pop}
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

      <PopUp inspirationItems={inspirationItems}  show={modalShow} onHide={() => setModalShow(false)}  />

    </section>
  );
};

export default InspirationSection;
