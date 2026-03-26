import { useParams, useNavigate } from "react-router-dom";

const domainInfo = {
  frontend: {
    title: "Frontend",
    desc: "Understand how UI actually behaves — not just how to code it.",
  },
  backend: {
    title: "Backend",
    desc: "Learn how systems process, store, and respond — beyond APIs.",
  },
  cloud: {
    title: "Cloud",
    desc: "Understand how applications run in real infrastructure.",
  },
  dsa: {
    title: "Data Structures & Algorithms",
    desc: "Think in patterns, not just solutions.",
  },
  projects: {
    title: "Projects",
    desc: "Extract real lessons from building systems.",
  },
  "Failures-and-fixes": {
    title: "Failures & Fixes",
    desc: "Understand why things break and how to fix them.",
  },
  communication: {
    title: "Professional Communication",
    desc: "Improve clarity in thinking and expression.",
  },
};

function DomainPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const domain = domainInfo[name];

  if (!domain) {
    return <div className="app-container">Domain not found</div>;
  }

  return (
    <div className="app-container">
      {/* HERO */}
      <div className="domain-hero">
        <h1 className="hero-title">{domain.title}</h1>
        <p className="hero-sub">{domain.desc}</p>
      </div>

      <div className="divider"></div>

      {/* PURPOSE */}
      <div className="domain-section">
        <h2>What you’ll get here</h2>

        <p>
          This section is not about covering topics — it is about extracting
          what actually matters while learning and building.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Each insight represents:
        </p>

        <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
          <li>Core understanding</li>
          <li>Real-world relevance</li>
          <li>Common mistakes</li>
          <li>Clear takeaways</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="domain-cta">
        <button
          className="button"
          onClick={() => navigate(`/domain/${name}/insights`)}
        >
          View Insights
        </button>
      </div>
    </div>
  );
}

export default DomainPage;