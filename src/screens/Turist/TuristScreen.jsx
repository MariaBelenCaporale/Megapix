import Hero from "../../components/HeroText/HeroText";
import './styles.css';

const TuristScreen = () => {
    return (
        <div className="containerTurist"> 
            <Hero 
                title="Pagá con pix sin límites en Argentina" 
                subtitle="Viví experiencias únicas pagando como si estuvieses en casa" 
            />
        </div>
    );
}

export default TuristScreen;
