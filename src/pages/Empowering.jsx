import React from "react";
import "../styles_css/Services.css";
import "../styles_css/Empowering.css";
import ourbenefits1 from "../images/ourbenefits1.png";
import ourbenefits2 from "../images/ourbenefits2.png";
import ourbenefits3 from "../images/ourbenefits3.png";
import ourbenefits4 from "../images/ourbenefits4.png";
import empowering1 from "../images/empowering1.png";
import empowering2 from "../images/empowering2.png";
import empowering3 from "../images/empowering3.png";
import empowering4 from "../images/empowering4.png";

const Empowering = () => {
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

      <section class="smart-management-container">
        <div class="smart-management-left">
          <div class="icon-container">
            <img
              src={empowering1}
              alt="Gear Icon"
              className="smart-management-icon"
            />
          </div>

          <h2 class="smart-management-title">Discovering Smart Management</h2>
          <p class="smart-management-description">
            Stay on top of your tasks and stay informed about what's happening.
          </p>
        </div>

        <div
          class="smart-management-right"
          style={{
            backgroundImage: `url(${ourbenefits1})`, // Use the imported image
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover", // Optional for better display
          }}
        >
          <div class="content-box">
            <p>
              Empower your organization with advanced management tools designed
              to enhance visibility, control, and decision-making.
            </p>
            <p>
              Our smart management solutions keep you fully informed of key
              metrics and operational insights, allowing you to proactively
              address challenges before they arise.
            </p>
            <p>
              Stay in sync with all aspects of your business, optimize workflow
              efficiency, and improve strategic alignment across teams.
            </p>
            <p>
              Gain real-time insights across all projects, empowering you to
              make strategic, proactive decisions that fuel long-term success
              and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <section class="smart-management-container">
        <div class="smart-management-left">
          <div class="icon-container">
            <img src={empowering2} class="smart-management-icon" />
          </div>

          <h2 class="smart-management-title">
            Customized Software Development
          </h2>
          <p class="smart-management-description">
            Custom software development is the process of conceptualizing,
            designing.
          </p>
        </div>

        <div
          class="smart-management-right"
          style={{
            backgroundImage: `url(${ourbenefits2})`, // Use the imported image
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover", // Optional for better display
          }}
        >
          <div class="content-box">
            <p>
              Experience the power of software that’s built precisely to meet
              your business needs.
            </p>
            <p>
              Our customized development services take you through a
              comprehensive process, from conceptualization to deployment,
              ensuring that every aspect of the solution aligns with your goals.
            </p>
            <p>
              With a deep focus on usability, scalability, and integration, we
              create applications that seamlessly blend into your existing
              infrastructure while enhancing your competitive edge.
            </p>
            <p>
              Whether you need to streamline operations, automate repetitive
              tasks, or support unique business functions, our tailored software
              adapts to grow with you.
            </p>
          </div>
        </div>
      </section>

      <section class="smart-management-container">
        <div class="smart-management-left">
          <div class="icon-container">
            <img
              src={empowering3}
              alt="Chat Icon"
              class="smart-management-icon"
            />
          </div>

          <h2 class="smart-management-title">Effortless Rapid Communication</h2>
          <p class="smart-management-description">
            Effortlessly manage your task lists and stay connected with
            real-time updates.
          </p>
        </div>

        <div
          class="smart-management-right"
          style={{
            backgroundImage: `url(${ourbenefits3})`, // Use the imported image
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover", // Optional for better display
          }}
        >
          <div class="content-box">
            <p>
              Enhance team productivity and keep everyone connected with our
              rapid communication tools.
            </p>
            <p>
              Designed to facilitate seamless interaction, our solutions ensure
              that essential information flows quickly across departments,
              minimizing delays and fostering real-time collaboration.
            </p>
            <p>
              Whether your teams are on-site or remote, they can stay aligned on
              tasks, updates, and projects without the hurdles of outdated
              communication systems.
            </p>
            <p>
              Keep projects moving forward efficiently, reduce miscommunication,
              and foster an environment where collaboration and transparency
              thrive.
            </p>
          </div>
        </div>
      </section>
      <section class="smart-management-container">
        <div class="smart-management-left">
          <div class="icon-container">
            <img
              src={empowering4}
              alt="Clipboard Icon"
              class="smart-management-icon"
            />
          </div>

          <h2 class="smart-management-title">
            Stay Ahead with Adaptive Capabilities
          </h2>
          <p class="smart-management-description">
            Stay organized with your task lists and remain updated on the latest
            development.
          </p>
        </div>

        <div
          class="smart-management-right"
          style={{
            backgroundImage: `url(${ourbenefits4})`, // Use the imported image
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover", // Optional for better display
          }}
        >
          <div class="content-box">
            <p>
              In a constantly evolving market, adaptability is key to staying
              competitive.
            </p>
            <p>
              Our adaptive solutions help your business stay agile, resilient,
              and prepared for industry shifts.
            </p>
            <p>
              With tools designed to support ongoing innovation and
              responsiveness, you can quickly pivot strategies, maintain
              alignment with market demands, and ensure operational continuity.
            </p>
            <p>
              By maintaining a proactive approach to organizational growth, we
              enable you to not only react to changes but also anticipate and
              leverage them to your advantage, keeping you one step ahead in
              your industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empowering;
