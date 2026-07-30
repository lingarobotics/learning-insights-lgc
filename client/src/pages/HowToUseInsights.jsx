import { useNavigate } from "react-router-dom";

function HowToUseInsights() {
  const navigate = useNavigate();

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="dimensions-hero">

        <p className="dimensions-tag">
          Reading Approach
        </p>

        <h1 className="dimensions-title">
          Don’t read insights
          <br />
          like content.
        </h1>

        <p className="dimensions-sub">
          This system is designed to develop engineering understanding,
          not passive consumption.
        </p>

      </div>

      {/* SECTION 1 */}
      <div className="dimension-section-card">

        <h2>
          The wrong way to approach insights
        </h2>

        <p>
          Most people consume technical content passively:
        </p>

        <ul>
          <li>Scrolling quickly</li>
          <li>Memorizing terms</li>
          <li>Looking only for answers</li>
          <li>Ignoring why systems behave that way</li>
        </ul>

        <p>
          That creates short-term familiarity,
          but not engineering understanding.
        </p>

      </div>

      {/* SECTION 2 */}
      <div className="dimension-section-card">

        <h2>
          What to focus on while reading
        </h2>

        <p>
          Each insight should be approached as:
        </p>

        <ul>
          <li>A system realization</li>
          <li>A debugging lesson</li>
          <li>An engineering perspective</li>
          <li>A reasoning process</li>
        </ul>

        <p>
          Instead of asking:
        </p>

        <blockquote>
          “What is the answer?”
        </blockquote>

        <p>
          Focus on:
        </p>

        <ul>
          <li>Why the realization happened</li>
          <li>What assumptions failed</li>
          <li>What system behavior caused it</li>
          <li>How the understanding evolved</li>
        </ul>

      </div>

      {/* SECTION 3 */}
      <div className="dimension-section-card">

        <h2>
          Read across dimensions intentionally
        </h2>

        <p>
          Different dimensions represent different engineering layers.
        </p>

        <p>
          For example:
        </p>

        <ul>
          <li>Failures & Fixes → debugging thinking</li>
          <li>Frontend → UI and rendering understanding</li>
          <li>Projects → architectural realization</li>
          <li>DSA → scalability and problem reasoning</li>
          <li>Reasons Behind Thoughts → mindset formation</li>
        </ul>

        <p>
          The goal is not isolated learning.
        </p>

        <blockquote>
          The goal is connected engineering understanding.
        </blockquote>

      </div>

      {/* SECTION 4 */}
      <div className="dimension-section-card">

        <h2>
          Extract patterns, not isolated facts
        </h2>

        <p>
          A single insight is useful.
        </p>

        <p>
          But repeated patterns across insights matter more.
        </p>

        <ul>
          <li>How failures repeat</li>
          <li>How assumptions break</li>
          <li>How systems interact</li>
          <li>How architecture influences behavior</li>
          <li>How debugging changes understanding</li>
        </ul>

        <p>
          Over time,
          those patterns become engineering intuition.
        </p>

      </div>

      {/* FINAL */}
      <div className="dimensions-footer">

        <h2>
          Final Understanding
        </h2>

        <p>
          This platform is not designed for passive reading.
        </p>

        <p>
          It is designed to help transform:
        </p>

        <blockquote>
          learning into reusable engineering understanding.
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

export default HowToUseInsights;