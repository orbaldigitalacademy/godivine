import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import { Login } from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard"; 


import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <Router>
      {/* ===== Navbar (always visible) ===== */}
      <Navbar />

      {/* ===== Page Content ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
  
      </Routes>

      {/* ===== Footer (always visible) ===== */}
      <Footer />
    </Router>
  );
}

export default App;
