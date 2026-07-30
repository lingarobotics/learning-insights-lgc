import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import DimensionsPage from "./pages/DimensionsPage";
import DimensionPage from "./pages/DimensionPage";
import InsightsPage from "./pages/InsightsPage";
import WhyThisExists from "./pages/WhyThisExists";
import HowToUseInsights from "./pages/HowToUseInsights";

import SplashScreen from "./components/SplashScreen";

import "./index.css";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 SPLASH SCREEN
  if (!isAppReady) {
    return (
      <SplashScreen
        isVisible={true}
        isFadingOut={false}
      />
    );
  }

  // 🔥 APP ROUTES
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* DIMENSIONS EXPLORER */}
        <Route
          path="/dimensions"
          element={<DimensionsPage />}
        />

        {/* SINGLE DIMENSION */}
        <Route
          path="/dimension/:name"
          element={<DimensionPage />}
        />

        {/* DIMENSION INSIGHTS */}
        <Route
          path="/dimension/:name/insights"
          element={<InsightsPage />}
        />

        {/* WHY THIS EXISTS */}
        <Route
          path="/why-this-exists"
          element={<WhyThisExists />}
        />

        {/* HOW TO USE INSIGHTS */}
        <Route
          path="/how-to-use-insights"
          element={<HowToUseInsights />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;