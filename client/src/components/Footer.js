import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

/* ================= Styled Components ================= */

const FooterWrapper = styled.footer`

  background: linear-gradient(135deg, #1e1e2f, #2b2b45, #1a1a2e);
  color: #dcdcdc;
  padding: 80px 40px 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 50px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;

  span {
    color: #c8a96a;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  margin-bottom: 20px;
  color: #ffffff;
  letter-spacing: 1px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  line-height: 1.7;
`;

const FooterLink = styled(NavLink)`
  text-decoration: none;
  color: #a0a0a0;
  margin-bottom: 12px;
  font-size: 14px;
  transition: 0.3s ease;

  &:hover {
    color: #c8a96a;
    transform: translateX(5px);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8a96a;
  font-size: 14px;
  transition: 0.3s ease;

  &:hover {
    background: #c8a96a;
    color: #111;
    transform: translateY(-4px);
  }
`;

const Divider = styled.div`
  margin: 60px 0 20px;
  height: 1px;
  background: #222;
`;

const BottomBar = styled.div`
  text-align: center;
  font-size: 13px;
  color: #666;
`;

/* ================= Component ================= */

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>

          {/* Brand */}
          <Section>
            <LogoText>
              Go-Divine <span>Catering</span>
            </LogoText>
            <Text>
              Curated culinary experiences for weddings, corporate events,
              and exclusive private celebrations.
            </Text>
          </Section>

          {/* Links */}
          <Section>
            <Title>Navigation</Title>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/gallery">Gallery</FooterLink>
            <FooterLink to="/booking">Book Event</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </Section>

          {/* Contact */}
          <Section>
            <Title>Contact</Title>
            <Text>Email: gloriaomowole@gmail.com</Text>
            <Text>Phone: +1 (732) 801-9887</Text>
            <Text>Edison New Jersey, USA</Text>
          </Section>

          {/* Social */}
          <Section>
            <Title>Follow Us</Title>
            <Socials>
              <SocialIcon href="https://www.instagram.com/godivinecatering/"><FaInstagram /></SocialIcon>
              <SocialIcon href="#"><FaFacebookF /></SocialIcon>
              <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
            </Socials>
          </Section>

        </Grid>

        <Divider />

        <BottomBar>
          © {new Date().getFullYear()} Go-Divine Catering. All rights reserved.
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
