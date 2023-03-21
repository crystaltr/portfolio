import { Route, Routes } from 'react-router-dom';


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
