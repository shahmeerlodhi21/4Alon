import React from "react";
import LogoDark from "../assets/logoDark.png";
import LogoLight from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = ({ theme, setTheme }) => {
  const navLinks = ["Home", "About", "Tokenomics", "Roadmap", "FAQs"];
  const logoSrc = theme === "light" ? LogoDark : LogoLight;

  return (
    <header className="funky-header-wrapper">
      <div className="funky-header">
        {/* Logo */}
        <div className="funky-logo">
          <a href="#home">
            <img src={logoSrc} alt="4Alon" />
          </a>
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
        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a href="#contact" className="join-btn">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
