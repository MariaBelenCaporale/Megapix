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
            "Cobros QR":"Cobros QR",
            "Link de pago":"Link de pago",
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
            "y sentite como en casa":"y sentite como en casa",
            "Pagá con pix ":"Pagá con pix ",
            "Viví experiencias únicas pagando con Megapix en Argentina.":"Viví experiencias únicas pagando con Megapix en Argentina.",
            //turistTwo
            'Paga desde tu celular':'Paga desde tu celular',
            'Realizá tus pagos a través de Megapix en los comercios adheridos de todo el país.':'Realizá tus pagos a través de Megapix en los comercios adheridos de todo el país.',
            //turistThree
            'Disfrutá Argentina con Megapix':'Disfrutá Argentina con Megapix',
            'Vacacioná':'Vacacioná',
            'Estudiá':'Estudiá',
            'Viví':'Viví',
            'Visitá':'Visitá',
            'Trabajá':'Trabajá',
            '¿Por qué elegirnos?':'¿Por qué elegirnos?',
            'Somos una empresa registrada y autorizada que elimina las barreras tradicionales en el cambio de divisas. Además, simplificamos el proceso de pago, evitando conversiones costosas y la molestia de llevar grandes sumas de efectivo.':'Somos una empresa registrada y autorizada que elimina las barreras tradicionales en el cambio de divisas. Además, simplificamos el proceso de pago, evitando conversiones costosas y la molestia de llevar grandes sumas de efectivo.',
            //turistFour
            'Mirá que fácil':'Mirá que fácil',
            '¡Es más que un método de pago, sumate a la experiencia megapix!':'¡Es más que un método de pago, sumate a la experiencia megapix!',
            //turistFive
            'Ventajas de usar ':'Ventajas de usar ',
            'Con Megapix vas a poder pagar con tu banco o billetera de preferencia sin necesidad de descargar una aplicación, de manera rápida y sencilla. Las transferencias son instantáneas, sin demoras ni complicaciones.':'Con Megapix vas a poder pagar con tu banco o billetera de preferencia sin necesidad de descargar una aplicación, de manera rápida y sencilla. Las transferencias son instantáneas, sin demoras ni complicaciones.',
            'Tecnología PIX':'Tecnología PIX',
            'En Megapix, utilizamos la misma tecnología desarrollada y respaldada por el Banco Central de Brasil. Disfrutá de Argentina como si estuvieras en casa.':'En Megapix, utilizamos la misma tecnología desarrollada y respaldada por el Banco Central de Brasil. Disfrutá de Argentina como si estuvieras en casa.',
            'Seguridad':'Seguridad',
            'Nuestros comercios y empresas adheridas cuentan con un proceso riguroso de aprobación y validación de sus datos por lo que tus pagos y datos siempre van a estar protegidos. En Megapix te cuidamos con nuestra tecnología de vanguardia, brindandote total tranquilidad.':'Nuestros comercios y empresas adheridas cuentan con un proceso riguroso de aprobación y validación de sus datos por lo que tus pagos y datos siempre van a estar protegidos. En Megapix te cuidamos con nuestra tecnología de vanguardia, brindandote total tranquilidad.',
            'Adios efectivo excesivo':'Adios efectivo excesivo',
            'Despedíte de las complicaciones del efectivo en mano. Ahora vas a poder pagar al instante, directamente desde tu cuenta, sin preocuparte por llevar el cambio en efectivo. ¡Disfruta de tu viaje con total libertad y seguridad!':'Despedíte de las complicaciones del efectivo en mano. Ahora vas a poder pagar al instante, directamente desde tu cuenta, sin preocuparte por llevar el cambio en efectivo. ¡Disfruta de tu viaje con total libertad y seguridad!',
            'Descuentos exclusivos':'Descuentos exclusivos',
            'Aprovechá de los mejores descuentos pagando con Megapix en todos los comercios adheridos. ¿Qué estas esperando? ¡Disfrutá al máximo cada experiencia!':'Aprovechá de los mejores descuentos pagando con Megapix en todos los comercios adheridos. ¿Qué estas esperando? ¡Disfrutá al máximo cada experiencia!',
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días. ¡No dudes en contactarnos!':'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días. ¡No dudes en contactarnos!',            
            //turistSix
            '¿Por dónde queres empezar?':'¿Por dónde queres empezar?',

            "Recuerdos & experiencias":"Recuerdos & experiencias",
            'Descubrí experiencias inolvidables en cada rincón de Argentina, donde cada recuerdo va más allá. Conocerás la esencia de nuestra cultura, dejando una parte de vos en cada espacio, cada detalle y cada lugar que explores. En el norte, encontrarás una cultura vibrante, repleta de tradiciones y colores que van a cautivar todos tus sentidos. Te invitamos a disfrutar de las prestigiosas bodegas, y maravillarte con la majestuosidad de las montañas y llanuras, junto a la rica diversidad de la fauna y flora local. Dejate deslumbrar por paisajes impresionantes al pie de la cordillera de los Andes y en el fin del mundo. Llevarás en tu ser lo que realmente vale la pena vivir y sentir, experiencias que se quedarán grabadas en tu memoria para siempre.':'Descubrí experiencias inolvidables en cada rincón de Argentina, donde cada recuerdo va más allá. Conocerás la esencia de nuestra cultura, dejando una parte de vos en cada espacio, cada detalle y cada lugar que explores. En el norte, encontrarás una cultura vibrante, repleta de tradiciones y colores que van a cautivar todos tus sentidos. Te invitamos a disfrutar de las prestigiosas bodegas, y maravillarte con la majestuosidad de las montañas y llanuras, junto a la rica diversidad de la fauna y flora local. Dejate deslumbrar por paisajes impresionantes al pie de la cordillera de los Andes y en el fin del mundo. Llevarás en tu ser lo que realmente vale la pena vivir y sentir, experiencias que se quedarán grabadas en tu memoria para siempre.',

            "Gastronomía":"Gastronomía",
            'Argentina es un país con una gastronomía variada y llena de sabores, donde se fusionan tradiciones europeas, indígenas y criollas para crear una experiencia única e irrepetible. Desde el asado, que reúne familias y amigos, hasta las empanadas y pastas heredadas de inmigrantes, cada bocado refleja la rica mezcla de culturas que nos define. Vení a descubrir la esencia de Argentina a través de su cocina, donde cada plato es una celebración de diversidad y sabor. ¡Animate a probar lo mejor de nuestra gastronomía!':'Argentina es un país con una gastronomía variada y llena de sabores, donde se fusionan tradiciones europeas, indígenas y criollas para crear una experiencia única e irrepetible. Desde el asado, que reúne familias y amigos, hasta las empanadas y pastas heredadas de inmigrantes, cada bocado refleja la rica mezcla de culturas que nos define. Vení a descubrir la esencia de Argentina a través de su cocina, donde cada plato es una celebración de diversidad y sabor. ¡Animate a probar lo mejor de nuestra gastronomía!',

            "Excursiones":"Excursiones",
            'Te invitamos a conocer una inmensa diversidad de excursiones que te llevarán a descubrir la belleza natural de los lugares más visitados de Argentina donde vas a vivir aventuras únicas y memorables. Desde emociones extremas y momentos de tranquilidad hasta una inmersión cultural, siempre encontrarás una experiencia extraordinaria adaptada a vos. ¡Vení a disfrutar con Megapix la inmensidad de nuestros paisajes y hacé de cada excursión un recuerdo inolvidable!':'Te invitamos a conocer una inmensa diversidad de excursiones que te llevarán a descubrir la belleza natural de los lugares más visitados de Argentina donde vas a vivir aventuras únicas y memorables. Desde emociones extremas y momentos de tranquilidad hasta una inmersión cultural, siempre encontrarás una experiencia extraordinaria adaptada a vos. ¡Vení a disfrutar con Megapix la inmensidad de nuestros paisajes y hacé de cada excursión un recuerdo inolvidable!',

            "Hospedaje":"Hospedaje",
            'Con Megapix vas a poder acceder a una amplia variedad de opciones de hospedaje, adecuadas para todos los gustos. Desde hoteles de lujo hasta acogedoras cabañas en medio de la montaña. ¿Qué estás esperando para encontrar tu estadía ideal? Te invitamos a conocer el encanto de cada lugar y llevarte la estadía de tus sueños. No te pierdas de visitar los alojamientos argentinos con la mejor combinación del confort y la autenticidad. Utilizá tu cuenta PIX desde Brasil y disfrutá de tu viaje sin preocupaciones.':'Con Megapix vas a poder acceder a una amplia variedad de opciones de hospedaje, adecuadas para todos los gustos. Desde hoteles de lujo hasta acogedoras cabañas en medio de la montaña. ¿Qué estás esperando para encontrar tu estadía ideal? Te invitamos a conocer el encanto de cada lugar y llevarte la estadía de tus sueños. No te pierdas de visitar los alojamientos argentinos con la mejor combinación del confort y la autenticidad. Utilizá tu cuenta PIX desde Brasil y disfrutá de tu viaje sin preocupaciones.',
            
            "Entretenimiento":"Entretenimiento",
            '¡Descubrí la magia cultural de Argentina! Te esperamos con espectáculos únicos y experiencias inolvidables. Desde el tango más auténtico hasta vibrantes obras de teatro y conciertos. Además, vas a poder explorar nuestras ferias, celebraciones, festivales, museos y arquitectura donde el arte se fusiona con la historia de manera incomparable. ¡Con Megapix vení a recorrer y conocer nuestra cultura apasionada!':'¡Descubrí la magia cultural de Argentina! Te esperamos con espectáculos únicos y experiencias inolvidables. Desde el tango más auténtico hasta vibrantes obras de teatro y conciertos. Además, vas a poder explorar nuestras ferias, celebraciones, festivales, museos y arquitectura donde el arte se fusiona con la historia de manera incomparable. ¡Con Megapix vení a recorrer y conocer nuestra cultura apasionada!',

            "Indumentaria":"Indumentaria",
            'Desde las boutiques de diseño hasta los outlets con grandes marcas a precios irresistibles. ¡No te podes perder la experiencia de compras en todo el país! Te invitamos a recorrer las calles del barrio de Palermo, en Buenos Aires, donde los diseñadores locales exhiben sus prendas exclusivas confeccionadas con materiales nacionales, como el cuero argentino de alta calidad y tejidos artesanales. Además, descubrí los tradicionales ponchos y prendas de lana merino, originarias del norte y la Patagonia, que capturan la esencia de la cultura local. Con Megapix, no dudes en aprovechar el mix de marcas internacionales y nacionales con una fusión única entre lo moderno y lo auténtico.':'Desde las boutiques de diseño hasta los outlets con grandes marcas a precios irresistibles. ¡No te podes perder la experiencia de compras en todo el país! Te invitamos a recorrer las calles del barrio de Palermo, en Buenos Aires, donde los diseñadores locales exhiben sus prendas exclusivas confeccionadas con materiales nacionales, como el cuero argentino de alta calidad y tejidos artesanales. Además, descubrí los tradicionales ponchos y prendas de lana merino, originarias del norte y la Patagonia, que capturan la esencia de la cultura local. Con Megapix, no dudes en aprovechar el mix de marcas internacionales y nacionales con una fusión única entre lo moderno y lo auténtico.',

            'Vuelos y transportes':'Vuelos y transportes',
            'Argentina es un país lleno de contrastes y maravillas naturales, por eso, con Megapix te invitamos a explorarlo cómodamente de norte a sur. Vas a encontrar vuelos internos, donde cada trayecto es una oportunidad para descubrir paisajes impresionantes y sumergirte en su rica diversidad cultural. Además, contás con opciones como buses de larga distancia, trenes y alquiler de autos, que te van a permitir recorrer el país a tu propio ritmo. Realizá tu pago con Pix desde brasil y accedé a tus boletos en pesos argentinos de manera inmediata y segura. ¡Te esperamos!':'Argentina es un país lleno de contrastes y maravillas naturales, por eso, con Megapix te invitamos a explorarlo cómodamente de norte a sur. Vas a encontrar vuelos internos, donde cada trayecto es una oportunidad para descubrir paisajes impresionantes y sumergirte en su rica diversidad cultural. Además, contás con opciones como buses de larga distancia, trenes y alquiler de autos, que te van a permitir recorrer el país a tu propio ritmo. Realizá tu pago con Pix desde brasil y accedé a tus boletos en pesos argentinos de manera inmediata y segura. ¡Te esperamos!',

            

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
            'Cavaliere Group S.R.L”- Proveedor de Servicios de Activos Virtuales (PSAV) inscripto bajo el N°X de fecha "X" en el Registro de Proveedores de Servicios de Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN NACIONAL DE VALORES sobre la actividad realizada por el PSAV':'Cavaliere Group S.R.L”- Proveedor de Servicios de Activos Virtuales (PSAV) inscripto bajo el N°X de fecha "X" en el Registro de Proveedores de Servicios de Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN NACIONAL DE VALORES sobre la actividad realizada por el PSAV',
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
            "Cobros QR":"Ler QR code",
            "Link de pago":"Pix copia e cola",
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
            'Monto (ARS)':'Valor (ARS)',
            'Ingresa el monto que queres cobrar 👉🏻':'Digite o valor que deseja cobrar 👉🏻',
            'Te mostramos el valor que vas a recibir en USDT (Dolar digital)':'Mostramos o valor que você vai receber em USDT (dólar digital)',
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'O USDT é uma criptomoeda que mantém o mesmo valor que o dólar americano, ou seja, 1 USDT equivale a 1 dólar.',
            'Motivo':'Motivo',
            'Oso de peluche':'Falta',
            'Colocás el “Motivo” de la operación.':'Insira o “Motivo” da operação.',
            'Monto a cobrar (BRL)':'Valor a receber',
            'Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️':'Indicamos qual será o valor final a ser recebido em BRL (Reais)🇧🇷 Clique em “cobrar” e escolha seu método ideal. 🙋‍♀️',
            'Cobrar':'Cobrar',
            '¡Pago realizado!':'Pago realizado',




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
            "y sentite como en casa":"e sinta-se em casa",
            "Pagá con pix ":"Pague com Pix ",
            "Viví experiencias únicas pagando con Megapix en Argentina.":"Viva experiências únicas pagando com Megapix na Argentina.",
            //turistTwo
            'Paga desde tu celular':'Pague do seu celular',
            'Realizá tus pagos a través de Megapix en los comercios adheridos de todo el país.':'Realizá tus pagos a través de Megapix en los comercios adheridos de todo el país.',
            //turistThree
            'Disfrutá Argentina con Megapix':'Disfrutá Argentina con Megapix',
            'Vacacioná':'Tire férias',
            'Estudiá':'Estude',
            'Viví':'Viva',
            'Visitá':'Visite',
            'Trabajá':'Trabalhe',
            '¿Por qué elegirnos?':'Por que escolher Megapix?',
            'Somos una empresa registrada y autorizada que elimina las barreras tradicionales en el cambio de divisas. Además, simplificamos el proceso de pago, evitando conversiones costosas y la molestia de llevar grandes sumas de efectivo.':'Somos uma empresa registrada e autorizada que elimina as barreiras tradicionais na troca de moedas. Além disso, simplificamos o processo de pagamento, evitando conversões caras e o incômodo de carregar grandes quantias em dinheiro.',
           //turistFour
            'Mirá que fácil':'Olha que fácil!',
            '¡Es más que un método de pago, sumate a la experiencia megapix!':'É mais do que um método de pagamento, junte-se à experiência Megapix!',
            //turistFive
            'Ventajas de usar ':'Vantagens de usar ',
            'Con Megapix vas a poder pagar con tu banco o billetera de preferencia sin necesidad de descargar una aplicación, de manera rápida y sencilla. Las transferencias son instantáneas, sin demoras ni complicaciones.':'Com o Megapix, você poderá pagar com seu banco ou carteira de preferência sem a necessidade de baixar um aplicativo, de maneira rápida e simples. As transferências são instantâneas, sem atrasos ou complicações.',
            'Tecnología PIX':'Tecnología PIX',
            'En Megapix, utilizamos la misma tecnología desarrollada y respaldada por el Banco Central de Brasil. Disfrutá de Argentina como si estuvieras en casa.':'No Megapix, utilizamos a mesma tecnologia desenvolvida e respaldada pelo Banco Central do Brasil. Aproveite a Argentina como se estivesse em casa.',
            'Seguridad':'Segurança',
            'Nuestros comercios y empresas adheridas cuentan con un proceso riguroso de aprobación y validación de sus datos por lo que tus pagos y datos siempre van a estar protegidos. En Megapix te cuidamos con nuestra tecnología de vanguardia, brindandote total tranquilidad.':'Nossos comércios e empresas credenciados passam por um processo rigoroso de aprovação e validação de seus dados, garantindo que seus pagamentos e informações estejam sempre protegidos. No Megapix, cuidamos de você com nossa tecnologia de ponta, oferecendo total tranquilidade.',
            'Adios efectivo excesivo':'Adeus ao dinheiro em excesso',
            'Despedíte de las complicaciones del efectivo en mano. Ahora vas a poder pagar al instante, directamente desde tu cuenta, sin preocuparte por llevar el cambio en efectivo. ¡Disfruta de tu viaje con total libertad y seguridad!':'Diga adeus às complicações com dinheiro em espécie. Agora você poderá pagar instantaneamente, diretamente da sua conta, sem se preocupar em levar troco em dinheiro. Aproveite sua viagem com total liberdade e segurança!',
            'Descuentos exclusivos':'Descontos exclusivos',
            'Aprovechá de los mejores descuentos pagando con Megapix en todos los comercios adheridos. ¿Qué estas esperando? ¡Disfrutá al máximo cada experiencia!':'Aproveite os melhores descontos pagando com Megapix em todos os comércios credenciados. O que você está esperando? Aproveite ao máximo cada experiência!',
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días. ¡No dudes en contactarnos!':'Nosso serviço de suporte está pronto para ajudar quando você precisar, com atendimento personalizado e rápido 24 horas por dia, todos os dias.',
            
            
            //turistSix
            '¿Por dónde queres empezar?':'Por onde você quer começar?',

            "Recuerdos & experiencias":"Lembranças & experiências",
            'Descubrí experiencias inolvidables en cada rincón de Argentina, donde cada recuerdo va más allá. Conocerás la esencia de nuestra cultura, dejando una parte de vos en cada espacio, cada detalle y cada lugar que explores. En el norte, encontrarás una cultura vibrante, repleta de tradiciones y colores que van a cautivar todos tus sentidos. Te invitamos a disfrutar de las prestigiosas bodegas, y maravillarte con la majestuosidad de las montañas y llanuras, junto a la rica diversidad de la fauna y flora local. Dejate deslumbrar por paisajes impresionantes al pie de la cordillera de los Andes y en el fin del mundo. Llevarás en tu ser lo que realmente vale la pena vivir y sentir, experiencias que se quedarán grabadas en tu memoria para siempre.':'Descubra experiências inesquecíveis em cada canto da Argentina, onde cada lembrança vai além. Conheça a essência da nossa cultura, deixando uma parte de você em cada espaço, cada detalhe e cada lugar que explorar. No norte, você encontrará uma cultura vibrante, repleta de tradições e cores que vão cativar todos os seus sentidos. Convidamos você a aproveitar as prestigiadas vinícolas e se maravilhar com a majestade das montanhas e planícies, junto à rica diversidade da fauna e flora local. Deixe-se deslumbrar por paisagens impressionantes ao pé da Cordilheira dos Andes e no fim do mundo. Você levará em seu ser o que realmente vale a pena viver e sentir, experiências que ficarão gravadas em sua memória para sempre.',

            "Gastronomía":"Gastronomia",
            'Argentina es un país con una gastronomía variada y llena de sabores, donde se fusionan tradiciones europeas, indígenas y criollas para crear una experiencia única e irrepetible. Desde el asado, que reúne familias y amigos, hasta las empanadas y pastas heredadas de inmigrantes, cada bocado refleja la rica mezcla de culturas que nos define. Vení a descubrir la esencia de Argentina a través de su cocina, donde cada plato es una celebración de diversidad y sabor. ¡Animate a probar lo mejor de nuestra gastronomía!':'A Argentina é um país com uma gastronomia variada e cheia de sabores, onde se fundem tradições europeias, indígenas e criolas para criar uma experiência única e irrepetível. Desde o asado, que reúne famílias e amigos, até as empanadas e pastas herdadas dos imigrantes, cada mordida reflete a rica mistura de culturas que nos define. Venha descobrir a essência da Argentina através de sua culinária, onde cada prato é uma celebração de diversidade e sabor. ¡Anima-se a provar o melhor da nossa gastronomia!',

            "Excursiones":"Excursões",
            'Te invitamos a conocer una inmensa diversidad de excursiones que te llevarán a descubrir la belleza natural de los lugares más visitados de Argentina donde vas a vivir aventuras únicas y memorables. Desde emociones extremas y momentos de tranquilidad hasta una inmersión cultural, siempre encontrarás una experiencia extraordinaria adaptada a vos. ¡Vení a disfrutar con Megapix la inmensidad de nuestros paisajes y hacé de cada excursión un recuerdo inolvidable!':'Convidamos você a conhecer uma imensa diversidade de excursões que o levarão a descobrir a beleza natural dos destinos mais visitados da Argentina, onde você viverá aventuras únicas e memoráveis. Desde emoções extremas e momentos de tranquilidade até uma imersão cultural, você sempre encontrará uma experiência extraordinária adaptada a você. Venha desfrutar com a Megapix da imensidão de nossas paisagens e transforme cada excursão em uma lembrança inesquecível!',

            "Hospedaje":"Hospedagem",
            'Con Megapix vas a poder acceder a una amplia variedad de opciones de hospedaje, adecuadas para todos los gustos. Desde hoteles de lujo hasta acogedoras cabañas en medio de la montaña. ¿Qué estás esperando para encontrar tu estadía ideal? Te invitamos a conocer el encanto de cada lugar y llevarte la estadía de tus sueños. No te pierdas de visitar los alojamientos argentinos con la mejor combinación del confort y la autenticidad. Utilizá tu cuenta PIX desde Brasil y disfrutá de tu viaje sin preocupaciones.':'Con Megapix vas a poder acceder a una amplia variedad de opciones de hospedaje, adecuadas para todos los gustos. Desde hoteles de lujo hasta acogedoras cabañas en medio de la montaña. ¿Qué estás esperando para encontrar tu estadía ideal? Te invitamos a conocer el encanto de cada lugar y llevarte la estadía de tus sueños. No te pierdas de visitar los alojamientos argentinos con la mejor combinación del confort y la autenticidad. Utilizá tu cuenta PIX desde Brasil y disfrutá de tu viaje sin preocupaciones.',
            
            "Entretenimiento":"Entretenimento",
            '¡Descubrí la magia cultural de Argentina! Te esperamos con espectáculos únicos y experiencias inolvidables. Desde el tango más auténtico hasta vibrantes obras de teatro y conciertos. Además, vas a poder explorar nuestras ferias, celebraciones, festivales, museos y arquitectura donde el arte se fusiona con la historia de manera incomparable. ¡Con Megapix vení a recorrer y conocer nuestra cultura apasionada!':'Descubra a magia cultural da Argentina! Estamos esperando por você com espetáculos únicos e experiências inesquecíveis. Desde o tango mais autêntico até vibrantes peças de teatro e concertos. Além disso, você poderá explorar nossas feiras, celebrações, festivais, museus e arquitetura, onde a arte se funde com a história de maneira incomparável. Com Megapix, venha explorar e conhecer nossa cultura apaixonada!',

            "Indumentaria":"Indumentária",
            'Desde las boutiques de diseño hasta los outlets con grandes marcas a precios irresistibles. ¡No te podes perder la experiencia de compras en todo el país! Te invitamos a recorrer las calles del barrio de Palermo, en Buenos Aires, donde los diseñadores locales exhiben sus prendas exclusivas confeccionadas con materiales nacionales, como el cuero argentino de alta calidad y tejidos artesanales. Además, descubrí los tradicionales ponchos y prendas de lana merino, originarias del norte y la Patagonia, que capturan la esencia de la cultura local. Con Megapix, no dudes en aprovechar el mix de marcas internacionales y nacionales con una fusión única entre lo moderno y lo auténtico.':'Desde as boutiques de design até os outlets com grandes marcas a preços irresistíveis. Você não pode perder a experiência de compras em todo o país! Convidamos você a explorar as ruas do bairro Palermo, em Buenos Aires, onde os designers locais exibem suas roupas exclusivas confeccionadas com materiais nacionais, como o couro argentino de alta qualidade e tecidos artesanais. Além disso, descubra os tradicionais ponchos e roupas de lã merino, originárias do norte e da Patagônia, que capturam a essência da cultura local. Com Megapix, não hesite em aproveitar a mistura de marcas internacionais e nacionais com uma fusão única entre o moderno e o autêntico.',


            'Vuelos y transportes':'Voos e Transportes',
            'Argentina es un país lleno de contrastes y maravillas naturales, por eso, con Megapix te invitamos a explorarlo cómodamente de norte a sur. Vas a encontrar vuelos internos, donde cada trayecto es una oportunidad para descubrir paisajes impresionantes y sumergirte en su rica diversidad cultural. Además, contás con opciones como buses de larga distancia, trenes y alquiler de autos, que te van a permitir recorrer el país a tu propio ritmo. Realizá tu pago con Pix desde brasil y accedé a tus boletos en pesos argentinos de manera inmediata y segura. ¡Te esperamos!':'Argentina es un país lleno de contrastes y maravillas naturales, por eso, con Megapix te invitamos a explorarlo cómodamente de norte a sur. Vas a encontrar vuelos internos, donde cada trayecto es una oportunidad para descubrir paisajes impresionantes y sumergirte en su rica diversidad cultural. Además, contás con opciones como buses de larga distancia, trenes y alquiler de autos, que te van a permitir recorrer el país a tu propio ritmo. Realizá tu pago con Pix desde brasil y accedé a tus boletos en pesos argentinos de manera inmediata y segura. ¡Te esperamos!',

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

            'Cavaliere Group S.R.L”- Proveedor de Servicios de Activos Virtuales (PSAV) inscripto bajo el N°X de fecha "X" en el Registro de Proveedores de Servicios de Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN NACIONAL DE VALORES sobre la actividad realizada por el PSAV':'Cavaliere Group S.R.L”- Proveedor de Servicios de Activos Virtuales (PSAV) inscripto bajo el N°X de fecha "X" en el Registro de Proveedores de Servicios de Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN NACIONAL DE VALORES sobre la actividad realizada por el PSAV',
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
            'Potenciá tu negocio':'Power Up Your Business',
            'Más del 30% de los turistas que visitan Argentina provienen de Brasil, además de miles de residentes brasileños que desarrollan actividades comerciales en destinos clave como Buenos Aires, Ushuaia, Bariloche, Mendoza y Misiones. Es por esto que desde Megapix pensamos una solución basada en el método de pago más popular en Brasil: PIX.':'Over 30% of tourists visiting Argentina come from Brazil, along with thousands of Brazilian residents conducting business in key destinations such as Buenos Aires, Ushuaia, Bariloche, Mendoza, and Misiones. That’s why at Megapix, we’ve developed a solution based on Brazil’s most popular payment method: PIX.',

            '¡Conectando con este mercado estratégico vas a poder hacer crecer los ingresos de tu negocio o emprendimiento!':'By connecting with this strategic market, you can grow your business or venture’s revenue!',

            'Entonces... ¿Ya te convencimos?':'So... Are you convinced?',
            "Si querés comenzar a cobrar con Pix ya podés hacerlo a través de nuestra plataforma, es 100% segura y gratuita.":"If you want to start accepting payments with PIX, you can do it now through our platform—it's 100% secure and free.",

            'crecé sin fronteras':'Grow Without Borders',

            '¡Potencia tu negocio al alcance de tu mano con Megapix!':'Power up your business with Megapix at your fingertips!',
            //TEXT MOVE
            'cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis cobrá reales, recibí dólar DIGITAL y retirá en pesos o cripto gratis':'Receive Reais, Get Digital Dollars, and Withdraw in Pesos or Crypto for Free',
            //SECTION TWO
            'Ventajas de usar':'Benefits of Using ',
            'Megapix':'Megapix',
            "Control de tus finanzas":"Control Your Finances",
            "Cobros QR y Link de pago":"QR and Payment Links",
            "Conexión con turistas":"Connection with Tourists",
            "Gratis":"Free",
            "Rápido":"Fast",
            "Fácil":"Easy",
            "Sin comisiones":"No commissions",
            "Pagos inmediatos":"Immediate Payments",
            "Cobros sin barreras":"Borderless Payments",
            "Segura":"Secure",
            "Soporte 24/7":"24/7 Support",
            "Gestión de negocios":"Business Management",
            //SECTION THREE
            '¿Cómo funciona?':'How It Works',
            '¡Realicemos un cobro en vivo y en directo!':'Let’s Make a Live Payment!',
            //Inputs
            'Monto (ARS)':'Amount (ARS)',
            'Ingresa el monto que queres cobrar 👉🏻':'Enter the amount you want to charge 👉🏻',
            "Te mostramos el valor que vas a recibir en USDT (Dolar digital)":"We show you the value you'll receive in USDT (Digital Dollar)",
            'El USDT es una criptomoneda que mantiene el mismo valor que el dolar estadonudense, lo que significa que 1 USDT equivale a un dolar.':'O USDT é uma criptomoeda que mantém o mesmo valor que o dólar americano, ou seja, 1 USDT equivale a 1 dólar.',
            'Motivo':'Reason',
            'Oso de peluche':'Example',
            'Colocás el “Motivo” de la operación.':'Enter the “Reason” for the transaction.',
            'Monto a cobrar (BRL)':'Amount to charge',
            "Te indicamos cuál será el monto final a cobrar en BRL (Reales)‍🇧🇷 Clickeas “cobrar” y elegís tu método ideal. 🙋‍♀️":"We indicate the final amount you'll receive in BRL (Reais)🇧🇷 Click “charge” and choose your ideal payment method. 🙋‍♀️",
            'Cobrar':'Charge',
            '¡Pago realizado!':'Successful payment',




            //SECTION FOUR
            'Funcionalidades principales':'Main Features',
            'Gestión de cobros diarios':'Daily Payment Management',
            'Gestión de billetera':'Wallet Management',
            'Gestión de ventas':'Sales Management',
            'Gestión de tiendas':'Store Management',
            'Gestión de usuarios':'User Management',
            //SECTION FIVE
            'Características & Beneficios':'Features & Benefits',
            'Cobros seguros':'Secure Payments',
            'Nuestro sistema de cobro ofrece la máxima seguridad, eliminando los riesgos vinculados al manejo de efectivo y minimizando los errores humanos. Gracias a nuestra tecnología avanzada, cada transacción es precisa y protegida, asegurando un proceso ágil y sin complicaciones.':'Our payment system offers the highest security, eliminating risks associated with cash handling and minimizing human errors. Thanks to our advanced technology, each transaction is precise and protected, ensuring a smooth and trouble-free process.',
            'Multiplataforma':'Multi-Platform',
            'Podrás acceder y utilizar la plataforma desde cualquier dispositivo que tenga conexión a internet, ya sea un celular o una tablet, sin necesidad de contar con una computadora para ello.':'You can access and use the platform from any device with an internet connection, whether it’s a smartphone or tablet, without needing a computer.',
            'Control de sucursales':'Branch Management',
            'Podrás adherir todas las sucursales que estén asociadas a tu CUIT único y visualizar el historial de movimientos de cada una (Roles y permisos asignados a quien consideres).':'You can add all branches associated with your unique CUIT and view the transaction history of each one (Roles and permissions assigned as you see fit).',
            'Roles y permisos':'Roles and Permissions',
            'Megapix ofrece un sistema de administración y división de tareas, donde existe un administrador, co-administrador, gerente y cajero o cobrador, logrando aumentar la eficiencia operativa.':'Megapix offers an administration and task division system, including an administrator, co-administrator, manager, and cashier or collector, enhancing operational efficiency.',
            'Plataforma sin costo':'Cost-Free Platform',
            'Nuestra plataforma es 100% gratuita, lo que significa que no tendrás que preocuparte por la letra chica ni comisiones por registro o uso.':'Our platform is 100% free, meaning you won’t need to worry about hidden fees or registration costs.',
            //Pagos inmediatos
            'Cobrá reales y recibí dolar digital en tu cuenta Megapix al instante de manera fácil y segura. Luego podrás retirarlo cuando quieras en USDT o en pesos argentinos.':'Receive Reais and get digital dollars in your Megapix account instantly in an easy and secure manner. Then, you can withdraw in USDT or Argentine pesos whenever you want.',
            //Soporte 24/7
            'Nuestro servicio de soporte está listo para ayudarte cuando lo necesites con atención personalizada y rápida las 24 horas, todos los días.':'Our support service is ready to assist you whenever needed, with personalized and prompt attention 24 hours a day, every day.',
            'Dólar digital (USDT)':'Digital Dollar (USDT)',
            'El dólar digital USDT es una stablecoin que está vinculada al valor del dólar estadounidense, lo que significa que su valor se mantiene estable y  protege a los usuarios de la volatilidad. ¡Cobrar en USDT puede aportar estabilidad, agilidad en las transacciones y nuevas oportunidades financieras!':'The USDT digital dollar is a stablecoin tied to the value of the US dollar, meaning its value remains relatively stable and can protect users from the volatility typical of other cryptocurrencies. Receiving payments in USDT offers stability, transaction speed, and new financial opportunities!',
            //SECTION SIX
            '¿ESTÁS LISTO?':'Ready?',
            'Comencemos':'Let’s Get Started',
            'Crea experiencias de cobro excepcionales potenciando el crecimiento de tu negocio con tu cuenta Megapix.':'Create exceptional payment experiences by boosting your business growth with your Megapix account.',
            'Ir a la plataforma':'Visit Platform',
            //SECTION SEVEN
            '¿La plataforma tiene costo?':'Is there a cost for the platform?',
            'No, los servicios de Megapix son completamente gratuitos. Solo debes considerar el costo de la red cripto para los retiros, una comisión que es ajena a Megapix y depende de la red blockchain utilizada.':'No, Megapix services are completely free. Just consider the cost of the crypto network for withdrawals, a fee that is outside Megapix’s control and depends on the blockchain network used.',
            "¿Qué es Pix?":"What is PIX?",
            "PIX es un sistema de pagos instantáneos desarrollado por el Banco Central de Brasil. Esta tecnología te permite recibir pagos en reales de forma rápida, segura y sin costo, convirtiéndolos automáticamente en USDT.":"PIX is an instant payment system developed by the Central Bank of Brazil. This technology allows you to receive payments in reais quickly, securely, and at no cost, automatically converting them into USDT.",
            "¿Qué es USDT?":"What is USDT?",
            "USDT es una criptomoneda estable (stablecoin) que mantiene su valor vinculado al dólar estadounidense. Esto la convierte en una de las opciones más seguras y confiables dentro del mercado de criptomonedas, ideal para proteger el valor de los activos frente a la volatilidad.":"USDT is a stablecoin that maintains its value linked to the US dollar. This makes it one of the safest and most reliable options in the cryptocurrency market, ideal for protecting asset value against volatility.",
            "¿El dinero que recibo queda en Megapix o debo vincular una cuenta?":"Does the money I receive stay in Megapix, or do I need to link a bank account?",
            "Megapix te proporciona una cuenta donde se almacenarán todos los pagos que recibas. Desde esta cuenta, podrás gestionar tu dinero, realizando conversiones a criptomonedas o pesos argentinos según prefieras. Es obligatorio registrar al menos una cuenta para poder retirar tus fondos cuando lo desees; si realizas retiros en criptomonedas, asegúrate de que la cuenta acepta criptomonedas. Además, podrás registrar múltiples cuentas, siempre y cuando estén a tu nombre.":"Megapix provides you with an account where all received payments are stored. From this account, you can manage your money, converting it into cryptocurrencies or Argentine pesos as you prefer. You must register at least one account to withdraw your funds when you wish; if you withdraw in cryptocurrencies, ensure that the account accepts cryptocurrencies. You can also register multiple accounts, provided they are in your name.",
            "¿Debo descargar alguna app?":"Do I need to download an app?",
            "No es necesario descargar nada. Megapix está diseñada para ser accesible y fácil de usar. Es una plataforma web que puedes utilizar desde cualquier dispositivo, brindándote la comodidad de acceder a ella sin descargas adicionales y desde donde lo necesites.":"No, you don’t need to download anything. Megapix is designed to be accessible and easy to use. It is a web platform that you can use from any device, giving you the convenience of accessing it without additional downloads, wherever you need.",

            'Preguntas frecuentes':'Frequently Asked Questions',

