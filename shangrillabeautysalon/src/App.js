import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Updated for React Router v6
import './styles/global.css'; // Adjust the path based on where the CSS file is located
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import paris from './assets/images/destination1.jpeg'
import shoes from './assets/images/service2.jpeg'
import Services from './components/Services';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';  // Import Login component
import Register from './components/Register';

const packageData = [
  {
    title: "Basic Package",
    price: 50,
    features: [
      "Haircut",
      "Basic Facial",
      "Manicure",
    ],
  },
  {
    title: "Premium Package",
    price: 100,
    features: [
      "Haircut & Styling",
      "Advanced Facial",
      "Manicure & Pedicure",
      "Spa Treatment",
    ],
  },
  {
    title: "Luxury Package",
    price: 150,
    features: [
      "Haircut & Styling",
      "Luxury Facial",
      "Full Body Massage",
      "Manicure & Pedicure",
      "Special Gift",
    ],
  },
];

const serviceData = [
  {
    title: "Hair Styling",
    image: paris,
    description: "Get the perfect hairstyle for any occasion.",
  },
  {
    title: "Shoes Styling",
    image: shoes,
    description: "Get the perfect hairstyle for any occasion.",
  },
  {
    title: "Facial Treatments",
    image: paris,
    description: "Relax and rejuvenate with our facial services.",
  },
  {
    title: "Manicure & Pedicure",
    image: paris,
    description: "Pamper your hands and feet with our expert care.",
  },
];

const destinationData = [
  {
    name: "Maldives",
    image: paris,
    description: "Experience the crystal-clear waters and white sandy beaches.",
    price: "50$"
  },
  {
    name: "Paris",
    image: paris,
    description: "Explore the city of love and its iconic Eiffel Tower.",
  },
  {
    name: "Tokyo",
    image: paris,
    description: "Discover the perfect blend of tradition and modernity.",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Header />

        {/* Routing Setup */}
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Route to Login page */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <>
              <Hero 
                title="Welcome to Shangrilla Beauty Salon" 
                subtitle="Your beauty, our passion" 
                ctaText="Book Now" 
                ctaLink="/booking"
              />
              <Destinations destinations={destinationData} />
              <Services services={serviceData} />
              <Packages packages={packageData} />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
