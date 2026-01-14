import RecomendedProductCard from '../../../component/ui/card';
import { productCard } from '../../../constant';
import '../../../styles/RecomendedProduct.css';

const RecomendedProduct = () => {
    return (
        <section className="b2b-recomended-product-section">
            <div className="b2b-container">
                <h2 className="section-title">Popular Wholesale Product</h2>
                <div className='products-card-continers'>
                    {
                        productCard.map((item) => {
                            return <RecomendedProductCard
                                img1={item.img1}
                                img2={item.img2}
                                producttitle={item.producttitle}
                                botanicalname={item.botanicalname}
                                oldprice={item.oldprice}
                                newprice={item.newprice}
                                btntext={item.btntext}

                            />
                        })
                    }

                </div>

            </div>
        </section>

    )
}

export default RecomendedProduct