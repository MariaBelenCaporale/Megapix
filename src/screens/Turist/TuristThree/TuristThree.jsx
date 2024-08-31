import CardTurist from '../../../components/Card/CardTurist/CardTurist';
import './styles.css';

const TuristThree = () => {
    return (
        <div className='containerTurThree'>
            <h2 className="titleTuristThree">
            Vení a disfrutar de Argentina con <span className="highlight">Megapix</span>
            </h2>
            <div className='containerCardTurOne'>
                <CardTurist />
            </div>
        </div>
    )
}

export default TuristThree;