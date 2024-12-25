import React from "react";
import Shadows from "../components/Shadows";

const Impressum = () => {
  return (
    <div>
      <div className="hero">
        <Shadows />
        <h1 className="main-heading">Impressum</h1>
        <p className="subheading">
          Innovating without limits, empowering your vision
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "30px",
          maxWidth: "800px",
          margin: "50px auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          lineHeight: "1.6",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Impressum</h1>
        <p>
          Protecht AG, Managing Director Muhamer Nuridini <br />
          Zugerstrasse 72, 6340 Baar, +41767354845, office@protecht.ch
        </p>
        <h3>Disclaimer</h3>
        <p>
          The author assumes no liability for the correctness, accuracy,
          timeliness, reliability, and completeness of the information provided.
        </p>
        <p>
          Liability claims against the author for damages of a material or
          immaterial nature arising from access to or use/non-use of the
          published information, misuse of the connection, or technical faults
          are excluded.
        </p>
        <h3>Liability for Links</h3>
        <p>
          References and links to third-party websites lie outside our area of
          responsibility. Any responsibility for such websites is declined.
          Access to and use of such websites is at the user’s own risk.
        </p>
        <h3>Copyrights</h3>
        <p>
          The copyright and all other rights to content, images, photos, or
          other files on the website belong exclusively to Protecht AG or the
          specifically mentioned copyright holders. The written consent of the
          copyright holder must be obtained in advance for the reproduction of
          any elements.
        </p>
        <p>Baar, November 25, 2024</p>
      </div>
    </div>
  );
};

export default Impressum;
