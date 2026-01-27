import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../styles/singleProductGallry.css"

const SingleProductGallary = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    const openPopup = (videoUrl) => {
        const videoWrapper = document.getElementById("videoWrapper");
        const popupVideo = document.getElementById("popupVideo");
        const popup = document.getElementById("popup");

        if (popup && popupVideo && videoWrapper) {
            popup.style.display = "block";
            popupVideo.src = videoUrl;
            videoWrapper.style.display = "block";
        }
    };

    const closePopup = () => {
        const popup = document.getElementById("popup");
        const popupVideo = document.getElementById("popupVideo");
        const videoWrapper = document.getElementById("videoWrapper");

        if (popup && popupVideo && videoWrapper) {
            popup.style.display = "none";
            popupVideo.pause();
            popupVideo.src = "";
            videoWrapper.style.display = "none";
        }
    };
    const productdata = {
        title: "Sample Product",
        price: "$99.99",
        shortDescription: "This is a short description of the sample product.",
        images: [
            "/src/assets/art1.png",
            "/src/assets/art2.png",
            "/src/assets/art3.png",
        ],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    };


    return (
        <section className="custom-main-product-section">
            <div className="b2b-container">
                <div className="custom-main-product-slider-block">
                    <div className="main-slider">
                        <Swiper
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="mySwiper2"
                        >
                            {productdata.images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="full-sc-block">
                                        <div className="full-sc-logo-container" data-slider-tar={idx}>
                                            <img src="/src/assets/full-sc-logo.svg" alt="logo" />
                                        </div>
                                    </div>
                                    <div
                                        className={`first-img-container ${idx === 0 ? "custom-temp-feature-image" : ""
                                            }`}
                                    >
                                        <div className="magnifier"></div>
                                        <img
                                            src={img}
                                            alt={`Product ${idx}`}
                                            className="special-slider-image"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="mbl-navigation-icon">
                            <div className="swiper-button-next">
                                <img src="/src/assets/product-next-logo.svg" alt="next" />
                            </div>
                            <div className="swiper-button-prev">
                                <img src="/src/assets/product-prev-logo.svg" alt="prev" />
                            </div>
                        </div>
                    </div>

                    <div className="custom-main-product-slider-footer">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            slidesPerView={3}
                            watchSlidesProgress
                            className="mySwiper"
                        >
                            {productdata.images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="second-img-container">
                                        <img src={img} alt={`Thumb ${idx}`} width={50} height={50} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-next">
                            <img src="/src/assets/product-next-logo.svg" alt="next" />
                        </div>
                        <div className="swiper-button-prev">
                            <img src="/src/assets/product-prev-logo.svg" alt="prev" />
                        </div>

{/* 
                        {productdata.videoUrl && (
                            <button
                                className="video-icon-container"
                                onClick={() => openPopup(productdata.videoUrl)}
                            >
                                <svg width="80" height="80" viewBox="24 24 80 80" fill="none">
                                    <rect x="32" y="31" width="64" height="64" rx="8" fill="#D9EBE2" />
                                    <path
                                        d="M73.5 62.99V71.03L58.3 73.15L72.27 60.87L73.17 61.77L73.5 62.99Z"
                                        fill="#38472A"
                                    />
                                </svg>
                            </button>
                        )} */}
                    </div>


                     {/* <div className="popup-overlay" id="popup">
                        <div className="popup-content">
                            <button className="close-btn" onClick={closePopup}>
                                &times;
                            </button>
                            <div id="loader" className="spinner"></div>
                            <div className="popup-video-container" style={{ display: "none" }} id="videoWrapper">
                                <video id="popupVideo" controls muted loop />
                            </div>
                        </div>
                    </div> */}

                  
                    {/* <div className="product-zoom-slider-wrapper">
                        <div className="zoom-close-btn-container">
                            <button className="zoon-btn-close">X</button>
                        </div>
                        <Swiper slidesPerView={1} className="singleProductZoomSlider">
                            {productdata.images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="img-container">
                                        <img src={img} alt={`Zoom ${idx}`} className="pd-silder-zoom-img" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="nlf-zoom-slider-prev">
                            <div className="img-container">
                                <img src="/right-arrow.png" alt="left" />
                            </div>
                        </div>
                        <div className="nlf-zoom-slider-next">
                            <div className="img-container">
                                <img src="/right-arrow.png" alt="right" />
                            </div>
                        </div>
                    </div>

                   
                    <div className="custom-product-info">
                        <h1 className="custom-product-info-title">{productdata.title}</h1>
                        <p className="custom-product-price-container">{productdata.price}</p>
                        <p className="product-info-lbl">{productdata.shortDescription}</p>
                    </div>
                </div>

                
                <div className="pd-iframe-wrapper">
                    <iframe
                        src="https://dashboard.webwinkelkeur.nl/webshops/widget_html?id=1219873&layout=new_button-stars&theme=dark&color=3a472b&show=yes&view=slider&amount=6&width=manual&width_amount=270px&height=45px&interval=5000&language=nld"
                        className="wwk-widget-iframe wwk-widget--new_button-stars wwk-widget--new_button-stars--dark"
                        style={{ border: 0, height: "45px", width: "270px" }}
                    />
                </div> */}

                </div>
            </div>
        </section>
    );
};

export default SingleProductGallary;