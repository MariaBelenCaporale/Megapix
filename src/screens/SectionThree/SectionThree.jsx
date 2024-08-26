import Inputs from '../../components/Inputs/Inputs';
import './styles.css';

const SectionThree = () => {
    return (
        <section className='containerSection3'>
            <div>
            <h2 className='titleSectionThree'>¿Cómo funciona?</h2>
            <p className='subSectionThree'>¡Realicemos un cobro en vivo y en directo!</p>
            </div>

            <div>
                <Inputs />
            </div>
        </section>
    )
}

export default SectionThree;