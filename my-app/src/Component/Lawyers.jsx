import React, { useState } from 'react';
import '../Styles/Lawyer.css'; // Make sure to include your styles

const LawyerServices = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lawyer Services</title>

      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/LawPage">About Us</a>
          <a href="/Sig">Contact</a>
          <a href="/Service">Our services</a>
        </nav>
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
      </header>

      <div id="sidebar" className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <a href="#">Our Top Lawyers</a>
        <a href="#">Legal Services</a>
        <a href="#">Case Studies</a>
        <a href="#">Client Testimonials</a>
        <a href="#">Contact</a>
      </div>

      <section className="main-banner lawyer-banner">
        <h1>Expert Legal Services</h1>
        <p>Reliable and Trustworthy Lawyers at Your Service</p>
      </section>

      <section className="lawyer-content">
        <div className="lawyer-card card1">
          <h3>Register</h3>
        </div>
        <div className="lawyer-card card2">
          <h3>Hire</h3>
        </div>
      </section>
    </>
  );
};

export default LawyerServices;
