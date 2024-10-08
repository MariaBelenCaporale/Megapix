import './App.css';
import NavBar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyScreen from './screens/CompanyScreen';
import TuristScreen from './screens/Turist/TuristScreen'; 

import Condiciones from './screens/Condiciones/Condiciones';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CompanyScreen />} />
        <Route path="/turistas" element={<TuristScreen />} />
        <Route path="/terminos" element={<Condiciones />} />
      </Routes>
    </Router>
  );
}

export default App;
