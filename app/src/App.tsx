import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Portfolio } from "./pages/Portfolio";
import { Curriculo } from "./pages/Curriculo";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/curriculo" element={<Curriculo/>} />
      </Routes>
    </Router>
  );
}