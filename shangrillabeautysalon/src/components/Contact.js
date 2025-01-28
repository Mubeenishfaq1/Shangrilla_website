import React from "react";
import "../styles/global.css"; // Import global styles

const Contact = () => {
  return ( 
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Us</h2>
      <p className="contact-description">
        Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
