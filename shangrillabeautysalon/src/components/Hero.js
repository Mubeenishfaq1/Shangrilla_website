import React from "react";
import '../styles/global.css'; // Ensure you create a corresponding CSS file for styles.

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a href={ctaLink} className="hero-cta">
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
