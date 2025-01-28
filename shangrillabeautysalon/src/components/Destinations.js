import React from "react";
import "../styles/global.css"; // Import global styles

const Destinations = ({ destinations }) => {
  return (
    <section className="destinations">
      <h2 className="section-title">Popular Services</h2>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img
              src={destination.image}
              alt={destination.name}
              className="destination-image"
            />
            <h3 className="destination-name">{destination.name}</h3>
            <p className="destination-description">
              {destination.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
