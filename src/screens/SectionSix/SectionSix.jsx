import './styles.css';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';

const SectionSix = () => {
    const gifUrl = 'https://media.giphy.com/media/0xhORIXTg2XPQeoJQk/giphy.gif';

    return (
        <section className='sectionSix'>
            <div className='containerVideosSix'>
            <div className='containerTextSix'>
                <p className='itemSix'>ESTÁS LISTO?</p>
                <h2 className='titleSectionSix'>COMENCEMOS</h2>
                <p className='subtitleSectionSix'>Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.</p>
                <ButtonComponent title='Ir a la plataforma' />
            </div>
            
                <div className='containerVideo'>
                    <img src={gifUrl} alt='Example GIF' className='videoGif' />
                </div>
            </div>
        </section>
    );
}

export default SectionSix;
