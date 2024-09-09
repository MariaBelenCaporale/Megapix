import CardDrag from '../../../components/Card/CardGrag/CardDrag';
import Transferencias from '@images/transferencias.png';
import Tecnologia from '@images/image4.png';
import Descuentos from '@images/plataforma-costo.png';
import Seguridad from '@images/seguridad.png';
import './styles.css'

const TuristFive = () => {
    return (
        <section className='containerTuristFive'>
            <div className='containerFiveTitle'>
                <h2 className="titleTuristFive">
                    Ventajas de usar <span className="highlight">Megapix</span>
                </h2>
            </div>
            <div className='containerDragFive'>
            <CardDrag item0
          imageDrag={Transferencias}
          titleDrag='Transferencias al instante'
          textDrag='Con Megapix, las transferencias se realizan en tiempo real, sin demoras ni complicaciones.'
        />
            <CardDrag item0
          imageDrag={Tecnologia}
          titleDrag='Tecnología PIX'
          textDrag='Con PIX pagás como si estuvieses en casa, de forma sencilla y sin complicaciones'
        />
            <CardDrag item0
          imageDrag={Descuentos}
          titleDrag='Descuentos'
          textDrag='Disfruta de descuentos exclusivos pagado con Pix en nuestros comercios adheridos'
        />
            <CardDrag item0
          imageDrag={Seguridad}
          titleDrag='Seguridad'
          textDrag=' Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza.'
        />
            </div>
        </section>
    )
}

export default TuristFive;