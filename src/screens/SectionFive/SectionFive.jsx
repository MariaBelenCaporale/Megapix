import CardDrag from "../../components/Card/CardGrag/CardDrag";
import Multiplataforma from '@images/Multiplataforma.png';
import Plataforma from '@images/plataforma-costo.png';
import Control from '@images/sucursales.png';
import Roles from '@images/Roles.png';
import Transferencias from '@images/transferencias.png';
import Soporte from '@images/soporte.png';
import "./styles.css";

const SectionFive = () => {
  return (
    <section className="containerSectionFive">
      <div className="containerFive">
        <h2 className="titleFive">Características & Beneficios</h2>
      </div>
      <div className="containerDragCardFive">
      <CardDrag item0
          imageDrag={Multiplataforma}
          titleDrag='Seguridad en cada cobro'
          textDrag='Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.'
        />
        <CardDrag item1
          imageDrag={Multiplataforma}
          titleDrag='Multiplataforma'
          textDrag='Podrás acceder y utilizar la plataforma desde la página web
              mediante todos los dispositivos que estén conectados a Internet
              (Celular, Tablet y Computadora)'
        />
        <CardDrag item2
          imageDrag={Control}
          titleDrag='Control de sucursales'
          textDrag='Podrás adherir todas las sucursales que estén asociadas a tu CUIT
              único y visualizar el historial de movimientos de cada una.
              (Acciones limitadas a los roles asignados)'
        />
        <CardDrag 
          imageDrag={Roles}
          titleDrag='Roles y permisos'
          textDrag='Megapix ofrece un sistema de administracion y division de tareas reduciendo  la carga administrativa y  aumentando la eficiencia operativa.'
        /> 
        <CardDrag 
          imageDrag={Plataforma}
          titleDrag='Plataforma sin costo'
          textDrag='Nuestra plataforma es completamente gratuita, lo que significa que no tendrás que preocuparte por tarifas ocultas ni comisiones por registro o uso.'
        /> 
        <CardDrag 
          imageDrag={Transferencias}
          titleDrag='Transferencias al instante'
          textDrag='Recibí tus cobros al instante de manera facil y segura'
        /> 
        <CardDrag 
          imageDrag={Soporte}
          titleDrag='Soporte'
          textDrag='Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.'
        /> 
      </div>
    </section>
  );
};

export default SectionFive;
