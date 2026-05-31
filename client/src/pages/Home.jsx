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
              Version 1.1
            </p>

            <p className="landing-sub">
              Not tutorials. Not notes.
              <br />
              Just the insights that actually matter
              while learning and building systems.
            </p>
          </div>

        </div>

      </div>

      {/* PRIMARY CTA */}
      <div className="home-primary-wrapper">

        <div className="home-navigation-card home-primary-card">

          <p className="home-navigation-tag">
            Main Exploration
          </p>

          <h2>
            Explore Engineering Domains
          </h2>

          <p>
            Browse structured engineering insights organized
            across systems, architecture, debugging,
            projects, reasoning, and learning domains.
          </p>

          <button
            className="button"
            onClick={() => navigate("/domains")}
          >
            Explore Domains
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
            Why This Insight System Exists
          </h2>

          <p>
            Understand the purpose behind this platform,
            the problems it tries to solve,
            and the engineering mindset behind its structure.
          </p>

          <button
            className="button secondary-button"
            onClick={() => navigate("/why-this-exists")}
          >
            Open Philosophy
          </button>

        </div>

        {/* HOW TO USE */}
        <div className="home-navigation-card">

          <p className="home-navigation-tag">
            Reading Approach
          </p>

          <h2>
            How To Extract Insights Properly
          </h2>

          <p>
            Learn how these insights should be approached,
            interpreted, connected, and used for deeper
            engineering understanding.
          </p>

          <button
            className="button secondary-button"
            onClick={() => navigate("/how-to-use-insights")}
          >
            Learn How To Read
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
              LGC Systems - Umbrella platform for all LGC products
            </a>

            <a
              href="https://founder-portfolio.lgcsystems.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder Portfolio - Person behind Learn With Linga and LGC Systems
            </a>

          </div>

        </details>

      </div>

    </div>
  );
}

export default Home;