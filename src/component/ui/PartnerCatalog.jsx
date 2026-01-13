const PartnerCatalog = ({ link, image, title }) => {

    return (

        <a href={link} class="cards-block ">
            <div class="img-container">
                <img src={image} alt="" width="" height="" />
            </div>
            <h4 class="plant-title">{title}</h4>
        </a>
    );

}

export default PartnerCatalog;