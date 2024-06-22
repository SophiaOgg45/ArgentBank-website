import React from 'react';
import featuresData from '../data/featuresData.json'; 

// Importer les images 
import chatIcon from '../assets/img/icon-chat.png';
import moneyIcon from '../assets/img/icon-money.png';
import securityIcon from '../assets/img/icon-security.png';

// Associer les noms d'images aux importations
const images = {
  "icon-chat.png": chatIcon,
  "icon-money.png": moneyIcon,
  "icon-security.png": securityIcon
};

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <div key={feature.id} className="feature-item">
          <img src={images[feature.image]} alt={feature.alt} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.paragraph}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;



