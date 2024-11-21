
import './App.css';
import NavBar from './components/NavBar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import CompanyScreen from './screens/CompanyScreen';
import TuristScreen from './screens/Turist/TuristScreen'; 
import Condiciones from './screens/Condiciones/Condiciones';
import Prensa from './screens/Prensa/Prensa';
import Footer from './components/Footer/Footer';
import ReactGA from "react-ga4";
import TextFooter from './components/Footer/TextFooter';

// Otra manera de no mostraee el ID es con Google Tag Manager (a chequear)
ReactGA.initialize("your GA measurement id");

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/terminos' || location.pathname === '/prensa';

  ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });

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
      <TextFooter />
    </>
  );
}

export default App;
