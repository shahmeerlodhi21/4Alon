import React from "react";
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";

const CommunitySection = () => {
  return (
    <section className="community-section reveal" id="community">
        <div className="community-glow"></div>
      <div className="community-container">
        <h2 className="community-title" style={{zIndex: '999'}}>
          Built for the Ones Who <span>Stand Alone</span> — and Rise Together
        </h2>
        <p className="community-text">
          At the heart of <strong style={{color: '#50d980',fontFamily: "'Londrina Solid', cursive"}}>4 ALONE</strong> lies a passionate, creative, and unstoppable
          community. Whether you’re a trader, artist, or builder — this is your space to
          create, connect, and grow.
        </p>

        <div className="community-buttons">
          <a href="#" className="community-btn telegram">
            <FaTelegramPlane /> Join Telegram
          </a>
          <a href="#" className="community-btn twitter">
            <FaTwitter /> Follow on X
          </a>
          <a href="#" className="community-btn discord">
            <FaDiscord /> Join Discord
          </a>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;
