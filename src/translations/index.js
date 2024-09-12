import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            //HERO
            'cobra reales y recibí dólar digital': 'cobra reales y recibí dólar digital',
            'GRATIS': 'GRATIS',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones': 'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones',
            //SECTION ONE
            'Potenciá tu negocio': 'Potenciá tu negocio',

            'Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.':'Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.',

           'Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.':'Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.',

            '¡Descubrí cómo podemos transformar tu negocio!':'¡Descubrí cómo podemos transformar tu negocio!',

            'crecé sin fronteras':'crecé sin fronteras',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis': 'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis',
            //SECTION TWO
            'Ventajas de usar': 'Ventajas de usar',
            'Megapix': 'Megapix',
        }
    },
    br: {
        translation: {
            //HERO
            'cobra reales y recibí dólar digital': 'Receba reais e ganhe dólar digital',
            'GRATIS': 'grátis',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones':'Obtenha sua conta e, quando desejar, retire em pesos ou cripto sem comissões',
            //SECTION ONE
            'Potenciá tu negocio': '',
            'Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.': '',

            'Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.':'',

            '¡Descubrí cómo podemos transformar tu negocio!': '',

            'crecé sin fronteras':'',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis': '',
            //SECTION TWO
            'Ventajas de usar' : '',
            'Megapix': '',



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
