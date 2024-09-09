import CardDrag from '../../../components/Card/CardGrag/CardDrag';
import Transferencias from '@images/transferencias.png';
import Tecnologia from '@images/image4.png';
import Descuentos from '@images/plataforma-costo.png';
import Seguridad from '@images/seguridad.png';
import Soporte from '@images/soporte.png';
import Efectivo from '@images/efectivo.png';
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
            <CardDrag item0
          imageDrag={Efectivo}
          titleDrag='Adios efectivo excesivo'
          textDrag='Pagás en el acto, directo desde tu cuenta, sin preocuparte por llevar efectivo. ¡Disfrutá tu viaje con total libertad y seguridad!'
        />
            <CardDrag item0
          imageDrag={Soporte}
          titleDrag='Soporte'
          textDrag='Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.'
        />
            </div>
        </section>
    )
}

export default TuristFive;