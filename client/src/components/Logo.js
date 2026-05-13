import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Orbal Catering" className="logo" />
    </Link>
  );
}

export default Logo;
