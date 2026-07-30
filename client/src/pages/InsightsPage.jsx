import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

function InsightsPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [insights, setInsights] = useState([]);
  const [selected, setSelected] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const sectionRefs = useRef([]);
  const progressRef = useRef(null);

  // Fetch insights
  useEffect(() => {
    fetch(`/api/insights/${name}`)
      .then((res) => res.json())
      .then((data) => setInsights(data))
      .catch((err) => console.error(err));
  }, [name]);

  // Scroll reveal
  useEffect(() => {
    if (!selected) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [selected]);

  // Progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = progress + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Convert bare URLs to markdown links
  const linkifyBareUrls = (text) => {
    return text.replace(
      /https?:\/\/[^\s\n]+/g,
      (url) => `[${url}](${url})`
    );
  };

  // Split sections
  const getSections = (content) => {
    if (!content) return [];

    return content.split(/(?=\n## )/g);
  };

  // Format date
  const formatDate = (title) => {
    const match = title?.match(/\d{4}-\d{2}-\d{2}/);

    if (!match) return null;

    const [year, month, day] = match[0].split("-");

    return `${day}-${month}-${year}`;
  };

  // Clean title
  const formatTitle = (title) => {
    if (!title) return "";

    return title
      .replace(/^\d{4}-\d{2}-\d{2}-/, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="app-container">

      {/* PROGRESS BAR */}
      <div
        ref={progressRef}
        className="progress-bar"
      ></div>

      {/* HEADER */}
      <div className="header">

        <p className="dimensions-tag">
          Insight Archive
        </p>

        <h1 style={{ textTransform: "capitalize" }}>
          {name.replace(/-/g, " ")} Insights
        </h1>

      </div>

      {/* LIST VIEW */}
      {!selected && (
        <>
          <div className="section-grid">

            {insights.map((item, index) => (
              <div
                key={index}
                className="card"
                onClick={() => setSelected(item)}
              >
                <h3>
                  {formatTitle(item.title)}
                </h3>

                <span>
                  Click to open
                </span>
              </div>
            ))}

          </div>

          {/* NAVIGATION */}
          <div className="dimension-navigation-row insights-navigation">

            <button
              className="button secondary-button"
              onClick={() => navigate(`/dimension/${name}`)}
            >
              ← Back To dimension
            </button>

            <button
              className="button secondary-button"
              onClick={() => navigate("/")}
            >
              ← Home
            </button>

          </div>
        </>
      )}

      {/* DETAIL VIEW */}
      {selected && (
        <div className="insight-wrapper">

          {/* DATE */}
          {formatDate(selected.title) && (
            <div className="floating-date">
              <span>
                On {formatDate(selected.title)}
              </span>
            </div>
          )}

          {/* CONTENT */}
          <div className="content-area">

            {getSections(selected.content).map((section, idx) => (
              <div
                key={idx}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className={`section-card ${
                  idx % 2 === 0 ? "left" : "right"
                }`}
              >
                <ReactMarkdown
                  components={{
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insight-link"
                      >
                        {children}
                      </a>
                    ),

                    img: ({ node, ...props }) => {
                      let src = props.src || "";

                      if (!src.startsWith("/")) {
                        src = "/" + src;
                      }

                      return (
                        <img
                          src={src}
                          alt={props.alt || "image"}
                          className="insight-image"
                          onClick={() => setZoomImage(src)}
                          onError={() => {
                            console.error(
                              "Image failed:",
                              src
                            );
                          }}
                        />
                      );
                    },
                  }}
                >
                  {linkifyBareUrls(section)}
                </ReactMarkdown>
              </div>
            ))}

          </div>

          {/* BACK */}
          <div className="bottom-nav">

            <button
              className="button"
              onClick={() => setSelected(null)}
            >
              ← Back To Insights
            </button>

          </div>

        </div>
      )}

      {/* IMAGE ZOOM */}
      {zoomImage && (
        <div
          className="zoom-overlay"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="zoom"
            className="zoom-image"
          />
        </div>
      )}

    </div>
  );
}

export default InsightsPage;