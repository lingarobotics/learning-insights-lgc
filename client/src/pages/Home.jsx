import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-container">

      {/* HERO */}
      <div className="landing-hero">

        <div className="landing-brand">

          <img
            src="/learn-with-linga-logo-circular.png"
            alt="Learn With Linga"
            className="landing-logo"
          />

          <div>

            <h1 className="landing-title">
              Learn With Linga — Engineering Insights
            </h1>

            <p className="landing-version">
              12 Dimensions • 50+ Insights • Engineering Realizations
            </p>

            <p className="landing-sub">
              A curated collection of 50+ engineering insights
              discovered while learning computer science,
              building software systems, debugging failures,
              and understanding why modern systems are designed
              the way they are.
            </p>

          </div>

        </div>

      </div>

      {/* PRIMARY CTA */}
      <div className="home-primary-wrapper">

        <div className="home-navigation-card home-primary-card">

          <p className="home-navigation-tag">
            Engineering Dimensions
          </p>

          <h2>
            Explore Engineering Insights
          </h2>

          <p>
            Discover engineering realizations organized across
            frontend, backend, DSA, AI, databases, cloud,
            projects, debugging, communication, and
            engineering mindset.
          </p>

          <button
            className="button"
            onClick={() => navigate("/dimensions")}
          >
            Explore Insights
          </button>

        </div>

      </div>

      {/* SECONDARY CTA GRID */}
      <div className="home-secondary-grid">

        {/* WHY THIS EXISTS */}
        <div className="home-navigation-card">

          <p className="home-navigation-tag">
            Philosophy
          </p>

          <h2>
            Why Engineering Insights Exists
          </h2>

          <p>
            Learn the philosophy behind this repository,
            why these insights are preserved,
            and how engineering understanding evolves
            through curiosity, experimentation,
            failures, and reflection.
          </p>

          <button
            className="button secondary-button"
            onClick={() => navigate("/why-this-exists")}
          >
            Explore Philosophy
          </button>

        </div>

        {/* HOW TO USE */}
        <div className="home-navigation-card">

          <p className="home-navigation-tag">
            Reading Guide
          </p>

          <h2>
            How To Learn From These Insights
          </h2>

          <p>
            Understand how to approach each insight,
            connect ideas across engineering dimensions,
            and transform individual realizations into
            deeper engineering intuition.
          </p>

          <button
            className="button secondary-button"
            onClick={() => navigate("/how-to-use-insights")}
          >
            Start Reading
          </button>

        </div>

      </div>

      {/* CONNECTED PLATFORMS */}
      <div className="connected-platforms">

        <details className="connected-dropdown">

          <summary>
            Connected Platforms
          </summary>

          <div className="connected-links">

            <a
              href="https://lgcsystems.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LGC Systems — Umbrella platform for all LGC products
            </a>

            <a
              href="https://founder-portfolio.lgcsystems.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder Portfolio — Learn about the engineer behind Learn With Linga
            </a>

            <a
              href="https://thoughts-of-linga.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hashnode Blog — Engineering articles, learning journeys, and technical reflections
            </a>

          </div>

        </details>

      </div>

    </div>
  );
}

export default Home;