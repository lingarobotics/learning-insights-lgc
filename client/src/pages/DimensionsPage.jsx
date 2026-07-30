import { useNavigate } from "react-router-dom";

function DimensionsPage() {
  const navigate = useNavigate();

  const dimensions = [
    {
      name: "frontend",
      label: "Frontend",
      desc: "Understand how user interfaces behave, communicate, and evolve beyond implementation.",
    },
    {
      name: "backend",
      label: "Backend",
      desc: "Learn how systems process requests, coordinate services, and manage business logic.",
    },
    {
      name: "dsa",
      label: "Data Structures & Algorithms",
      desc: "Develop problem-solving intuition through patterns, efficiency, and trade-offs.",
    },
    {
      name: "projects",
      label: "Projects",
      desc: "Extract engineering lessons and architectural decisions from real systems.",
    },
    {
      name: "failures-and-fixes",
      label: "Failures & Fixes",
      desc: "Learn what debugging, mistakes, and unexpected failures reveal about software.",
    },
    {
      name: "communication",
      label: "Professional Communication",
      desc: "Improve technical writing, articulation, and engineering communication.",
    },
    {
      name: "dbms",
      label: "DBMS",
      desc: "Understand relational databases, normalization, integrity, and structured data.",
    },
    {
      name: "nosql",
      label: "NoSQL",
      desc: "Explore distributed databases and the trade-offs behind modern data systems.",
    },
    {
      name: "reasons-behind-thoughts",
      label: "Reasons Behind Thoughts",
      desc: "Explore the reasoning and engineering perspective behind technical reflections.",
    },
    {
      name: "ai-ml",
      label: "AI & ML",
      desc: "Understand modern AI systems, embeddings, retrieval, and machine learning concepts.",
    },
    {
      name: "cloud-concepts",
      label: "Cloud Concepts",
      desc: "Explore scalability, reliability, distributed systems, and cloud architecture.",
    },
    {
      name: "meta-learning",
      label: "Meta Learning",
      desc: "Capture insights about learning, thinking, and engineering growth across dimensions.",
    },
  ];

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="dimensions-hero">

        <p className="dimensions-tag">
          Engineering Dimensions
        </p>

        <h1 className="dimensions-title">
          Explore engineering
          <br />
          through different dimensions.
        </h1>

        <p className="dimensions-sub">
          Every insight is organized by the engineering perspective
          it strengthens—from software development and system design
          to debugging, communication, and learning itself.
        </p>

      </div>

      {/* dimension GRID */}
      <div className="dimensions-grid">

        {dimensions.map((dimension) => (
          <div
            key={dimension.name}
            className="dimension-explorer-card"
          >

            <div>

              <h2>{dimension.label}</h2>

              <p>{dimension.desc}</p>

            </div>

            <button
              className="button"
              onClick={() => navigate(`/dimension/${dimension.name}`)}
            >
              Explore Dimension
            </button>

          </div>
        ))}

      </div>

      {/* BACK */}
      <div className="dimensions-back-home">

        <button
          className="button secondary-button"
          onClick={() => navigate("/")}
        >
          ← Back To Home
        </button>

      </div>

      {/* FOOTER */}
      <div className="dimensions-footer">

        <h2>Why organize insights?</h2>

        <p>
          Organizing insights by engineering dimensions makes it easier
          to discover related ideas, connect concepts, and build
          understanding over time.
        </p>

      </div>

    </div>
  );
}

export default DimensionsPage;