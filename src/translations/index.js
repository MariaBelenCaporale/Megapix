import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            //HERO
            'cobra reales y recibí dólar digital': 'cobra reales y recibí dólar digital',
            'GRATIS': 'GRATIS',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones': 'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones',
        }
    },
    br: {
        translation: {
            //HERO
            'cobra reales y recibí dólar digital': 'Receba reais e ganhe dólar digital',
            'GRATIS': 'grátis',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones':'Obtenha sua conta e, quando desejar, retire em pesos ou cripto sem comissões'

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // Idioma predeterminado
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
