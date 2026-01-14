import React from 'react'
import LndHero from './components/LndHero'
import LndFeatureOverview from './components/LndFeatureOverview'
import ProductSlider from './components/ProductSlider'
import B2bPartner from './components/B2bPartner'
import BusinessVolume from './components/BusinessVloume'
import BusinessFeature from './components/BusinessFeature'
import BusinessProcess from './components/BusinessProcess'
import B2bFaq from './components/B2bFaq'
import B2bChoose from './components/B2bChoose'
import RecomendedProduct from './components/RecomendedProduct'

const HomePage = () => {
  return (
   <>
    <LndHero />
    <LndFeatureOverview />
    <ProductSlider />
    <B2bChoose />
    <B2bPartner />
    <BusinessVolume />
    <RecomendedProduct />
    <BusinessFeature />
    <BusinessProcess />
    <B2bFaq />
    </>
  )
}

export default HomePage