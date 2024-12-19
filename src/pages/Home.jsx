import React from "react";
import "../styles_css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="empowering-section">
        <div className="empowering-content">
          <h1>
            Empowering Businesses through <br />
            <span className="empowering-highlight">
              Revolutionary Tech Solutions
            </span>
          </h1>
          <p>
            We provide innovative solutions to launch, scale, <br />
            and achieve sustained success in their ventures
          </p>
          <button className="empowering-button">
            Learn More <span className="empowering-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
