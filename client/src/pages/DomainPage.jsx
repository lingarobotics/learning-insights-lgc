import { useParams, useNavigate } from "react-router-dom";

const domainInfo = {

  frontend: {
    title: "Frontend",
    desc: "Understand how UI actually behaves — not just how to code it.",

    focus: [
      "Browser rendering behavior",
      "CSS layout and responsiveness",
      "React rendering flow",
      "Component interaction patterns",
      "UI debugging and rendering issues",
    ],

    expectations: [
      "Rendering-related realizations",
      "UI architecture observations",
      "Responsive design lessons",
      "Debugging-driven frontend learning",
      "Real-world browser behavior understanding",
    ],

    mindset:
      "Frontend engineering is not just designing screens — it is understanding how interfaces behave under real rendering conditions.",
  },

  backend: {
    title: "Backend",
    desc: "Learn how systems process, store, and respond — beyond APIs.",

    focus: [
      "API flow understanding",
      "Server-side system behavior",
      "Request-response lifecycle",
      "Data flow between layers",
      "System architecture reasoning",
    ],

    expectations: [
      "Backend debugging insights",
      "Server-side architectural thinking",
      "Data handling observations",
      "Real-world API behavior",
      "Scalability-oriented understanding",
    ],

    mindset:
      "Backend engineering is not just endpoints — it is understanding how systems coordinate logic, data, and execution flow.",
  },

  cloud: {
    title: "Cloud",
    desc: "Understand how applications run in real infrastructure.",

    focus: [
      "Deployment systems",
      "Infrastructure behavior",
      "Build and runtime environments",
      "Cloud debugging",
      "Hosting pipeline understanding",
    ],

    expectations: [
      "Deployment failure analysis",
      "Infrastructure-level observations",
      "Environment-related debugging",
      "Cloud execution understanding",
      "Pipeline-oriented thinking",
    ],

    mindset:
      "Cloud learning begins when systems move beyond localhost and interact with real deployment environments.",
  },

  dsa: {
    title: "Data Structures & Algorithms",
    desc: "Think in patterns, scalability, and reasoning — not just solutions.",

    focus: [
      "Scalability thinking",
      "Operation growth understanding",
      "Pattern recognition",
      "Algorithmic reasoning",
      "Real-world mapping of structures",
    ],

    expectations: [
      "Big-O realizations",
      "System scalability understanding",
      "Data structure reasoning",
      "Problem-solving patterns",
      "Operational thinking",
    ],

    mindset:
      "DSA is not about memorizing solutions — it is about understanding how work grows as systems scale.",
  },

  projects: {
    title: "Projects",
    desc: "Extract real engineering lessons from building systems.",

    focus: [
      "Architecture decisions",
      "System integration",
      "Project structure reasoning",
      "Engineering trade-offs",
      "Execution-focused learning",
    ],

    expectations: [
      "Real building experiences",
      "System-level realizations",
      "Architecture evolution",
      "Engineering decision analysis",
      "Execution and iteration lessons",
    ],

    mindset:
      "Projects reveal how theoretical concepts behave when multiple systems interact together.",
  },

  "failures-and-fixes": {
    title: "Failures & Fixes",
    desc: "Understand why systems break and how debugging creates deeper understanding.",

    focus: [
      "Deployment failures",
      "Rendering inconsistencies",
      "Debugging methodology",
      "Assumption breakdowns",
      "Real fix identification",
    ],

    expectations: [
      "DevTools-driven debugging",
      "Failure investigation thinking",
      "Root-cause analysis",
      "Systematic troubleshooting",
      "Lessons extracted from failures",
    ],

    mindset:
      "Failures expose system behavior more honestly than successful execution ever can.",
  },

  communication: {
    title: "Professional Communication",
    desc: "Improve clarity in thinking, articulation, and structured expression.",

    focus: [
      "Technical articulation",
      "Structured explanation",
      "Engineering communication",
      "Clarity in reasoning",
      "Professional expression",
    ],

    expectations: [
      "Structured communication insights",
      "Technical writing observations",
      "Explanation refinement",
      "Professional clarity improvements",
      "Communication-driven understanding",
    ],

    mindset:
      "Clear communication reflects clear thinking. Engineering understanding loses value if it cannot be articulated properly.",
  },

  dbms: {
    title: "DBMS",
    desc: "Understand relational data systems, constraints, normalization, and structural integrity.",

    focus: [
      "Relational thinking",
      "Normalization reasoning",
      "Constraint behavior",
      "Schema structure understanding",
      "Data integrity principles",
    ],

    expectations: [
      "Database design insights",
      "Normalization observations",
      "Constraint-driven reasoning",
      "Real-world relational understanding",
      "Systematic data organization",
    ],

    mindset:
      "DBMS is not just storing data — it is structuring systems so information remains consistent, reliable, and scalable.",
  },

  nosql: {
    title: "NoSQL",
    desc: "Explore distributed databases, CAP theorem, and system-level data trade-offs.",

    focus: [
      "Distributed database behavior",
      "Scalability trade-offs",
      "Flexible schema design",
      "CAP theorem reasoning",
      "System-driven data modeling",
    ],

    expectations: [
      "Distributed system observations",
      "Scalability insights",
      "Trade-off analysis",
      "Flexible data architecture understanding",
      "Real-world NoSQL reasoning",
    ],

    mindset:
      "NoSQL systems prioritize scalability and flexibility by intentionally trading off traditional relational guarantees.",
  },

  "reasons-behind-thoughts": {
    title: "Reasons Behind Thoughts",
    desc: "Explore the reasoning, engineering realizations, and mindset behind technical reflections.",

    focus: [
      "Reasoning behind engineering thoughts",
      "Mindset evolution",
      "Experiences shaping perspectives",
      "System-driven realizations",
      "Thought articulation patterns",
    ],

    expectations: [
      "Breakdown of engineering reflections",
      "Mindset-oriented explanations",
      "Connection between experience and insight",
      "Why specific thoughts were articulated",
      "Reasoning-driven understanding",
    ],

    mindset:
      "Thoughts become meaningful when the underlying experiences, failures, and realizations behind them are understood.",
  },

};

function DomainPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const domain = domainInfo[name];

  if (!domain) {
    return (
      <div className="app-container">
        Domain not found
      </div>
    );
  }

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="domain-hero">

        <p className="domains-tag">
          Engineering Domain
        </p>

        <h1 className="hero-title">
          {domain.title}
        </h1>

        <p className="hero-sub">
          {domain.desc}
        </p>

      </div>

      <div className="divider"></div>

      {/* DOMAIN FOCUS */}
      <div className="domain-section-card">

        <h2>
          What this domain focuses on
        </h2>

        <ul>
          {domain.focus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      {/* EXPECTATIONS */}
      <div className="domain-section-card">

        <h2>
          What insights may contain
        </h2>

        <ul>
          {domain.expectations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      {/* MINDSET */}
      <div className="domain-section-card">

        <h2>
          Engineering perspective
        </h2>

        <blockquote>
          {domain.mindset}
        </blockquote>

      </div>

      {/* CTA */}
      <div className="domain-cta">

        <button
          className="button"
          onClick={() => navigate(`/domain/${name}/insights`)}
        >
          View Insights
        </button>

        <div className="domain-navigation-row">

          <button
            className="button secondary-button"
            onClick={() => navigate("/domains")}
          >
            ← Back To Domains
          </button>

          <button
            className="button secondary-button"
            onClick={() => navigate("/")}
          >
            ← Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default DomainPage;