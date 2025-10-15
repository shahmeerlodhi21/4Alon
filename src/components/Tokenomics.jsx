import React, { useMemo, useState } from "react";
import { PieChart, Database, Layers } from "lucide-react"; // lucide icons used

export default function Tokenomics() {
  // token data
  const totalSupply = "1,000,000,000";
  const ticker = "$4ALONE";
  const blockchain = "Ethereum"; // change if you'd like Solana/BSC/etc.
  const decimals = 18;
  const contract = "Coming soon";

  const allocations = [
    { key: "community", label: "Community Rewards", pct: 30, desc: "Airdrops, staking, and contests", color: "#50d980" },
    { key: "liquidity", label: "Liquidity Pool", pct: 25, desc: "Stabilizes market and prevents manipulation", color: "#2bd68f" },
    { key: "marketing", label: "Marketing & Partnerships", pct: 20, desc: "Growth, influencer campaigns, and awareness", color: "#22b36a" },
    { key: "development", label: "Development", pct: 15, desc: "Future utilities and ecosystem expansion", color: "#169f4f" },
    { key: "reserve", label: "Reserve", pct: 10, desc: "Burns, treasury, and strategic funding", color: "#0f7a3f" },
  ];

  // build conic-gradient string from allocations
  const gradient = useMemo(() => {
    let cum = 0;
    return `conic-gradient(${allocations
      .map((a) => {
        const start = cum;
        const end = cum + a.pct;
        cum = end;
        return `${a.color} ${start}% ${end}%`;
      })
      .join(", ")})`;
  }, [allocations]);

  const [hoverKey, setHoverKey] = useState(null);

  return (
    <section className="tokenomics-section" aria-labelledby="tokenomics-heading">
      <div className="tokenomics-container">
        {/* LEFT: Chart + Legend */}
        <div className="token-left">
          <div className="token-header">
            <h2 id="tokenomics-heading" className="token-title">
              <span className="emoji">📊</span> Transparent Token Distribution
            </h2>
            <p className="token-sub">
              Clear allocation, no hidden wallets — everything is out in the open. Below is the planned distribution of the total supply.
            </p>
          </div>

          <div className="chart-area">
            <div
              className="donut"
              style={{ background: gradient }}
              role="img"
              aria-label="Token distribution chart"
            >
              <div className="donut-hole">
                <div className="supply">
                  <div className="supply-num">{totalSupply}</div>
                  <div className="supply-ticker">{ticker}</div>
                </div>
              </div>
            </div>

            <ul className="legend">
              {allocations.map((a) => {
                const isHover = hoverKey === a.key;
                return (
                  <li
                    key={a.key}
                    className={`legend-item ${isHover ? "hover" : ""}`}
                    onMouseEnter={() => setHoverKey(a.key)}
                    onMouseLeave={() => setHoverKey(null)}
                  >
                    <span className="legend-swatch" style={{ background: a.color }}></span>
                    <div className="legend-texts">
                      <div className="legend-title">{a.label}</div>
                      <div className="legend-meta">
                        <span className="legend-pct">{a.pct}%</span>
                        <span className="legend-desc">{a.desc}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT: Table + Metadata */}
        <div className="token-right">
          <div className="token-card">
            <div className="table-head">
              <h3>Allocation</h3>
              <h3>Percentage</h3>
              <h3>Description</h3>
            </div>

            <div className="table-body">
              {allocations.map((a) => (
                <div key={a.key} className={`table-row ${hoverKey === a.key ? "row-hover" : ""}`}>
                  <div className="cell label">
                    <span className="dot" style={{ background: a.color }}></span>
                    {a.label}
                  </div>
                  <div className="cell pct">{a.pct}%</div>
                  <div className="cell desc">{a.desc}</div>
                </div>
              ))}
            </div>

            <div className="token-meta">
              <div className="meta-row">
                <div className="meta-label"><Database className="meta-icon" /> Total Supply</div>
                <div className="meta-value">{totalSupply} {ticker}</div>
              </div>

              <div className="meta-row">
                <div className="meta-label"><PieChart className="meta-icon" /> Blockchain</div>
                <div className="meta-value">{blockchain}</div>
              </div>

              <div className="meta-row">
                <div className="meta-label"><Layers className="meta-icon" /> Decimals</div>
                <div className="meta-value">{decimals}</div>
              </div>

              <div className="meta-row">
                <div className="meta-label"><Lock className="meta-icon" /> Contract Address</div>
                <div className="meta-value contract">{contract}</div>
              </div>
            </div>
          </div>

          <div className="cta-row">
            <button className="btn btn-primary">View Whitepaper</button>
            <button className="btn btn-outline">Audit Plans</button>
          </div>
        </div>
      </div>
    </section>
  );
}
