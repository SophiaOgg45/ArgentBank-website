import featuresData from '../data/featuresData.json'; 
import chatIcon from '../assets/img/icon-chat.png';
import moneyIcon from '../assets/img/icon-money.png';
import securityIcon from '../assets/img/icon-security.png';

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <div key={feature.id} className="feature-item">
          {renderIcon(feature.icon)} 
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

// Fonction pour rendre l'icône en fonction du nom fourni dans le JSON
function renderIcon(iconName) {
  switch (iconName) {
    case 'chatIcon':
      return <img src={chatIcon} alt="Chat Icon" className="feature-icon" />;
    case 'moneyIcon':
      return <img src={moneyIcon} alt="Money Icon" className="feature-icon" />;
    case 'securityIcon':
      return <img src={securityIcon} alt="Security Icon" className="feature-icon" />;
    default:
      return null;
  }
}

export default Features;
