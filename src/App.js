import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './NavBar';


function App() {
  return (
    <div className="App">
      <div className="App-grid">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
      
    </div>
  );
}

export default App;
