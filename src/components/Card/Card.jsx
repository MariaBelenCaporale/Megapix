import './styles.css';
import Rayo from "@images/rayo.png";
import { useTranslation } from 'react-i18next';

const Card = () => {
    const { t } = useTranslation();
    return (
        <div className='containerCard'>
            <div className='card'>
                <div className='textCardFirst'>
                    <p className='textCard'>
                    
                    {t('Más del 30% de los turistas que visitan Argentina provienen de Brasil, además de miles de residentes brasileños que desarrollan actividades comerciales en destinos clave como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Es por esto que desde Megapix pensamos una solución basada en el método de pago más popular en Brasil: PIX.')}
                    </p>
                    <p className='textCard'>
                    {t('¡Conectando con este mercado estratégico vas a poder hacer crecer los ingresos de tu negocio o emprendimiento!')} 
                    </p>
                    <p className='textCard'>
                    {t('Entonces... ¿Ya te convencimos?')}
                    </p>
                    <p className='textCard'>
                    {t('Si querés comenzar a cobrar con Pix ya podés hacerlo a través de nuestra plataforma, es 100% segura y gratuita.')}
                    </p>
                    <p className='textCard'>
                    {t('¡Potencia tu negocio al alcance de tu mano con Megapix!')}
                    </p>
                </div>

                <div className='containerTextRight'>
                    <img className='rayoImg' src={Rayo} alt='Imagen de un rayo' />
                    <h2 className='tituloCard'>{t('crecé sin fronteras')}</h2>
                </div>
            </div>
        </div>
    )
};

export default Card;