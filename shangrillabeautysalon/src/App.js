import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Updated for React Router v6
import './styles/global.css'; // Adjust the path based on where the CSS file is located
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Whatsapp from './components/whatsapp';
import Cart from './pages/Cart';
import paris from './assets/images/destination1.jpeg'
import hairee from './assets/images/hair care.jpg'
import treatmnt from './assets/images/hair treatment 1.jpg'
import brideel from './assets/images/bride dest.jpg'
import nal from './assets/images/nails dest.jpg'
import makup from './assets/images/makeup destination 1.jpg'
import shoes from './assets/images/service2.jpeg'
import mani from './assets/images/service4.jpeg'
import hairstyle from'./assets/images/hair style new 2.jpg'
import eyebrow from './assets/images/service12.jpeg'
import blowdry from './assets/images/blow dry.jpg'
import trimming from './assets/images/trim.jpg'
import fairstyle from './assets/images/fair st.jpg'
import hairextension from './assets/images/hair ext.jpg'
import hairup from './assets/images/hair u.jpg'
import rootcolor from'./assets/images/root c.jpg'
import haircolor from './assets/images/hhc.jpeg'
import bridal from './assets/images/bridal makup new.jpg'
import hairtreat from'./assets/images/hair treat.jpg'
import hairstr from './assets/images/hair str.jpg'
import blowout from './assets/images/blow ou.jpg'
import hairbotox from'./assets/images/hair botox.jpg'
import bridalhair from './assets/images/bridal new.jpg'
import eyelash from './assets/images/eyelash ext.jpg'
import eyel from './assets/images/with liner.jpg'
import prem from './assets/images/Perm Lashes.jpg'
import legk from './assets/images/service1.jpeg'
import eyecolor from './assets/images/Eye Lash Coloring.jpg'
import full from './assets/images/full arm.jpg'
import under from './assets/images/under arm.jpg'
import leg from './assets/images/half arm.jpg'
import arm from './assets/images/ful bdy.jpg'
import makeup from './assets/images/makeup.jpg'
import ataum from './assets/images/kkkkkkkk.jpg'
import spring from './assets/images/mankkki.jpg'
import nail from './assets/images/nails repair.jpg'
import fakee from './assets/images/fake nails.jpg'
import uppers from './assets/images/upper lips.jpg'
import face from './assets/images/face thr.jpg'
import eyeandface from './assets/images/eye and upp.jpg'
import eyeleshe from './assets/images/eye lesh 11.jpg'
import halfleg from './assets/images/service13.jpeg'
import highl from './assets/images/low new hair sty.jpg'
import upben from './assets/images/up new hair.jpg'
import polishchan from './assets/images/polish change.jpg'
import frenchi from './assets/images/Acrylic.jpg'
import frenc from './assets/images/french polish change.jpg'
import gali from './assets/images/Gelish Manicure.jpg'
import frenchmani from './assets/images/french mani and pedi .jpg'
import alee from './assets/images/french mani.jpg'
import gelishped from './assets/images/gelish pedo.jpg'
import core from './assets/images/Gelish French Manicure.jpg'
import todo from './assets/images/gelish french pedicure.jpg'
import cocs from './assets/images/gelish mani and pedicure.jpg'
import loost from './assets/images/gelish extention.jpg'
import ecoc from './assets/images/gelish remover.jpg'
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';  // Import Login component
import Register from './components/Register';

