import Hero from "../../components/HeroText/HeroText";
import './styles.css';

const TuristScreen = () => {
    return (
        <div className="containerTurist"> 
            <Hero 
                title="pagá en reales con pix desde tu banco" 
                subtitle="Viví tus vacaciones pagando como si estuvieses en casa" 
            />
        </div>
    );
}

export default TuristScreen;
