import './styles.css';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';

const SectionSix = () => {
    return (
        <section className='sectionSix'>
            <div className='containerTextSix'>
                <p className='itemSix'>ESTÁS LISTO?</p>
                <h2 className='titleSectionSix'>COMENCEMOS</h2>
                <p className='subtitleSectionSix'>Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix. </p>
                <ButtonComponent title='Ir a la plataforma' />
            </div>
        </section>
    )
}

export default SectionSix;