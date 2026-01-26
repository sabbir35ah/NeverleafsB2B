const PartnerCatalog = ({ link, image, title }) => {

    return (

        <a href={link} className="cards-block ">
            <div className="img-container">
                <img src={image} alt="" width="" height="" />
            </div>
            <h4 className="plant-title">{title}</h4>
        </a>
    );

}

export default PartnerCatalog;