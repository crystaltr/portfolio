import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import ProjectOne from './ProjectOne';
import ScrollToTop from './ScrolltoTop';
import './App.css';
import CaseStudy from './CaseStudy';

function App() {
  return (
    <div className="App">
      <div className="App-grid">
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/amendmotor" element={<ProjectOne />} />
        <Route path="/whatslively" element={<CaseStudy />} />
      </Routes>
      </ScrollToTop>
    </div>
      
    </div>
  );
}

export default App;