const packageData = [
  {
    title: "Basic Package",
    price: 200,
    features: [
      "Any 5 to 7 iteams",
      "Haircut",
      "Basic Facial",
      "Manicure & pedicure",
      "threading & Waxing",
      "Anti-Aging Facial ",
    ],
  },
  {
    title: "Premium Package",
    price: 225,
    features: [
      "Any 9 iteams",
      "Haircut & Styling",
      "Advanced Facial",
      "Manicure & Pedicure",
      "Spa Treatment",
      "Spa Treatment",
    ],
  },
  {
    title: "Luxury Package",
    price: 250,
    features: [
      "Any 11 iteams",
      "Stomach & Naval Waxing",
      "Mythic Cream Hair Spa (2 Items)",
      "Back Polish, Scrub and Mask",
      "Manicure & Pedicure",
      "Full Legs Waxing-Fruit Wax",
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
    image: blowdry,
    description: "Price: 80 AED",
  },
  {
    title: "Trimming",
    image: trimming,
    description: "Price: 40 AED",
  },
  {
    title: "Fair Style",
    image: fairstyle,
    description: "Price: 112 AED",
  },
  {
    title: "Hair Extension",
    image: hairextension ,
    description: "By Quotation",
  },
  {
    title: "Hair Up",
    image: hairup,
    description: "Price: 370 AED",
  },
  {
    title: "Roots Color",
    image: rootcolor,
    description: "Price: 130 AED",
  },
  {
    title: "Hair Coloring",
    image: haircolor,
    description: "Price: 300 AED",
  },
  {
    title: "High or Low Lights Roots",
    image: upben,
    description: "Price: 260 AED",
  },
  {
    title: "High or Low Light Hair",
    image: highl,
    description: "Price: 250 AED",
  },
  {
    title: "Hair Treatment",
    image: hairtreat,
    description: "Price: 150-350 AED",
  },
  {
    title: "Hair Straightening",
    image: hairstr,
    description: "Price: 560 AED",
  },
  {
    title: "Blow Out",
    image: blowout,
    description: "Price: 1100 AED",
  },
  {
    title: "Hair Botox",
    image: hairbotox,
    description: "Price: 300-400 AED",
  },
  {
    title: "Bridal Hair",
    image: bridalhair,
    description: "Price: 1500 AED",
  },
  {
    title: "Bridal Meakup",
    image: bridal,
    description: "Price: 1500 AED",
  },
  {
    title: "Eye Lash Extension",
    image: eyelash,
    description: "Price: 260 AED",
  },
  {
    title: "Eye Lash Extension with Eye Liner",
    image: eyel,
    description: "Price: 170 AED",
  },
  {
    title: "Perm Lashes",
    image: prem,
    description: "Price: 225 AED",
  },
  {
    title: "Eye Lash Coloring",
    image: eyecolor,
    description: "Price: 250 AED",
  },
  {
    title: "Make Up",
    image: makeup,
    description: "Price: 370 AED",
  },
  {
    title: "Eye Lashes 1*1",
    image: eyeleshe,
    description: "Price: 250-300 AED",
  },
  {
    title: "Full Legs Waxing",
    image: legk,
    description: "Price: 110 AED",
  },
  {
    title: "Half Legs Waxing",
    image: halfleg,
    description: "Price: 80 AED",
  },
  {
    title: "Full Arm",
    image: full,
    description: "Price: 50 AED",
  },
  {
    title: "Half Arm",
    image: leg,
    description: "Price: 30 AED",
  },
  {
    title: "Under Arm",
    image: under,
    description: "Price: 20 AED",
  },
  {
    title: "Full Body",
    image: arm,
    description: "Price: 300 AED",
  },
  {
    title: "Eye Brow Threading",
    image: eyebrow,
    description: "Price: 30 AED",
  },
  {
    title: "Upper Lip Threading",
    image: uppers,
    description: "Price: 20 AED",
  },
  {
    title: "Eye Brow & Upper Lip Threading",
    image: eyeandface,
    description: "Price: 40 AED",
  },
  {
    title: "Full Face Threading",
    image: face,
    description: "Price: 80 AED",
  },
  {
    title: "Bikini Line",
    image: mani,
    description: "Price: 60 AED",
  },
  {
    title: "Manicure",
    image: spring,
    description: "Price: 100 AED",
  },
  {
    title: "Pedicure",
    image: ataum,
    description: "Price: 100 AED",
  },
  {
    title: "French Manicure",
    image: alee,
    description: "Price: 120 AED",
  },
  {
    title: "French Pedicure",
    image: mani,
    description: "Price: 120 AED",
  },
  {
    title: "French Manicure and Pedicure",
    image: frenchmani,
    description: "Price: 180 AED",
  },
  {
    title: "Polish Change",
    image: polishchan,
    description: "Price: 20 AED",
  },
  {
    title: "Acrylic",
    image: frenchi,
    description: "Price: 260 AED",
  },
  {
    title: "French Polish Change",
    image: frenc,
    description: "Price: 55 AED",
  },
  {
    title: "Gelish Manicure",
    image: gali,
    description: "Price: 200 AED",
  },
  {
    title: "Gelish Pedicure",
    image: gelishped,
    description: "Price: 200 AED",
  },
  {
    title: "Gelish French Manicure",
    image: core,
    description: "Price: 130 AED",
  },
  {
    title: "Gelish French Pedicure",
    image: todo,
    description: "Price: 150 AED",
  },
  {
    title: "Gelish French Mani and Pedicure",
    image: cocs,
    description: "Price: 330 AED",
  },
  {
    title: "Gelish Extention",
    image: loost,
    description: "Price: 260 AED",
  },
  {
    title: "Fake Nails",
    image: fakee,
    description: "Price: 60 AED",
  },
  {
    title: "Nail Repair",
    image: nail,
    description: "Price: 35 AED",
  },
  {
    title: "Gelish Removal",
    image: ecoc,
    description: "Price: 40 AED",
  },
];

const destinationData = [
  {
    name: "Waxing and Threading",
    image: paris,
    description: "Precise threading and smooth waxing for flawless, hair-free skin at your doorstep!",
  },
  {
    name: "Hair Care",
    image: hairee,
    description: "Nourishing hair care services for healthy, shiny, and beautifully styled hair at home!",
  },
  {
    name: "Hair Treatment",
    image: treatmnt,
    description: "Revitalizing hair treatments to restore strength, shine, and smoothness, tailored to your hair’s needs!",
  },
  {
    name: "Bridal",
    image: brideel,
    description: "Expert bridal services for a flawless look on your special day, from makeup to hairstyling and more!",
  },
  {
    name: "Make Up",
    image: makup,
    description: "Professional makeup services for a flawless, long-lasting look, perfect for any occasion!",
  },
  {
    name: "Nails",
    image: nal,
    description: "Pampering nail services for perfectly shaped, vibrant, and stylish nails, right at your doorstep!",
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
          <Route path="/cart" element={<Cart />} />
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
              <Whatsapp/>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
