import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/ProductReview.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { getCollectionByHandler } from '../../../businessLogic/graphql/query';
import { fetchApi } from '../../../businessLogic/api/shopify';
const WEBWINKELKEUR_URL = import.meta.env.WEBWINKELKEUR_URL;   
const SHOP_ID = import.meta.env.VITE_SHOP_ID; 
const API_KEY = import.meta.env.API_KEY;
const TOKEN = import.meta.env.VITE_TOKEN;

const ReviewSlider = ({ title = [] }) => {
     const [reviews, setReviews] = useState([]);
    
        const fetchApi = async () => {
            try {
                const res = await axios.post(
                    `${WEBWINKELKEUR_URL}?id=${SHOP_ID}&public_code=${API_KEY}&product_id=${15281267376472}`,
                    {
                        query: getCollectionByHandler,
                        variables: {
                            handle: "best-sellers"
                        }
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "X-Shopify-Storefront-Access-Token": TOKEN,
                        }
                    }
                );
                return res;
    
            } catch (error) {
                console.error("Shopify Fetch Error:", error);
            }
        }
        useEffect(() => {
            const fetchProductData = async () => {
                const res = await fetchApi({query: getCollectionByHandler});
                setReviews(res?.data?.data.collection.products.edges);
            console.log("Reviews Response:", res);
            };
            fetchProductData();
        }, []);
        console.log("Reviews:", reviews);
    return (
        <section className="nlf-reviews-section" id="review-slider">
            <div className="common-container">

                {/* TITLE */}
                <div className="nlf-customer-review-section">
                    <h4 className="nlf-review-title">{title}</h4>
                </div>

                {/* SLIDER */}
                <div className="webwinkelklur-slider-container">
                    <div className="nlf-review-slider-block">

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".nlf-slider-next",
                                prevEl: ".nlf-slider-prev",
                            }}
                            spaceBetween={20}
                            slidesPerView={1}
                            className="reviewSlider webkinkel-judge-review-slider"
                        >
                            {reviews?.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="review-card">
                                        <p className="review-text">{review.text}</p>
                                        <span className="review-author">
                                            {review.author}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                    {/* NAVIGATION */}
                    <div className="review-handler">

                        <div className="nlf-slider-prev">
                            <div className="img-container">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC40NjMyNSA5Ljg1MDc1QzQuNjUyMjUgMTAuMDQ5OCA0Ljk1OTI1IDEwLjA0OTggNS4xNDcyNSA5Ljg1MDc1TDUuODMwMjUgOS4xMzM3NUM2LjAyMDI1IDguOTM2NzUgNi4wMjAyNSA4LjYxNjc1IDUuODMwMjUgOC40MTg3NUwyLjUzNTI1IDUuMDEzNzVMNS44NTgyNSAxLjU4MDc1QzYuMDQ3MjUgMS4zODE3NSA2LjA0NzI1IDEuMDYxNzUgNS44NTgyNSAwLjg2NDc1TDUuMTc0MjUgMC4xNDc3NUM0Ljk4NjI1IC0wLjA0OTI0OTYgNC42ODAyNSAtMC4wNDkyNDk2IDQuNDkwMjUgMC4xNDc3NUwwLjE0MTI1IDQuNjU1NzVDLTAuMDQ2NzUwMSA0Ljg1Mzc1IC0wLjA0Njc1MDEgNS4xNzM3NSAwLjE0MTI1IDUuMzcxNzVMNC40NjMyNSA5Ljg1MDc1WiIgZmlsbD0iIzI3MjYyNiIvPgo8L3N2Zz4K"
                                    alt="prev"
                                />
                            </div>
                        </div>

                        <div className="nlf-slider-next">
                            <div className="img-container">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41MzY3NSAwLjE0OTI1QzEuMzQ3NzUgLTAuMDQ5NzUgMS4wNDA3NSAtMC4wNDk3NSAwLjg1Mjc1IDAuMTQ5MjVMMC4xNjk3NSAwLjg2NjI1Qy0wLjAyMDI1IDEuMDYzMjUgLTAuMDIwMjUgMS4zODMyNSAwLjE2OTc1IDEuNTgxMjVMMy40NjQ3NSA0Ljk4NjI1TDAuMTQxNzUgOC40MTkyNUMtMC4wNDcyNSA4LjYxODI1IC0wLjA0NzI1IDguOTM4MjUgMC4xNDE3NSA5LjEzNTI1TDAuODI1NzUgOS44NTIyNUMxLjAxMzc1IDEwLjA0OTIgMS4zMTk3NSAxMC4wNDkyIDEuNTA5NzUgOS44NTIyNUw1Ljg1ODc1IDUuMzQ0MjVDNi4wNDY3NSA1LjE0NjI1IDYuMDQ2NzUgNC44MjYyNSA1Ljg1ODc1IDQuNjI4MjVMMS41MzY3NSAwLjE0OTI1WiIgZmlsbD0iIzI3MjYyNiIvPgo8L3N2Zz4K"
                                    alt="next"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSlider;


