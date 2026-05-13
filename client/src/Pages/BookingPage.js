import React, { useState } from "react";
import axios from "axios";
import "./BookingPage.css";

function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    location: "",
    notes: "",
  });

  const API = "http://localhost:5000/api/bookings";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API, form);

      const message = `Hello, my name is ${form.name}%0AEvent: ${form.eventType}%0ADate: ${form.date}%0AGuests: ${form.guests}%0ALocation: ${form.location}%0ANotes: ${form.notes}`;

      window.location.href = `https://wa.me/2348127319882?text=${message}`;
    } catch (err) {
      alert("Error submitting booking");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2>Book Your Event</h2>
        <p className="subtitle">Tell us about your special occasion</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />

          <select name="eventType" onChange={handleChange} required>
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Private Dinner</option>
          </select>

          <input type="date" name="date" onChange={handleChange} required />
          <input name="guests" placeholder="Number of Guests" onChange={handleChange} required />
          <input name="location" placeholder="Event Location" onChange={handleChange} required />

          <textarea name="notes" placeholder="Additional Notes..." onChange={handleChange}></textarea>

          <button type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;