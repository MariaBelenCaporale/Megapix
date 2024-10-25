import './App.css';
import NavBar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CompanyScreen from './screens/CompanyScreen';
import TuristScreen from './screens/Turist/TuristScreen'; 
import Condiciones from './screens/Condiciones/Condiciones';
import Prensa from './screens/Prensa/Prensa';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/terminos' || location.pathname === '/prensa';

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<CompanyScreen />} />
        <Route path="/turistas" element={<TuristScreen />} />
        <Route path="/terminos" element={<Condiciones />} />
        <Route path="/prensa" element={<Prensa />} />
      </Routes>
      <Footer 
        link={'https://www.instagram.com/megapix_arg/'}
      />
    </>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
