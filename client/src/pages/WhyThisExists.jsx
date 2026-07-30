import { useNavigate } from "react-router-dom";

function WhyThisExists() {
  const navigate = useNavigate();

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="dimensions-hero">

        <p className="dimensions-tag">
          Platform Philosophy
        </p>

        <h1 className="dimensions-title">
          Learning should create
          understanding,
          <br />
          not information overload.
        </h1>

        <p className="dimensions-sub">
          This platform exists to capture what actually matters
          while learning, debugging, building, and understanding systems.
        </p>

      </div>

      {/* SECTION 1 */}
      <div className="dimension-section-card">

        <h2>
          The problem with modern learning
        </h2>

        <p>
          Most learning systems focus on:
        </p>

        <ul>
          <li>Content consumption</li>
          <li>Memorization</li>
          <li>Surface-level completion</li>
          <li>Following tutorials without reasoning</li>
        </ul>

        <p>
          But engineering understanding usually develops somewhere else:
        </p>

        <ul>
          <li>During debugging</li>
          <li>While tracing failures</li>
          <li>Inside real systems</li>
          <li>When assumptions break</li>
        </ul>

      </div>

      {/* SECTION 2 */}
      <div className="dimension-section-card">

        <h2>
          Why this system was created
        </h2>

        <p>
          This platform was built to preserve:
        </p>

        <ul>
          <li>Engineering realizations</li>
          <li>System-level understanding</li>
          <li>Debugging-driven learning</li>
          <li>Architectural thinking</li>
          <li>Reasoning behind insights</li>
        </ul>

        <p>
          Instead of storing raw notes,
          the system focuses on extracting:
        </p>

        <blockquote>
          what actually matters.
        </blockquote>

      </div>

      {/* SECTION 3 */}
      <div className="dimension-section-card">

        <h2>
          Why dimensions exist
        </h2>

        <p>
          Different engineering learnings belong to different layers.
        </p>

        <p>
          A frontend realization is different from:
        </p>

        <ul>
          <li>System architecture thinking</li>
          <li>DSA understanding</li>
          <li>Deployment debugging</li>
          <li>Project-level engineering lessons</li>
          <li>Reasoning behind engineering thoughts</li>
        </ul>

        <p>
          dimensions separate these understandings intentionally,
          so insights remain structured and reusable.
        </p>

      </div>

      {/* SECTION 4 */}
      <div className="dimension-section-card">

        <h2>
          The deeper goal
        </h2>

        <p>
          This is not designed to become:
        </p>

        <ul>
          <li>A tutorial platform</li>
          <li>A note archive</li>
          <li>An AI-generated content dump</li>
        </ul>

        <p>
          The goal is to create:
        </p>

        <ul>
          <li>A reusable engineering insight system</li>
          <li>A structured learning reference</li>
          <li>A portfolio of thinking ability</li>
          <li>Proof of consistent engineering understanding</li>
        </ul>

      </div>

      {/* FINAL */}
      <div className="dimensions-footer">

        <h2>
          Final Understanding
        </h2>

        <p>
          Real learning is not about storing everything.
        </p>

        <p>
          It is about recognizing:
        </p>

        <blockquote>
          what actually matters while building systems.
        </blockquote>

        <button
          className="button"
          style={{ marginTop: "2rem" }}
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>

      </div>

    </div>
  );
}

export default WhyThisExists;