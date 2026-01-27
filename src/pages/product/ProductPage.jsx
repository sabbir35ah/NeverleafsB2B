import ArticlesSection from "../../component/ArticleSection"
import B2bFaq from "../home/components/B2bFaq"
import ProductSlider from "../home/components/ProductSlider"
import RecomendedProduct from "../home/components/RecomendedProduct"
import B2bInspiration from "./components/B2bInspiration"
import Choosepartners from "./components/ChoosePartners"
import PlantImageSlider from "./components/PlantImageSlider"
import SingleProductGallary from "./components/SingleProductGallary"


 const ProductPage = () => {
  return (

    <>
      <SingleProductGallary/>
        <B2bInspiration/>
        <PlantImageSlider/>
        <Choosepartners/>
        <RecomendedProduct/>
        <B2bFaq/>
        <ArticlesSection/>
        <ProductSlider/>
    
    </>
  )
}
export default ProductPage