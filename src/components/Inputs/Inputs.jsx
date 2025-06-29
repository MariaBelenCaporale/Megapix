import { useState, useTransition, useEffect, useRef } from 'react';
import useCalculateBrl from '../../hooks/useCalculateBrl';
import useCalculateArs from "../../hooks/useCalculateArs";
import argentinaFlag from '../../images/argentina.png'; 
import eeuuFlag from '../../images/eeuu.png'; 
import brasilFlag from '../../images/brasil.jpg'; 
import Check from '../../images/check.png';
import Codigo from '../../images/codigo.png';
import LogoMegaPix from '../../assets/logo-megapix.png';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Inputs = () => {
  const { t } = useTranslation();

  const [isLoadingQr, startTransitionQr] = useTransition();
  const [arsInput, setArsInput] = useState('');
  const [usdInput, setUsdInput] = useState('');
  const [brlInput, setBrlInput] = useState('');
  const [concept, setConcept] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showMessageArs, setShowMessageArs] = useState(true);
  const [showMessageUsd, setShowMessageUsd] = useState(false);
  const [showMessageMotive, setMessageMotive] = useState(false);
  const [showMessageBrl, setMessageBrl] = useState(false);
  const [hideMessages, setHideMessages] = useState(false);

  const { isPendingBrl, prices } = useCalculateBrl(usdInput);
  const { arsPrice, isPendingArs } = useCalculateArs();

  const messageRef = useRef(null); 

  const generateQrAction = async (event) => {
    event.preventDefault();
    startTransitionQr(async () => {
      setHideMessages(true); 
      setArsInput(true);
      setBrlInput(true);
      setConcept('');
      setUsdInput(true);
      setShowPopup(true);
  
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    });
  };

  useEffect(() => {
    if (isNaN(parseFloat(usdInput)) || !prices?.total_brl) {
      setBrlInput('');
    } else {
      setBrlInput(prices?.total_brl);
    }
  }, [prices, usdInput]);

  useEffect(() => {
    if (arsInput !== '') {
      const timer = setTimeout(() => {
        setShowMessageUsd(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [arsInput]);

  useEffect(() => {
    if (concept !== '') {
      const timer = setTimeout(() => {
        setMessageBrl(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [concept]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setShowMessageArs(false);
        setShowMessageUsd(false);
        setMessageMotive(false);
        setMessageBrl(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleArsChange = (event) => {
    const ars = event.target.value;
    setArsInput(ars);
    const usd = parseFloat(ars) / parseFloat(arsPrice);
    setUsdInput(usd.toFixed(2));
  };

  const handleUsdChange = (event) => {
    const usd = event.target.value;
    setUsdInput(usd);
    const ars = parseFloat(usd) * parseFloat(arsPrice);
    setArsInput(ars.toFixed(2));
  };

  return (
    <>
      <form onSubmit={generateQrAction} className='formStyles' >
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <label className='monto'>{t('Monto (ARS)')}</label>
          <input className='inputs'
            type='number'
            name='arsInput'
            value={arsInput}
            disabled={isPendingArs}
            placeholder='$0'
            onChange={handleArsChange}
            onClick={() => { setShowMessageArs(true); setShowMessageUsd(false); setMessageMotive(false); setMessageBrl(false) }}
            onFocus={() => { setShowMessageArs(true); setShowMessageUsd(false); setMessageMotive(false); setMessageBrl(false) }}
          />
          
          <div className='flag-container'>
            <img className='flagIcon' src={argentinaFlag} alt='Bandera de Argentina' />
            <span className='currency-label'>ARS</span>
          </div>

        </div>
        {(!hideMessages && showMessageArs) && (
          <div ref={messageRef} className='containerMessage arg'>
            <p className='messagePay'>{t('Ingresa el monto que queres cobrar 👉🏻')}</p>
          </div>
        )}
      
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <label className='monto'>USDT</label>
          <input className='inputs'
            type='number'
            name='usdInput'
            value={usdInput}
            disabled={isPendingArs}
            placeholder='$0'
            onChange={handleUsdChange}
            onClick={() => { setShowMessageUsd(true); setShowMessageArs(false); setMessageMotive(false); setMessageBrl(false) }}
            onFocus={() => { setShowMessageUsd(true); setShowMessageArs(false); setMessageMotive(false); setMessageBrl(false) }}
          />
          <div className='flag-container'>
            <img className='flagIcon' src={eeuuFlag} alt='Bandera de Estados Unidos' />
            <span className='currency-label'>USDT</span>
          </div>
        </div>
        {(!hideMessages && showMessageUsd) && (
          <div>
          <div ref={messageRef} className='containerMessageTwo usdt'>
            <p className='messagePay'>{t('Te mostramos el valor que vas a recibir en USDT (Dolar digital)')}</p>
          </div>
          <div ref={messageRef} className='containerMessageTwo usdtDos'>
            <p className='messagePay'>
            {t('El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.')} 
              </p>
          </div>
          </div>
        )}
        <div style={{ marginBottom: '16px' }}>
          <label className='monto'>{t('Motivo')}</label>
          <input className='inputs'
            type='text'
            name='concept'
            placeholder={t('Oso de peluche')}
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            onClick={() => { setShowMessageArs(false); setShowMessageUsd(false); setMessageMotive(true); setMessageBrl(false) }}
            onFocus={() => { setShowMessageArs(false); setShowMessageUsd(false); setMessageMotive(true); setMessageBrl(false) }}
          />
        </div>
        {(!hideMessages && showMessageMotive) && (
          <div ref={messageRef} className='containerMessage motive'>
            <p className='messagePay'>{t('Colocás el “Motivo” de la operación.')}</p>
          </div>
        )}

        <hr style={{ margin: '16px 0', border: '1px solid #ccc' }} />

        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <label className='monto'>{t('Monto a cobrar (BRL)')}</label>
          <input className='inputs'
            type='number'
            name='brlInput'
            value={brlInput}
            readOnly
            placeholder='$0'
            onClick={() => { setShowMessageArs(false); setShowMessageUsd(false); setMessageMotive(false); setMessageBrl(true) }}
            onFocus={() => { setShowMessageArs(false); setShowMessageUsd(false); setMessageMotive(false); setMessageBrl(true) }}
          />
          <div className='flag-container'>
            <img className='flagIcon' src={brasilFlag} alt='Bandera de Brasil' />
            <span className='currency-label'>BRL</span>
          </div>
        </div>
        {(!hideMessages && showMessageBrl) && (
          <div ref={messageRef} className='containerMessageTwo brl'>
            <p className='messagePay'>
            {t('Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️')}
              
            </p>
          </div>
        )}

        <button
          type='submit'
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            fontFamily: "Poppins-Medium",
            backgroundColor: '#62FEE2',
            color: 'black',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: (!concept || !usdInput || !arsInput) ? 0.5 : 1
          }}
          disabled={!concept || !usdInput || !arsInput || isPendingBrl || isLoadingQr || isPendingArs}
        >
          <span>{t('Cobrar')}</span>
        </button>
      </form>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <div>
              <h2 className='textPopUp'>{t('¡Pago realizado!')}</h2>
            </div>
            <img className='imgCheck' src={Check} alt='aprobado' />
            <img className='imgCodigo' src={Codigo} alt='codigo qr' />
            <div>
              <img className='imgPixPop' src={LogoMegaPix} alt='logo de Megapix' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inputs;
