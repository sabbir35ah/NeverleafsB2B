import React, { useEffect } from 'react';
import { add_scroll_animation } from '../scripts/base.js';
import './../styles/announcement-bar.css';

const AnnouncementBar = () => {
    useEffect(() => {
        add_scroll_animation();
    }, []);
    return (
        <section className="announcement-marquee-section">
            <div className="announcement-marquee-content">
                <div className="announcement-scroller">
                    <div className="announcement-scroller-inner">
                        <span className="marquee-text">
                            Gratis verzending boven de 50 euro
                        </span>
                        <span className="marquee-text">
                            Bij ons kan je achteraf betalen
                        </span>
                        <span className="marquee-text">
                            Wij versturen het pakket binnen 24u
                        </span>
                        <span className="marquee-text">
                            Gratis verzending boven de 50 euro
                        </span>
                        <span className="marquee-text">
                            Bij ons kan je achteraf betalen
                        </span>
                        <span className="marquee-text">
                            Wij versturen het pakket binnen 24u
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnnouncementBar;