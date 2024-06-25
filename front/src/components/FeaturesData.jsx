import React from 'react';
import PropTypes from 'prop-types';

// Importer les images 
import chatIcon from '../assets/img/icon-chat.webp';
import moneyIcon from '../assets/img/icon-money.webp';
import securityIcon from '../assets/img/icon-security.webp';

import './Features.scss';

// Associer les noms d'images aux importations
const images = {
  "icon-chat.png": chatIcon,
  "icon-money.png": moneyIcon,
  "icon-security.png": securityIcon
};

const FeaturesData = ({ feature }) => {
    const { image, alt, title, paragraph } = feature;
    return (
      
      <div className="feature-item">
        <img src={images[image]} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{paragraph}</p>
      </div>
     
    );
  };
  
  FeaturesData.propTypes = {
    feature: PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default FeaturesData;

