import React from "react";
import "../styles_css/Home.css";
import rightarrow from "../images/right-arrow.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="empowering-section">
        <div className="empowering-content">
          <p className="black-white">
            Empowering Businesses through Revolutionary Tech Solutions
          </p>
          <p className="paragraph">
            We provide innovative solutions to launch, scale, <br />
            and achieve sustained success in their ventures
          </p>
          <a href="/contact" className="cta-button2">
            <span
              className="button-text"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              Learn More
            </span>
            <span className="button-icon">
              <img src={rightarrow} alt="Arrow Icon" />
            </span>
          </a>
        </div>
      </div>

      <section class="endless-solutions">
        <h1 class="black-white">Our Endless Solutions</h1>
        <p class="endless-text">
          We offer a range of specialized services designed for large-scale
          clients, from strategic consulting to tailored growth solutions,
          enhancing the value and impact of your business.
        </p>
      </section>

      <div className="solutions-section">
        <div className="solutions-grid">
          {/* Custom Made Application */}
          <div className="solution-item">
            <img
              src={require("../images/simcard.png")}
              alt="Custom Made Application"
              className="solution-icon"
            />
            <p className="custom-heading">Custom Made Application</p>
            <p className="paragraph">
              Build your vision into a{" "}
              <span style={{ color: "#0088ea" }}>
                powerful, tailored application
              </span>{" "}
              with our expert team,
              <span style={{ color: "#0088ea" }}>
                {" "}
                aligned precisely with your goals
              </span>{" "}
              for excellence at every step.
            </p>
          </div>

          {/* Blockchain Development */}
          <div className="solution-item">
            <img
              src={require("../images/keyboard.png")}
              alt="Blockchain Development"
              className="solution-icon"
            />
            <p className="custom-heading">Blockchain Development</p>
            <p className="paragraph">
              Custom blockchain applications{" "}
              <span style={{ color: "#0088ea" }}>enhance</span> security,
              transparency, and efficiency in processes like finance and supply
              chain.
            </p>
          </div>

          {/* AI Cloud Solutions */}
          <div className="solution-item">
            <img
              src={require("../images/code.png")}
              alt="AI Cloud Solutions"
              className="solution-icon"
            />
            <p className="custom-heading">AI Cloud Solutions</p>
            <p className="paragraph">
              AI-powered cloud solutions{" "}
              <span style={{ color: "#0088ea" }}>automate</span> processes,{" "}
              <span style={{ color: "#0088ea" }}>optimize</span> data analysis,
              and <span style={{ color: "#0088ea" }}>improve</span>{" "}
              decision-making with scalable infrastructure.
            </p>
          </div>

          {/* AI Cloud Infrastructure */}
          <div className="solution-item">
            <img
              src={require("../images/data-2.png")}
              alt="AI Cloud Infrastructure"
              className="solution-icon"
            />
            <p className="custom-heading">AI Cloud Infrastructure</p>
            <p className="paragraph">
              Cloud hosting provides{" "}
              <span style={{ color: "#0088ea" }}>scalable</span>,{" "}
              <span style={{ color: "#0088ea" }}>secure</span> environments for
              businesses to store data and run applications remotely.
            </p>
          </div>

          {/* Cloud Solution and Hosting */}
          <div className="solution-item">
            <img
              src={require("../images/data-2.png")}
              alt="Cloud Solution and Hosting"
              className="solution-icon"
            />
            <p className="custom-heading">Cloud Solution and Hosting</p>
            <p className="paragraph">
              Empower your business with{" "}
              <span style={{ color: "#0088ea" }}>
                scalable, secure cloud solutions
              </span>{" "}
              for seamless data storage and management, ensuring{" "}
              <span style={{ color: "#0088ea" }}>
                reliability and flexibility
              </span>{" "}
              for growth.
            </p>
          </div>

          {/* Fintech */}
          <div className="solution-item">
            <img
              src={require("../images/programming-arrows.png")}
              alt="Fintech"
              className="solution-icon"
            />
            <p className="custom-heading">Fintech</p>
            <p className="paragraph">
              Enhance{" "}
              <span style={{ color: "#0088ea" }}>financial operations</span>{" "}
              with optimized performance and extended{" "}
              <span style={{ color: "#0088ea" }}>software longevity</span>,
              supported by{" "}
              <span style={{ color: "#0088ea" }}>
                top-tier technical expertise
              </span>
              .
            </p>
          </div>

          {/* ERP / SAP */}
          <div className="solution-item">
            <img
              src={require("../images/mobile-programming.png")}
              alt="ERP / SAP"
              className="solution-icon"
            />
            <p className="custom-heading">ERP / SAP</p>
            <p className="paragraph">
              Optimize operations with a focus on SAP ERP solutions to achieve{" "}
              <span style={{ color: "#0088ea" }}>streamlined workflows</span>,{" "}
              <span style={{ color: "#0088ea" }}>resource efficiency</span>, and{" "}
              <span style={{ color: "#0088ea" }}>
                data-driven decision-making
              </span>{" "}
              through advanced automation and real-time insights.
            </p>
          </div>

          {/* IT Support */}
          <div className="solution-item">
            <img
              src={require("../images/code.png")}
              alt="IT Support"
              className="solution-icon"
            />
            <p className="custom-heading">IT Support</p>
            <p className="paragraph">
              Our IT support troubleshoots and maintains your infrastructure,{" "}
              <span style={{ color: "#0088ea" }}>
                keeping your systems always up and running
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
