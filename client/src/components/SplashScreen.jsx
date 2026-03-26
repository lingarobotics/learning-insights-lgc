// client/src/components/SplashScreen.jsx

function SplashScreen({ isVisible, isFadingOut }) {
  if (!isVisible) return null;

  return (
    <div className={`splash ${isFadingOut ? "fade-out" : ""}`}>
      <img src="/learn-with-linga-logo-circular.png" alt="Learn With Linga" />
      <h1>Learn With Linga</h1>
      <p>Learning is not memorizing — it is reasoning.</p>

      {/* Loader */}
      <div className="loader"></div>
    </div>
  );
}

export default SplashScreen;