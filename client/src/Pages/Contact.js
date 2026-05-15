// ================= RECONCILED CONTACT PAGE =================
// File: ContactPage.jsx

import React, { useState } from "react";
import styled from "styled-components";

const phoneNumber = "17328019887";

/* ================= Styled Components ================= */

const ContactWrapper = styled.div`
  min-height: 100vh;
  background: #dcdcdc;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px 20px;
`;

const ContactCard = styled.div`
  width: 100%;
  max-width: 1100px;

  background: #ffffff;
  border-radius: 24px;

  padding: 50px 40px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 35px 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #4b5563;
  font-size: 1.05rem;
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: gold;

  margin: 20px auto;
  border-radius: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.div`
  background: #f9fafb;
  padding: 25px;
  border-radius: 18px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  color: #111827;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;

  border: 1px solid #d1d5db;
  border-radius: 10px;

  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: gold;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;

  padding: 14px;
  margin-bottom: 15px;

  border: 1px solid #d1d5db;
  border-radius: 10px;

  resize: vertical;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: gold;
  }
`;

const Button = styled.button`
  background: #111827;
  color: white;

  padding: 14px 22px;
  border: none;
  border-radius: 10px;

  font-size: 1rem;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background: #000;
    transform: translateY(-2px);
  }
`;

const InfoCard = styled.div`
  background: #f3f4f6;
  padding: 20px;
  border-radius: 18px;
  margin-top: 20px;
`;

const Info = styled.p`
  font-size: 1rem;
  color: #374151;

  margin: 12px 0;
  line-height: 1.7;

  strong {
    color: #111827;
  }
`;

const WhatsAppLink = styled.a`
  display: inline-block;
  margin-top: 15px;

  color: #16a34a;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.h3`
  margin-top: 20px;

  font-size: 1.1rem;
  font-weight: 500;

  color: #1f2937;
  line-height: 1.6;
`;

/* ================= Component ================= */

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const msg = `Hello, I am ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${msg}`,
      "_blank"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      sendWhatsApp();
      alert("Message sent successfully");
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <ContactWrapper>
      <ContactCard>

        {/* HEADER */}
        <Header>
          <Title>Contact Us</Title>

          <Divider />

          <Subtitle>
            We respond within minutes on WhatsApp 📲
          </Subtitle>
        </Header>

        {/* GRID */}
        <Grid>

          {/* FORM SECTION */}
          <FormCard>
            <SectionTitle>Send a Message</SectionTitle>

            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                required
              />

              <TextArea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                required
              />

              <Button type="submit">
                Send via WhatsApp
              </Button>
            </form>
          </FormCard>

          {/* CONTACT INFO */}
          <div>

            {/* MAP */}
            <div>
              <SectionTitle>Our Location</SectionTitle>

              <iframe
                title="map"
                width="100%"
                height="250"
                style={{
                  border: 0,
                  borderRadius: "18px",
                }}
                loading="lazy"
                src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
              ></iframe>
            </div>

            {/* QUICK INFO */}
            <InfoCard>
              <SectionTitle>Quick Contact</SectionTitle>

              <Info>
                <strong>Phone:</strong> +1 (732) 801-9887
              </Info>

              <Info>
                <strong>Email:</strong> gloriaomowole@yahoo.com
              </Info>

              <Info>
                <strong>Address:</strong> USA
              </Info>

              <WhatsAppLink
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </WhatsAppLink>

              <Message>
                Call to place your order directly.
              </Message>
            </InfoCard>

          </div>
        </Grid>
      </ContactCard>
    </ContactWrapper>
  );
}

export default Contact;
