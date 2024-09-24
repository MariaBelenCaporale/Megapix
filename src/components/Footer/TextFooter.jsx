import './styles.css';
import { useTranslation } from 'react-i18next';


const TextFooter = () => {
    const { t } = useTranslation();
    return (
        <div className='containerTextImportant'>
            <div className='containerImportant'>
            <p className='textImportant'>{t('Cavaliere Group S.R.L”- Proveedor de Servicios de Activos Virtuales (PSAV) inscripto bajo el N°X de fecha "X" en el Registro de Proveedores de Servicios de Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN NACIONAL DE VALORES sobre la actividad realizada por el PSAV')}</p>
            </div>
        </div>
    )
}

export default TextFooter;