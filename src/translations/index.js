import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            // SECTION EMPRESAS

            'cobra reales y recibí dólar digital':'cobra reales y recibí dólar digital',
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
            'cobra reales y recibí dólar digital':'Receba reais e ganhe dólar digital',
            'GRATIS':'Falta',
            'Obtené tu cuenta y cuando desees retirá en pesos o cripto.':'Falta',
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
