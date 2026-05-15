// ================= CONTACT PAGE (PREMIUM) =================
// File: ContactPage.jsx

import React, { useState } from "react";
import axios from "axios";

const phoneNumber = "+17328019887";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const msg = `Hello, I am ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Optional: save to backend later
      sendWhatsApp();
      alert("Message sent successfully");
    } catch {
      alert("Error sending message");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>

      <h2>Contact Us</h2>
      <p>We respond within minutes on WhatsApp 📲</p>

      {/* GRID LAYOUT */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>

        {/* FORM */}
        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
          <h3>Send a Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <input
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              required
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <button type="submit" style={{ padding: "10px 20px" }}>
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* MAP + INFO */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <h3>Our Location</h3>
            <iframe
              title="map"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
            ></iframe>
          </div>

          <div style={{ background: "#f3f4f6", padding: "15px", borderRadius: "10px" }}>
            <h3>Quick Contact</h3>
            <p>📞 +17328019887</p>
            <p>📍 , United States</p>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", marginTop: "10px" }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

