// front/src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';    
import FeaturesData from '../data/features.json';

const Home = () => (
    
  
        <main>
            <Hero />
            <Features features={FeaturesData} />
        </main>
       
    
);

export default Home;
