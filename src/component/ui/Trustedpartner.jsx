import '../../styles/B2bPartner.css'
const TrustedPartners = ({image}) => {
  return (

      <div className="trusted-box">
        <div className="trusted-logos">
          <img src={image}/>
        </div>
      </div>
  );
};

export default TrustedPartners;
