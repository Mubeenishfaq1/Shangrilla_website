import React from "react";
import "../styles/global.css"; // Import global styles

const Packages = ({ packages }) => {
  return (
    <section className="packages">
      <h2 className="section-title">Our Packages</h2>
      <div className="packages-list">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-price">${pkg.price}</p>
            <ul className="package-features">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="package-button">Choose Package</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
