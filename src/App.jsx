import './App.css';
import NavBar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyScreen from './screens/CompanyScreen';
import TuristScreen from './screens/Turist/TuristScreen'; 


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CompanyScreen />} />
        <Route path="/turistas" element={<TuristScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
