import React from "react";
import { FaTruck, FaIndustry, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>RevGo</h1>
        <div>
          <a href="#about">About Us</a>
          <a href="#services">Offerings</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Powering Last-Mile Deliveries with EV Fleet</h2>
        <p>We provide electric vehicles as a service for efficient and sustainable logistics.</p>
      </header>

      {/* About Us */}
      <section id="about" className="section">
        <h2>Quick Transport and Logistics Solutions</h2>
        <div className="grid">
          <div className="card"><FaTruck /><h3>Logistics Pioneers</h3><p>Optimizing supply chains.</p></div>
          <div className="card"><FaIndustry /><h3>Handling Giants</h3><p>Working with major brands.</p></div>
          <div className="card"><FaMapMarkedAlt /><h3>Strategic Insights</h3><p>Route planning expertise.</p></div>
          <div className="card"><FaUsers /><h3>Client-Centric Approach</h3><p>Tailored solutions.</p></div>
        </div>
      </section>

      {/* Offerings */}
      <section id="services" className="section">
        <h2>Our Offerings</h2>
        <div className="grid">
          <div className="card">
            <img src="public/Charging.jpg" alt="Charging Infrastructure" className="offerings-img"/>
            <h3>Charging Infra</h3>
            <p>EV charging stations.</p>
          </div>
          <div className="card">
            <img src="public/Mobility.png" alt="Smart Mobility" className="offerings-img"/>
            <h3>Smart Mobility</h3>
            <p>Optimized delivery routes.</p>
          </div>
          <div className="card">
            <img src="public/warehouse.png" alt="Warehouse Solutions" className="offerings-img"/>
            <h3>Warehouse Solutions</h3>
            <p>Storage & dispatch services.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} RevGo. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
