import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

/* ===== Styled Components ===== */

const Links = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;

    /* Switch to grid on mobile */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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
  transition: all 0.3s ease;

  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background: var(--gold);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 60%;
  }

  &.active {
    color: var(--gold);
    background: rgba(255, 255, 255, 0.05);
  }

  &.active::after {
    width: 60%;
  }
`;

const OrderButton = styled(NavLink)`
  padding: 12px 18px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  background: linear-gradient(135deg, var(--dark));
  color: gold;

  text-align: center;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  &.active {
    background: var(--primary-dark);
  }

  @media (max-width: 768px) {
    width: 100%;
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