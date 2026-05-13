import React from "react";
import "./About.css"; // make sure to create this file and include the CSS below

function About() {
  return (
    <div className="page">
      <h2>About Go Divine Catering Services</h2>
      <p>
        At Go Divine Catering Services, we believe every event deserves a divine touch.
        We are a premium catering brand dedicated to delivering exceptional culinary experiences 
        that combine taste, elegance, and unforgettable presentation.
      </p>

      <p>
        Founded with a passion for excellence, Go Divine Catering Services specializes 
        in transforming ordinary gatherings into extraordinary celebrations. Whether it’s a wedding, 
        corporate event, birthday party, anniversary, private dinner, or large-scale celebration,
        we bring creativity, professionalism, and attention to detail to every occasion.
      </p>

      <h3>Our Philosophy</h3>
      <p>We believe food is more than just a meal — it is an experience. Our philosophy is built on three core values:</p>

      <ul className="gold-list">
        <li><strong>Quality:</strong> We use fresh, high-quality ingredients to create delicious and beautifully crafted dishes.</li>
        <li><strong>Excellence:</strong> From preparation to presentation, we maintain the highest standards in hygiene, service, and delivery.</li>
        <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We work closely with clients to design menus that perfectly match their vision and preferences.</li>
      </ul>

      <h3>What We Offer</h3>
      <p>At Go Divine Catering Services, we provide:</p>

      <ul className="gold-list">
        <li>Wedding & Traditional Event Catering</li>
        <li>Corporate Event Catering</li>
        <li>Birthday & Anniversary Catering</li>
        <li>Outdoor & Private Party Catering</li>
      </ul>
    </div>
  );
}

export default About;
