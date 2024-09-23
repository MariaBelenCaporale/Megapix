import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            // SECTION EMPRESAS

            'cobra reales y recibí dólar digital ':'cobra reales y recibí dólar digital ',
            'GRATIS':'GRATIS',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto.':'Obtené tu cuenta y cuando desees retirá en pesos o cripto.',
            //SECTION ONE
            'Potenciá tu negocio':'Potenciá tu negocio',
            
            'Más del 30% de los turistas que visitan Argentina provienen de Brasil, además de miles de residentes brasileños que desarrollan actividades comerciales en destinos clave como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Es por esto que desde Megapix pensamos una solución basada en el método de pago más popular en Brasil: PIX.':'Más del 30% de los turistas que visitan Argentina provienen de Brasil, además de miles de residentes brasileños que desarrollan actividades comerciales en destinos clave como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Es por esto que desde Megapix pensamos una solución basada en el método de pago más popular en Brasil: PIX.',
           
            '¡Conectando con este mercado estratégico vas a poder hacer crecer los ingresos de tu negocio o emprendimiento!':'¡Conectando con este mercado estratégico vas a poder hacer crecer los ingresos de tu negocio o emprendimiento!',

            'Entonces... ¿Ya te convencimos?':'Entonces... ¿Ya te convencimos? ',
            'crecé sin fronteras':'crecé sin fronteras',

            'Si querés comenzar a cobrar con Pix ya podés hacerlo a través de nuestra plataforma, es 100% segura y gratuita.':'Si querés comenzar a cobrar con Pix ya podés hacerlo a través de nuestra plataforma, es 100% segura y gratuita.',

            '¡Potencia tu negocio al alcance de tu mano con Megapix!':'¡Potencia tu negocio al alcance de tu mano con Megapix!',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis':'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis',
            //SECTION TWO
            'Ventajas de usar':'Ventajas de usar',
            'Megapix':'Megapix',
            "Control de tus finanzas":"Control de tus finanzas",
            "Cobros QR y Link de pago":"Cobros QR y Link de pago",
            "Conexión con turistas":"Conexión con turistas",
            "Gratis":"Gratis",
            "Rápido":"Rápido",
            "Fácil":"Fácil",
            "Sin comisiones":"Sin comisiones",
            "Pagos inmediatos":"Pagos inmediatos",
            "Cobros sin barreras":"Cobros sin barreras",
            "Segura":"Segura",
            "Soporte 24/7":"Soporte 24/7",
            "Gestión de negocios":"Gestión de negocios",
            //SECTION THREE
            '¿Cómo funciona?':'¿Cómo funciona?',
            '¡Realicemos un cobro en vivo y en directo!':'¡Realicemos un cobro en vivo y en directo!',
            //Inputs
            'Monto (ARS)':'Monto (ARS)',
            'Ingresa el monto que queres cobrar 👉🏻':'Ingresa el monto que queres cobrar 👉🏻',
            'Te mostramos el valor que vas a recibir en USDT (Dolar digital)':'Te mostramos el valor que vas a recibir en USDT (Dolar digital)',
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.',
            'Motivo':'Motivo',
            'Oso de peluche':'Oso de peluche',
            'Colocás el “Motivo” de la operación.':'Colocás el “Motivo” de la operación.',
            'Monto a cobrar (BRL)':'Monto a cobrar (BRL)',
            'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️':'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️',
            'Cobrar':'Cobrar',
            '¡Pago realizado!':'¡Pago realizado!',




            //SECTION FOUR
            'Funcionalidades principales':'Funcionalidades principales',
            'Gestión de cobros diarios':'Gestión de cobros diarios',
            'Gestión de billetera':'Gestión de billetera',
            'Gestión de ventas':'Gestión de ventas',
            'Gestión de tiendas':'Gestión de tiendas',
            'Gestión de usuarios':'Gestión de usuarios',
            //SECTION FIVE
            'Características & Beneficios':'Características & Beneficios',
            'Cobros seguros':'Cobros seguros',
            'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.':'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.',
            'Multiplataforma':'Multiplataforma',
            'Podrás acceder y utilizar la plataforma desde cualquier dispositivo que tenga conexión a internet, ya sea un celular o una tablet, sin necesidad de contar con una computadora para ello.':'Podrás acceder y utilizar la plataforma desde cualquier dispositivo que tenga conexión a internet, ya sea un celular o una tablet, sin necesidad de contar con una computadora para ello.',
            'Control de sucursales':'Control de sucursales',
            'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una (Roles y permisos asignados a quien consideres).':'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una (Roles y permisos asignados a quien consideres).',
            'Roles y permisos':'Roles y permisos',
            'Megapix ofrece un sistema de administración y división de tareas, donde existe un administrador, co-administrador, gerente y cajero o cobrador, logrando aumentar la eficiencia operativa.':'Megapix ofrece un sistema de administración y división de tareas, donde existe un administrador, co-administrador, gerente y cajero o cobrador, logrando aumentar la eficiencia operativa.',
            'Plataforma sin costo':'Plataforma sin costo',
            'Nuestra plataforma es 100% gratuita, lo que significa que no tendrás que preocuparte por la letra chica ni comisiones por registro o uso.':'Nuestra plataforma es 100% gratuita, lo que significa que no tendrás que preocuparte por la letra chica ni comisiones por registro o uso.',
            //Pagos inmediatos
            'Cobrá reales y recibí dolar digital en tu cuenta Megapix al instante de manera fácil y segura. Luego podrás retirarlo cuando quieras en USDT o en pesos argentinos.':'Cobrá reales y recibí dolar digital en tu cuenta Megapix al instante de manera fácil y segura. Luego podrás retirarlo cuando quieras en USDT o en pesos argentinos.',
            //Soporte 24/7
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites con atención personalizada y rápida las 24 horas, todos los días.':'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites con atención personalizada y rápida las 24 horas, todos los días.',
            'Dólar digital (USDT)':'Dólar digital (USDT)',
            'El dólar digital USDT es una stablecoin que está vinculada al valor del dólar estadounidense, lo que significa que su valor se mantiene estable y  protege a los usuarios de la volatilidad. ¡Cobrar en USDT puede aportar estabilidad, agilidad en las transacciones y nuevas oportunidades financieras!':'El dólar digital USDT es una stablecoin que está vinculada al valor del dólar estadounidense, lo que significa que su valor se mantiene estable y  protege a los usuarios de la volatilidad. ¡Cobrar en USDT puede aportar estabilidad, agilidad en las transacciones y nuevas oportunidades financieras!',
            //SECTION SIX
            '¿ESTÁS LISTO?':'¿ESTÁS LISTO?',
            'Comencemos':'Comencemos',
            'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.':'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.',
            'Ir a la plataforma':'Ir a la plataforma',
            //SECTION SEVEN
            '¿La plataforma tiene costo?':'¿La plataforma tiene costo?',
            'No, los servicios de Megapix son completamente gratuitos. Solo debes considerar el costo de la red cripto para los retiros, una comisión que es ajena a Megapix y depende de la red blockchain utilizada.':'No, los servicios de Megapix son completamente gratuitos. Solo debes considerar el costo de la red cripto para los retiros, una comisión que es ajena a Megapix y depende de la red blockchain utilizada.',
            "¿Qué es Pix?":"¿Qué es Pix?",
            "PIX es un sistema de pagos instantáneos desarrollado por el Banco Central de Brasil. Esta tecnología te permite recibir pagos en reales de forma rápida, segura y sin costo, convirtiéndolos automáticamente en USDT.":"PIX es un sistema de pagos instantáneos desarrollado por el Banco Central de Brasil. Esta tecnología te permite recibir pagos en reales de forma rápida, segura y sin costo, convirtiéndolos automáticamente en USDT.",
            "¿Qué es USDT?":"¿Qué es USDT?",
            "USDT es una criptomoneda estable (stablecoin) que mantiene su valor vinculado al dólar estadounidense. Esto la convierte en una de las opciones más seguras y confiables dentro del mercado de criptomonedas, ideal para proteger el valor de los activos frente a la volatilidad.":"USDT es una criptomoneda estable (stablecoin) que mantiene su valor vinculado al dólar estadounidense. Esto la convierte en una de las opciones más seguras y confiables dentro del mercado de criptomonedas, ideal para proteger el valor de los activos frente a la volatilidad.",
            "¿El dinero que recibo queda en Megapix o debo vincular una cuenta?":"¿El dinero que recibo queda en Megapix o debo vincular una cuenta?",
            "Megapix te proporciona una cuenta donde se almacenarán todos los pagos que recibas. Desde esta cuenta, podrás gestionar tu dinero, realizando conversiones a criptomonedas o pesos argentinos según prefieras. Es obligatorio registrar al menos una cuenta para poder retirar tus fondos cuando lo desees; si realizas retiros en criptomonedas, asegúrate de que la cuenta acepta criptomonedas. Además, podrás registrar múltiples cuentas, siempre y cuando estén a tu nombre.":"Megapix te proporciona una cuenta donde se almacenarán todos los pagos que recibas. Desde esta cuenta, podrás gestionar tu dinero, realizando conversiones a criptomonedas o pesos argentinos según prefieras. Es obligatorio registrar al menos una cuenta para poder retirar tus fondos cuando lo desees; si realizas retiros en criptomonedas, asegúrate de que la cuenta acepta criptomonedas. Además, podrás registrar múltiples cuentas, siempre y cuando estén a tu nombre.",
            "¿Debo descargar alguna app?":"¿Debo descargar alguna app?",
            "No es necesario descargar nada. Megapix está diseñada para ser accesible y fácil de usar. Es una plataforma web que puedes utilizar desde cualquier dispositivo, brindándote la comodidad de acceder a ella sin descargas adicionales y desde donde lo necesites.":"No es necesario descargar nada. Megapix está diseñada para ser accesible y fácil de usar. Es una plataforma web que puedes utilizar desde cualquier dispositivo, brindándote la comodidad de acceder a ella sin descargas adicionales y desde donde lo necesites.",
            
            'Preguntas frecuentes':'Preguntas frecuentes',

            // TURISTAS ------------------
            "sin límites en Argentina":"sin límites en Argentina",
            "Pagá con pix ":"Pagá con pix ",
            "Viví experiencias únicas pagando como si estuvieses en casa":"Viví experiencias únicas pagando como si estuvieses en casa",
            //turistTwo
            'Paga desde tu celular':'Paga desde tu celular',
            'Realizá tus pagos con Megapix en cualquier lugar del país. Eligiendo la opción de tu preferencia':'Realizá tus pagos con Megapix en cualquier lugar del país. Eligiendo la opción de tu preferencia',
            //turistThree
            'Vení a disfrutar de Argentina con ':'Vení a disfrutar de Argentina con ',
            'Vacacionar':'Vacacionar',
            'Estudiar':'Estudiar',
            'Vivir':'Vivir',
            'Visitar familia':'Visitar familia',
            'Trabajar':'Trabajar',
            '¿Por qué elegirnos?':'¿Por qué elegirnos?',
            'Megapix está aquí para acompañarte, facilitando tus transacciones y evitando el uso de engorrosas casas de cambio, conversiones costosas y la incomodidad de manejar grandes cantidades de efectivo.':'Megapix está aquí para acompañarte, facilitando tus transacciones y evitando el uso de engorrosas casas de cambio, conversiones costosas y la incomodidad de manejar grandes cantidades de efectivo.',
            //turistFour
            '¿CÓMO FUNCIONA?':'¿CÓMO FUNCIONA?',
            //turistFive
            'Ventajas de usar ':'Ventajas de usar ',
            'Con Megapix, las transferencias se realizan en tiempo real, sin demoras ni complicaciones.':'Con Megapix, las transferencias se realizan en tiempo real, sin demoras ni complicaciones.',
            'Tecnología PIX':'Tecnología PIX',
            'Con PIX pagás como si estuvieses en casa, de forma sencilla y sin complicaciones':'Con PIX pagás como si estuvieses en casa, de forma sencilla y sin complicaciones',
            'Descuentos':'Descuentos',
            'Disfruta de descuentos exclusivos pagado con Pix en nuestros comercios adheridos':'Disfruta de descuentos exclusivos pagado con Pix en nuestros comercios adheridos',
            'Seguridad':'Seguridad',
            'Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza.':'Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza.',
            'Adios efectivo excesivo':'Adios efectivo excesivo',
            'Pagás en el acto, directo desde tu cuenta, sin preocuparte por llevar efectivo. ¡Disfrutá tu viaje con total libertad y seguridad!':'Pagás en el acto, directo desde tu cuenta, sin preocuparte por llevar efectivo. ¡Disfrutá tu viaje con total libertad y seguridad!',
            //turistSix
            '¿Por dónde queres empezar?':'¿Por dónde queres empezar?',
            "Indumentaria":"Indumentaria",
            "Ski":"Ski",
            "Gastronomía":"Gastronomía",
            "Hospedaje":"Hospedaje",
            "Entretenimiento":"Entretenimiento",
            "Vuelos":"Vuelos",
            "Excursiones":"Excursiones",
            "Bodegas":"Bodegas",
            "Argentina ofrece una experiencia gastronómica inigualable que combina tradición y sabor. Desde el famoso asado, símbolo de la cultura argentina, hasta las empanadas crujientes y las pastas caseras, cada plato cuenta una historia. No podés dejar de probar el vino Malbec en las bodegas de Mendoza o saborear un helado artesanal en Buenos Aires. La gastronomía argentina es un festín para los sentidos, perfecta para explorar mientras conocés la esencia del país. ¡Descubrí los sabores que hacen de Argentina un destino culinario único!":"Argentina ofrece una experiencia gastronómica inigualable que combina tradición y sabor. Desde el famoso asado, símbolo de la cultura argentina, hasta las empanadas crujientes y las pastas caseras, cada plato cuenta una historia. No podés dejar de probar el vino Malbec en las bodegas de Mendoza o saborear un helado artesanal en Buenos Aires. La gastronomía argentina es un festín para los sentidos, perfecta para explorar mientras conocés la esencia del país. ¡Descubrí los sabores que hacen de Argentina un destino culinario único!",
            "Argentina te espera con una increíble variedad de opciones para renovar tu estilo. Desde las boutiques de diseño en Buenos Aires hasta outlets con grandes marcas a precios imperdibles. Recorre las elegantes calles de Palermo, donde los diseñadores locales exhiben las mejores prendas, o descubre los grandes centros comerciales como Abasto y Alto Palermo, donde las marcas internacionales y nacionales te esperan con ofertas únicas.":"Argentina te espera con una increíble variedad de opciones para renovar tu estilo. Desde las boutiques de diseño en Buenos Aires hasta outlets con grandes marcas a precios imperdibles. Recorre las elegantes calles de Palermo, donde los diseñadores locales exhiben las mejores prendas, o descubre los grandes centros comerciales como Abasto y Alto Palermo, donde las marcas internacionales y nacionales te esperan con ofertas únicas.",
            "La Patagonia argentina te espera con sus espectaculares centros de esquí, ideales para disfrutar del invierno en paisajes de ensueño. Desde Cerro Catedral en Bariloche hasta el Cerro Castor en Ushuaia, encontrarás pistas para todos los niveles. Disfruta de días llenos de adrenalina en la nieve, seguidos de cálidos refugios para relajarte.":"La Patagonia argentina te espera con sus espectaculares centros de esquí, ideales para disfrutar del invierno en paisajes de ensueño. Desde Cerro Catedral en Bariloche hasta el Cerro Castor en Ushuaia, encontrarás pistas para todos los niveles. Disfruta de días llenos de adrenalina en la nieve, seguidos de cálidos refugios para relajarte.",
            "Argentina te ofrece una amplia variedad de opciones de hospedaje para todos los gustos. Desde hoteles de lujo a cabañas en el medio de la montaña, cada lugar tiene su encanto y te invita a disfrutar de una estadía única. Explora ciudades llenas de historia, deléitate con la gastronomía local y relájate en alojamientos que combinan comodidad y autenticidad. Además, pagar es fácil: usa tu cuenta de PIX desde Brasil y disfruta de tu viaje sin complicaciones.":"Argentina te ofrece una amplia variedad de opciones de hospedaje para todos los gustos. Desde hoteles de lujo a cabañas en el medio de la montaña, cada lugar tiene su encanto y te invita a disfrutar de una estadía única. Explora ciudades llenas de historia, deléitate con la gastronomía local y relájate en alojamientos que combinan comodidad y autenticidad. Además, pagar es fácil: usa tu cuenta de PIX desde Brasil y disfruta de tu viaje sin complicaciones.",
            "Si estás buscando una experiencia cultural única, Argentina te espera con los brazos abiertos. Buenos Aires  ofrece una increíble variedad de espectáculos que van desde el tango tradicional hasta las producciones teatrales más innovadoras. No importa cuál sea tu preferencia, encontrarás el entretenimiento perfecto para vos. Visita  las salas emblemáticas del Teatro Colón, reconocido mundialmente por su arquitectura y acústica impecable. Disfruta de producciones de ópera, ballet y conciertos de nivel internacional.":"Si estás buscando una experiencia cultural única, Argentina te espera con los brazos abiertos. Buenos Aires  ofrece una increíble variedad de espectáculos que van desde el tango tradicional hasta las producciones teatrales más innovadoras. No importa cuál sea tu preferencia, encontrarás el entretenimiento perfecto para vos. Visita  las salas emblemáticas del Teatro Colón, reconocido mundialmente por su arquitectura y acústica impecable. Disfruta de producciones de ópera, ballet y conciertos de nivel internacional.",
            "Argentina es un país lleno de contrastes y maravillas naturales, y la mejor manera de descubrirlo es viajando de norte a sur. Con la comodidad de los vuelos internos no necesitas elegir un solo destino. En Argentina, cada vuelo es una oportunidad para descubrir una nueva maravilla natural o cultural. Puedes comprar tus boletos en pesos argentinos y pagar de forma sencilla y segura con PIX desde Brasil.":"Argentina es un país lleno de contrastes y maravillas naturales, y la mejor manera de descubrirlo es viajando de norte a sur. Con la comodidad de los vuelos internos no necesitas elegir un solo destino. En Argentina, cada vuelo es una oportunidad para descubrir una nueva maravilla natural o cultural. Puedes comprar tus boletos en pesos argentinos y pagar de forma sencilla y segura con PIX desde Brasil.",
            "Descubrí la majestuosidad de los paisajes argentinos con excursiones inolvidables. Desde las impresionantes Cataratas del Iguazú en Misiones hasta los glaciares de la Patagonia. Argentina te invita a vivir aventuras en plena naturaleza que se adaptan a tus intereses. Ya sea que busques adrenalina, relax o cultura, acá encontrarás algo extraordinario.":"Descubrí la majestuosidad de los paisajes argentinos con excursiones inolvidables. Desde las impresionantes Cataratas del Iguazú en Misiones hasta los glaciares de la Patagonia. Argentina te invita a vivir aventuras en plena naturaleza que se adaptan a tus intereses. Ya sea que busques adrenalina, relax o cultura, acá encontrarás algo extraordinario.",
            "Mendoza, la capital del vino argentino, te invita a vivir una experiencia única recorriendo sus prestigiosas bodegas. Disfruta de paisajes impresionantes al pie de la cordillera de los Andes mientras degustas los mejores Malbecs del mundo, acompañado por expertos que te guiarán en cada copa. Visita bodegas de renombre, donde podrás degustar vinos de clase mundial mientras aprendes sobre los secretos detrás de cada cosecha, cada detalle está diseñado para brindarte una experiencia auténtica":"Mendoza, la capital del vino argentino, te invita a vivir una experiencia única recorriendo sus prestigiosas bodegas. Disfruta de paisajes impresionantes al pie de la cordillera de los Andes mientras degustas los mejores Malbecs del mundo, acompañado por expertos que te guiarán en cada copa. Visita bodegas de renombre, donde podrás degustar vinos de clase mundial mientras aprendes sobre los secretos detrás de cada cosecha, cada detalle está diseñado para brindarte una experiencia auténtica",

            //ALGUNOS COMPONENTES
            //Footer
            'Un producto de Polynomium®':'Un producto de Polynomium®',
            '¿Quiénes somos?':'¿Quiénes somos?',
            'Ir a polynomium':'Ir a polynomium',
            'Contacto':'Contacto',
            'Política de privacidad':'Política de privacidad',
            'Términos & condiciones':'Términos & condiciones',
            'Comunidad':'Comunidad',
            'Soporte & FAQs':'Soporte & FAQs',
            //btn
            "Visitar plataforma":"Visitar plataforma",
            //Slogan
            'Megapix, innovando el presente & futuro':'Megapix, innovando el presente & futuro',
            //Switch
            'Negocios AR':'Negocios AR',
            'Clientes BR':'Clientes BR',








        }
    },
    br: {
        translation: {
            // SECTION EMPRESAS
            'cobra reales y recibí dólar digital ':'Cobre em reais e receba dólar digital ',
            'GRATIS':'GRÁTIS',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto.':'Abra sua conta e quando quiser, retire em pesos ou cripto.',
            //SECTION ONE
            'Potenciá tu negocio':'Potencie seu negócio',
            'Más del 30% de los turistas que visitan Argentina provienen de Brasil, además de miles de residentes brasileños que desarrollan actividades comerciales en destinos clave como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Es por esto que desde Megapix pensamos una solución basada en el método de pago más popular en Brasil: PIX.':'Mais de 30% dos turistas que visitam a Argentina vêm do Brasil, além de milhares de residentes brasileiros que desenvolvem atividades comerciais em destinos importantes como Buenos Aires, Ushuaia, Bariloche, Mendoza e Misiones. É por isso que, na Megapix, criamos uma solução baseada no método de pagamento mais popular no Brasil: PIX.',

            '¡Conectando con este mercado estratégico vas a poder hacer crecer los ingresos de tu negocio o emprendimiento!':'Conectando-se com esse mercado estratégico, você poderá aumentar os ganhos do seu negócio ou empreendimento!',

            'Entonces... ¿Ya te convencimos?':'Então... Já te convencemos?',
            'Si querés comenzar a cobrar con Pix ya podés hacerlo a través de nuestra plataforma, es 100% segura y gratuita.':'Se você quer começar a receber com Pix, já pode fazer isso através da nossa plataforma, que é 100% segura e gratuita.',

            'crecé sin fronteras':'Cresça sem fronteiras',

            '¡Potencia tu negocio al alcance de tu mano con Megapix!':'Potencie seu negócio na palma da sua mão com Megapix!',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis':'Cobre em reais, receba dólar digital e retire em pesos ou cripto grátis',
            //SECTION TWO
            'Ventajas de usar':'Vantagens de usar',
            'Megapix':'Megapix',
            "Control de tus finanzas":"Controle das suas finanças",
            "Cobros QR y Link de pago":"Cobranças por QR e Link de pagamento",
            "Conexión con turistas":"Conexão com turistas",
            "Gratis":"Grátis",
            "Rápido":"Rápido",
            "Fácil":"Fácil",
            "Sin comisiones":"Sem comissões",
            "Pagos inmediatos":"Pagamentos imediatos",
            "Cobros sin barreras":"Cobranças sem fronteiras",
            "Segura":"Seguro",
            "Soporte 24/7":"Suporte 24/7",
            "Gestión de negocios":"Gestão de negócios",
            //SECTION THREE
            '¿Cómo funciona?':'Como funciona?',
            '¡Realicemos un cobro en vivo y en directo!':'Vamos realizar uma cobrança ao vivo',
            //Inputs
            'Monto (ARS)':'Monto (ARS)',
            'Ingresa el monto que queres cobrar 👉🏻':'Falta',
            'Te mostramos el valor que vas a recibir en USDT (Dolar digital)':'Falta',
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'Falta',
            'Motivo':'Falta',
            'Oso de peluche':'Falta',
            'Colocás el “Motivo” de la operación.':'Falta',
            'Monto a cobrar (BRL)':'Falta',
            'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️':'Falta',
            'Cobrar':'falta',
            '¡Pago realizado!':'falta',




            //SECTION FOUR
            'Funcionalidades principales':'Funcionalidades principais',
            'Gestión de cobros diarios':'Gestão de cobranças diárias',
            'Gestión de billetera':'Gestão de carteira',
            'Gestión de ventas':'Gestão de vendas',
            'Gestión de tiendas':'Gestão de lojas',
            'Gestión de usuarios':'Gestão de usuários',
            
            //SECTION FIVE
            'Características & Beneficios':'Características e Benefícios',
            'Cobros seguros':'Pagamentos seguros',
            'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.':'Nosso sistema de pagamento oferece a máxima segurança, eliminando os riscos relacionados ao manuseio de dinheiro em espécie e minimizando erros humanos. Graças à nossa tecnologia avançada, cada transação é precisa e protegida, garantindo um processo ágil e sem complicações.',
            'Multiplataforma':'Multiplataforma',
            'Podrás acceder y utilizar la plataforma desde cualquier dispositivo que tenga conexión a internet, ya sea un celular o una tablet, sin necesidad de contar con una computadora para ello.':'Você poderá acessar e utilizar a plataforma de qualquer dispositivo que tenha conexão à internet, seja um celular ou um tablet, sem a necessidade de usar um computador para isso.',
            'Control de sucursales':'Controle de filiais',
            'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una (Roles y permisos asignados a quien consideres).':'Você poderá adicionar todas as filiais associadas ao seu único CUIT e visualizar o histórico de movimentações de cada uma (com funções e permissões atribuídas a quem você considerar).',
            'Roles y permisos':'Funções e permissões',
            'Megapix ofrece un sistema de administración y división de tareas, donde existe un administrador, co-administrador, gerente y cajero o cobrador, logrando aumentar la eficiencia operativa.':'A Megapix oferece um sistema de administração e divisão de tarefas, com funções como administrador, coadministrador, gerente e caixa ou cobrador, aumentando a eficiência operacional.',
            'Plataforma sin costo':'Plataforma sem custo',
            'Nuestra plataforma es 100% gratuita, lo que significa que no tendrás que preocuparte por la letra chica ni comisiones por registro o uso.':'Nossa plataforma é 100% gratuita, o que significa que você não precisará se preocupar com letras miúdas ou comissões de registro ou uso.',
            //Pagos inmediatos
            'Cobrá reales y recibí dolar digital en tu cuenta Megapix al instante de manera fácil y segura. Luego podrás retirarlo cuando quieras en USDT o en pesos argentinos.':'Receba reais e receba dólar digital em sua conta Megapix instantaneamente de forma fácil e segura. Em seguida, você poderá retirá-lo quando quiser, em USDT ou em pesos argentinos.',
            //Soporte 24/7
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites con atención personalizada y rápida las 24 horas, todos los días.':'Nosso serviço de suporte está pronto para ajudar quando você precisar, com atendimento personalizado e rápido 24 horas por dia, todos os dias.',
            'Dólar digital (USDT)':'Dólar Digital (USDT)',
            'El dólar digital USDT es una stablecoin que está vinculada al valor del dólar estadounidense, lo que significa que su valor se mantiene estable y  protege a los usuarios de la volatilidad. ¡Cobrar en USDT puede aportar estabilidad, agilidad en las transacciones y nuevas oportunidades financieras!':'O dólar digital USDT é uma stablecoin atrelada ao valor do dólar americano, o que significa que seu valor permanece relativamente estável e pode proteger os usuários da volatilidade típica de outras criptomoedas. Receber em USDT pode proporcionar estabilidade, agilidade nas transações e novas oportunidades financeiras!',
            //SECTION SIX
            '¿ESTÁS LISTO?':'Pronto para Começar?',
            'Comencemos':'Vamos lá',
            'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.':'Crie experiências de cobrança excepcionais, impulsionando o crescimento do seu negócio com sua conta Megapix.',
            'Ir a la plataforma':'Visitar a plataforma',
            //SECTION SEVEN
            '¿La plataforma tiene costo?':'A plataforma tem custo?',
            'No, los servicios de Megapix son completamente gratuitos. Solo debes considerar el costo de la red cripto para los retiros, una comisión que es ajena a Megapix y depende de la red blockchain utilizada.':'Não, os serviços da Megapix são completamente gratuitos. Apenas deve-se considerar o custo da rede cripto para os saques, uma comissão que é alheia à Megapix e depende da rede blockchain utilizada.',
            "¿Qué es Pix?":"O que é o PIX?",
            "PIX es un sistema de pagos instantáneos desarrollado por el Banco Central de Brasil. Esta tecnología te permite recibir pagos en reales de forma rápida, segura y sin costo, convirtiéndolos automáticamente en USDT.":"O PIX é um sistema de pagamentos instantâneos desenvolvido pelo Banco Central do Brasil. Essa tecnologia permite receber pagamentos em reais de forma rápida, segura e sem custo, convertendo-os automaticamente em USDT.",
            "¿Qué es USDT?":"O que é USDT?",
            "USDT es una criptomoneda estable (stablecoin) que mantiene su valor vinculado al dólar estadounidense. Esto la convierte en una de las opciones más seguras y confiables dentro del mercado de criptomonedas, ideal para proteger el valor de los activos frente a la volatilidad.":"USDT é uma criptomoeda estável (stablecoin) que mantém seu valor vinculado ao dólar americano. Isso a torna uma das opções mais seguras e confiáveis no mercado de criptomoedas, ideal para proteger o valor dos ativos frente à volatilidade.",
            "¿El dinero que recibo queda en Megapix o debo vincular una cuenta?":"O dinheiro que recebo fica na Megapix ou preciso vincular uma conta bancária?",
            "Megapix te proporciona una cuenta donde se almacenarán todos los pagos que recibas. Desde esta cuenta, podrás gestionar tu dinero, realizando conversiones a criptomonedas o pesos argentinos según prefieras. Es obligatorio registrar al menos una cuenta para poder retirar tus fondos cuando lo desees; si realizas retiros en criptomonedas, asegúrate de que la cuenta acepta criptomonedas. Además, podrás registrar múltiples cuentas, siempre y cuando estén a tu nombre.":"A Megapix oferece uma conta onde todos os pagamentos recebidos serão armazenados. A partir dessa conta, você poderá gerenciar seu dinheiro, realizando conversões para criptomoedas ou pesos argentinos conforme preferir. É obrigatório registrar pelo menos uma conta para retirar seus fundos quando desejar; se fizer saques em criptomoedas, certifique-se de que a conta aceita criptomoedas. Além disso, você pode registrar várias contas, desde que estejam em seu nome.",
            "¿Debo descargar alguna app?":"Preciso baixar algum aplicativo?",
            "No es necesario descargar nada. Megapix está diseñada para ser accesible y fácil de usar. Es una plataforma web que puedes utilizar desde cualquier dispositivo, brindándote la comodidad de acceder a ella sin descargas adicionales y desde donde lo necesites.":"Não é necessário baixar nada. A Megapix foi projetada para ser acessível e fácil de usar. É uma plataforma web que você pode utilizar de qualquer dispositivo, oferecendo a comodidade de acessá-la sem downloads adicionais e de onde precisar.",
            'Preguntas frecuentes':'Perguntas Frequentes',

            // TURISTAS ------------------
            "sin límites en Argentina":"falta",
            "Pagá con pix ":"falta ",
            "Viví experiencias únicas pagando como si estuvieses en casa":"falta",
            //turistTwo
            'Paga desde tu celular':'falta',
            'Realizá tus pagos con Megapix en cualquier lugar del país. Eligiendo la opción de tu preferencia':'falta',
            //turistThree
            'Vení a disfrutar de Argentina con ':'falta ',
            'Vacacionar':'falta',
            'Estudiar':'falta',
            'Vivir':'falta',
            'Visitar familia':'falta',
            'Trabajar':'falta',
            '¿Por qué elegirnos?':'falta',
            'Megapix está aquí para acompañarte, facilitando tus transacciones y evitando el uso de engorrosas casas de cambio, conversiones costosas y la incomodidad de manejar grandes cantidades de efectivo.':'falta',
            //turistFour
            '¿CÓMO FUNCIONA?':'falta',
            //turistFive
            'Ventajas de usar ':'falta ',
            'Con Megapix, las transferencias se realizan en tiempo real, sin demoras ni complicaciones.':'falta',
            'Tecnología PIX':'Tecnologia PIX',
            'Con PIX pagás como si estuvieses en casa, de forma sencilla y sin complicaciones':'falta',
            'Descuentos':'falta',
            'Disfruta de descuentos exclusivos pagado con Pix en nuestros comercios adheridos':'falta',
            'Seguridad':'Segurança',
            'Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza.':'falta',
            'Adios efectivo excesivo':'falta',
            'Pagás en el acto, directo desde tu cuenta, sin preocuparte por llevar efectivo. ¡Disfrutá tu viaje con total libertad y seguridad!':'falta',
            //turistSix
            '¿Por dónde queres empezar?':'falta',
            "Indumentaria":"falta",
            "Ski":"falta",
            "Gastronomía":"falta",
            "Hospedaje":"falta",
            "Entretenimiento":"falta",
            "Vuelos":"falta",
            "Excursiones":"falta",
            "Bodegas":"falta",
            "Argentina ofrece una experiencia gastronómica inigualable que combina tradición y sabor. Desde el famoso asado, símbolo de la cultura argentina, hasta las empanadas crujientes y las pastas caseras, cada plato cuenta una historia. No podés dejar de probar el vino Malbec en las bodegas de Mendoza o saborear un helado artesanal en Buenos Aires. La gastronomía argentina es un festín para los sentidos, perfecta para explorar mientras conocés la esencia del país. ¡Descubrí los sabores que hacen de Argentina un destino culinario único!":"falta",
            "Argentina te espera con una increíble variedad de opciones para renovar tu estilo. Desde las boutiques de diseño en Buenos Aires hasta outlets con grandes marcas a precios imperdibles. Recorre las elegantes calles de Palermo, donde los diseñadores locales exhiben las mejores prendas, o descubre los grandes centros comerciales como Abasto y Alto Palermo, donde las marcas internacionales y nacionales te esperan con ofertas únicas.":"falta",
            "La Patagonia argentina te espera con sus espectaculares centros de esquí, ideales para disfrutar del invierno en paisajes de ensueño. Desde Cerro Catedral en Bariloche hasta el Cerro Castor en Ushuaia, encontrarás pistas para todos los niveles. Disfruta de días llenos de adrenalina en la nieve, seguidos de cálidos refugios para relajarte.":"falta",
            "Argentina te ofrece una amplia variedad de opciones de hospedaje para todos los gustos. Desde hoteles de lujo a cabañas en el medio de la montaña, cada lugar tiene su encanto y te invita a disfrutar de una estadía única. Explora ciudades llenas de historia, deléitate con la gastronomía local y relájate en alojamientos que combinan comodidad y autenticidad. Además, pagar es fácil: usa tu cuenta de PIX desde Brasil y disfruta de tu viaje sin complicaciones.":"falta",
            "Si estás buscando una experiencia cultural única, Argentina te espera con los brazos abiertos. Buenos Aires  ofrece una increíble variedad de espectáculos que van desde el tango tradicional hasta las producciones teatrales más innovadoras. No importa cuál sea tu preferencia, encontrarás el entretenimiento perfecto para vos. Visita  las salas emblemáticas del Teatro Colón, reconocido mundialmente por su arquitectura y acústica impecable. Disfruta de producciones de ópera, ballet y conciertos de nivel internacional.":"falta",
            "Argentina es un país lleno de contrastes y maravillas naturales, y la mejor manera de descubrirlo es viajando de norte a sur. Con la comodidad de los vuelos internos no necesitas elegir un solo destino. En Argentina, cada vuelo es una oportunidad para descubrir una nueva maravilla natural o cultural. Puedes comprar tus boletos en pesos argentinos y pagar de forma sencilla y segura con PIX desde Brasil.":"falta",
            "Descubrí la majestuosidad de los paisajes argentinos con excursiones inolvidables. Desde las impresionantes Cataratas del Iguazú en Misiones hasta los glaciares de la Patagonia. Argentina te invita a vivir aventuras en plena naturaleza que se adaptan a tus intereses. Ya sea que busques adrenalina, relax o cultura, acá encontrarás algo extraordinario.":"falta",
            "Mendoza, la capital del vino argentino, te invita a vivir una experiencia única recorriendo sus prestigiosas bodegas. Disfruta de paisajes impresionantes al pie de la cordillera de los Andes mientras degustas los mejores Malbecs del mundo, acompañado por expertos que te guiarán en cada copa. Visita bodegas de renombre, donde podrás degustar vinos de clase mundial mientras aprendes sobre los secretos detrás de cada cosecha, cada detalle está diseñado para brindarte una experiencia auténtica":"falta",

            //ALGUNOS COMPONENTES
            //Footer
            'Un producto de Polynomium®':'Um produto da Polynomium®',
            '¿Quiénes somos?':'Quem somos?',
            'Ir a polynomium':'Ir para Polynomium',
            'Contacto':'Contato',
            'Política de privacidad':'Políticas de privacidade',
            'Términos & condiciones':'Termos & condições',
            'Comunidad':'Comunidade',
            'Soporte & FAQs':'Suporte & FAQs',
            //btn
            "Visitar plataforma":"Visitar a plataforma",
            //Slogan
            'Megapix, innovando el presente & futuro':'Megapix, innovando el presente & futuro',
            //Switch
            'Negocios AR':'Negócios AR',
            'Clientes BR':'Clientes BR',






        }
    },
    en: {
        translation: {
            // SECTION EMPRESAS
            'cobra reales y recibí dólar digital ':'Receive Brazilian reals and get digital dollars for ',
            'GRATIS':'Free',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto.':'Get your account and withdraw in pesos or crypto whenever you want.',
            //SECTION ONE
            'Potenciá tu negocio':'Falta',
            'Más del 30% de los turistas que visitan Argentina provienen de Brasil, además de miles de residentes brasileños que desarrollan actividades comerciales en destinos clave como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Es por esto que desde Megapix pensamos una solución basada en el método de pago más popular en Brasil: PIX.':'Falta',

            '¡Conectando con este mercado estratégico vas a poder hacer crecer los ingresos de tu negocio o emprendimiento!':'Falta',

            'Entonces... ¿Ya te convencimos?':'Falta',
            'Si querés comenzar a cobrar con Pix ya podés hacerlo a través de nuestra plataforma, es 100% segura y gratuita.':'falta',

            'crecé sin fronteras':'Falta',

            '¡Potencia tu negocio al alcance de tu mano con Megapix!':'falta',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis':'Falta',
            //SECTION TWO
            'Ventajas de usar':'Falta',
            'Megapix':'Falta',
            "Control de tus finanzas":"falta",
            "Cobros QR y Link de pago":"falta",
            "Conexión con turistas":"falta",
            "Gratis":"falta",
            "Rápido":"falta",
            "Fácil":"falta",
            "Sin comisiones":"falta",
            "Pagos inmediatos":"falta",
            "Cobros sin barreras":"falta",
            "Segura":"falta",
            "Soporte 24/7":"falta",
            "Gestión de negocios":"falta",
            //SECTION THREE
            '¿Cómo funciona?':'Falta',
            '¡Realicemos un cobro en vivo y en directo!':'Falta',
            //Inputs
            'Monto (ARS)':'Falta',
            'Ingresa el monto que queres cobrar 👉🏻':'Falta',
            'Te mostramos el valor que vas a recibir en USDT (Dolar digital)':'Falta',
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'Falta',
            'Motivo':'Falta',
            'Oso de peluche':'Falta',
            'Colocás el “Motivo” de la operación.':'Falta',
            'Monto a cobrar (BRL)':'Falta',
            'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️':'Falta',
            'Cobrar':'falta',
            '¡Pago realizado!':'falta',




            //SECTION FOUR
            'Funcionalidades principales':'Falta',
            'Gestión de cobros diarios':'Falta',
            'Gestión de billetera':'Falta',
            'Gestión de ventas':'Falta',
            'Gestión de tiendas':'Falta',
            'Gestión de usuarios':'Falta',
            //SECTION FIVE
            'Características & Beneficios':'Falta',
            'Cobros seguros':'Falta',
            'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.':'Falta',
            'Multiplataforma':'Falta',
            'Podrás acceder y utilizar la plataforma desde cualquier dispositivo que tenga conexión a internet, ya sea un celular o una tablet, sin necesidad de contar con una computadora para ello.':'Falta',
            'Control de sucursales':'Falta',
            'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una (Roles y permisos asignados a quien consideres).':'Falta',
            'Roles y permisos':'Falta',
            'Megapix ofrece un sistema de administración y división de tareas, donde existe un administrador, co-administrador, gerente y cajero o cobrador, logrando aumentar la eficiencia operativa.':'Falta',
            'Plataforma sin costo':'Falta',
            'Nuestra plataforma es 100% gratuita, lo que significa que no tendrás que preocuparte por la letra chica ni comisiones por registro o uso.':'Falta',
            //Pagos inmediatos
            'Cobrá reales y recibí dolar digital en tu cuenta Megapix al instante de manera fácil y segura. Luego podrás retirarlo cuando quieras en USDT o en pesos argentinos.':'Falta',
            //Soporte 24/7
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites con atención personalizada y rápida las 24 horas, todos los días.':'Falta',
            'Dólar digital (USDT)':'falta',
            'El dólar digital USDT es una stablecoin que está vinculada al valor del dólar estadounidense, lo que significa que su valor se mantiene estable y  protege a los usuarios de la volatilidad. ¡Cobrar en USDT puede aportar estabilidad, agilidad en las transacciones y nuevas oportunidades financieras!':'Falta',
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
            "Pagá con pix ":"falta ",
            "Viví experiencias únicas pagando como si estuvieses en casa":"falta",
            //turistTwo
            'Paga desde tu celular':'falta',
            'Realizá tus pagos con Megapix en cualquier lugar del país. Eligiendo la opción de tu preferencia':'falta',
            //turistThree
            'Vení a disfrutar de Argentina con ':'falta ',
            'Vacacionar':'falta',
            'Estudiar':'falta',
            'Vivir':'falta',
            'Visitar familia':'falta',
            'Trabajar':'falta',
            '¿Por qué elegirnos?':'falta',
            'Megapix está aquí para acompañarte, facilitando tus transacciones y evitando el uso de engorrosas casas de cambio, conversiones costosas y la incomodidad de manejar grandes cantidades de efectivo.':'falta',
            //turistFour
            '¿CÓMO FUNCIONA?':'falta',
            //turistFive
            'Ventajas de usar ':'falta ',
            'Con Megapix, las transferencias se realizan en tiempo real, sin demoras ni complicaciones.':'falta',
            'Tecnología PIX':'falta',
            'Con PIX pagás como si estuvieses en casa, de forma sencilla y sin complicaciones':'falta',
            'Descuentos':'falta',
            'Disfruta de descuentos exclusivos pagado con Pix en nuestros comercios adheridos':'falta',
            'Seguridad':'falta',
            'Tus pagos y datos están protegidos por tecnología avanzada para que puedas pagar con total confianza.':'falta',
            'Adios efectivo excesivo':'falta',
            'Pagás en el acto, directo desde tu cuenta, sin preocuparte por llevar efectivo. ¡Disfrutá tu viaje con total libertad y seguridad!':'falta',
            //turistSix
            '¿Por dónde queres empezar?':'falta',
            "Indumentaria":"falta",
            "Ski":"falta",
            "Gastronomía":"falta",
            "Hospedaje":"falta",
            "Entretenimiento":"falta",
            "Vuelos":"falta",
            "Excursiones":"falta",
            "Bodegas":"falta",
            "Argentina ofrece una experiencia gastronómica inigualable que combina tradición y sabor. Desde el famoso asado, símbolo de la cultura argentina, hasta las empanadas crujientes y las pastas caseras, cada plato cuenta una historia. No podés dejar de probar el vino Malbec en las bodegas de Mendoza o saborear un helado artesanal en Buenos Aires. La gastronomía argentina es un festín para los sentidos, perfecta para explorar mientras conocés la esencia del país. ¡Descubrí los sabores que hacen de Argentina un destino culinario único!":"falta",
            "Argentina te espera con una increíble variedad de opciones para renovar tu estilo. Desde las boutiques de diseño en Buenos Aires hasta outlets con grandes marcas a precios imperdibles. Recorre las elegantes calles de Palermo, donde los diseñadores locales exhiben las mejores prendas, o descubre los grandes centros comerciales como Abasto y Alto Palermo, donde las marcas internacionales y nacionales te esperan con ofertas únicas.":"falta",
            "La Patagonia argentina te espera con sus espectaculares centros de esquí, ideales para disfrutar del invierno en paisajes de ensueño. Desde Cerro Catedral en Bariloche hasta el Cerro Castor en Ushuaia, encontrarás pistas para todos los niveles. Disfruta de días llenos de adrenalina en la nieve, seguidos de cálidos refugios para relajarte.":"falta",
            "Argentina te ofrece una amplia variedad de opciones de hospedaje para todos los gustos. Desde hoteles de lujo a cabañas en el medio de la montaña, cada lugar tiene su encanto y te invita a disfrutar de una estadía única. Explora ciudades llenas de historia, deléitate con la gastronomía local y relájate en alojamientos que combinan comodidad y autenticidad. Además, pagar es fácil: usa tu cuenta de PIX desde Brasil y disfruta de tu viaje sin complicaciones.":"falta",
            "Si estás buscando una experiencia cultural única, Argentina te espera con los brazos abiertos. Buenos Aires  ofrece una increíble variedad de espectáculos que van desde el tango tradicional hasta las producciones teatrales más innovadoras. No importa cuál sea tu preferencia, encontrarás el entretenimiento perfecto para vos. Visita  las salas emblemáticas del Teatro Colón, reconocido mundialmente por su arquitectura y acústica impecable. Disfruta de producciones de ópera, ballet y conciertos de nivel internacional.":"falta",
            "Argentina es un país lleno de contrastes y maravillas naturales, y la mejor manera de descubrirlo es viajando de norte a sur. Con la comodidad de los vuelos internos no necesitas elegir un solo destino. En Argentina, cada vuelo es una oportunidad para descubrir una nueva maravilla natural o cultural. Puedes comprar tus boletos en pesos argentinos y pagar de forma sencilla y segura con PIX desde Brasil.":"falta",
            "Descubrí la majestuosidad de los paisajes argentinos con excursiones inolvidables. Desde las impresionantes Cataratas del Iguazú en Misiones hasta los glaciares de la Patagonia. Argentina te invita a vivir aventuras en plena naturaleza que se adaptan a tus intereses. Ya sea que busques adrenalina, relax o cultura, acá encontrarás algo extraordinario.":"falta",
            "Mendoza, la capital del vino argentino, te invita a vivir una experiencia única recorriendo sus prestigiosas bodegas. Disfruta de paisajes impresionantes al pie de la cordillera de los Andes mientras degustas los mejores Malbecs del mundo, acompañado por expertos que te guiarán en cada copa. Visita bodegas de renombre, donde podrás degustar vinos de clase mundial mientras aprendes sobre los secretos detrás de cada cosecha, cada detalle está diseñado para brindarte una experiencia auténtica":"falta",

            //ALGUNOS COMPONENTES
            //Footer
            'Un producto de Polynomium®':'falta',
            '¿Quiénes somos?':'falta',
            'Ir a polynomium':'falta',
            'Contacto':'falta',
            'Política de privacidad':'falta',
            'Términos & condiciones':'falta',
            'Comunidad':'falta',
            'Soporte & FAQs':'falta',
            //btn
            "Visitar plataforma":"falta",
            //Slogan
            'Megapix, innovando el presente & futuro':'falta',
            //Switch
            'Negocios AR':'Negócios AR',
            'Clientes BR':'falta',






        }
    },
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
