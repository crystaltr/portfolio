import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import ProjectOne from './ProjectOne';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-grid">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project1" element={<ProjectOne />} />
      </Routes>
    </div>
      
    </div>
  );
}

export default App;
