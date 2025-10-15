import React from "react";
import { ArrowRight, Users } from "lucide-react";
import coinImage from "../assets/bg.png"; // replace with your actual image

export default function HeroSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            The Future of <span>Meme Culture</span> is Here
          </h1>
          <p className="hero-subtitle">
            A next-generation <strong>meme coin</strong> merging art, tech, and community
            into one evolving ecosystem — powered by <strong>4Alon</strong>.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("contact")}>Let's Connect →</button>
            <button className="btn btn-secondary" onClick={() => scrollToSection("about")}>Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>200K+</h3>
              <p>Holders</p>
            </div>
            <div className="hero-stat">
              <h3>50M+</h3>
              <p>Transactions</p>
            </div>
            <div className="hero-stat">
              <h3>100%</h3>
              <p>Community Driven</p>
            </div>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-glow"></div>
          <img src={coinImage} alt="4 Alon Coin" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
