import React, { useState } from "react";
import Location from "../images/location.png";
import PhoneIcon from "../images/call.png";
import MailIcon from "../images/sms-tracking.png";
import LinkedIcon from "../images/linkedin-svgrepo-com.svg";
import FacebookIcon from "../images/facebook2.svg";
import InstagramIcon from "../images/instagram.svg";
import "../styles_css/Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.target.reset(); // Reset the form fields
    }, 2000); // Simulate API call delay
  };

  return (
    <div className="contact-page">
      <div
        className="container"
        style={{ minHeight: "500px", position: "relative" }}
      >
        {isSubmitting && (
          <div className="spinner-overlay">
            <div className="spinner"></div>
          </div>
        )}

        {/* Left Container */}
        <div className="contact-info">
          <div>
            <span className="highlight">We'd Love to Hear From You</span>
          </div>
          <p className="colors" style={{ marginBottom: "40px" }}>
            For inquiries or further assistance, please contact us through our
            website or reach out directly via email or phone.
          </p>

          <div className="info-list">
            <div className="info-item">
              <img src={PhoneIcon} alt="Phone" className="icon" />
              <span className="text">+41767354845</span>
            </div>
            <div className="info-item">
              <img src={MailIcon} alt="Mail" className="icon" />
              <span className="text">office@protecht.ch</span>
            </div>
            <div className="info-item">
              <img src={Location} alt="Location" className="icon" />
              <div>
                <a
                  href="https://www.google.com/maps/place/Zugerstrasse+72,+6340+Baar,+Zvic%C3%ABr/@47.1839632,8.519829,17z/data=!3m1!4b1!4m6!3m5!1s0x479aaa45a6961be7:0xcb08f337311a63e6!8m2!3d47.1839632!4d8.519829!16s%2Fg%2F11c1yxx4f8?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                  className="text"
                  style={{ margin: "0", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Zugerstrasse 72, 6340 Baar
                </a>
                <div className="text" style={{ margin: "0" }}>
                  Switzerland
                </div>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/protechtch/posts/?feedView=all"
              className="social-icon"
            >
              <img src={LinkedIcon} alt="LinkedIn" className="icon1" />
            </a>
            <a
              href="https://www.facebook.com/protecht.ch/"
              className="social-icon"
            >
              <img src={FacebookIcon} alt="Facebook" className="icon1" />
            </a>
            <a
              href="https://www.instagram.com/protecht_ch"
              className="social-icon"
            >
              <img src={InstagramIcon} alt="Instagram" className="icon1" />
            </a>
          </div>
        </div>

        {/* Right Container */}
        <div className="contact-form" style={{ minHeight: "400px" }}>
          {isSubmitted ? (
            <div className="popup">
              <p>Your message has been sent successfully!</p>
              <button onClick={() => setIsSubmitted(false)}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone number" />
              <textarea
                style={{
                  fontFamily: "Arial, sans-serif",
                  minHeight: "100px",
                  width: "100%",
                  resize: "none",
                }}
                placeholder="Leave a message..."
                rows="6"
              ></textarea>
              <button type="submit" disabled={isSubmitting}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
