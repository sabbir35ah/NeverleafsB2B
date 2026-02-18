import { Link, useNavigate } from 'react-router-dom';
import '../../styles/RecomendedProduct.css';
import '../../styles/base.css';

const RecomendedProductCard =({img1,img2,  producttitle,botanicalname,height,oldprice,newprice,btntext, handle})=>{
    const navigate = useNavigate();
     const handleClick = (e) => {
    e.preventDefault();
    if (btntext.includes('Shop Now')) {
      navigate(`/product-page/${handle}`); 
    } else if (btntext.includes('Unlock B2B Pricing')) {
      navigate('/login-page'); 
    }
  };  
  
    return (
            <div className="p-card">
                    <div className="p-card-img ">
                        <img src={img1} width="" height="" loading="lazy" alt=""></img>
                        <img src={img2} width="" height="" loading="lazy" alt=""></img>
                    </div>
                    <p className="p-card-title common-p-card-padding">{producttitle}</p>
                    <div className="p-card-info common-p-card-padding">
                        <div className="p-botanical-name">{botanicalname}</div>
                        <div className="p-extra-info">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_6746_6920)">
                                        <path d="M3.99994 13.223L1.7562 15.4668H0.643668L3.99994 12.1105V13.223ZM0.266602 2.77718L2.51033 0.533447H3.62287L0.266602 3.88971L0.266602 2.77718ZM0.266602 4.64385L3.99994 0.910514V2.02305L0.266602 5.75638V4.64385ZM3.99994 11.3564L0.266602 15.0897V13.9772L3.99994 10.2438V11.3564ZM3.99994 9.48971L0.266602 13.223V12.1105L3.99994 8.37718V9.48971ZM3.99994 7.62305L0.266602 11.3564V10.2438L3.99994 6.51051V7.62305ZM3.99994 5.75638L0.266602 9.48971V8.37718L3.99994 4.64385V5.75638ZM3.99994 3.88971L0.266602 7.62305V6.51051L3.99994 2.77718V3.88971ZM0.533268 0.533447H1.7562L0.266602 2.02305V0.800114C0.266602 0.652838 0.385992 0.533447 0.533268 0.533447ZM3.73327 15.4668H2.51033L3.99994 13.9772V15.2001C3.99994 15.3474 3.88054 15.4668 3.73327 15.4668Z" fill="#484848" />
                                        <path d="M15.4667 0H5.33332C5.18604 0 5.06665 0.119391 5.06665 0.266667C5.06665 0.413943 5.18604 0.533333 5.33332 0.533333H15.4667C15.6139 0.533333 15.7333 0.413943 15.7333 0.266667C15.7333 0.119391 15.6139 0 15.4667 0Z" fill="#484848" />
                                        <path d="M15.4667 15.4666H5.33332C5.18604 15.4666 5.06665 15.5859 5.06665 15.7332C5.06665 15.8805 5.18604 15.9999 5.33332 15.9999H15.4667C15.6139 15.9999 15.7333 15.8805 15.7333 15.7332C15.7333 15.5859 15.6139 15.4666 15.4667 15.4666Z" fill="#484848" />
                                        <path d="M12.226 12.6587C12.1479 12.5335 11.9832 12.4953 11.858 12.5734C11.7328 12.6515 11.6946 12.8162 11.7727 12.9414L13.106 15.0747C13.1546 15.1532 13.2404 15.2009 13.3327 15.2009C13.425 15.2009 13.5107 15.1532 13.5593 15.0747L14.8927 12.9414C14.9707 12.8162 14.9325 12.6515 14.8073 12.5734C14.6821 12.4953 14.5174 12.5335 14.4393 12.6587L13.5999 14.0035V1.99659L14.4404 3.34139C14.4909 3.42237 14.5808 3.47027 14.6761 3.46703C14.7715 3.46379 14.8579 3.40991 14.9028 3.32569C14.9477 3.24148 14.9442 3.13971 14.8937 3.05873L13.5604 0.925395C13.5084 0.851698 13.4239 0.807861 13.3337 0.807861C13.2436 0.807861 13.159 0.851698 13.1071 0.925395L11.7737 3.05873C11.6957 3.18391 11.7339 3.34867 11.8591 3.42673C11.9843 3.50478 12.149 3.46658 12.2271 3.34139L13.0665 1.99659V14.0035L12.226 12.6587Z" fill="#484848" />
                                        <path d="M9.86615 5.59974V7.19974H7.73281V5.59974C7.73281 5.30519 7.49403 5.06641 7.19948 5.06641H6.66615C6.37159 5.06641 6.13281 5.30519 6.13281 5.59974V10.3997C6.13281 10.6943 6.37159 10.9331 6.66615 10.9331H7.19948C7.49403 10.9331 7.73281 10.6943 7.73281 10.3997V8.79974H9.86615V10.3997C9.86615 10.6943 10.1049 10.9331 10.3995 10.9331H10.9328C11.2274 10.9331 11.4661 10.6943 11.4661 10.3997V5.59974C11.4661 5.30519 11.2274 5.06641 10.9328 5.06641H10.3995C10.1049 5.06641 9.86615 5.30519 9.86615 5.59974Z" fill="#484848" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6746_6920">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>{ height }
                            </span>
                        </div>
                    </div>
                    <div className="p-card-price common-p-card-padding">
                        <span className="p-card-orginal-price">{newprice}</span>{oldprice}
                    </div>
                    <div className="button-container" >
                        <a className="common-btn p-card-btn" onClick={handleClick}>{btntext}</a>
                    </div>
                </div>
    
    );
}

export default RecomendedProductCard;