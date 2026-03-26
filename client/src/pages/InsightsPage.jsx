import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

function InsightsPage() {
  const { name } = useParams();

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

  // 🔥 Scroll reveal (kept intact)
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
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = progress + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SAFE SPLIT (IMPORTANT FIX)
  const getSections = (content) => {
    if (!content) return [];

    // preserves markdown structure
    const parts = content.split(/(?=\n## )/g);

    return parts;
  };

  // Format date
  const formatDate = (title) => {
    const match = title?.match(/\d{4}-\d{2}-\d{2}/);
    if (!match) return null;

    const [year, month, day] = match[0].split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="app-container">
      {/* PROGRESS BAR */}
      <div ref={progressRef} className="progress-bar"></div>

      {/* HEADER */}
      <div className="header">
        <h1 style={{ textTransform: "capitalize" }}>
          {name.replace("-", " ")} Insights
        </h1>
      </div>

      {/* LIST VIEW */}
      {!selected && (
        <div className="section-grid">
          {insights.map((item, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setSelected(item)}
            >
              <h3>{item.title}</h3>
              <span>Click to open</span>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL VIEW */}
      {selected && (
        <div className="insight-wrapper">

          {/* DATE */}
          {formatDate(selected.title) && (
            <div className="floating-date">
              <span>On {formatDate(selected.title)}</span>
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
                    img: ({ node, ...props }) => {
                      let src = props.src || "";

                      // normalize path
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
                            console.error("Image failed:", src);
                          }}
                        />
                      );
                    },
                  }}
                >
                  {section}
                </ReactMarkdown>
              </div>
            ))}
          </div>

          {/* BACK BUTTON */}
          <div className="bottom-nav">
            <button
              className="button"
              onClick={() => setSelected(null)}
            >
              ← Back
            </button>
          </div>
        </div>
      )}

      {/* 🔥 ZOOM MODAL */}
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