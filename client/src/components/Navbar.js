import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

/* ===== Styled Components ===== */
const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(135deg, var(--brand-green-dark), var(--dark));
  box-shadow: none;
  z-index: 1000;
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--brand-green);
  padding: 5px 5px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.8rem;
  letter-spacing: 1px;
  
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--gold);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: var(--gold);
  }

  &.active::after {
    width: 100%;
  }
`;

const OrderButton = styled(NavLink)`
  padding: 10px 24px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  background: linear-gradient(135deg, var(--dark));
  color: gold;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  &.active {
    background: var(--primary-dark);
  }
`;


/* ===== Component ===== */

function Navbar() {
  return (
    <Nav>
      <Container>
        <Logo />
        <Links>
          <StyledLink to="/" end>Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/gallery">Gallery</StyledLink>
          <OrderButton to="/booking">Book Your Event</OrderButton>
          <StyledLink to="/contact">Contact</StyledLink>
          
        </Links>
      </Container>
    </Nav>
  );
}

export default Navbar;
