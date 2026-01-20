import B2bFaq from "../home/components/B2bFaq"
import ProductSlider from "../home/components/ProductSlider"
import RecomendedProduct from "../home/components/RecomendedProduct"
import B2bInspiration from "./components/B2bInspiration"
import PlantImageSlider from "./components/PlantImageSlider"

 const ProductPage = () => {
  return (

    <>
        <B2bInspiration/>
        <PlantImageSlider/>
        <RecomendedProduct/>
        <B2bFaq/>
        <ProductSlider/>
    
    </>
  )
}
export default ProductPage