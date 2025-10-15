
import React from "react";
import { Zap, Users, MessageSquare, Lock } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="about-section reveal" id="about">
            <div className="about-container">
                {/* LEFT SIDE CONTENT */}
                <div className="about-content">
                    <h2 className="about-title">
                        What is <span>4 Alon Coin?</span>
                    </h2>
                    <p className="about-text">
                        4 Alon is a new-age cryptocurrency built at the intersection of meme
                        culture, creativity, and real blockchain utility. It’s designed for
                        those who believe in individuality — yet thrive through collective
                        energy. <br />
                        No presales. No empty promises. Just innovation, transparency, and
                        community-driven growth.
                    </p>

                    <h3 className="about-subtitle">Our Mission</h3>
                    <p className="about-text">
                        To build a decentralized, culture-powered ecosystem where creativity
                        meets financial freedom.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight">
                            <Zap className="icon" />
                            <span>Fair Launch, No Presale</span>
                        </div>
                        <div className="highlight">
                            <Users className="icon" />
                            <span>100% Community-Owned</span>
                        </div>
                        <div className="highlight">
                            <MessageSquare className="icon" />
                            <span>Utility Beyond Hype</span>
                        </div>
                        <div className="highlight">
                            <Lock className="icon" />
                            <span>Transparent, Secure & Scalable</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
