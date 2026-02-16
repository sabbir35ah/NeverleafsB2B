import React from 'react';
import '../../styles/cart.css';

const ShoppingCart = () => {
    // const item = {
    //     name: 'Artificial Plant 80cm touch',
    //     subtitle: 'Order Nr. 14, shipped 4.5.0',
    //     price: '12.95',
    //     subtotal: '12.95',
    //     image: '../../assets/product-1.webp'
    // };

    return (
        <div className="shopping-cart-section">
            <div className='b2b-container'>
                <div className="cart-header">
                    <div className='cart-title'>Artificial Plant</div>
                    <div className='cart-subtitle'>Your shopping cart</div>
                </div>
                <div className="product-cart-block" id="CartItem-1">
                    <div className="top-block">
                        <div className="cart-product">
                            <div className="img-container">
                                <img src="//neverleafs.nl/cdn/shop/files/st01-180-2.png?v=1759209448&amp;width=300" alt="product" loading="lazy" width="" height="" />
                            </div>
                            <div className="product-desc">
                                <h4 className="pr-title">Kunstplant Strelitzia 180 cm real touch</h4>
                                <p className="desc">
                                    hoogte : 180cm
                                </p>

                                <p></p>
                                <p className="order-shipment">
                                    <img src="//neverleafs.nl/cdn/shop/t/36/assets/tick.svg?v=108564300688954386611762073790" loading="lazy" width="16" height="16" />
                                    <span class="order-text">Voor 16.00uur besteld, vandaag verzonden! NL &amp; BE</span>
                                </p>

                            </div>
                        </div>
                        <div className="quantity-block">
                            X1
                        </div>
                        <div className="product-price">113,25</div>
                    </div>
                    <div className="bottom-block">
                        <div className="delete-btn">
                            <cart-remove-button id="Remove-1" data-index="1">
                                <a href="/cart/change?id=54849940881752:5f28f815653965e33cb895420608c29e&amp;quantity=0" class="button button--tertiary" aria-label="Kunstplant Strelitzia 180 cm real touch verwijderen">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" class="icon icon-remove">
                                        <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                        <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                                    </svg>

                                </a>
                            </cart-remove-button>
                        </div>
                    </div>
                </div>
                <div className="cart__footer">
                    <div className="cart__blocks">

                        <div className="js-contents">
                            <div></div>

                            <div className="totals">
                                <div className="totals__total">Estimated total</div>
                                <div className="totals__total-value">113,25 EUR</div>
                            </div>

                            <small className="tax-note">You can enter your discount code in the next step.
                            </small>
                        </div>
                        <div className="cart__ctas">
                            <button type="submit" id="checkout" class="cart__checkout-button button" name="checkout" form="cart">
                                To Settle
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ShoppingCart;
