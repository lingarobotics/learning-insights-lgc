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

  "ai-ml": {
    title: "AI & ML",
    desc: "Understand how intelligent systems learn, represent information, retrieve knowledge, and make predictions from data.",

    focus: [
      "Machine Learning fundamentals",
      "Neural network understanding",
      "Vector embeddings and retrieval",
      "Large Language Models (LLMs)",
      "Transformer architecture concepts",
    ],

    expectations: [
      "AI concept breakdowns",
      "Embedding and vector database insights",
      "Model behavior observations",
      "RAG and retrieval understanding",
      "Practical AI engineering realizations",
    ],

    mindset:
      "AI engineering is not just about using models — it is understanding how systems represent information, learn patterns from data, retrieve relevant knowledge, and generate meaningful outputs.",
  },

  "cloud-concepts": {
    title: "Cloud Concepts",
    desc: "Understand the reasoning, architecture, and principles behind modern cloud computing systems.",

    focus: [
      "Infrastructure abstractions",
      "Scalability concepts",
      "Reliability and availability principles",
      "Networking and distributed systems",
      "Cloud architecture patterns",
    ],

    expectations: [
      "Cloud architecture insights",
      "Infrastructure-level understanding",
      "Scalability observations",
      "Distributed system reasoning",
      "Concept-driven cloud learning",
    ],

    mindset:
      "Cloud concepts explain why modern systems are built the way they are. Understanding the principles behind scalability, reliability, and infrastructure is more valuable than memorizing cloud services.",
  },

  "meta-learning": {
    title: "Meta Learning",
    desc: "Capture insights discovered while learning a domain that remain valuable beyond the domain that revealed them.",

    focus: [
      "Cross-domain realizations",
      "Insights extracted during learning",
      "Reasoning improvements",
      "Understanding breakthroughs",
      "Lessons applicable beyond a single domain",
    ],

    expectations: [
      "Insights discovered during learning",
      "Cross-domain lessons",
      "Reasoning-driven observations",
      "Engineering realizations",
      "Understanding-oriented takeaways",
    ],

    mindset:
      "Some insights are bigger than the domain that revealed them. Meta Learning preserves lessons discovered while learning one domain that continue to provide value across many other domains.",
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