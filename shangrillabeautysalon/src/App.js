import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Updated for React Router v6
import './styles/global.css'; // Adjust the path based on where the CSS file is located
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import paris from './assets/images/destination1.jpeg'
import shoes from './assets/images/service2.jpeg'
import mani from './assets/images/service4.jpeg'
import hairstyle from'./assets/images/service6.jpeg'
import eyebrow from './assets/images/service12.jpeg'
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
    title: "Hair Cut",
    image: shoes,
    description: "Price: 60 AED",
  },
  {
    title: "Hair Style",
    image: hairstyle,
    description: "Price: 120 AED",
  },
  {
    title: "Blow Dry",
    image: paris,
    description: "Relax and rejuvenate with our facial services.",
  },
  {
    title: "Trimming",
    image: paris,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Fair Style",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Hair Extension",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Hair Up",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Roots Color",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Hair Coloring",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "High or Low Lights Roots",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "High or Low Light Hair",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Hair Treatment",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Hair Straightening",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Blow Out",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Hair Botox",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Bridal Hair",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Bridal Meakup",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Eye Lash Extension",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Eye Lash Extension with Eye Liner",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Perm Lashes",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Eye Lash Coloring",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Make Up",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Eye Lashes 1*1",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Full Legs",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Half Legs",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Full Arm",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Half Arm",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Under Arm",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Full Body",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Eye Brow Threading",
    image: eyebrow,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Upper Lip Threading",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Eye Brow & Upper Lip Threading",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Full Face Threading",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Bikini Line",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Manicure",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Pedicure",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
    description: "Pamper your hands and feet with our expert care.",
  },
  {
    title: "Mani",
    image: mani,
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
  {
    name: "Azerbaijan",
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
