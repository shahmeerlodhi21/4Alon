import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/logo.png";

const ContactFooter = () => {
  return (
    <section className="contact-footer reveal" id="contact">
      {/* CONTACT SECTION */}
      <div className="contact-wrapper">
        <h2 className="contact-heading">Let’s Connect</h2>
        <p className="contact-text">
          Have a question or want to collaborate?  
          Join the <span style={{color: '#7AD04B',fontFamily: "'Londrina Solid', cursive"}}>4 Alon</span> community across our official channels.
        </p>

        <div className="contact-grid">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:support@4Aloncoin.com">support@4Aloncoin.com</a>
          </div>

          <div className="contact-item">
            <FaTwitter className="contact-icon" />
            <a href="https://x.com/4AlonCoin" target="_blank" rel="noreferrer">@4AlonCoin</a>
          </div>

          <div className="contact-item">
            <FaTelegramPlane className="contact-icon" />
            <a href="#">Join Telegram</a>
          </div>

          <div className="contact-item">
            <FaDiscord className="contact-icon" />
            <a href="#">Community Hub</a>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-logo"><a href="#home"><img src={Logo} alt="4Alon Logo" /></a></div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faqs">FAQs</a>
        </div>

        <p className="footer-disclaimer">
          4Alon Coin <span style={{color: '#7AD04B',fontFamily: "'Londrina Solid', cursive"}}>($4Alon)</span> is a community-driven project built for entertainment and cultural innovation.  
          Nothing here constitutes financial advice. Always DYOR before investing.
        </p>

        <p className="footer-copy">© 2025 <span style={{color: '#7AD04B',fontFamily: "'Londrina Solid', cursive"}}>4Alon</span>. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default ContactFooter;
