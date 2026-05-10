import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import DomainPage from "./pages/DomainPage";
import InsightsPage from "./pages/InsightsPage";
import SplashScreen from "./components/SplashScreen";
import "./index.css";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 3500); // 🔥 total splash duration

    return () => clearTimeout(timer);
  }, []);

  // 🔥 STEP 1: ONLY SPLASH
  if (!isAppReady) {
    return <SplashScreen isVisible={true} isFadingOut={false} />;
  }

  // 🔥 STEP 2: ACTUAL APP LOADS
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain/:name" element={<DomainPage />} />
        <Route path="/domain/:name/insights" element={<InsightsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;