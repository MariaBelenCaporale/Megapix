import './styles.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SwitchComponent() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const initialAlignment = location.pathname === '/turistas' ? 'turistas' : 'empresas';
    const [alignment, setAlignment] = useState(initialAlignment);

    useEffect(() => {
        const newAlignment = location.pathname === '/turistas' ? 'turistas' : 'empresas';
        setAlignment(newAlignment);
    }, [location.pathname]);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);

            if (newAlignment === 'turistas') {
                navigate('/turistas');
            } else if (newAlignment === 'empresas') {
                navigate('/');
            }
        }
    };

    return (
        <Box className="containerSwitch" display="flex" alignItems="center">
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="text alignment"
                className='switch'
                sx={{
                    backgroundColor: '#3F3F3F',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: '10px',
                    gap: '1px',
                    '& .MuiToggleButton-root': {
                        height: '50px',
                        width: '100%',
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.50)',
                        fontFamily: 'Poppins-Regular',
                        borderWidth: '2px',
                        borderColor: '#3F3F3F',
                        fontSize: '18px',
                        fontWeight: 500,
                        borderRadius: '10px',
                        textTransform: 'none',
                        '&.Mui-selected': {
                            backgroundColor: 'transparent',
                            width: '100%',
                            color: 'white',
                            borderWidth: '2px',
                            borderColor: '#62FEE2',
                            // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;',
                            // backdropFilter: 'blur(17.845809936523438px)',
                            textAlign: 'center',
                            fontFamily: 'Poppins-Regular',
                            fontSize: '18px',
                            borderRadius: '10px',
                            textTransform: 'none',
                        },
                    },
                }}
            >
                <ToggleButton value="empresas" aria-label='empresas'>
                    <p className='empresa'>{t('Negocios AR')}</p>
                </ToggleButton>
                <ToggleButton value="turistas" aria-label="turistas">
                <p className='turista'>{t('Clientes BR')}</p>
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}
