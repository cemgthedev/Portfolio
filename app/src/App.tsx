import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Portfolio } from "./pages/Portfolio";
import { Curriculo } from "./pages/Curriculo";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<LandingPage/>} />
        <Route path="/Portfolio/portfolio" element={<Portfolio/>} />
        <Route path="/Portfolio/curriculo" element={<Curriculo/>} />
      </Routes>
    </Router>
  );
}