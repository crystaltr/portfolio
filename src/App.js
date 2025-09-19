import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Navbar from './NavBar';
import ScrollToTop from './ScrolltoTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-grid">
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      </ScrollToTop>
    </div>
      
    </div>
  );
}

export default App;
