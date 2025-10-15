import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const navLinks = ["Home", "About", "Tokenomics", "Roadmap", "FAQs"];

  return (
    <header className="funky-header-wrapper" >
      <div className="funky-header">
        {/* Logo */}
        <div className="funky-logo">
         <a href="#home"> <img src={Logo} alt="4Alon" /> </a>
        </div>

        {/* Nav Links */}
        <nav className="funky-nav">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="join-btn">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
