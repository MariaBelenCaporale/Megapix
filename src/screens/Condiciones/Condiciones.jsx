import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useTranslation } from 'react-i18next';
import LanguageSelect from "../../components/Languaje/LanguageSelect";
import Logo from '@images/logoNeon.png';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { NavLink } from "react-router-dom";
import './styles.css';
import Footer from '../../components/Footer/Footer';
import Terminos from '../Terminos/Terminos';

const Condiciones = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
      {
          question: t('Términos y condiciones'),
          answer: <Terminos section="condiciones" />,
      },
      {
          question: t("Políticas de privacidad"),
          answer: <Terminos section="privacidad" />,
      },
      {
          question: t("Términos y condiciones adicionales"),
          answer: <Terminos section="adicionales" />,
      },
  ];

    return (
        <section className="containerSectionCond">
          <div className="containerNavCondiciones">
            <div className="containerLogo">
              <a className="linkLogoNav" href="/">
                <img className="logoCon" src={Logo} alt="Logo Megapix" />
              </a>
            </div>
              <LanguageSelect />
          </div>
          <div className='contenedorCondicionesTotal'>
          <div>
             <NavLink to="/" className='return' >
             <KeyboardArrowLeftRoundedIcon />
            { t("Volver")}
             
             </NavLink>
         </div>
         
        <div className="containerTitleTerms">
            <h2 className="titleTerms">{t('Términos y condiciones')}</h2>
        </div>

        <div className='containerAsk'>
                {faqs.map((faq, index) => (
                    <div key={index} className='askCondiciones'>
                        <div
                            className='question'
                            onClick={() => handleToggle(index)}
                        >
                            <p className={`questionText ${activeIndex === index ? 'active' : ''}`}>
                                {faq.question}
                            </p>
                            
                            <span className={`icon ${activeIndex === index ? 'open' : ''}`}>
                                <KeyboardArrowDownRoundedIcon />
                            </span>
                        </div>
                        <div className='line'> </div>
                        {activeIndex === index && (
                            <div className='response'>
                                <p className='responseText'>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            </div>
            <Footer />
        </section>
    );
}

export default Condiciones;

