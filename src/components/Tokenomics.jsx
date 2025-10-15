import React, { useMemo, useState } from "react";
import { PieChart, Database, Layers, Lock } from "lucide-react";

export default function Tokenomics() {
  const totalSupply = "1,000,000,000";
  const ticker = "$4Alon";
  const blockchain = "Solana";
  const decimals = 9;
  const contract = "Coming soon";

  const allocations = [
    { key: "community", label: "Community Rewards", pct: 30, desc: "Airdrops, staking, and contests", color: "#7AD04B" }, // bright accent
    { key: "liquidity", label: "Liquidity Pool", pct: 25, desc: "Stabilizes market and prevents manipulation", color: "#65C342" },
    { key: "marketing", label: "Marketing & Partnerships", pct: 20, desc: "Growth, influencer campaigns, and awareness", color: "#56B13A" },
    { key: "development", label: "Development", pct: 15, desc: "Future utilities and ecosystem expansion", color: "#3F9A30" },
    { key: "reserve", label: "Reserve", pct: 10, desc: "Burns, treasury, and strategic funding", color: "#2C7A25" },
  ];


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
    <section className="tokenomics-section reveal" id="tokenomics">
      <div className="tokenomics-container">
        <h2 className="tokenomics-title">Transparent Token Distribution</h2>
        <p className="tokenomics-sub">
          Clear allocation, no hidden wallets — everything is out in the open. Below is the planned distribution of the total supply.
        </p>

        <div className="tokenomics-chart-area">
          <div
            className="tokenomics-donut"
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
        </div>

        <div className="tokenomics-table">
          <div className="table-head">
            <h3>Allocation</h3>
            <h3>Percentage</h3>
            <h3>Description</h3>
          </div>
          <div className="table-body">
            {allocations.map((a) => (
              <div
                key={a.key}
                className={`table-row ${hoverKey === a.key ? "row-hover" : ""}`}
                onMouseEnter={() => setHoverKey(a.key)}
                onMouseLeave={() => setHoverKey(null)}
              >
                <div className="cell label">
                  <span className="dot" style={{ background: a.color }}></span>
                  {a.label}
                </div>
                <div className="cell pct">{a.pct}%</div>
                <div className="cell desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="token-meta">
          <div className="meta-row">
            <Database className="meta-icon" />
            <span>Total Supply:</span> {totalSupply} {ticker}
          </div>
          <div className="meta-row">
            <PieChart className="meta-icon" />
            <span>Blockchain:</span> {blockchain}
          </div>
          <div className="meta-row">
            <Layers className="meta-icon" />
            <span>Decimals:</span> {decimals}
          </div>
          <div className="meta-row">
            <Lock className="meta-icon" />
            <span>Contract:</span> {contract}
          </div>
        </div>
      </div>
    </section>
  );
}
