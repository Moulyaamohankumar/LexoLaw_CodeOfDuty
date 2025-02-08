import React from "react";
import "../Styles/Employment.css"

const lawyers = [
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

const Employment = () => {
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

      <section className="hero5">
        <h2>Hire a Employment Lawyer.</h2>
        <p>
        An employment lawyer is the workplace watchdog—protecting employees’ 
        rights and keeping businesses compliant. From wrongful termination to 
        contract negotiations, they tackle workplace disputes with sharp legal expertise. 
        Think of them as the referee ensuring fairness in the professional arena! 
        </p>
      </section>

      <section className="lawyers">
        {lawyers.map((lawyer, index) => (
          <div key={index} className="lawyer-card4">
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

export default Employment;
