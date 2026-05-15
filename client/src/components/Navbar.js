import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

/* ===== Layout ===== */

const Nav = styled.nav`
  width: 100%;
  background: #dcdcdc;
  padding: 1rem 0;
`;

const Container = styled.div`
  width: min(1200px, 90%);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ===== Navigation Links ===== */

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--brand-green);

  padding: 12px 16px;
  border-radius: 12px;

  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;

  position: relative;
  text-align: center;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 3px;
  }

  &::after {
    content: "";
    position: absolute;

    left: 50%;
    bottom: 6px;

    transform: translateX(-50%);

    width: 0%;
    height: 2px;

    background: var(--gold);

    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 60%;
  }

  &.active {
    color: var(--gold);
    background: rgba(255, 255, 255, 0.05);
  }
`;

/* ===== CTA Button ===== */

const OrderButton = styled(NavLink)`
  padding: 12px 18px;
  border-radius: 12px;

  text-decoration: none;
  text-align: center;

  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: gold;

  background: linear-gradient(
    135deg,
    var(--dark),
    var(--primary-dark)
  );

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  &:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 3px;
  }

  &.active {
    background: var(--primary-dark);
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

/* ===== Component ===== */

function Navbar() {
  return (
    <Nav>
      <Container>
        <Logo />

        <Links>
          <StyledLink to="/" end>
            Home
          </StyledLink>

          <StyledLink to="/about">
            About Us
          </StyledLink>

          <StyledLink to="/gallery">
            Gallery
          </StyledLink>

          <OrderButton to="/booking">
            Book Your Event
          </OrderButton>

          <StyledLink to="/contact">
            Contact
          </StyledLink>
        </Links>
      </Container>
    </Nav>
  );
}

export default Navbar;
