import { useNavigate } from "react-router-dom";

function DomainsPage() {
  const navigate = useNavigate();

  const domains = [
    {
      name: "frontend",
      label: "Frontend",
      desc: "Understand how UI actually behaves — not just how to code it.",
    },
    {
      name: "backend",
      label: "Backend",
      desc: "Learn how systems process, store, and respond beyond APIs.",
    },
    {
      name: "cloud",
      label: "Cloud",
      desc: "Understand infrastructure, deployment, and runtime environments.",
    },
    {
      name: "dsa",
      label: "Data Structures & Algorithms",
      desc: "Think in scalability, patterns, and engineering trade-offs.",
    },
    {
      name: "projects",
      label: "Projects",
      desc: "Extract architectural lessons and system-level realizations from building.",
    },
    {
      name: "failures-and-fixes",
      label: "Failures & Fixes",
      desc: "Understand why systems break and what debugging actually teaches.",
    },
    {
      name: "communication",
      label: "Professional Communication",
      desc: "Improve clarity in thinking, articulation, and technical expression.",
    },
    {
      name: "dbms",
      label: "DBMS",
      desc: "Understand relational systems, normalization, constraints, and structured integrity.",
    },
    {
      name: "nosql",
      label: "NoSQL",
      desc: "Explore distributed systems, CAP theorem, and data-model trade-offs.",
    },
    {
      name: "reasons-behind-thoughts",
      label: "Reasons Behind Thoughts",
      desc: "Explore the reasoning, engineering realizations, and mindset behind technical reflections.",
    },

    {
      name: "ai-ml",
      label: "AI & ML",
      desc: "Understand embeddings, LLMs, retrieval systems, and how intelligent systems learn and reason from data.",
    },
    {
      name: "cloud-concepts",
      label: "Cloud Concepts",
      desc: "Explore the principles behind scalability, reliability, distributed systems, and cloud architecture.",
    },
    {
      name: "meta-learning",
      label: "Meta Learning",
      desc: "Preserve insights extracted during learning that are not limited to the domain that revealed them.",
    },
  ];

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="domains-hero">
        <p className="domains-tag">
          Learning Domains
        </p>

        <h1 className="domains-title">
          Engineering understanding
          <br />
          organized intentionally.
        </h1>

        <p className="domains-sub">
          Different insights belong to different engineering layers.
          Domains separate concepts, debugging, systems, architecture,
          reasoning, and project-level learning clearly.
        </p>
      </div>

      {/* DOMAIN GRID */}
      <div className="domains-grid">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="domain-explorer-card"
          >
            <div>
              <h2>{domain.label}</h2>

              <p>{domain.desc}</p>
            </div>

            <button
              className="button"
              onClick={() => navigate(`/domain/${domain.name}`)}
            >
              Explore Domain
            </button>
          </div>
        ))}
      </div>

      <div className="domains-back-home">
        <button
          className="button secondary-button"
          onClick={() => navigate("/")}
        >
          ← Back To Home
      </button>

      </div>

      {/* FOOTER */}
      <div className="domains-footer">
        <h2>Built with intent</h2>

        <p>
          The goal is not storing content.
        </p>

        <p>
          The goal is preserving engineering understanding
          in a structured and reusable way.
        </p>
      </div>

    </div>
  );
}

export default DomainsPage;