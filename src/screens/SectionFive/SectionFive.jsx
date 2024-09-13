import CardDrag from "../../components/Card/CardGrag/CardDrag";
import Multiplataforma from '@images/Multiplataforma.png';
import Plataforma from '@images/plataforma-costo.png';
import Control from '@images/sucursales.png';
import Roles from '@images/Roles.png';
import Transferencias from '@images/transferencias.png';
import Soporte from '@images/soporte.png';
import Coin from '@images/coinUno.png';
import { useTranslation } from 'react-i18next';
import "./styles.css";

const SectionFive = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSectionFive">
      <div className="containerFive">
        <h2 className="titleFive">{t('Características & Beneficios')}</h2>
      </div>
      <div className="containerCoinFive">
        <img className="coinSectionFive" src={Coin} alt="Moneda megapix" />
      </div>
      <div className="containerDragCardFive">
      <CardDrag item0
          imageDrag={Multiplataforma}
          titleDrag={t('Seguridad en cada cobro')}
          textDrag={t('Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.')}
        />
        <CardDrag item1
          imageDrag={Multiplataforma}
          titleDrag={t('Multiplataforma')}
          textDrag={t('Estar fuera de tu casa ya no es un problema, la plataforma puede usarse desde cualquier dispositivo con conexión a internet, ya sea tu celular o tablet.')}
        />
        <CardDrag item2
          imageDrag={Control}
          titleDrag={t('Control de sucursales')}
          textDrag={t('Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una. (Acciones limitadas a los roles asignados)')}
        />
        <CardDrag 
          imageDrag={Roles}
          titleDrag={t('Roles y permisos')}
          textDrag={t('Megapix ofrece un sistema de administracion y division de tareas reduciendo  la carga administrativa y  aumentando la eficiencia operativa.')}
        /> 
        <CardDrag 
          imageDrag={Plataforma}
          titleDrag={t('Plataforma sin costo')}
          textDrag={t('Nuestra plataforma es completamente gratuita, lo que significa que no tendrás que preocuparte por tarifas ocultas ni comisiones por registro o uso.')}
        /> 
        <CardDrag 
          imageDrag={Transferencias}
          titleDrag={t('Transferencias al instante')}
          textDrag={t('Recibí tus cobros al instante de manera facil y segura')}
        /> 
        <CardDrag 
          imageDrag={Soporte}
          titleDrag={t('Soporte')}
          textDrag={t('Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.')}
        /> 
      </div>
    </section>
  );
};

export default SectionFive;
