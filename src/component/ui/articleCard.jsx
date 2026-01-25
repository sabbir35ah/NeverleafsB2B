import React from 'react';
import '../../styles/ArticleCard.css';
import cal from '../../assets/cal.svg'
import arrow from '../../assets/arrow.svg'

const ArticleCard = ({ image, title, date, description }) => {
  return (
    <div className="b2b-article-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="b2b-card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          <img src={cal} className="calendar-icon"/>
          <span className="card-date">{date}</span>
        </div>
        <p className="card-description">{description}</p>
        <a href="#" className="read-more">
          Lees Meer <img src={arrow} className="arrow"/>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;