import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
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
        <Route path="/project1" element={<ProjectOne />} />
        <Route path="/project2" element={<ProjectTwo />} />
        <Route path="/whatslively" element={<CaseStudy />} />
      </Routes>
      </ScrollToTop>
    </div>
      
    </div>
  );
}

export default App;
