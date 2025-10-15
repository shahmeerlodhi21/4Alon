import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "What is 4 Alon Coin?",
    a: "A decentralized meme-inspired token created to blend entertainment, culture, and blockchain utility.",
  },
  {
    q: "Is there a presale?",
    a: "No presale. 4 Alon was fair-launched for full transparency.",
  },
  {
    q: "What makes it unique?",
    a: "AI-powered branding, real community ownership, and sustainable utility features.",
  },
  {
    q: "On which blockchain is it built?",
    a: "Initially launching on Solana, with multi-chain support planned for future expansion.",
  },
  {
    q: "How can I earn rewards?",
    a: "Through community campaigns, staking opportunities, and creator incentive programs.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section reveal" id="faqs">
      <div className="faq-container">
        <h2 className="faq-title">
          <FaQuestionCircle className="faq-icon" /> Questions?{" "}
          <span>We’ve Got Answers.</span>
        </h2>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <FaChevronDown className="chevron" />
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "300px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-glow"></div>
    </section>
  );
};

export default FAQSection;
