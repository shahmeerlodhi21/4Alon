import React from "react";
import { FaRocket, FaUsers, FaCogs, FaGlobe } from "react-icons/fa";
const roadmapPhases = [
    {
        icon: <FaRocket />,
        phase: "Phase 1 – Genesis",
        text: `Launch of AI logo, brand identity, and official 4 ALONE website. Socials go live, and the first smart contract is deployed.`,
    },
    {
        icon: <FaUsers />,
        phase: "Phase 2 – Expansion",
        text: `Listings on CoinMarketCap & CoinGecko. Viral meme contests, giveaways, and early NFT collection previews.`,
    },
    {
        icon: <FaCogs />,
        phase: "Phase 3 – Utility Launch",
        text: `Staking dashboard release, Web3 integrations, and cross-chain support to enhance token usability.`,
    },
    {
        icon: <FaGlobe />,
        phase: "Phase 4 – The Future",
        text: `CEX listings, DAO governance, 4 ALONE marketplace launch, and major strategic partnerships.`,
    },
];


const Roadmap = () => {
    return (
        <section className="roadmap-section">
            <h2 className="roadmap-title">Our Journey Forward</h2>
            <p className="roadmap-sub">
                Explore the evolution of <span>4 ALONE</span> — step by step toward a decentralized future.
            </p>

            <div className="timeline">
                {roadmapPhases.map((phase, index) => (
                    <div key={index} className="timeline-step">
                        <div className="circle">
                            <div className="icon">{phase.icon}</div>
                        </div>
                        {index !== roadmapPhases.length - 1 && <div className="line"></div>}

                        <div className="phase-content">
                            <h3>{phase.phase}</h3>
                            <p>{phase.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Roadmap;
