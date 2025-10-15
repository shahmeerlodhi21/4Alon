import React from "react";

const Header = () => {
  const navLinks = ["Home", "About", "Tokenomics", "Roadmap", "FAQs"];

  return (
    <header className="funky-header-wrapper">
      <div className="funky-header">
        {/* Logo */}
        <div className="funky-logo">
          <img src="/logo.png" alt="4Alone Logo" />
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
          Contact 🚀
        </a>
      </div>
    </header>
  );
};

export default Header;
