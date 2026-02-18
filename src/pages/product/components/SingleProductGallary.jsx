import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "../../../styles/singleProductGallry.css";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ShippingTimer from "../../../component/countdown";
import PopUp from "../../../component/ui/PopUp";
const DOMAIN = import.meta.env.VITE_DOMAIN;
const TOKEN = import.meta.env.VITE_TOKEN;

const SingleProductGallary = ({ product }) => {
  const [thumbsSwiper] = React.useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
   const [modalShow, setModalShow] = useState(false);
     const pop = () => {
      setModalShow(true);
     }
  console.log("product:",product?.images);

return <dev >fiorgupiot</dev>
  // return (
  //   <section className="custom-main-product-section">
  //     <div className="common-container">
  //       <div className="custom-main-product-slider-block">
  //         <div className="main-slider">
  //           <Swiper
  //             slidesPerView={1}
  //             navigation={{
  //               nextEl: ".swiper-button-next",
  //               prevEl: ".swiper-button-prev",
  //             }}
  //             thumbs={{ swiper: thumbsSwiper }}
  //             className="mySwiper2"
  //           >
  //             {product?.images?.edges?.map((img, idx) => {
  //               return (
  //                 <SwiperSlide key={idx}>
  //                   <div className="full-sc-block">
  //                     <div
  //                       className="full-sc-logo-container"
  //                       data-slider-tar={idx}
  //                       onClick={pop}
  //                     >
  //                       <img src="/src/assets/full-sc-logo.svg" alt="logo" />
  //                     </div>
  //                   </div>
  //                   <div
  //                     className={`first-img-container ${
  //                       idx === 0 ? "custom-temp-feature-image" : ""
  //                     }`}
  //                   >
  //                     <img
  //                       src={img.node?.url}
  //                       alt={`Product ${idx}`}
  //                       className="special-slider-image"
  //                     />
  //                   </div>
  //                 </SwiperSlide>
  //               );
  //             })}
  //           </Swiper>

              
  //           {/* <div className="mbl-navigation-icon">
  //             <div className="swiper-button-next">
  //               <img src="/src/assets/product-next-logo.svg" alt="next" />
  //             </div>
  //             <div className="swiper-button-prev">
  //               <img src="/src/assets/product-prev-logo.svg" alt="prev" />
  //             </div>
  //           </div> */}
  //         </div>
  //         <div className="custom-main-product-slider-footer">
  //           <div className="small-gallery-slider">
  //             <div
  //               thumbsslider=""
  //               className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
  //             >
  //                 <Swiper
  //                   modules={[FreeMode, Thumbs, Navigation]}
  //                   freeMode={true}
  //                   watchSlidesProgress={true}
  //                   slidesPerView={4}
  //                   spaceBetween={10}
  //                   navigation={{
  //                     nextEl: ".swiper-button-next",
  //                     prevEl: ".swiper-button-prev",
  //                   }}
  //                   className="mySwiper"
  //                 >
  //                   {product?.images?.edges?.map((src, index) => (
  //                     <SwiperSlide
  //                       key={index}
  //                       className="swiper-slide swiper-slide-visible swiper-slide-fully-visible"
  //                       role="group"
  //                       aria-label={`${index + 1} / 4`}
  //                     >
  //                       <div className="second-img-container">
  //                         <img
  //                           src={src.node?.url}
  //                           alt="picture"
  //                           width=""
  //                           height=""
  //                         />
  //                       </div>
  //                     </SwiperSlide>
  //                   ))}
  //                 </Swiper>
               
  //               <span
  //                 className="swiper-notification"
  //                 aria-live="assertive"
  //                 aria-atomic="true"
  //               ></span>
               
  //             </div>

  //             <div
  //               className="swiper-button-next"
  //               tabIndex={0}
  //               role="button"
  //               aria-label="Next slide"
  //               aria-controls="swiper-wrapper-104380964d53f78fb"
  //               aria-disabled="false"
  //             >
  //               <img
  //                 src="/src/assets/product-next-logo.svg"
  //                 alt="picture"
  //                 width=""
  //                 height=""
  //               />
  //             </div>
  //             <div
  //               className="swiper-button-prev swiper-button-disabled"
  //               tabIndex={-1}
  //               role="button"
  //               aria-label="Previous slide"
  //               aria-controls="swiper-wrapper-104380964d53f78fb"
  //               aria-disabled="true"
  //             >
  //               <img
  //                 src="/src/assets/product-prev-logo.svg"
  //                 alt="picture"
  //                 width=""
  //                 height=""
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="custom-product-info">
  //           <div className="custom-product-info-container">
  //             <h1 className="custom-product-info-title">{product?.title}</h1>
  //           </div>

  //           <div className="price-content-upper-block">
  //             <div className="price-upper-block-text">
  //               <p className="custom-product-price-container">
  //                 <span className="highlight">
  //                   {product?.variants?.edges[0]?.node?.price?.amount}
  //                 </span>
  //                 {/* {product.compareAtPrice && (
  //                   <span className="text-through">
  //                     {product.compareAtPrice}
  //                   </span>
  //                 )} */}

  //                 <span className="sub-text">Incl. BTW</span>
  //               </p>

  //               <div className="batch-botanical-lbl-container">
  //                   <div className="badge-stock">
  //                     <span className="stock-lbl">In stock</span>
  //                   </div>
                  
  //                 <span className="botanical-lbl">Botanical</span>
  //               </div>
  //             </div>
  //           </div>

  //           <ShippingTimer />
  //           <div className="quanty-add-cart-container-v2">
  //             <div className="product-form__input product-form__quantity">
  //               <label
  //                 className="quantity__label form__label"
  //                 htmlFor="Quantity-custom"
  //               >
  //                 Quantity
  //                 <span className="quantity__rules-cart no-js-hidden hidden">
  //                   <div className="loading__spinner hidden">
  //                     <svg
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       className="spinner"
  //                       viewBox="0 0 66 66"
  //                     >
  //                       <circle
  //                         strokeWidth="6"
  //                         cx="33"
  //                         cy="33"
  //                         r="30"
  //                         fill="none"
  //                         className="path"
  //                       ></circle>
  //                     </svg>
  //                   </div>
  //                   <span>
  //                     (<span className="quantity-cart">0</span> in winkelwagen)
  //                   </span>
  //                 </span>
  //               </label>
  //               <div className="price-per-item__container">
  //                 <div className="p-quantity">
  //                   <button
  //                     className="quantity__button no-js-hidden"
  //                     onClick={handleMinus}
  //                   >
  //                     <span>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         aria-hidden="true"
  //                         focusable="false"
  //                         class="icon icon-minus"
  //                         fill="none"
  //                         viewBox="0 0 10 2"
  //                       >
  //                         <path
  //                           fill-rule="evenodd"
  //                           clip-rule="evenodd"
  //                           d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
  //                           fill="currentColor"
  //                         ></path>
  //                       </svg>
  //                     </span>
  //                   </button>
  //                   <span>{quantity}</span>
  //                   <button
  //                     className="quantity__button no-js-hidden"
  //                     onClick={handlePlus}
  //                   >
  //                     <span>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         aria-hidden="true"
  //                         focusable="false"
  //                         class="icon icon-plus"
  //                         fill="none"
  //                         viewBox="0 0 10 10"
  //                       >
  //                         <path
  //                           fill-rule="evenodd"
  //                           clip-rule="evenodd"
  //                           d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
  //                           fill="currentColor"
  //                         ></path>
  //                       </svg>
  //                     </span>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div
  //                 className="quantity__rules caption no-js-hidden"
  //                 id="Quantity-Rules-custom"
  //               ></div>
  //             </div>

  //             <div>
  //               <div className="product-form" data-hide-errors="false">
  //                 <div
  //                   className="product-form__error-message-wrapper"
  //                   role="alert"
  //                   hidden
  //                 >
  //                   <svg
  //                     aria-hidden="true"
  //                     focusable="false"
  //                     className="icon icon-error"
  //                     viewBox="0 0 13 13"
  //                   >
  //                     <circle
  //                       cx="6.5"
  //                       cy="6.50049"
  //                       r="5.5"
  //                       stroke="white"
  //                       strokeWidth="2"
  //                     ></circle>
  //                     <circle
  //                       cx="6.5"
  //                       cy="6.5"
  //                       r="5.5"
  //                       fill="#EB001B"
  //                       stroke="#EB001B"
  //                       strokeWidth="0.7"
  //                     ></circle>
  //                     <path
  //                       d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
  //                       fill="white"
  //                     ></path>
  //                     <path
  //                       d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
  //                       fill="white"
  //                       stroke="#EB001B"
  //                       strokeWidth="0.7"
  //                     ></path>
  //                   </svg>
  //                   <span className="product-form__error-message"></span>
  //                 </div>
  //                 <form
  //                   method="post"
  //                   className="form"
  //                   data-type="add-to-cart-form"
  //                 >
  //                   <input type="hidden" name="form_type" value="product" />
  //                   <input type="hidden" name="utf8" value="✓" />
  //                   <input
  //                     type="hidden"
  //                     name="id"
  //                     value="55635473170776"
  //                     className="product-variant-id"
  //                   />

  //                   <div className="product-form__buttons">
  //                     <button
  //                       type="submit"
  //                       name="add"
  //                       className="product-form__submit button button--full-width button--primary"
  //                       aria-haspopup="dialog"
  //                     >
  //                       <span>In shopping cart</span>
  //                       <span className="icon-cart-btn-svg">
  //                         <svg
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           width="15"
  //                           height="16"
  //                           viewBox="0 0 15 16"
  //                           fill="none"
  //                         >
  //                           <path
  //                             d="M7.42042 14.2545C7.42042 14.5998 7.32371 14.9372 7.14252 15.2243C6.96133 15.5113 6.70379 15.735 6.40248 15.8671C6.10117 15.9992 5.76961 16.0338 5.44974 15.9665C5.12987 15.8991 4.83605 15.7329 4.60543 15.4888C4.37482 15.2447 4.21777 14.9337 4.15414 14.5951C4.09052 14.2565 4.12317 13.9055 4.24798 13.5866C4.37279 13.2676 4.58414 12.995 4.85531 12.8033C5.12649 12.6115 5.4453 12.5091 5.77144 12.5091C6.20864 12.5096 6.62782 12.6936 6.93697 13.0208C7.24612 13.3481 7.41999 13.7918 7.42042 14.2545ZM11.2681 12.5091C10.9419 12.5091 10.6231 12.6115 10.3519 12.8033C10.0808 12.995 9.8694 13.2676 9.74459 13.5866C9.61978 13.9055 9.58713 14.2565 9.65075 14.5951C9.71438 14.9337 9.87143 15.2447 10.102 15.4888C10.3327 15.7329 10.6265 15.8991 10.9464 15.9665C11.2662 16.0338 11.5978 15.9992 11.8991 15.8671C12.2004 15.735 12.4579 15.5113 12.6391 15.2243C12.8203 14.9372 12.917 14.5998 12.917 14.2545C12.9166 13.7918 12.7427 13.3481 12.4336 13.0208C12.1244 12.6936 11.7053 12.5096 11.2681 12.5091ZM14.9802 4.00175L13.9031 9.92989C13.8303 10.3278 13.6291 10.6866 13.3339 10.9449C13.0387 11.2031 12.6679 11.3447 12.2849 11.3455H4.7488C4.38535 11.3438 4.0326 11.2151 3.74538 10.9794C3.45816 10.7436 3.25256 10.4141 3.16055 10.0419C3.14763 10.0102 1.47309 1.16364 1.47309 1.16364H0.549661C0.403882 1.16364 0.264073 1.10234 0.160992 0.993226C0.0579105 0.884114 0 0.736126 0 0.581818C0 0.42751 0.0579105 0.279523 0.160992 0.170411C0.264073 0.0612985 0.403882 0 0.549661 0H1.47309C1.72711 0.000522415 1.97315 0.0939331 2.16957 0.264421C2.36599 0.434908 2.50073 0.672 2.55098 0.935564L2.86896 2.61818H13.9007C14.0626 2.61818 14.2226 2.65606 14.3691 2.72912C14.5157 2.80219 14.6451 2.90862 14.7483 3.04082C14.8514 3.17301 14.9257 3.3277 14.9658 3.49382C15.0059 3.65994 15.0108 3.83338 14.9802 4.00175ZM10.9932 6.98182C10.9932 6.82751 10.9353 6.67952 10.8322 6.57041C10.7291 6.4613 10.5893 6.4 10.4436 6.4H9.06941V4.94545C9.06941 4.79115 9.0115 4.64316 8.90842 4.53405C8.80533 4.42493 8.66553 4.36364 8.51975 4.36364C8.37397 4.36364 8.23416 4.42493 8.13108 4.53405C8.028 4.64316 7.97009 4.79115 7.97009 4.94545V6.4H6.59593C6.45015 6.4 6.31035 6.4613 6.20726 6.57041C6.10418 6.67952 6.04627 6.82751 6.04627 6.98182C6.04627 7.13613 6.10418 7.28411 6.20726 7.39323C6.31035 7.50234 6.45015 7.56364 6.59593 7.56364H7.97009V9.01818C7.97009 9.17249 8.028 9.32048 8.13108 9.42959C8.23416 9.5387 8.37397 9.6 8.51975 9.6C8.66553 9.6 8.80533 9.5387 8.90842 9.42959C9.0115 9.32048 9.06941 9.17249 9.06941 9.01818V7.56364H10.4436C10.5893 7.56364 10.7291 7.50234 10.8322 7.39323C10.9353 7.28411 10.9932 7.13613 10.9932 6.98182Z"
  //                             fill="white"
  //                           ></path>
  //                         </svg>
  //                       </span>
  //                     </button>
  //                   </div>

  //                   <input
  //                     type="hidden"
  //                     name="product-id"
  //                     value="15281110810968"
  //                   />
  //                   <input
  //                     type="hidden"
  //                     name="section-id"
  //                     value="template--26336146948440__custom_main_product_hVrfNH"
  //                   />
  //                 </form>
  //               </div>
  //             </div>
  //           </div>

  //           <p className="product-info-lbl">
  //             "Shape your artificial plant into any shape you want."
  //           </p>

  //           <p className="payment-method-lbl">
  //             You can choose from 8+ payment methods
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //      <PopUp inspirationItems={product?.images}  show={modalShow} onHide={() => setModalShow(false)}  />
  //   </section>
  // );
};

export default SingleProductGallary;
