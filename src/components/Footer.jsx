import React from "react";
import "../styles_css/Footer.css";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";

const Footer = () => {
  return (
    <div>
      <div className="gradient1"></div>
      <footer class="footer-container">
        <div className="first-section1">
          <div className="first-section">
            <div className="innovative">Innovative Project Ideas?</div>
            <p>
              We bring your boldest ideas to life with creativity, expertise,
              and strategic insight. Let's work together to turn your vision
              into reality and make a lasting impact.
            </p>
          </div>

          <div
            class="footer-newsletter1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div class="footer-newsletter">
              <div
                style={{
                  fontSize: "30px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                Newsletter
              </div>
              <div
                style={{
                  color: "#C2C2C2",
                  paddingBottom: "10px",
                  fontSize: "18PX",
                  marginBottom: "30px",
                }}
              >
                Subscribe to our newsletter to get the latest Protecht news
              </div>

              <div className="email" style={{ display: "flex" }}>
                <input type="email" placeholder="Email address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div className="footer-logo">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Protecht Logo" className="logo-image" />
              </a>
            </div>
            <div style={{ marginTop: "10px", fontSize: "18px" }}>
              Smarter, Simpler, Faster
            </div>
          </div>
          <div className="names">
            <div class="footer-links">
              <h4>Company</h4>
              <a href="#">About us</a>
              <a href="#">Careers</a>
              <a href="#">News</a>
              <a href="#">Contact</a>
            </div>

            <div class="footer-links">
              <h4>Legal</h4>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Imprint</a>
            </div>
          </div>
        </div>

        <div className="rights">
          <p>© 2024 Protecht. All rights reserved.</p>

          <div class="social-icons">
            <div className="language">
              <a href="#">EN</a>
              <a href="#">DE</a>
            </div>
            <a href="https://www.linkedin.com/company/protechtch/posts/?feedView=all">
              <img src={linkedin} alt="Linkedin" className="icon" />
            </a>
            <a href="https://www.instagram.com/protecht_ch?igsh=MWl3ZzY4YTNtY2pkMQ==">
              <img
                src={instagram}
                alt="Instagram"
                className="icon"
                style={{ width: "37px", height: "37px" }}
              />
            </a>
            <a href="https://www.facebook.com/protecht.ch/">
              <img
                src={facebook}
                alt="facebook"
                className="icon"
                style={{ width: "30px", height: "32px" }}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
