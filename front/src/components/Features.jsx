import PropTypes from 'prop-types';
import FeaturesData from './FeaturesData';


const Features = ({ features }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((featureInfo) => (
        <FeaturesData key={featureInfo.id} feature={featureInfo} />
      ))}
       </section>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Features;
