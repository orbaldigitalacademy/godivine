import React from "react";
import styled from "styled-components";

/* ===== Styled Components ===== */

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
  max-width: 700px;

  background: #ffffff;
  border-radius: 24px;

  padding: 50px 40px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #111827;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Info = styled.p`
  font-size: 1.05rem;
  color: #374151;

  margin: 14px 0;
  line-height: 1.7;

  strong {
    color: #111827;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;

  background: gold;

  margin: 25px auto;
  border-radius: 10px;
`;

const Message = styled.h3`
  margin-top: 25px;

  font-size: 1.2rem;
  font-weight: 500;

  color: #1f2937;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* ===== Component ===== */

function Contact() {
  return (
    <ContactWrapper>
      <ContactCard>
        <Title>Contact Us</Title>

        <Divider />

        <Info>
          <strong>Phone:</strong> +1723-801-9887
        </Info>

        <Info>
          <strong>Email:</strong> gloriaomowole@yahoo.com
        </Info>

        <Info>
          <strong>Address:</strong> USA
        </Info>

        <Message>
          Call to place your order directly.
        </Message>
      </ContactCard>
    </ContactWrapper>
  );
}

export default Contact;

export default Contact;
