import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Navbar from './NavBar';
import ProjectOne from './ProjectOne';
import ScrollToTop from './ScrolltoTop';
import './App.css';
import CaseStudy from './CaseStudy';
import CarMatch from './CarMatch';

function App() {
  return (
    <div className="App">
      <div className="App-grid">
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/amendmotor" element={<ProjectOne />} />
        <Route path="/whatslively" element={<CaseStudy />} />
        <Route path="/caradvisory" element={<CarMatch />} />
      </Routes>
      </ScrollToTop>
    </div>
      
    </div>
  );
}

export default App;
