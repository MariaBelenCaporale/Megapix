import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import './styles.css';
import Nave from '@images/nave.png';
import { useTranslation } from 'react-i18next';


const PrensaContent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/prensa")
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }


    return (
        <div className='containerContentPrensa'>
            <div className='contenedorPrensaContent'>
                <div className='containerTextPrensaContent'>
                    <div className='containerImgPrensaContent'>
                        <img src={Nave} className='imgPrensaContent' />
                    </div>
                </div>
                <div className='containerTextPrensaContent'>
                    <h2 className='tituloPrensaContent'>{t('Prensa')}</h2>
                    <p className='subPrensaContent'>{t('Más de 33 notas de prensa en reconocidos medios de comunicación destacaron a Megapix como la solución digital innovadora que está transformando las conexiones financieras en Argentina.')}</p>
                    <p className='subPrensaContent'>{t('¡Te invitamos a explorar todas las notas en la sección de prensa!')}</p>
                    <ButtonComponent 
                    title={t('Ver notas de prensa')}
                    onClick={handleButtonClick}
                    />
                </div>
            </div>
        </div>
    )
};


export default PrensaContent;