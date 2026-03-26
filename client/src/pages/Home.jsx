import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const domains = [
    { name: "frontend", label: "Frontend", desc: "UI logic, browser behavior" },
    { name: "backend", label: "Backend", desc: "APIs, data flow, systems" },
    { name: "cloud", label: "Cloud", desc: "Infra, deployment thinking" },
    { name: "dsa", label: "Data Structures & Algorithms", desc: "Problem solving & patterns" },
    { name: "projects", label: "Projects", desc: "System-level insights" },
    { name: "failures-and-fixes", label: "Failures and Fixes", desc: "Real debugging lessons" },
    { name: "communication", label: "Professional Communication", desc: "Clarity in expression" }
  ];

  return (
    <div className="app-container">
      {/* HERO */}
      <div className="hero">
        <h1 className="hero-title">Learning Insights — LGC</h1>
        <p className="hero-sub">
          Not tutorials. Not notes.  
          <br />
          Just the insights that actually matter when you learn and build.
        </p>
      </div>

      {/* WHY */}
      <div className="section">
        <h2>Why this exists</h2>
        <p>
          Most learning content focuses on <strong>what</strong>.  
          This system focuses on <strong>what actually matters</strong>.
        </p>

        <ul>
          <li>Extract real understanding from concepts</li>
          <li>Capture insights during building</li>
          <li>Document failures and fixes</li>
          <li>Reduce time wasted on shallow learning</li>
        </ul>
      </div>

      {/* DOMAINS */}
      <div className="section">
        <h2>Explore Domains</h2>

        <div className="section-grid">
          {domains.map((d, index) => (
            <div
              key={index}
              className="card domain-card"
              onClick={() => navigate(`/domain/${d.name}`)}
            >
              <h3>{d.label}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;