import '../../../styles/PlantImageSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PlantImageSlider = () => {
  const images = [
    "customer-review-img-1_4.jpg",
    "customer-review-img-1_2.jpg",
    "customer-review-img-1_1.jpg",
    "customer-review-img-1_3.jpg",
    "customer-review-img-1_4.jpg",
    "customer-review-img-1_2.jpg",
    "customer-review-img-1_1.jpg",
    "customer-review-img-1_3.jpg",
  ];

  return (
    <section className="nl-image-section slider-image index">
      <div className="bottom-shadow-img-container">
        <div className="nl-image-section-container">
          {/* Text */}
          <div className="nl-image-section-text-container">
            <h2 className="title">
              Strelitzia kunstplanten in het wild 🌿
            </h2>
            <p className="info">
              Benieuwd hoe onze klanten de prachtige kunst Strelitzia gebruiken
              in hun interieur? Neem een kijkje en laat je inspireren door hun
              stijlvolle toepassingen!
            </p>
          </div>

          {/* Slider */}
          <div className="nl-image-section-slider-block">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".nl-image-section-slider-next",
                prevEl: ".nl-image-section-slider-prev",
              }}
              spaceBetween={28}
              slidesPerView={4}
              className="imageSlider"
              breakpoints={{
                0: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`//neverleafs.nl/cdn/shop/files/${img}`}
                    alt={`Customer review ${index + 1}`}
                    className="image-slider-img"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="nl-image-section-btn-block">
              <div className="nl-image-section-slider-navigation">
                <div
                  className="nl-image-section-slider-prev"
                  role="button"
                >
                  <div className="img-container">
                    <img
                      src="//neverleafs.nl/cdn/shop/t/36/assets/right-arrow.png"
                      alt="Previous"
                    />
                  </div>
                </div>

                <div
                  className="nl-image-section-slider-next"
                  role="button"
                >
                  <div className="img-container">
                    <img
                      src="//neverleafs.nl/cdn/shop/t/36/assets/right-arrow.png"
                      alt="Next"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantImageSlider;
