import React from "react";
import "../styles/global.css"; // Import global styles

const Services = ({ services }) => {
  const addtocart = () => {
    alert("added to cart");
  };

  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {/* Correcting onClick to pass a reference to the function */}
            <button onClick={addtocart} className="add-cart-summary">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
