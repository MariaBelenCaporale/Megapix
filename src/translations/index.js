import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            // SECTION EMPRESAS
            //HERO
            'cobra reales y recibí dólar digital':'cobra reales y recibí dólar digital',
            'GRATIS':'GRATIS',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones':'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones',
            //SECTION ONE
            'Potenciá tu negocio':'Potenciá tu negocio',
            
            'Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.':'Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.',
           
            'Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.':'Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.',

            '¡Descubrí cómo podemos transformar tu negocio!':'¡Descubrí cómo podemos transformar tu negocio!',
            'crecé sin fronteras':'crecé sin fronteras',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis':'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis',
            //SECTION TWO
            'Ventajas de usar':'Ventajas de usar',
            'Megapix':'Megapix',
            //SECTION THREE
            '¿Cómo funciona?':'¿Cómo funciona?',
            '¡Realicemos un cobro en vivo y en directo!':'¡Realicemos un cobro en vivo y en directo!',
            //Inputs
            'Monto (ARS)':'Monto (ARS)',
            'Ingresá el monto que querés cobrar en pesos ARG. 🇦🇷':'Ingresá el monto que querés cobrar en pesos ARG. 🇦🇷',
            'Te mostramos el valor que vas a recibir en USDT (Dolar digital)':'Te mostramos el valor que vas a recibir en USDT (Dolar digital)',
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.',
            'Motivo':'Motivo',
            'Oso de peluche':'Oso de peluche',
            'Colocás el “Motivo” de la operación.':'Colocás el “Motivo” de la operación.',

        }
    },
    br: {
        translation: {
            // SECTION EMPRESAS
            //HERO
            'cobra reales y recibí dólar digital':'Receba reais e ganhe dólar digital',
            'GRATIS':'Falta',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto sin comisiones':'Falta',
            //SECTION ONE
            'Potenciá tu negocio':'Falta',
            'Más del 30% de quienes que visitan Argentina son de Brasil, sumado a miles de personas residentes que desarrollan actividades comerciales en destinos como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Aprovechá esta oportunidad para conectar tu negocio con este importante mercado.':'Falta',

            'Obtené nuestra plataforma de cobro rápida y segura, que utiliza PIX, el método de pago más popular en Brasil. Destacá tu comercio frente a la competencia y brindá un servicio excepcional.':'Falta',

            '¡Descubrí cómo podemos transformar tu negocio!':'Falta',
            'crecé sin fronteras':'Falta',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis':'Falta',
            //SECTION TWO
            'Ventajas de usar':'Falta',
            'Megapix':'Falta',
            //SECTION THREE
            '¿Cómo funciona?':'Falta',
            '¡Realicemos un cobro en vivo y en directo!':'Falta',
            //Inputs
            'Monto (ARS)':'Falta',
            'Ingresá el monto que querés cobrar en pesos ARG. 🇦🇷':'Falta',
            'Te mostramos el valor que vas a recibir en USDT (Dolar digital)':'Falta',
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'Falta',
            'Motivo':'Falta',
            'Oso de peluche':'Falta',
            'Colocás el “Motivo” de la operación.':'Falta',



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
