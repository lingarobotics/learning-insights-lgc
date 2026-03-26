import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DomainPage from "./pages/DomainPage";
import "./index.css";
import InsightsPage from "./pages/InsightsPage";

function App() {
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