import React from 'react'
import '../styles/b2bFooter.css'
import NeverLeafs from './../assets/NeverLeafs.png'
import PaymentLogo from './../assets/paymentLogo.png'

const BtobFooter = () => {
    return (
        <>
            <footer className="bin-footer">
                <div className="b2b-container">
                    <div className="bin-footer-container">
                        <div className="bin-first-content">
                            <div>
                                <div className="img-container">
                                    <a href='#'>
                                        <img src={NeverLeafs} alt='logo_image' />
                                    </a>
                                    <div className="bin-footer-text">085 060 2795
                                        Straatnaam 32, 1234 AB Nederland
                                        Bedrijfsnaam B.V.
                                        BTW: NL866299658B01 KvK: 93168659</div>
                                    <ul className="list-unstyled list-social footer__list-social" role="list">
                                        <li className="list-social__item">
                                            <a href="https://www.instagram.com/neverleafs/" className="link list-social__link"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                viewBox="0 0 32 32" fill="none">
                                                <path
                                                    d="M27.5694 0.430176H4.43091C2.22177 0.430176 0.430908 2.22103 0.430908 4.43017V27.5686C0.430908 29.7778 2.22177 31.5686 4.4309 31.5686H27.5694C29.7785 31.5686 31.5694 29.7778 31.5694 27.5686V4.43018C31.5694 2.22104 29.7785 0.430176 27.5694 0.430176Z"
                                                    fill="#38472A"></path>
                                                <path
                                                    d="M22.8345 12.4615C22.8226 11.8305 22.7032 11.2062 22.4813 10.6154C22.2859 10.1126 21.988 9.65606 21.6066 9.27467C21.2252 8.89327 20.7686 8.5954 20.2659 8.4C19.675 8.17832 19.0507 8.05887 18.4197 8.04677C17.6086 8.00862 17.3489 8 15.2886 8C13.2283 8 12.9711 8.00862 12.1613 8.04431C11.5303 8.05617 10.9059 8.17563 10.3151 8.39754C9.80746 8.58796 9.34781 8.88753 8.96864 9.27508C8.58548 9.65471 8.28905 10.1128 8.09972 10.6178C7.87806 11.2087 7.75861 11.833 7.74649 12.464C7.70833 13.2763 7.69849 13.5348 7.69849 15.5951C7.69849 17.6554 7.70833 17.9089 7.74402 18.7175C7.75587 19.3485 7.87532 19.9729 8.09726 20.5637C8.29259 21.0665 8.59044 21.5231 8.97184 21.9045C9.35325 22.2859 9.80986 22.5837 10.3126 22.7791C10.9035 23.0007 11.5278 23.1202 12.1588 23.1323C12.9686 23.168 13.2259 23.1766 15.2862 23.1766C17.3465 23.1766 17.6049 23.168 18.4136 23.1323C19.0446 23.1206 19.669 23.0011 20.2597 22.7791C20.7626 22.584 21.2194 22.2863 21.6008 21.9048C21.9823 21.5234 22.28 21.0666 22.4751 20.5637C22.6967 19.9728 22.8161 19.3485 22.8283 18.7175C22.864 17.9077 22.8726 17.6505 22.8726 15.5902C22.8726 13.5298 22.8726 13.2702 22.8345 12.4615ZM21.4671 18.6585C21.4616 19.1377 21.3733 19.6124 21.2062 20.0615C21.0797 20.3889 20.8861 20.6863 20.6379 20.9345C20.3897 21.1827 20.0924 21.3763 19.7649 21.5028C19.3141 21.6702 18.8378 21.7585 18.3569 21.7637C17.5569 21.7994 17.3169 21.808 15.2911 21.808C13.2653 21.808 13.0228 21.7994 12.2253 21.7637C11.7444 21.7588 11.268 21.6705 10.8173 21.5028C10.488 21.3818 10.1902 21.1883 9.94587 20.9366C9.69474 20.6918 9.50133 20.3942 9.37972 20.0652C9.21188 19.6157 9.12278 19.1407 9.11633 18.6609C9.08064 17.8609 9.07202 17.6197 9.07202 15.5951C9.07202 13.5705 9.08064 13.3268 9.11633 12.5292C9.12122 12.0483 9.2095 11.5719 9.37726 11.1212C9.49831 10.7911 9.69322 10.4931 9.9471 10.2498C10.1918 9.99862 10.4895 9.80519 10.8185 9.68369C11.2693 9.51632 11.7456 9.42805 12.2265 9.42277C13.0265 9.38708 13.2677 9.37846 15.2923 9.37846C17.3169 9.37846 17.5606 9.38708 18.3582 9.42277C18.8391 9.4277 19.3155 9.51599 19.7662 9.68369C20.0954 9.80467 20.3932 9.99816 20.6376 10.2498C20.8887 10.4946 21.0821 10.7923 21.2037 11.1212C21.3711 11.572 21.4594 12.0484 21.4646 12.5292C21.5003 13.3292 21.5089 13.5692 21.5089 15.5951C21.5089 17.6209 21.5003 17.8572 21.4646 18.6572L21.4671 18.6585Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M15.2902 11.572C14.4954 11.572 13.7185 11.8077 13.0577 12.2493C12.3968 12.6908 11.8818 13.3184 11.5776 14.0527C11.2735 14.787 11.1939 15.5949 11.3489 16.3744C11.504 17.1539 11.8867 17.87 12.4487 18.432C13.0107 18.994 13.7267 19.3767 14.5062 19.5317C15.2857 19.6868 16.0937 19.6072 16.828 19.3031C17.5623 18.9989 18.1899 18.4838 18.6314 17.823C19.073 17.1622 19.3087 16.3853 19.3087 15.5905C19.3087 14.5247 18.8853 13.5026 18.1317 12.749C17.3781 11.9954 16.356 11.572 15.2902 11.572ZM15.2902 18.196C14.7746 18.196 14.2706 18.0431 13.8419 17.7567C13.4133 17.4703 13.0792 17.0631 12.8819 16.5868C12.6846 16.1105 12.6329 15.5864 12.7335 15.0807C12.8341 14.575 13.0824 14.1106 13.4469 13.746C13.8115 13.3814 14.276 13.1332 14.7816 13.0326C15.2873 12.932 15.8114 12.9836 16.2878 13.1809C16.7641 13.3782 17.1712 13.7123 17.4576 14.141C17.7441 14.5697 17.897 15.0737 17.897 15.5893C17.897 16.2806 17.6223 16.9437 17.1335 17.4325C16.6446 17.9214 15.9816 18.196 15.2902 18.196Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M20.241 11.5182C20.241 11.6925 20.1893 11.8629 20.0925 12.0078C19.9956 12.1527 19.858 12.2657 19.697 12.3324C19.5359 12.399 19.3588 12.4165 19.1878 12.3825C19.0169 12.3485 18.8599 12.2646 18.7366 12.1413C18.6134 12.0181 18.5295 11.8611 18.4954 11.6901C18.4614 11.5192 18.4789 11.342 18.5456 11.181C18.6123 11.0199 18.7252 10.8823 18.8701 10.7855C19.0151 10.6886 19.1855 10.637 19.3597 10.637C19.5935 10.637 19.8176 10.7298 19.9829 10.8951C20.1481 11.0603 20.241 11.2845 20.241 11.5182Z"
                                                    fill="#484848"></path>
                                            </svg>
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a href="https://www.youtube.com/@NeverLeafs" className="link list-social__link"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                viewBox="0 0 32 32" fill="none">
                                                <path
                                                    d="M27.1385 0H4C1.79086 0 0 1.79086 0 4V27.1385C0 29.3476 1.79086 31.1385 4 31.1385H27.1385C29.3476 31.1385 31.1385 29.3476 31.1385 27.1385V4C31.1385 1.79086 29.3476 0 27.1385 0Z"
                                                    fill="#38472A"></path>
                                                <path
                                                    d="M23.6656 11.5202C23.4816 10.8297 22.9395 10.2859 22.2511 10.1013C21.0034 9.76596 16 9.76596 16 9.76596C16 9.76596 10.9967 9.76596 9.7489 10.1013C9.06051 10.2859 8.51832 10.8297 8.33434 11.5202C8 12.7717 8 15.383 8 15.383C8 15.383 8 17.9942 8.33434 19.2458C8.51832 19.9363 9.06051 20.4801 9.7489 20.6647C10.9967 21 16 21 16 21C16 21 21.0034 21 22.2511 20.6647C22.9395 20.4801 23.4816 19.9363 23.6656 19.2458C24 17.9942 24 15.383 24 15.383C24 15.383 24 12.7717 23.6656 11.5202Z"
                                                    fill="white"></path>
                                                <path d="M14.3635 17.7538L18.5453 15.3831L14.3635 13.0122V17.7538Z"
                                                    fill="#38472A"></path>
                                            </svg>
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a href="https://nl.pinterest.com/NeverLeafs/" className="link list-social__link"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                viewBox="0 0 32 32" fill="none">
                                                <path
                                                    d="M28 0H4C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0Z"
                                                    fill="#38472A"></path>
                                                <path
                                                    d="M27.5694 0.430298H4.43091C2.22177 0.430298 0.430908 2.22115 0.430908 4.43029V27.5688C0.430908 29.7779 2.22177 31.5688 4.4309 31.5688H27.5694C29.7785 31.5688 31.5694 29.7779 31.5694 27.5688V4.4303C31.5694 2.22116 29.7785 0.430298 27.5694 0.430298Z"
                                                    fill="#38472A"></path>
                                                <path
                                                    d="M14.8211 17.9712C14.4253 20.0464 13.9418 22.0363 12.5097 23.0757C12.0677 19.9387 13.1589 17.5828 13.6654 15.0818C12.8015 13.6272 13.7693 10.7004 15.5916 11.4218C17.8338 12.3087 13.65 16.8287 16.4588 17.3932C19.3914 17.9824 20.5884 12.3049 18.7702 10.4587C16.1425 7.79249 11.1216 10.3977 11.7391 14.2149C11.8893 15.148 12.8536 15.4313 12.1245 16.7189C10.4427 16.3461 9.94092 15.02 10.0054 13.2518C10.1093 10.3574 12.6059 8.33103 15.1102 8.05072C18.277 7.69621 21.2491 9.21319 21.6596 12.1924C22.1218 15.5547 20.23 19.1961 16.8439 18.9343C15.9258 18.8631 15.5407 18.4081 14.8211 17.9712Z"
                                                    fill="white"></path>
                                            </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="bin-last-content">
                            <div className="bin-footer-list">
                                <div className="bin-nav-title">
                                   Klantenservice
                                </div>
                                <ul className="bin-nav-list">

                                    <li className="bin-nav-item">Privacy Policy</li>
                                    <li className="bin-nav-item">Betaalmogelijkheden</li>
                                    <li className="bin-nav-item">Bezorging</li>
                                    <li className="bin-nav-item">Algemene Voorwaarden</li>
                                    <li className="bin-nav-item">Contact</li>

                                </ul>
                            </div>
                            <div className="bin-footer-list">
                                <div className="bin-nav-title">
                                    Assortiment
                                </div>
                                <ul className="bin-nav-list">

                                    <li className="bin-nav-item">Kunstplanten</li>
                                    <li className="bin-nav-item">Kunstbloemen</li>
                                    <li className="bin-nav-item">Kunstbomen</li>
                                    <li className="bin-nav-item">Kunsthaag</li>
                                    <li className="bin-nav-item">Kunst Hangplanten</li>
                                    <li className="bin-nav-item">Kunstboeketten</li>
                                    <li className="bin-nav-item">Kunstplanten voor buiten</li>
                                    <li className="bin-nav-item">Plantenbakken en Vazen</li>

                                </ul>
                            </div>
                            <div className="bin-footer-list">
                                <div className="bin-nav-title">
                                    Tips
                                </div>
                                <ul className="bin-nav-list">
                                    <li className="bin-nav-item">Artificial plants</li>
                                    <li className="bin-nav-item">Outdoors Planter</li>
                                    <li className="bin-nav-item">Artificial flowers</li>
                                    <li className="bin-nav-item">Artificial plants</li>
                                    <li className="bin-nav-item">Artificial flowers</li>
                                    <li className="bin-nav-item">Outdoors Planter</li>
                                </ul>
                            </div>
                            <div className="bin-footer-list">
                                <div className="bin-nav-title">
                                    Meer weten?
                                </div>
                                <ul className="bin-nav-list">

                                    <li className="bin-nav-item"> Zakelijk bestellen</li>
                                    <li className="bin-nav-item">Veelgestelde vragen</li>
                                    <li className="bin-nav-item">Cookies</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bin-footer-bottom-content">

                        <div className="bin-copyright">Copyright © Neverleafs 2026</div>

                        <div className="payment-img-container">
                            <img src={PaymentLogo} alt='payment-img' height="" width="" />
                        </div>
                    </div>
                </div >
            </footer >
        </>
    )
}

export default BtobFooter