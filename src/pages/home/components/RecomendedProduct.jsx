import RecomendedProductCard from '../../../component/ui/card';
import { productCard } from '../../../constant';
import '../../../styles/RecomendedProduct.css';
const DOMAIN = import.meta.env.VITE_DOMAIN;
const TOKEN = import.meta.env.VITE_TOKEN;
import { useEffect, useState } from 'react';
import { fetchApi } from '../../../businessLogic/api/shopify';
import { getCollectionByHandler } from '../../../businessLogic/graphql/query';

const RecomendedProduct = () => {
    const [productList, setProductList] = useState([]);
      useEffect(() => {
            const fetchProductData = async () => {
                const res = await fetchApi({query: getCollectionByHandler});
                setProductList(res?.data?.data.collection.products.edges);
                
            };
            fetchProductData();
           
        }, []);
        console.log("Product List:", productList);

    return (
        <section className="b2b-recomended-product-section">
            <div className="b2b-container">
                <h2 className="section-title">Popular Wholesale Product</h2>
                <div className='products-card-continers'>
                    {
                        productList.map((item) => {
                        
                            return <RecomendedProductCard
                                img1={item.node.images.edges[0].node.url}
                                img2={item.node.images.edges[1].node.url}
                                producttitle={item.node.title}
                                botanicalname={item.node.metafields[1]?.value}
                                height={item.node.metafields[0]?.value}
                                oldprice={item.node?.ldprice}
                                newprice={item.node?.price}
                                btntext= "Unlock B2B Pricing"
                                

                            />
                        })
                    }

                </div>

            </div>
        </section>

    )
};

export default  RecomendedProduct;