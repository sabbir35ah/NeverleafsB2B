import ArticlesSection from "../../../component/ArticleSection"
import B2bFaq from "../../home/components/B2bFaq"
import ProductSlider from "../../home/components/ProductSlider"
import RecomendedProduct from "../../home/components/RecomendedProduct"
import B2bInspiration from "./B2bInspiration"
import Choosepartners from "./ChoosePartners"
import PlantImageSlider from "./PlantImageSlider"

 const SingleProduct = () => {
  return (

    <> 
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
export default SingleProduct