// TURISTAS ------------------
            "y sentite como en casa":" and feel at home",
            "Pagá con pix ":"Pay with Pix ",
            "Viví experiencias únicas pagando con Megapix en Argentina.":"Experience something unique by paying with Megapix in Argentina.",
            //turistTwo
            'Paga desde tu celular':'Pay from your phone',
            'Realizá tus pagos a través de Megapix en los comercios adheridos de todo el país.':'Make payments with Megapix at affiliated businesses across the country.',
            //turistThree
            'Disfrutá Argentina con Megapix':'Enjoy Argentina with Megapix',
            'Vacacioná':'Vacation',
            'Estudiá':'Study',
            'Viví':'Live',
            'Visitá':'Visit',
            'Trabajá':'Work',
            '¿Por qué elegirnos?':'Why choose us?',
            'Somos una empresa registrada y autorizada que elimina las barreras tradicionales en el cambio de divisas. Además, simplificamos el proceso de pago, evitando conversiones costosas y la molestia de llevar grandes sumas de efectivo.':'We are a registered and authorized company that breaks down the traditional barriers of currency exchange. Additionally, we simplify the payment process, eliminating costly conversions and the hassle of carrying large amounts of cash.',
            //turistFour
            'Mirá que fácil':'See how easy it is',
            "¡Es más que un método de pago, sumate a la experiencia megapix!":"It's more than just a payment method—join the Megapix experience!",
            //turistFive
            'Ventajas de usar ':'Benefits of using ',
            'Con Megapix vas a poder pagar con tu banco o billetera de preferencia sin necesidad de descargar una aplicación, de manera rápida y sencilla. Las transferencias son instantáneas, sin demoras ni complicaciones.':'With Megapix, you can pay quickly and easily with your preferred bank or wallet, without the need to download an app. Transfers are instantaneous, with no delays or complications.',
            'Tecnología PIX':'PIX Technology',
            "En Megapix, utilizamos la misma tecnología desarrollada y respaldada por el Banco Central de Brasil. Disfrutá de Argentina como si estuvieras en casa.":"At Megapix, we use the same technology developed and backed by the Central Bank of Brazil. Enjoy Argentina just like you're at home.",
            'Seguridad':'Security',
            'Nuestros comercios y empresas adheridas cuentan con un proceso riguroso de aprobación y validación de sus datos por lo que tus pagos y datos siempre van a estar protegidos. En Megapix te cuidamos con nuestra tecnología de vanguardia, brindandote total tranquilidad.':'Our affiliated businesses go through a rigorous approval and validation process, ensuring your payments and data are always protected. With Megapix, we safeguard your transactions using cutting-edge technology, providing total peace of mind.',
            'Adios efectivo excesivo':'Goodbye, excess cash',
            'Despedíte de las complicaciones del efectivo en mano. Ahora vas a poder pagar al instante, directamente desde tu cuenta, sin preocuparte por llevar el cambio en efectivo. ¡Disfruta de tu viaje con total libertad y seguridad!':'Say goodbye to the hassle of carrying cash. Now, you can pay instantly, directly from your account, without worrying about carrying change. Enjoy your trip with complete freedom and security!',
            'Descuentos exclusivos':'Exclusive Discounts',
            'Aprovechá de los mejores descuentos pagando con Megapix en todos los comercios adheridos. ¿Qué estas esperando? ¡Disfrutá al máximo cada experiencia!':'Take advantage of the best discounts when paying with Megapix at all affiliated stores. What are you waiting for? Make the most of every experience!',
            "Nuestro servicio de soporte está listo para ayudarte cuando lo necesites, con atención personalizada y rápida las 24 horas, todos los días. ¡No dudes en contactarnos!":"Our support team is ready to assist you whenever you need it, with quick and personalized service 24 hours a day, every day. Don't hesitate to contact us!", 


            //turistSix
            '¿Por dónde queres empezar?':'Where do you want to start?',

            "Recuerdos & experiencias":"Memories & Experiences",
            "Descubrí experiencias inolvidables en cada rincón de Argentina, donde cada recuerdo va más allá. Conocerás la esencia de nuestra cultura, dejando una parte de vos en cada espacio, cada detalle y cada lugar que explores. En el norte, encontrarás una cultura vibrante, repleta de tradiciones y colores que van a cautivar todos tus sentidos. Te invitamos a disfrutar de las prestigiosas bodegas, y maravillarte con la majestuosidad de las montañas y llanuras, junto a la rica diversidad de la fauna y flora local. Dejate deslumbrar por paisajes impresionantes al pie de la cordillera de los Andes y en el fin del mundo. Llevarás en tu ser lo que realmente vale la pena vivir y sentir, experiencias que se quedarán grabadas en tu memoria para siempre.":"Discover unforgettable experiences in every corner of Argentina, where each memory goes beyond the ordinary. You'll immerse yourself in our culture, leaving a part of yourself in every space, detail, and place you explore. In the north, you'll find a vibrant culture full of traditions and colors that will captivate all your senses. We invite you to enjoy prestigious wineries and marvel at the majestic mountains, plains, and the rich diversity of local flora and fauna. Be dazzled by breathtaking landscapes at the foot of the Andes and at the end of the world. These are experiences that will remain etched in your memory forever.",

            "Gastronomía":"Gastronomy",
            'Argentina es un país con una gastronomía variada y llena de sabores, donde se fusionan tradiciones europeas, indígenas y criollas para crear una experiencia única e irrepetible. Desde el asado, que reúne familias y amigos, hasta las empanadas y pastas heredadas de inmigrantes, cada bocado refleja la rica mezcla de culturas que nos define. Vení a descubrir la esencia de Argentina a través de su cocina, donde cada plato es una celebración de diversidad y sabor. ¡Animate a probar lo mejor de nuestra gastronomía!':'Argentina is a country with a diverse and flavorful cuisine, where European, Indigenous, and Creole traditions come together to create a unique and unforgettable experience. From the famous asado, which brings together family and friends, to empanadas and pasta inherited from immigrants, every bite reflects the rich blend of cultures that defines us. Come discover the essence of Argentina through its cuisine, where every dish is a celebration of diversity and flavor. Dare to taste the best of our gastronomy!',

            "Excursiones":"Excursions",
            "Te invitamos a conocer una inmensa diversidad de excursiones que te llevarán a descubrir la belleza natural de los lugares más visitados de Argentina donde vas a vivir aventuras únicas y memorables. Desde emociones extremas y momentos de tranquilidad hasta una inmersión cultural, siempre encontrarás una experiencia extraordinaria adaptada a vos. ¡Vení a disfrutar con Megapix la inmensidad de nuestros paisajes y hacé de cada excursión un recuerdo inolvidable!":"We invite you to explore an immense variety of excursions that will take you to discover the natural beauty of Argentina's most visited places, where you will live unique and memorable adventures. From extreme thrills and peaceful moments to cultural immersion, you'll always find an extraordinary experience tailored to you.Come enjoy Argentina’s vast landscapes with Megapix, and make every excursion an unforgettable memory!",

            "Hospedaje":"Accommodation",
            "Con Megapix vas a poder acceder a una amplia variedad de opciones de hospedaje, adecuadas para todos los gustos. Desde hoteles de lujo hasta acogedoras cabañas en medio de la montaña. ¿Qué estás esperando para encontrar tu estadía ideal? Te invitamos a conocer el encanto de cada lugar y llevarte la estadía de tus sueños. No te pierdas de visitar los alojamientos argentinos con la mejor combinación del confort y la autenticidad. Utilizá tu cuenta PIX desde Brasil y disfrutá de tu viaje sin preocupaciones.":"With Megapix, you'll have access to a wide range of accommodation options to suit every taste. From luxury hotels to cozy cabins nestled in the mountains. What are you waiting for to find your ideal stay? We invite you to discover the charm of every place and experience the stay of your dreams. Don't miss visiting Argentine accommodations that offer the perfect combination of comfort and authenticity. Use your PIX account from Brazil and enjoy your trip without worries.",
            
            "Entretenimiento":"Entertainment",
            "¡Descubrí la magia cultural de Argentina! Te esperamos con espectáculos únicos y experiencias inolvidables. Desde el tango más auténtico hasta vibrantes obras de teatro y conciertos. Además, vas a poder explorar nuestras ferias, celebraciones, festivales, museos y arquitectura donde el arte se fusiona con la historia de manera incomparable. ¡Con Megapix vení a recorrer y conocer nuestra cultura apasionada!":"Discover the cultural magic of Argentina! We're waiting for you with unique shows and unforgettable experiences. From the most authentic tango performances to vibrant theater productions and concerts. You'll also be able to explore our fairs, celebrations, festivals, museums, and architecture, where art merges with history in an unparalleled way. With Megapix, come explore and experience our passionate culture!",

            "Indumentaria":"Clothing",
            "Desde las boutiques de diseño hasta los outlets con grandes marcas a precios irresistibles. ¡No te podes perder la experiencia de compras en todo el país! Te invitamos a recorrer las calles del barrio de Palermo, en Buenos Aires, donde los diseñadores locales exhiben sus prendas exclusivas confeccionadas con materiales nacionales, como el cuero argentino de alta calidad y tejidos artesanales. Además, descubrí los tradicionales ponchos y prendas de lana merino, originarias del norte y la Patagonia, que capturan la esencia de la cultura local. Con Megapix, no dudes en aprovechar el mix de marcas internacionales y nacionales con una fusión única entre lo moderno y lo auténtico.":"From designer boutiques to outlets with top brands at unbeatable prices, you can't miss the shopping experience across the country! We invite you to explore the streets of Palermo in Buenos Aires, where local designers showcase exclusive garments made with national materials, such as high-quality Argentine leather and artisanal textiles. You'll also discover traditional ponchos and merino wool clothing from the north and Patagonia, which capture the essence of local culture. With Megapix, don’t hesitate to take advantage of the mix of international and national brands that offer a unique fusion of modern and authentic.",

            'Vuelos y transportes':'Flights and Transportation',
            "Argentina es un país lleno de contrastes y maravillas naturales, por eso, con Megapix te invitamos a explorarlo cómodamente de norte a sur. Vas a encontrar vuelos internos, donde cada trayecto es una oportunidad para descubrir paisajes impresionantes y sumergirte en su rica diversidad cultural. Además, contás con opciones como buses de larga distancia, trenes y alquiler de autos, que te van a permitir recorrer el país a tu propio ritmo. Realizá tu pago con Pix desde brasil y accedé a tus boletos en pesos argentinos de manera inmediata y segura. ¡Te esperamos!":"Argentina is a country full of contrasts and natural wonders, and with Megapix, we invite you to explore it comfortably from north to south. You'll find domestic flights, where each journey is an opportunity to discover stunning landscapes and immerse yourself in rich cultural diversity. Additionally, you'll have options like long-distance buses, trains, and car rentals, allowing you to explore the country at your own pace. Pay with Pix from Brazil and get your tickets in Argentine pesos immediately and securely. We’re waiting for you!",

            

            //ALGUNOS COMPONENTES
            //Footer
            'Un producto de Polynomium®':'A Product of Polynomium®',
            '¿Quiénes somos?':'Who We Are?',
            'Ir a polynomium':'Go to Polynomium',
            'Contacto':'Contact',
            'Política de privacidad':'Privacy Policies',
            'Términos & condiciones':'Terms & Conditions',
            'Comunidad':'Community',
            'Soporte & FAQs':'Support & FAQs',

            'Cavaliere Group S.R.L”- Proveedor de Servicios de Activos Virtuales (PSAV) inscripto bajo el N°X de fecha "X" en el Registro de Proveedores de Servicios de Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN NACIONAL DE VALORES sobre la actividad realizada por el PSAV':'Cavaliere Group S.R.L"– Virtual Asset Service Provider (PSAV), registered under No. X on "X" in the Register of Virtual Asset Service Providers of the CNV. This registration is for the purposes of compliance as an Obliged Subject before the Financial Intelligence Unit (UIF) and any other regulatory authority authorized to do so, within their competencies, and does not imply a license or supervision by the NATIONAL SECURITIES COMMISSION over the activities performed by the PSAV.',
            //btn
            "Visitar plataforma":"Visit Platform",
            //Slogan
            'Megapix, innovando el presente & futuro':'Megapix, innovando el presente & futuro',
            //Switch
            'Negocios AR':'Business AR',
            'Clientes BR':'Clients BR',






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
