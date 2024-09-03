import { useState, useTransition, useEffect } from 'react';
import useCalculateBrl from '../../hooks/useCalculateBrl';
import useCalculateArs from "../../hooks/useCalculateArs";
import argentinaFlag from '../../images/argentina.png'; 
import eeuuFlag from '../../images/eeuu.png'; 
import brasilFlag from '../../images/brasil.jpg'; 
import Check from '../../images/check.png';
import Codigo from '../../images/codigo.png';
import LogoMegaPix from '../../assets//logo-megapix.png';
import './styles.css';

const Inputs = () => {
  const [isLoadingQr, startTransitionQr] = useTransition();
  const [arsInput, setArsInput] = useState('');
  const [usdInput, setUsdInput] = useState('');
  const [brlInput, setBrlInput] = useState('');
  const [concept, setConcept] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const { isPendingBrl, prices } = useCalculateBrl(usdInput);
  const { arsPrice, isPendingArs } = useCalculateArs();

  useEffect(() => {
    if (isNaN(parseFloat(usdInput)) || !prices?.total_brl) {
      setBrlInput('');
    } else {
      setBrlInput(prices?.total_brl);
    }
  }, [prices, usdInput]);

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

  const generateQrAction = async (event) => {
    event.preventDefault();
    startTransitionQr(async () => {
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    });
  };

  return (
    <>
      <form onSubmit={generateQrAction} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <label className='monto'>Monto (ARS)</label>
          <input className='inputs'
            type='number'
            name='arsInput'
            value={arsInput}
            disabled={isPendingArs}
            placeholder='$0'
            onChange={handleArsChange}
          />
          
          <div className='flag-container'>
            <img className='flagIcon' src={argentinaFlag} alt='Bandera de Argentina' />
            <span className='currency-label'>ARS</span>
          </div>
        </div>

        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <label className='monto'>USDT</label>
          <input className='inputs'
            type='number'
            name='usdInput'
            value={usdInput}
            disabled={isPendingArs}
            placeholder='$0'
            onChange={handleUsdChange}
          />
          <div className='flag-container'>
            <img className='flagIcon' src={eeuuFlag} alt='Bandera de Estados Unidos' />
            <span className='currency-label'>USDT</span>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label className='monto'>Motivo</label>
          <input className='inputs'
            type='text'
            name='concept'
            placeholder='Oso de peluche'
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          />
        </div>

        <hr style={{ margin: '16px 0', border: '1px solid #ccc' }} />

        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <label className='monto'>Monto a cobrar (BRL)</label>
          <input className='inputs'
            type='number'
            name='brlInput'
            value={brlInput}
            readOnly
            placeholder='$0'
          />
          <div className='flag-container'>
            <img className='flagIcon' src={brasilFlag} alt='Bandera de Brasil' />
            <span className='currency-label'>BRL</span>
          </div>
        </div>

        <button
          type='submit'
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            fontFamily: "Poppins-SemiBold",
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
          <span>Cobrar</span>
        </button>
      </form>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <div>
              <h2 className='textPopUp'>¡Pago realizado!</h2>
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
