import Hero from "../../components/HeroText/HeroText";
import TuristOne from './TuristOne/TuristOne';
import './styles.css';
import TuristThree from "./TuristThree/TuristThree";
import TuristTwo from "./TuristTwo/TuristTwo";

const TuristScreen = () => {
    return (
        <div className="containerTurist"> 
            <Hero 
                titleColor="Pagá con pix "
                title="sin límites en Argentina" 
                fontFamily='Poppins-Bold, sans-serif'
                subtitle="Viví experiencias únicas pagando como si estuvieses en casa" 
            />
            <div className="light"></div>
            <div className="light2"></div>

            <TuristOne />
            <TuristTwo />
            <TuristThree />
        </div>
    );
}

export default TuristScreen;
