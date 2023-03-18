import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';



export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Portfolio/" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}