import React from "react";
import "../Styles/Esatate.css"

const Elawyers = [
  {
    name: "John Doe",
    experience: "10+ years",
    cases: 150,
    location: "New York, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Jane Smith",
    experience: "8+ years",
    cases: 120,
    location: "Los Angeles, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
];

const Estate = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Lexolution</h1>
        <nav>
            <h3>
          <a href="/lexo">Home</a>
          <a href="/Service">Our Service</a>
          <a href="/LawPage">About us</a>
          <a href="/SignUp">Sign Up</a>
          </h3>
        </nav>
        <div className="contact">
          <span>(780) 429-2300</span> | <span>lexilot.com</span>
        </div>
      </header>
      <div className="robot-container">
        <div className="robot"></div>
      </div>

      <section className="hero6">
        <h2>Hire a Estate Planning Lawyers.</h2>
        
        <p>
        An estate planning lawyer is the architect of your legacy—helping you safeguard assets, 
        draft wills, and ensure your loved ones are taken care of. They turn complex legalities into peace of mind,
         making sure your wishes live on. Think of them as the master planner for your future!
        </p>
      </section>

      <section className="lawyers">
        {Elawyers.map((lawyer, index) => (
          <div key={index} className="lawyer-card5">
            <img src={lawyer.image} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <p className="one">Experience: {lawyer.experience}</p>
            <p className="two">Cases Solved: {lawyer.cases}</p>
            <p className="Three"> Location: {lawyer.location}</p>
            <button>Hire</button>
          </div>
        ))}
      </section>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2025 Lexolution. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Estate;
