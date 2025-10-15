import React from "react";
import { Globe, Users, Layers, Cpu, Lock } from "lucide-react";

export default function WhyChoose() {
    const features = [

        {
            icon: <Lock className="feat-icon" />,
            title: "Zero Presale, Zero Barriers",
            text: "Everyone starts equally — pure fair-launch distribution.",
        },
        {
            icon: <Users className="feat-icon" />,
            title: "Community Governance",
            text: "Every holder is part of the decision-making process.",
        },
        {
            icon: <Layers className="feat-icon" />,
            title: "Scalable Design",
            text: "Built for integration with NFTs, Web3 utilities, and future dApps.",
        },
        {
            icon: <Cpu className="feat-icon" />,
            title: "AI-Enhanced Branding",
            text: "Modern identity powered by AI visuals and adaptive campaigns.",
        },
    ];

    const highlights = [
        "Decentralized Freedom",
        "Fair-Launch Distribution",
        "AI-Driven Growth",
        "Community First Approach",
    ];

    return (
        <section className="why-section reveal" id="why">
            <div className="why-container">
                {/* LEFT CONTENT */}
                <div className="why-left">
                    <h2 className="why-heading">
                        WHY CHOOSE <span>4 ALONE</span>
                    </h2>
                    <p className="why-description">
                        4 ALONE isn’t just another crypto project — it’s a movement of individuality,
                        creativity, and collective strength. By combining blockchain innovation with
                        AI-powered branding, we empower every believer in true decentralization to thrive
                        together.
                    </p>

                    <div className="why-highlights">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="highlight-item">
                                <div className="dot"></div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT GALLERY GRID */}
                <div className="why-right">
                    <div className="feature-grid">
                        {features.map((f, i) => (
                            <div key={i} className="feature-box">
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
