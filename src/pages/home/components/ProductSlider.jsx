import ProductImage1 from '../../../assets/product-1.webp';
import ProductImage2 from '../../../assets/product-2.webp';
import { useState } from 'react';
import '../../../component/ui/card'
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/product-slider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import RecomendedProductCard from '../../../component/ui/card';
import { Navigation } from 'swiper/modules';
import { getCollectionByHandler } from '../../../businessLogic/graphql/query';
const DOMAIN = import.meta.env.VITE_DOMAIN;
const TOKEN = import.meta.env.VITE_TOKEN;
import { useEffect } from 'react';
import { fetchApi } from '../../../businessLogic/api/shopify';
const ProductSlider = () => {
    const [productList, setProductList] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const res = await axios.post(
    //             `https://${DOMAIN}/api/2024-10/graphql.json`,
    //             {
    //                 query: getCollectionByHandler,
    //                 variables: {
    //                     handle: "best-sellers"
    //                 }
    //             },
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "X-Shopify-Storefront-Access-Token": TOKEN,
    //                 }
    //             }
    //         );
    //         return res;

    //     } catch (error) {
    //         console.error("Shopify Fetch Error:", error);
    //     }
    // }
    useEffect(() => {
        const fetchProductData = async () => {
            const res = await fetchApi({query: getCollectionByHandler});
            setProductList(res?.data?.data.collection.products.edges);
            
        };
        fetchProductData();
    }, []);
    console.log("Product List:", productList);
    return (
        <section className="b2b-product-slider-section">
            <div className="b2b-container">
                <h2 className="section-title">Popular Wholesale Product</h2>
                <div className="b2b-product-slider-section-container">
                    <div className="swiper product-slider">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.product-slider-next',
                                prevEl: '.product-slider-prev',
                            }}
                           className="mySwiper"
                            style={{ height: "75vh" }}
                            spaceBetween={20}
                            slidesPerView={4}
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                640: { slidesPerView: 2.2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {productList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <RecomendedProductCard
                                        img1={item.node.images.edges[0].node.url}
                                        img2={item.node.images.edges[1].node.url}
                                        producttitle={item.node.title}
                                        botanicalname={item.node.metafields[1]?.value}
                                        height={item.node.metafields[0]?.value}
                                        oldprice={item.node?.ldprice}
                                        newprice={item.node.priceRange.minVariantPrice.amount}
                                        btntext="Shop Now"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="product-slider-navigation">
                            <div className="product-slider-prev">
                                <div className="img-container">
                                    <img src="//neverleafs.nl/cdn/shop/t/36/assets/right-arrow.png?v=23582101029965601861762073744" loading="lazy" width="" height="" alt="arrow-left"></img>
                                </div>
                            </div>
                            <div className="product-slider-next">
                                <div className="img-container">
                                    <img src="//neverleafs.nl/cdn/shop/t/36/assets/right-arrow.png?v=23582101029965601861762073744" loading="lazy" width="" height="" alt="arrow-right"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductSlider;