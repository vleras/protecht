import React from "react";
import "../styles_css/Services.css";
import "../styles_css/About.css";
const About = () => {
  return (
    <div>
      <div className="hero">
        <h3 className="services-heading">Services</h3>
        <h1 className="main-heading">
          Your Creative Journey Starts Here. Our Comprehensive Services
        </h1>
        <p className="subheading">
          Where Potential Meets Possibility: Cultivating Growth Through
          Innovative Solutions
        </p>
        <button className="cta-button">
          Get Started <span className="arrow">→</span>
        </button>
      </div>

      <div class="profile-container">
        <div class="profile-image">
          {/* <img src="image.png" alt="Muhamer Nuridini"> */}
        </div>
        <div class="profile-content">
          <h2 class="profile-name">Muhamer Nuridini</h2>
          <h3 class="profile-title">CEO</h3>
          <p class="profile-description">
            As Founder and CEO of Protecht, Muhamer Nuridini leads with 16+
            years of expertise in IT, software development, and system
            administration.
          </p>
          <p class="profile-description">
            He drives Protecht’s mission to empower businesses through digital
            transformation with solutions in Custom Applications, Blockchain,
            AI, Cloud, Fintech, and ICT Consulting.
          </p>
          <p class="profile-description">
            Focused on delivering tailored strategies, Muhamer fosters long-term
            client partnerships built on trust and innovation, providing the
            tools and insights necessary for sustained growth and digital
            excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
