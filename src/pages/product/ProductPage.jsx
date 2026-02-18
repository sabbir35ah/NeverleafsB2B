import { useEffect, useState } from "react";
import ArticlesSection from "../../component/ArticleSection";
import B2bFaq from "../home/components/B2bFaq";
import ProductSlider from "../home/components/ProductSlider";
import RecomendedProduct from "../home/components/RecomendedProduct";
import B2bInspiration from "./components/B2bInspiration";
import Choosepartners from "./components/ChoosePartners";
import PlantImageSlider from "./components/PlantImageSlider";
import ReviewSlider from "./components/ProductReview";
import SingleProductGallary from "./components/SingleProductGallary";
import { useParams } from "react-router-dom";
import { getProductByHandle } from "../../businessLogic/graphql/query";
import axios, { Axios } from "axios";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const router = useParams();
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.post(
          `https://${import.meta.env.VITE_DOMAIN}/api/2024-10/graphql.json`,
          {
            query: getProductByHandle,
            variables: {
              handle: router.id,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Shopify-Storefront-Access-Token": import.meta.env.VITE_TOKEN,
            },
          },
        );
        setSingleProduct(res?.data?.data?.productByHandle);
       
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProductData();
  }, [router.id]);
  console.log("Single Product Data:", singleProduct);

  return (
    <>
      <SingleProductGallary product={singleProduct} />
      <ReviewSlider />
      <B2bInspiration />
      <PlantImageSlider />
      <Choosepartners />
      <RecomendedProduct />
      <B2bFaq />
      <ArticlesSection />
      <ProductSlider />
    </>
  );
};
export default ProductPage;
