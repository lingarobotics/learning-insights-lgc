import { useParams, useNavigate } from "react-router-dom";

const dimensionInfo = {

  frontend: {
    title: "Frontend",
    desc: "Understand how user interfaces behave, communicate, and evolve beyond implementation.",

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
      "Frontend engineering is not just building interfaces—it is understanding how users experience systems through them.",
  },

  backend: {
    title: "Backend",
    desc: "Learn how systems process requests, coordinate services, and manage business logic.",

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
      "Backend engineering is understanding how systems coordinate logic, data, and execution beyond individual APIs.",
  },

  dsa: {
    title: "Data Structures & Algorithms",
    desc: "Develop problem-solving intuition through patterns, efficiency, and trade-offs.",

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
      "DSA is about understanding how solutions scale and why one approach is more suitable than another.",
  },

  projects: {
    title: "Projects",
    desc: "Extract engineering lessons and architectural decisions from real systems.",

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
      "Projects reveal how engineering concepts interact when real systems are designed, built, and refined.",
  },

  "failures-and-fixes": {
    title: "Failures & Fixes",
    desc: "Learn what debugging, mistakes, and unexpected failures reveal about software.",

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
      "Failures often reveal more about how systems work than successful execution ever can.",
  },

  communication: {
    title: "Professional Communication",
    desc: "Improve technical writing, articulation, and engineering communication.",

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
      "Clear communication reflects clear thinking and makes engineering knowledge more valuable to others.",
  },

  dbms: {
    title: "DBMS",
    desc: "Understand relational databases, normalization, integrity, and structured data.",

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
      "Database design is about preserving consistency, reliability, and structure as systems evolve.",
  },

  nosql: {
    title: "NoSQL",
    desc: "Explore distributed databases and the trade-offs behind modern data systems.",

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
      "NoSQL systems prioritize scalability and flexibility by making deliberate architectural trade-offs.",
  },

  "reasons-behind-thoughts": {
    title: "Reasons Behind Thoughts",
    desc: "Explore the reasoning and engineering perspective behind technical reflections.",

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
      "Understanding the reasoning behind an insight is often more valuable than remembering the insight itself.",
  },

  "ai-ml": {
    title: "AI & ML",
    desc: "Understand modern AI systems, embeddings, retrieval, and machine learning concepts.",

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
      "AI engineering begins with understanding how systems learn, represent information, and reason from data.",
  },

  "cloud-concepts": {
    title: "Cloud Concepts",
    desc: "Explore scalability, reliability, distributed systems, and cloud architecture.",

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
      "Cloud concepts explain the engineering principles that allow modern systems to scale and remain reliable.",
  },

  "meta-learning": {
    title: "Meta Learning",
    desc: "Capture insights about learning, thinking, and engineering growth across dimensions.",

    focus: [
      "Cross-dimension realizations",
      "Insights extracted during learning",
      "Reasoning improvements",
      "Understanding breakthroughs",
      "Lessons applicable beyond a single dimension",
    ],

    expectations: [
      "Insights discovered during learning",
      "Cross-dimension lessons",
      "Reasoning-driven observations",
      "Engineering realizations",
      "Understanding-oriented takeaways",
    ],

    mindset:
      "Some insights outgrow the dimension where they were discovered and become valuable across engineering as a whole.",
  },

};


function DimensionPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const dimension = dimensionInfo[name];

  if (!dimension) {
    return (
      <div className="app-container">
        Dimension not found
      </div>
    );
  }

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="dimension-hero">

        <p className="dimensions-tag">
          Engineering Dimension
        </p>

        <h1 className="hero-title">
          {dimension.title}
        </h1>

        <p className="hero-sub">
          {dimension.desc}
        </p>

      </div>

      <div className="divider"></div>

      {/* dimension FOCUS */}
      <div className="dimension-section-card">

        <h2>
          What this dimension focuses on
        </h2>

        <ul>
          {dimension.focus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      {/* EXPECTATIONS */}
      <div className="dimension-section-card">

        <h2>
          What insights may contain
        </h2>

        <ul>
          {dimension.expectations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      {/* MINDSET */}
      <div className="dimension-section-card">

        <h2>
          Engineering perspective
        </h2>

        <blockquote>
          {dimension.mindset}
        </blockquote>

      </div>

      {/* CTA */}
      <div className="dimension-cta">

        <button
          className="button"
          onClick={() => navigate(`/dimension/${name}/insights`)}
        >
          View Insights
        </button>

        <div className="dimension-navigation-row">

          <button
            className="button secondary-button"
            onClick={() => navigate("/dimensions")}
          >
            ← Back To Dimensions
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

export default DimensionPage;