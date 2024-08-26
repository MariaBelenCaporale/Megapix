
import Pix from '../../images/pix.png';
import ButtonFour from '../../components/buttonFour/ButtonFour';
import './styles.css';

const SectionFour = () => {
    return (
        <section className="sectionFour">
            <img className='pixImage' src={Pix} />
            <div className='cardFour'>
                <h2 className='titleFour'>Funcionalidades principales</h2>
              <div className='containerBtnFour'>
                <ButtonFour title='Gestión de cobros diarios'/>
                <ButtonFour title='Gestión de billetera'/>
                <ButtonFour title='Gestión de ventas'/>
                <ButtonFour title='Gestión de tiendas'/>
                <ButtonFour title='Gestión de usuarios'/>
              </div>

            </div>

        </section>
    )
};

export default SectionFour;