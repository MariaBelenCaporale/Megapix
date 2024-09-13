import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            // SECTION EMPRESAS

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
            'Monto a cobrar (BRL)':'Monto a cobrar (BRL)',
            'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️':'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️',
            //SECTION FOUR
            'Funcionalidades principales':'Funcionalidades principales',
            'Gestión de cobros diarios':'Gestión de cobros diarios',
            'Gestión de billetera':'Gestión de billetera',
            'Gestión de ventas':'Gestión de ventas',
            'Gestión de tiendas':'Gestión de tiendas',
            'Gestión de usuarios':'Gestión de usuarios',
            //SECTION FIVE
            'Características & Beneficios':'Características & Beneficios',
            'Seguridad en cada cobro':'Seguridad en cada cobro',
            'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.':'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.',
            'Multiplataforma':'Multiplataforma',
            'Estar fuera de tu casa ya no es un problema, la plataforma puede usarse desde cualquier dispositivo con conexión a internet, ya sea tu celular o tablet.':'Estar fuera de tu casa ya no es un problema, la plataforma puede usarse desde cualquier dispositivo con conexión a internet, ya sea tu celular o tablet.',
            'Control de sucursales':'Control de sucursales',
            'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una. (Acciones limitadas a los roles asignados)':'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una. (Acciones limitadas a los roles asignados)',
            'Roles y permisos':'Roles y permisos',
            'Megapix ofrece un sistema de administracion y division de tareas reduciendo  la carga administrativa y  aumentando la eficiencia operativa.':'Megapix ofrece un sistema de administracion y division de tareas reduciendo  la carga administrativa y  aumentando la eficiencia operativa.',
            'Plataforma sin costo':'Plataforma sin costo',
            'Nuestra plataforma es completamente gratuita, lo que significa que no tendrás que preocuparte por tarifas ocultas ni comisiones por registro o uso.':'Nuestra plataforma es completamente gratuita, lo que significa que no tendrás que preocuparte por tarifas ocultas ni comisiones por registro o uso.',
            'Transferencias al instante':'Transferencias al instante',
            'Recibí tus cobros al instante de manera facil y segura':'Recibí tus cobros al instante de manera facil y segura',
            'Soporte':'Soporte',
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.':'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.',
            //SECTION SIX
            '¿ESTÁS LISTO?':'¿ESTÁS LISTO?',
            'Comencemos':'Comencemos',
            'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.':'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.',
            'Ir a la plataforma':'Ir a la plataforma',
            //SECTION SEVEN
            '¿Cómo puedo pagar en Brasil utilizando Pix?':'¿Cómo puedo pagar en Brasil utilizando Pix?',
            'Escaneando el QR o haciendo click en el link de pago desde tu cuenta de preferencia':'Escaneando el QR o haciendo click en el link de pago desde tu cuenta de preferencia',
            "¿Es seguro pagar con Pix en Argentina?":"¿Es seguro pagar con Pix en Argentina?",
            "Sí, Megapix garantiza transacciones seguras utilizando el sistema *Pix*, que está respaldado por el Banco Central de Brasil, asegurando la protección de tus datos y fondos.":"Sí, Megapix garantiza transacciones seguras utilizando el sistema *Pix*, que está respaldado por el Banco Central de Brasil, asegurando la protección de tus datos y fondos.",
            "¿Cuánto tiempo tarda en procesarse el pago?":"¿Cuánto tiempo tarda en procesarse el pago?",
            "Las transferencias a través de *Pix* son instantáneas, por lo que tu pago se reflejará en la cuenta del comerciante al momento de completarlo.":"Las transferencias a través de *Pix* son instantáneas, por lo que tu pago se reflejará en la cuenta del comerciante al momento de completarlo.",
            "¿Puedo usar Megapix en cualquier comercio en Argentina?":"¿Puedo usar Megapix en cualquier comercio en Argentina?",
            "Megapix* está disponible en los comercios afiliados a la plataforma. Te recomendamos consultar con el comercio si aceptan pagos a traves de *Megapix* antes de realizar tu compra.":"Megapix* está disponible en los comercios afiliados a la plataforma. Te recomendamos consultar con el comercio si aceptan pagos a traves de *Megapix* antes de realizar tu compra.",
            "¿Qué moneda utilizaré al hacer el pago?":"¿Qué moneda utilizaré al hacer el pago?",
            "Realizarás tu pago en reales brasileños.":"Realizarás tu pago en reales brasileños.",
            "¿Puedo usar Megapix desde mi celular?":"¿Puedo usar Megapix desde mi celular?",
            "Sí, puedes acceder a Megapix desde cualquier dispositivo móvil sin necesidad de descargar una app. Solo necesitas conexión a internet y un navegador":"Sí, puedes acceder a Megapix desde cualquier dispositivo móvil sin necesidad de descargar una app. Solo necesitas conexión a internet y un navegador",
            "¿Es necesario que tenga una cuenta bancaria argentina para usar Megapix?":"¿Es necesario que tenga una cuenta bancaria argentina para usar Megapix?",
            "No, solo necesitas tu cuenta de *Pix* en Brasil para realizar pagos en Argentina a través de Megapix.":"No, solo necesitas tu cuenta de *Pix* en Brasil para realizar pagos en Argentina a través de Megapix.",
            'Preguntas frecuentes':'Preguntas frecuentes',

            // TURISTAS ------------------
            "sin límites en Argentina":"sin límites en Argentina",

        }
    },
    br: {
        translation: {
            // SECTION EMPRESAS
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
            'Monto a cobrar (BRL)':'Falta',
            'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️':'Falta',
            //SECTION FOUR
            'Funcionalidades principales':'Falta',
            'Gestión de cobros diarios':'Falta',
            'Gestión de billetera':'Falta',
            'Gestión de ventas':'Falta',
            'Gestión de tiendas':'Falta',
            'Gestión de usuarios':'Falta',
            //SECTION FIVE
            'Características & Beneficios':'Falta',
            'Seguridad en cada cobro':'Falta',
            'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.':'Falta',
            'Multiplataforma':'Falta',
            'Estar fuera de tu casa ya no es un problema, la plataforma puede usarse desde cualquier dispositivo con conexión a internet, ya sea tu celular o tablet.':'Falta',
            'Control de sucursales':'Falta',
            'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una. (Acciones limitadas a los roles asignados)':'Falta',
            'Roles y permisos':'Falta',
            'Megapix ofrece un sistema de administracion y division de tareas reduciendo  la carga administrativa y  aumentando la eficiencia operativa.':'Falta',
            'Plataforma sin costo':'Falta',
            'Nuestra plataforma es completamente gratuita, lo que significa que no tendrás que preocuparte por tarifas ocultas ni comisiones por registro o uso.':'Falta',
            'Transferencias al instante':'Falta',
            'Recibí tus cobros al instante de manera facil y segura':'Falta',
            'Soporte':'Falta',
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días.':'Falta',
            //SECTION SIX
            '¿ESTÁS LISTO?':'Falta',
            'Comencemos':'Falta',
            'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.':'Falta',
            'Ir a la plataforma':'Falta',
            //SECTION SEVEN
            '¿Cómo puedo pagar en Brasil utilizando Pix?':'Falta',
            'Escaneando el QR o haciendo click en el link de pago desde tu cuenta de preferencia':'Falta',
            "¿Es seguro pagar con Pix en Argentina?":"Falta",
            "Sí, Megapix garantiza transacciones seguras utilizando el sistema *Pix*, que está respaldado por el Banco Central de Brasil, asegurando la protección de tus datos y fondos.":"Falta",
            "¿Cuánto tiempo tarda en procesarse el pago?":"Falta",
            "Las transferencias a través de *Pix* son instantáneas, por lo que tu pago se reflejará en la cuenta del comerciante al momento de completarlo.":"Falta",
            "¿Puedo usar Megapix en cualquier comercio en Argentina?":"falta",
            "Megapix* está disponible en los comercios afiliados a la plataforma. Te recomendamos consultar con el comercio si aceptan pagos a traves de *Megapix* antes de realizar tu compra.":"falta",
            "¿Qué moneda utilizaré al hacer el pago?":"falta",
            "Realizarás tu pago en reales brasileños.":"falta",
            "¿Puedo usar Megapix desde mi celular?":"falta",
            "Sí, puedes acceder a Megapix desde cualquier dispositivo móvil sin necesidad de descargar una app. Solo necesitas conexión a internet y un navegador":"falta",
            "¿Es necesario que tenga una cuenta bancaria argentina para usar Megapix?":"falta",
            "No, solo necesitas tu cuenta de *Pix* en Brasil para realizar pagos en Argentina a través de Megapix.":"falta",
            'Preguntas frecuentes':'falta',

            // TURISTAS ------------------
            "sin límites en Argentina":"falta",



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
