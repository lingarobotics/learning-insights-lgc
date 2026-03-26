import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import DomainPage from "./pages/DomainPage";
import InsightsPage from "./pages/InsightsPage";
import SplashScreen from "./components/SplashScreen";
import "./index.css";

/* ===== SPLASH HANDLER ===== */
function AppContent() {
  const { pathname } = useLocation();

  const [showSplash, setShowSplash] = useState(false);
  const [isSplashFadingOut, setIsSplashFadingOut] = useState(false);

  useEffect(() => {
    // 🔹 Only show splash on home
    if (pathname !== "/") {
      setShowSplash(false);
      setIsSplashFadingOut(false);
      return;
    }

    // 🔥 Use localStorage (persistent)
    const hasSeenSplash = localStorage.getItem("lgc-splash-seen");

    if (hasSeenSplash) {
      setShowSplash(false);
      return;
    }

    localStorage.setItem("lgc-splash-seen", "true");

    setShowSplash(true);
    setIsSplashFadingOut(false);

    const fadeTimer = setTimeout(() => {
      setIsSplashFadingOut(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <>
      <SplashScreen
        isVisible={showSplash}
        isFadingOut={isSplashFadingOut}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain/:name" element={<DomainPage />} />
        <Route path="/domain/:name/insights" element={<InsightsPage />} />
      </Routes>
    </>
  );
}

/* ===== ROOT ===== */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;