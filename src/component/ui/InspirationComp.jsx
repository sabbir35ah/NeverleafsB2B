import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const InspirationPopup = ({ items, startIndex, onClose }) => {
  return (
    <div className="image-popup-slider-wrapper">
      <button className="popup-slider-btn-close" onClick={onClose}>
        ×
      </button>

      <Swiper
        modules={[Navigation]}
        navigation
        initialSlide={startIndex}
        className="image-popup-slider"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="popup-slide">
              <img
                src={`//neverleafs.nl/cdn/shop/files/${item.img}?width=1920`}
                alt="popup"
                className="popup-image-slider-img"
              />

              {/* Shopify add-to-cart compatible */}
              <form method="post" action="/cart/add">
                <input type="hidden" name="id" value={item.productId} />
                <input type="hidden" name="quantity" value="1" />
                <button type="submit" className="star">
                  Buy
                </button>
              </form>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InspirationPopup;
