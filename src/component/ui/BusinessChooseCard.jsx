import { Choose1 } from '../../assets/common-icon/constantIcon';
import '../../styles/b2bchoose.css';

const BusinessChooseCard = ({ icon, title, description }) => {
    return (

        <div className="strategy-card-item" >
            <div className="card-item-icon">
                {icon()}
            </div>
            <div className="card-item-title">
                <h2 className="card-item-title-text">{title}</h2>
                <p className="card-item-description">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default BusinessChooseCard;