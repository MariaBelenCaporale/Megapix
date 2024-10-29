import PropTypes from "prop-types";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Terminos = ({ section }) => {
  const { t } = useTranslation();
  const termsText = {
    condiciones: (
      <>
      <div className="contenedorUnoTerms">
        <p className="textScroll">
        {t(
            "Los siguientes términos y condiciones generales de uso de la aplicación “Megapix”, y/o sitio web www.megapix.lat incluyendo sus modificaciones, constituyen el acuerdo entre cualquier persona y/o representante legal mayor de 18 años en adelante (“Comerciante/cliente y Turista/usuario final”) que utilice la aplicación móvil disponible en Mgapix.com operado por Cavaliere Group S.R.L. Se describirán los derechos, responsabilidades y obligaciones que aplicarán en la relación entre el cliente comerciante, usuario final turista, y Megapix, referente al uso de la aplicación y cualquier producto, funcionalidad o servicio en relación que allí se ofrezca."
          )}
        </p>
        <p className="textScroll">
        {t(
            "Se describirán los derechos, responsabilidades y obligaciones que aplicarán en la relación entre el cliente comerciante, usuario final turista, y Megapix, referente al uso de la aplicación y cualquier producto, funcionalidad o servicio en relación que allí se ofrezca."
          )}
        </p>
      </div>

      <div className="contenedorUnoTerms">
        <p className="textScroll">
          <span className="negrita">
        {t("1 Aceptación de los Términos: ")}
        </span>
        {t(
            "La aceptación a los Términos y Condiciones Generales- y demás anexos vinculados- previo a la utilización de la Aplicación implica un acuerdo contractual vinculante entre las partes. Cualquier usuario que no desee aceptarlos deberá abstenerse de utilizar la misma."
          )}
        </p>

        <p className="textScroll">
        <span className="negrita">
            {t("2 Actualizaciones y Modificaciones: ")}
          </span>
        {t(
            "La vigencia de las actualizaciones y/modificaciones consideradas pertinentes comenzará a regir desde el momento de su publicación y/o funcionamiento y podrán ocurrir de manera automática sin previo aviso. Por la presente, aceptas estas posibles futuras modificaciones y actualizaciones."
          )}
        </p>

        <p className="textScroll">
        <span className="negrita">
            {t("3 Comunicación electrónica: ")}
          </span>
        {t(
            "Al aceptar estos Términos Generales el usuario consiente el formato electrónico de notificación en lo referente al uso de la misma y los servicios provistos por ella"
          )}
        </p>

        <p className="textScroll">
        <span className="negrita">
            {t("4 Canales de Atención: ")}
          </span>
        {t(
            "En Megapix, brindamos un soporte integral a nuestro cliente (comerciante) a través de la sección llamada “Soporte” dentro nuestra plataforma. En esta sección, el usuario encontrará: "
          )}
        </p>
      </div>

      <div className="contenedorUnoTerms">
        <span className="bullets">
            {t(
              "• Manual de uso de la herramienta: Guías detalladas para maximizar el uso de nuestras funcionalidades."
            )} 
        </span>
        <span className="bullets">
        {t(
              "• Preguntas frecuentes: Respuestas a las dudas más comunes para facilitar una solución rápida."
            )}
        </span>
        <span className="bullets">
        {t(
              "• Canal de comunicación: Un sistema de mensajería para consultas y soporte técnico"
            )}
        </span>
      </div>

      <div className="contenedorUnoTerms">
        <p className="textScroll">
        {t(
            "El canal de comunicación que utilizamos se llama “Liveconnect”, una herramienta versátil que integra varios medios de comunicación, incluyendo redes sociales, WhatsApp, correo electrónico y más. Aquí están algunas de sus ventajas: "
          )}
        </p>
      </div>

      <div className="contenedorUnoTerms">
      <span className="bullets">
            {t(
              "• Seguimiento con ID: Cada reclamo o consulta recibe un ID único para asegurar el seguimiento continuo y evitar la pérdida de información."
            )}
          </span>
          <span className="bullets">
            {t(
              "• Chatbot automatizado: Nuestro chatbot puede manejar preguntas frecuentes y solicitar documentación previa, como capturas de pantalla de errores, para acelerar la resolución de problemas."
            )}
          </span>
      </div>

      <div className="contenedorUnoTerms">
            <p className="textScroll">
            {t(
            "Nuestro objetivo es proporcionar un soporte eficiente y accesible sin depender exclusivamente del correo electrónico, asegurando que nuestro sistema escale adecuadamente con el crecimiento de nuestro equipo. Con Liveconnect, los usuarios pueden obtener la ayuda que necesitan de manera rápida y efectiva, mejorando su experiencia con Megapix."
          )}
            </p>
      </div>

      <div className="contenedorUnoTerms">
      <span className="negrita">
        {t("5 Definiciones: ")}
        </span>
        <p className="textScroll">
        {t(
            "“Cliente-comerciante”: Toda persona física mayor de 18 años y/o, toda persona jurídica que realice las actividades comerciales habilitadas por el sitio"
          )}
        </p>
        <p className="textScroll">
        {t("“Usuario final-Turista”: Toda persona física mayor de 18 años que tenga una cuenta PIX.")}
        </p>
        <p className="textScroll">
        {t(
            "“Activos digitales”: a la representación digital de valor que se puede comercializar y/o transferir digitalmente y utilizar para pagos o inversiones. En ningún caso se entenderá como activo virtual la moneda de curso legal en el territorio nacional y las monedas emitidas por otros países o jurisdicciones (moneda fiduciaria)."
          )}
        </p>
        <p className="textScroll">
        {t(
            "“Servicios”: Comprende en general la totalidad de los servicios, funcionalidades y productos que se ofrecen a través de la Aplicación."
          )}
        </p>
        </div>

      <div className="contenedorUnoTerms">

        <p className="textScroll">
        <span className="negrita">
        {t("6 Personas Jurídicas: ")}
        </span>
        {t(
            "En el caso de que personas jurídicas que deseen ser usuarias cliente del servicio de Megapix, al registrar su cuenta el sistema de manera automática le enviara un mail en el que recibirá las indicaciones de la documentación necesaria para terminar con la validación de la cuenta que le permita mantenerla y usarla, este tendrá un plazo de quince días hábiles para ser entregada, en el caso de no cumplir automáticamente se bloqueara el usuario y no podrá utilizar las funcionalidades principales.El representante de la entidad deberá instrumentar la documentación correspondiente estipulada por el Backoffice de Megapix, en su interior recibirá toda la documentación necesaria para poder aprobar, solicitar corrección o rechazar."
          )}
        </p>
        <p className="textScroll">
        <span className="negrita">
        {t("7 Registración: ")}
        </span>
        {t(
            "Es requisito obligatorio para el uso de la Aplicación realizar el proceso de registración. Para ello, se requerirá que el cliente-comerciante proporcione todos los datos e información que se le solicite, los cuáles deberán ser válidos, exactos y verídicos. Adicionalmente, deberán cumplir con el proceso de identificación y debida diligencia, así como también los requisitos previstos en materia de Prevención de Lavado de Activos y Financiamiento del Terrorismo (LA/FT) por la UIF (Unidad de Información Financiera) en su Resolución 49/2024."
          )}
        </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            {t('Toda la información y datos personales proporcionados por el cliente-comerciante tienen carácter de declaración jurada y garantiza la veracidad, vigencia y autenticidad de la información provista.')}
          </p>
        </div>
        
        <div className="contenedorUnoTerms">
          <p className="textScroll">
          <span className="negrita">
            {t("8 Verificación de la identidad: ")}
          </span>
            {t('Megapix se reserva el derecho de solicitar documentación e información adicional al cliente-comerciante, a terceros a efectos de corroborar la información ya proporcionada durante la vigencia de los servicios, así como de rechazar una solicitud de registro, suspender de forma parcial o definitivamente. Los clientescomerciantes cuyos datos no hayan podido ser revalidados, o en caso de detectar actividades  sospechosas, sin que tal decisión genere derecho de indemnización o resarcimiento alguno para el cliente-comerciante.')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
          <span className="negrita">
            {t("9 Privacidad: ")}
          </span>
            {t('La información personal proporcionada se gestionará de acuerdo con nuestra Política de Privacidad')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
          <span className="negrita">
            {t("10 Cuenta Megapix: ")}
          </span>
            {t('El registro exitoso generará en favor del cliente-comerciante una cuenta personal e intransferible, a fin de permitir el acceso a los servicios y funcionalidades que ofrece la aplicación Megapix')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
          <span className="negrita">
            {t("11 Acceso: ")}
          </span>
            {t('El cliente-comerciante accede a su cuenta Megapix mediante el ingreso de su dirección e-mail, ID de empresa y contraseña al momento de registrarse en la aplicación. El cliente-comerciante tiene como obligatorio resguardar y mantener la confidencialidad de su contraseña en todo momento, ya que éste será el único responsable por las operaciones efectuadas en su cuenta Megapix.')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <span className="negrita">
            {t("12 Uso indebido: Programa de prevención de Lavado de Dinero y Financiamiento del Terrorismo: ")}
          </span>
          <p className="textScroll">
            {t('En Megapix promovemos la transparencia en pos de una inclusión financiera sustentable. La empresa cumple con la normativa UIF y en particular con la Resolución 49/24. En base a ello, nuestros estándares de cumplimiento se rigen por las mejores prácticas adoptadas tanto a nivel mundial como nacional en la industria; tomando en consideración lo recomendado por FAFT- GAFI (Finantial Action Task Force /Grupo de Acción Financiera Internacional) Organismo gubernamental, el Grupo EGMONT y la Organización de las Naciones Unidas (ONU) en punto al debido conocimiento del cliente. En cuanto al alcance de nuestra autorregulación, la misma contiene los procedimientos, lineamientos y medidas para prevenir el lavado de activos, financiamiento del terrorismo y otros delitos, de todos los productos y servicios que ofrece Megapix, siendo aplicable a toda la operación, respecto de clientes permanentes u ocasionales, accionistas, directivos, funcionarios y empleados, prestadores de servicios, así como para las personas físicas y jurídicas con quienes se mantenga relaciones contractuales.')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <span className="negrita">
            {t("13 Cierre de Cuenta: ")}
          </span>
          <p className="textScroll">
            <span className="negrita">
              {t("Nuestro derecho de cerrar o suspender su cuenta: ")}
            </span>
            {t('Nuestro Derecho de Cerrar o Suspender su Cuenta Podremos terminar estos Términos y cerrar su cuenta, a nuestra discreción, previa notificación a través de correo electrónico o comunicación telefónica. También podemos suspender su acceso a los Servicios si sospechamos que usted ha dejado de cumplir con estos Términos y Condiciones, plantea un riesgo de fraude inaceptable para nosotros, o si proporciona información falsa, incompleta, inexacta o engañosa. No seremos responsables ante usted por cualquier pérdida en que incurra en relación con nuestro cierre o suspensión de su cuenta.')}
          </p>
          <p className="textScroll">
            <span className="negrita">
              {t("Efecto de Cierre de Cuenta. ")}
            </span>
            {t('Si su cuenta Megapix es cerrada, usted acepta: (a) que siga estar obligado a cumplir con estos Términos y Condiciones, (b) dejar de usar inmediatamente  los Servicios, (c) que la licencia prevista en estas Condiciones terminará, (d) que nos reservamos el derecho (pero no tenemos ninguna obligación) de borrar todos los datos de la información y de la cuenta almacenada en nuestros servidores, y (e) que no seremos responsables ante usted ni ante terceros por la cancelación del acceso a los Servicios o por la eliminación de su información o datos de cuenta.')}
          </p>
          <p className="textScroll">
            <span className="negrita">
              {t("Indemnización. ")}
            </span>
            {t('Usted acepta indemnizar a Cavaliere Group S.R.L., sus entidades afiliadas y relacionadas, y cualquiera de sus funcionarios, directores, empleados y agentes de y contra cualquier reclamo, costos, pérdidas, responsabilidades, daños, gastos y juicios de toda índole (incluyendo, sin limitación, costos, gastos y honorarios razonables de abogados) que surjan de, relacionados con, o que incurran en relación con cualquier reclamación, demanda, acción, auditoría, investigación, indagación, u otro procedimiento iniciado por una persona o entidad que surja o se relacione con: (a) cualquier incumplimiento real o supuesto de sus declaraciones, garantías u obligaciones establecidas en las presentes Condiciones; (b) el uso indebido o inadecuado de los Servicios; (c) los productos o servicios vendidos por usted a través de los Servicios, incluyendo pero no limitado a cualquier reclamación por publicidad engañosa, defectos en el producto, lesiones personales, muerte o daños a la propiedad; o (d) el acceso o uso de los servicios de información de su cuenta por terceras partes.')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            {t("OFRECEMOS LOS SERVICIOS Y 'SEGÚN DISPONIBILIDAD'., NO GARANTIZAMOS QUE LOS SERVICIOS (Y NUESTRO SITIO WEB): FUNCIONARÁ LIBRE DE ERRORES O QUE LOS DEFECTOS O ERRORES SERÁN CORREGIDOS; CUMPLAN CON SUS REQUERIMIENTOS O ESTARÁN DISPONIBLE, ININTERRUMPIDAMENTE O SEGUROS EN CUALQUIER MOMENTO O LUGAR; ESTARÁN LIBRES DE VIRUS OCUALQUIER OTRO CONTENIDO NOCIVO. NOSOTROS NO AVALAMOS, GARANTIZAMOS NI ASUMIMOS RESPONSABILIDAD POR CUALQUIER PRODUCTO O SERVICIO OFRECIDO O ANUNCIADO POR TERCEROS A TRAVÉS DE LOS SERVICIOS O POR MEDIO DE NUESTRO SITIO WEB, Y NO SEREMOS PARTE NI MONITOREAREMOS CUALQUIER INTERACCIÓN ENTRE USTED Y TERCEROS PROVEEDORES DE LOS PRODUCTOS O SERVICIOS.")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("Limitación de la responsabilidad. ")}</span>
            {t("EN NINGÚN CASO SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR DAÑOS DIRECTOS, INDIRECTOS, INCIDENTALES, DERIVADOS, INDIRECTOS, ESPECIALES O EJEMPLARES PUNITIVOS O CUALQUIER PÉRDIDA, ROBO, DESAPARICIÓN O DAÑOS POR PÉRDIDA DE BENEFICIOS, INGRESOS, DE DATOS O DE OTRAS PÉRDIDAS INTANGIBLES QUE RESULTEN DEL USO DE, LA IMPOSIBILIDAD DE USO, O FALTA DE DISPONIBILIDAD DE LOS SERVICIOS, INDEPENDIENTEMENTE DE LA FORMA DE ACCIÓN O YA SEA QUE SUPIÉRAMOS QUE TALES DAÑOS SE HUBIESEN INCURRIDO. EN NINGÚN CASO SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR CUALQUIER DAÑO, PÉRDIDA O DAÑO COMO RESULTADO DE PIRATERÍA, MANIPULACIÓN, TRANSMISIÓN DE VIRUS U OTRO ACCESO NO AUTORIZADO O USO DE LOS SERVICIOS, SU CUENTA MEGAPIX, O CUALQUIER INFORMACIÓN CONTENIDA EN LA MISMA. EN NINGÚN CASO, NUESTRA RESPONSABILIDAD POR LOS DAÑOS QUE SE PLANTEAN EN RELACIÓN CON LOS SERVICIOS SUPERARÁN LOS HONORARIOS DEVENGADOS POR NOSOTROS. EN RELACIÓN CON EL USO DE LOS SERVICIOS DURANTE EL PERIODO DE 6 MESES INMEDIATAMENTE ANTERIOR AL EVENTO QUE DIO LUGAR A LA RECLAMACIÓN DE RESPONSABILIDAD. LAS LIMITACIONES DE RESPONSABILIDAD SE APLICARÁN HASTA EL LÍMITE MÁXIMO PERMITIDO POR LA LEY EN LA JURISDICCIÓN APLICABLE")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("14 Plazo de vigencia. ")}</span>
            {t("La relación contractual entre las partes emergentes de la aceptación de estos términos y condiciones generales es de plazo indeterminado. La revocación o cierre de la cuenta Megapix por voluntad del usuario será sin costo alguno para él.")}
          </p>
          <p className="textScroll">
            <span className="negrita">{t("15 Impuestos, costos y gastos. ")}</span>
            {t("La utilización de los servicios por parte del Usuario puede requerir el pago de comisiones, cargos o impuestos previstos por la legislación aplicable. Cavaliere Group S.R.L. no será responsable por el incumplimiento de las obligaciones fiscales de los usuarios. Los costos serán informados en la Aplicación.")}
          </p>
          <p className="textScroll">
            <span className="negrita">{t("16 Propiedad intelectual. ")}</span>
            {t("Cavaliere Group S.R.L. es propietaria de todos los derechos de propiedad intelectual sobre la Aplicación, contenidos, servicios, productos, marcas, nombres comerciales, logos, diseños, imágenes, frases publicitarias, derechos de autor, dominios, códigos, desarrollos, software, bases de datos, información, tecnología y patentes y modelos de utilidad, diseños, entre otros. Se encuentran protegidos por leyes nacionales e internacionales.")}
          </p>
          <p className="textScroll">
            {t("El uso de los servicios no implica para el usuario una autorización para utilizar la Propiedad Intelectual.")}
          </p>
          <p className="textScroll">
          <span className="negrita">{t("17 Domicilios y notificaciones. ")}</span>
            {t("El domicilio electrónico constituido por el usuario a los fines de la utilización de los servicios es el correo electrónico registrado en la aplicación.")}
          </p>
          <p className="textScroll">
            {t("Las partes aceptan que todas las notificaciones electrónicas que se cursen a través de la aplicación y/o al correo electrónico registrado serán válidas y vinculantes.")}
          </p>
          <p className="textScroll">
          <span className="negrita">{t("18 Resolución de conflictos. ")}</span>
            {t("Jurisdicción y ley aplicable. Los Términos y Condiciones se encuentran regidos sin excepción y en todos sus puntos por las leyes de la República Argentina y serán interpretados de acuerdo con ellas. ")}
          </p>
        </div>
      </>
    ),
    privacidad: (
      <>
        <h2 className="textScrollPix">{t('Política de Privacidad de Megapix')}</h2>
        
        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("1 Datos Personales Recopilados. ")}</span>
            {t("Megapix recopila los siguientes datos personales: ")}
          </p>

          <span className="bullets">
            {t(
              "• Nombre, apellido, domicilio, nacionalidad, teléfono, correo electrónico, CUIT o CUIL, datos de cuenta y contraseñas."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Información transaccional sobre solicitudes, operaciones y compras."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Datos patrimoniales y financieros, información crediticia, declaración sobre el origen de fondos, prevención de fraude."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Datos recopilados mediante cookies y tecnologías similares."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Datos personales publicados en redes sociales."
            )} 
        </span>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("2 Uso de Datos Personales. ")}</span>
            {t("Los datos personales se utilizan para: ")}
          </p>

          <span className="bullets">
            {t(
              "• Identificar y contactar al usuario."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Prestar servicios y procesar transacciones."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Responder consultas y proporcionar soporte."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Mejorar servicios y funcionalidades del sitio web."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Enviar comunicaciones de marketing."
            )} 
        </span>
          <span className="bullets">
            {t(
              "• Cumplir con obligaciones legales."
            )} 
        </span>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("3 Seguridad. ")}</span>
            {t("Hemos implementado medidas de seguridad diseñadas para proteger su información contra pérdidas accidentales y frente al acceso, uso, alteración o divulgación. Sin embargo, no podemos garantizar que personas no autorizadas no obtendrán acceso a su información, y usted reconoce que usted proporciona su información a su propio riesgo, salvo las excepciones establecidas por la ley aplicable. Los servicios y/o los productos provistos por Nosotros en el Sitio solo pueden ser dispuestos por personas que tengan la capacidad legal para contratar y/o ser contratados según la legislación aplicable. Los Usuarios que se registren en el Sitio como personas jurídicas deberán tener capacidad suficiente para contratar en nombre de ellas y de obligar a la misma en los presentes Términos y Condiciones. Nosotros no tenemos la obligación de verificar que los Usuarios tengan derecho o capacidad para utilizar el Sitio.")}
          </p>
          </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("4 Uso de Cookies. ")}</span>
            {t("Megapix puede utilizar cookies para mejorar la calidad de la visita al sitio web. Las cookies permiten recordar credenciales de inicio de sesión, entender las partes más populares del sitio web y adaptar la experiencia del usuario.")}
          </p>
          </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("5 Enlaces a Sitios Externos. ")}</span>
            {t("Megapix puede enlazar a sitios de terceros, pero no es responsable por sus prácticas de seguridad y privacidad. Los usuarios deben revisar las políticas de privacidad de esos sitios.")}
          </p>
          </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("6 Modificaciones de la Política de Privacidad. ")}</span>
            {t('Megapix puede modificar esta política en cualquier momento. Los cambios significativos serán notificados a los usuarios y se actualizará la fecha de "Última actualización"')}
          </p>
          </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            <span className="negrita">{t("7 Derechos del Usuario. ")}</span>
            {t('Los usuarios tienen derecho a acceder, rectificar o eliminar sus datos personales. Megapix eliminará los datos cuando ya no sean necesarios, salvo obligaciones legales que requieran su conservación.')}
          </p>
          </div>
        <div className="contenedorUnoTerms">
          <p className="textScroll">
            {t('Este documento está adaptado a la legislación argentina, considerando la Ley de Protección de Datos Personales (Ley 25.326) y a instrumentos internacionales.')}
          </p>
          </div>
        
      </>
    ),
    adicionales: (
      <>
        <h2 className="textScrollPix">
          {t('Términos y Condiciones Particulares “Pagos con PIX”')}
        </h2>
      
        <div className="contenedorUnoTerms">
        <p className="textScroll">
          <span className="negrita">{t("1 Definiciones. ")}</span>
            {t("Megapix destaca en la innovación de procesos de cobros y pagos globales, siendo líder en eficiencia. Se acopla al sistema PIX, facilitando pagos sin restricciones a  comerciantes argentinos y turistas brasileños. En resumen, Megapix facilita oportunidades de pago global y experiencias únicas.")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
          <span className="negrita">{t("“PIX”: ")}</span>
            {t("es un sistema de pago instantáneo desarrollado por el Banco Central de Brasil, utilizado por Megapix para procesar transacciones entre turistas brasileños y comerciantes argentinos")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <span className="negrita">{t("2 Uso del Sistema Megapix. ")}</span>
          <p className="textScroll">
          <span className="negrita">
            {t("• ¿Qué es la tecnología PIX? ")}
        </span>
            {t("Pix es un sistema de pagos instantáneos desarrollado por el Banco Central de Brasil, que se ha convertido en una solución revolucionaria en el ámbito financiero del país. Fue lanzado en noviembre de 2020 con el objetivo de modernizar el sistema de pagos, reducir costos y fomentar la inclusión financiera.")}
          </p>

          <p className="textScroll">
          <span className="negrita">
            {t("• ¿Cómo Megapix absorve e implementa la tecnología? ")}
        </span>
            {t("Pix tiene la particularidad de digitalizar los Pesos/Fiat, haciendo un pasaje de la moneda a crypto. En Megapix aprovechamos esa conversión para beneficiar a los Argentinos en el intercambio de productos y servicios con Brasileros, esto quiere decir que toda persona física o jurídica que desee brindar un servicio cobrar en reales y recibir pesos ARS o Crypto puede hacerlo. Este no es el único beneficio, hoy nuestro target (usuarios objetivo) son dos, por un lado los turistas Brasileros que le brindamos el pago inmediato sin la necesidad de ir a casas de cambio y manejar dinero en efectivo. Por el otro lado favorecemos el aumento de ingresos instantaneos brindando que la conversión de los reales que se van a recibir y poder retener en una cuenta como USDT (moneda crypto al valor del dolar preestablecida como moneda digital principal), esto facilita el ahorro en una moneda estable pudiendo retirar y aumentar la ganancia según el crecimiento del valor del dolar, este es un proceso que el usuario debe decidir si mantener o retirar en pesos Argentinos o crypto a travez de cuentas bancarias o billeteras digitales de su preferencia.")}
          </p>

          
          <span className="negrita">
            {t("• ¿Cómo es el paso a paso de su uso? ")}
        </span>
        <p className="textScroll">
            {t("1 - Para poder iniciar el proceso primero deben existir personas físicas o jurídicas registradas en Megapix, su cuenta debe ser validada con la documentación de respaldo necesaria.")}
          </p>
        <p className="textScroll">
            {t("2 - El usuario debe ingresar a la sección “Cobro” y dependiendo el producto servicio ingresar (Monto y motivo) el usuario va a poder seleccionar la moneda a cobrar y automáticamente se le mostrara la conversión en las dos monedas restantes (ARS/BRL/USDT)")}
          </p>
        <p className="textScroll">
            {t("3 - Cuando el cobrador genera el QR el cliente va a pagar con cualquier cuenta bancaria / billetera virtual de su preferencia, lo que debe hacer es escanear el QR y presionar pagar, de manera muy rápida por detrás sin que el usuario se entere se envía la solicitud de pago al banco/billetera, en el caso de ser aprobado. El banco al aprobar envía el pago a nuestro partner de onramp que  convierte los BRL a USDT y los transfiere al siguiente partner de offramp que nos brinda la cuenta donde el usuario va a poder conservar y tomar decisiones de que hacer con ese monto.")}
          </p>
        <p className="textScroll">
            {t("4 - La integración para la provisión del Servicio está provista por SmartPay y Manteca.")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
          <span className="negrita">
            {t("3 Límites. ")}
        </span>
            {t("El servicio estará habilitado para operaciones con un monto mínimo y máximo, de acuerdo a los límites informados en la Aplicación.")}
          </p>
          <p className="textScroll">
            {t("La aprobación de las transacciones se encuentra sujeta a verificación de límites operativos establecidos por los operadores, instituciones de pago involucradas, organismos regulatorias y disponibilidad y suficiencia de fondos del usuario.")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
          <span className="negrita">
            {t("4 Comisiones. ")}
        </span>
            {t("El uso del Servicio podrá estar sujeto a comisiones. En caso de aplicar, estas serán informadas en la Aplicación.")}
          </p>
        <p className="textScroll">
          <span className="negrita">
            {t("5 Obligaciones fiscales y legales. ")}
        </span>
            {t("El Usuario será responsable por todas las obligaciones y cargas impositivas que correspondan por sus operaciones en el Sitio, sin que pueda imputarse a Megapix ningún tipo de responsabilidad derivada de los incumplimientos de El Usuario.")}
          </p>
        <p className="textScroll">
          <span className="negrita">
            {t("6 Saldos de los usuarios. ")}
        </span>
            {t("Nosotros no estamos autorizados por el Banco Central de la República Argentina para operar como una entidad financiera en los términos de la Ley Nº 21.526. Por ende los fondos depositados en las cuentas de Megapix no constituyen depósitos en una entidad financiera regulada y no cuentan con las garantías de depósitos en entidades financieras. A diferencia de esas entidades, Megapix no presta depósitos de sus usuarios.")}
          </p>
        <p className="textScroll">
          <span className="negrita">
            {t("7 Retiros. ")}
        </span>
            {t("El Usuario tiene la posibilidad de retirar, en forma total o parcial, el saldo existente en su cuenta para transferirlo directamente a su cuenta bancaria o billetera virtual. Nosotros no somos responsables de las cargas impositivas o comisiones bancarias de la cuenta receptora")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
          <p className="textScroll">
            {t("Respecto al retiro en billeteras virtuales personales de los Usuarios, se hace saber que el costo que implique cada transacción será afrontado por el Usuario. Dicho monto será variable y dependerá del tráfico de la red. En el caso de que el Usuario no proporcionare una cuenta bancaria válida, habilitada, o la misma fuese proporcionada con un número de cuenta incorrecto o incompleto, moneda de la cuenta errónea, o cualquier otro motivo que imposibilitara el correcto procedimiento de la operación, el retiro no podrá ejecutarse hasta tanto se cumplimente con los requisitos necesarios.")}
          </p>
          <p className="textScroll">
            {t("Nosotros no seremos responsables ante el caso de que el Usuario se encuentre momentáneamente imposibilitado de hacer retiro de sus fondos porque el banco destinatario solicitara información, documentación complementaria, o por cualquier tipo de motivo cursado por el banco destinatario. El Usuario es el único responsable en la relación contractual que mantiene con la entidad bancaria o billetera virtual a la que envía sus fondos a retirar.")}
          </p>
          <p className="textScroll">
            {t("No se ejecuta retención indebida cuando el Usuario desea ejecutar un retiro y su perfil se encuentra inhabilitado por estar incompleto o por alguna causal de suspensión. Nosotros no nos responsabilizamos por el destino de los activos digitales. Nos reservamos el derecho de inmovilizar los saldos de cuenta e impedir la transferencia al Usuario y/o a terceros por parte de los Usuarios en caso de ser cursado cualquier tipo de requerimiento judicial o agencia gubernamental que así lo exigiera.")}
          </p>
          <p className="textScroll">
            {t("El Usuario declara tener conocimiento de que deberá ser titular de la cuenta bancaria a la que se envíe el retiro de sus fondos. Es decir, el titular de la cuenta bancaria de retiro deberá ser el mismo que el titular de la cuenta de depósito.")}
          </p>
        </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
          <span className="negrita">
            {t("8 Transacciones en criptomonedas. ")}
        </span>
            {t("Procesaremos, en carácter de intermediarios, actuando por cuenta y orden de los Usuarios, la ejecución de los cobros por medio de compra y venta de moneda fiduciaria y de activos virtuales de acuerdo con las instrucciones que recibamos de usted y para lo cual, aceptando estos Términos y Condiciones, nos otorga un mandato específico a los fines descriptos. Podrán ser utilizados para la ejecución de estos servicios distintos proveedores habilitados para los mismos.")}
          </p>
        <p className="textScroll">
          <span className="negrita">
            {t("9 Consentimiento. ")}
        </span>
            {t("Al aceptar los presentes términos y condiciones, el usuario presta su conformidad para que los pagos efectuados bajo la operatoria “Pagos con Pix” sean descontados de su balance general.")}
          </p>
        <p className="textScroll">
          <span className="negrita">
            {t("10 Declaraciones. ")}
        </span>
            {t("El usuario declara que utilizará los servicios de forma lícita.")}
          </p>
        <p className="textScroll">
          <span className="negrita">
            {t("11 Datos personales. ")}
        </span>
            {t("Se aplicará lo dispuesto en la Política de Privacidad.")}
          </p>

        <p className="textScroll">
          <span className="negrita">
            {t("12 Seguridad y Responsabilidad. ")}
        </span>
            {t("El usuario registrado será el único responsable por el uso del servicio y las operaciones realizadas en la aplicación. Entiende que en caso de pérdida, vulnerabilidad, robo y/o filtración de la información de acceso a su cuenta, es exclusivamente el usuario quien será responsable por las pérdidas y perjuicios que esto le pudiera ocasionar.")}
          </p>

        <p className="textScroll">
          <span className="negrita">
            {t("13 Modificaciones. ")}
        </span>
            {t("Megapix se reserva el derecho de modificar, alterar o actualizar estos Términos y Condiciones Particulares en cualquier momento.")}
          </p>
        </div>
      </>
    ),
    manteca: (
      <>
      
        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('Los presentes términos y condiciones del servicio de compra y venta de criptomonedas (los "Términos y Condiciones Crypto") son aplicables al uso del servicio ofrecido por Sixalime S.A.S(MANTECA) a través del Sitio www.__________,. y/ó App. Megapix, descargable de Ios y Android, propiedad de CaveliereGroup SRL. Sixalime S.A.S. es una sociedad legalmente constituida bajo las leyes de la República Argentina, inscripta en Inspección General de Justicia y, registrada como Proveedor de Servicios de Activos Virtuales ante la Comisión Nacional de Valores (CNV) bajo el Número 21. Cualquier Usuario que desee acceder y/o usar el Sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales respectivos, cuyas cláusulas resultan aplicables al presente, junto con los presentes Términos y Condiciones Crypto. ')} 
            {t('Se entenderá por el término “Criptoactivos” o “Criptomoneda” a la representación digital de valor en tanto activo financiero encriptado, definido por un protocolo computacional que puede ser objeto de comercio digital y cuya funciones son las de constituir un medio de intercambio y/ o pago, y/o una unidad de cuenta, y/o una reserva de valor, y/o herramienta de inversión financiera, y/o medio de financiación, que no posee curso legal y es de carácter descentralizado, estando su valor sujeto a la variación de precios dependiendo de la oferta y demanda en los mercados. Se entenderá por “Sitio” a la plataforma digital a la que se accede o a la aplicación para teléfonos móviles.')}
          </p>
        <p className="textScroll">
            {t('Al presionar la opción “aceptar”, el Usuario entiende que acepta los presentes Términos y Condiciones Crypto, que ya ha aceptado los Términos y Condiciones Generales del Sitio/App y que mantiene un vínculo directo con Sixalime S.A.S. – sociedad por acciones simplificada registrada que brinda una plataforma para la compra y venta de criptoactivos. Asimismo, los Servicios provistos por la Sixalime S.A.S. a través del Sitio están disponibles para personas exclusivamente calificadas que comprenden los riesgos y la volatilidad de las criptomonedas.')}
          </p>
        </div>
        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('REGISTRACIÓN DEL USUARIO')}
          </p>
        <p className="textScroll">
            {t('Para poder acceder a los servicios de compra y venta de criptomonedas que se ofrecen en el Sitio, es de obligatoriedad completar el formulario de registración en todos sus campos con datos válidos, el cual tiene carácter de declaración jurada. El futuro Usuario deberá completarlo con su información personal de manera exacta, precisa y verdadera ("Datos Personales") y asume el compromiso de actualizar los Datos Personales conforme resulte necesario. El Usuario presta expresa conformidad con que Sixalime S.A.S. utilice diversos medios para identificar sus datos personales, asumiendo el Usuario la obligación de revisarlos  y mantenerlos actualizados. ')}
            {t('Se deja constancia que Sixalime S.A.S. no se responsabiliza por la certeza de los Datos Personales brindados por los Usuarios de este sitio. Los Usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de sus Datos Personales.El Usuario accederá a su cuenta personal ("Cuenta") mediante el ingreso de su e-mail y generación de una clave de seguridad personal elegida ("Clave de Seguridad"). El Usuario se obliga a mantener la confidencialidad de su Clave de Seguridad. La Cuenta es personal, única e intransferible. El Usuario será responsable por todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido al ingreso y uso de su Clave de Seguridad, de conocimiento exclusivo del Usuario. Sixalime S.A.S. se reserva el derecho de rechazar cualquier solicitud de registración o de cancelar una registración previamente aceptada, sin que esté obligado a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.')}
          </p>
        <p className="textScroll">
            {t('Las cuentas son intransferibles, no pueden cederse los derechos ni las cuentas a terceros. Las cuentas son personales de los Usuarios y todas las transacciones realizadas por la cuenta son realizadas bajo el nombre personal del Usuario titular.')}
          </p>
        <p className="textScroll">
            {t('El titular es responsable de mantener la seguridad de sus credenciales.')}
          </p>
        <p className="textScroll">
            {t('SIXALIME S.A.S. podrá solicitar al Usuario la información y documentación complementaria que estime necesaria a su solo criterio para verificar tanto la identidad del Usuario como la licitud del origen de los fondos transferidos a su cuenta registrada en el Sitio, así como para comprobar el objeto lícito de toda transacción realizada dentro del Sitio. Dicha información y/o documentación será solicitada al Usuario por Sixalime S.A.S exclusivamente a través del correo electrónico: hola@manteca.dev.')}
          </p>
        </div>
        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('INTERCAMBIO DE MONEDA')}
          </p>
        <p className="textScroll">
            {t('A los fines de realizar el cambio de criptoactivos a dinero fiat, los Usuarios podrán realizar depósitos en criptoactivos a la cuenta provista por la plataforma utilizando los medios de pago aceptados. Para perfeccionar dicha operación, el usuario declara conocer y aceptar que todas aquellas transferencias que realice en la plataforma en criptoactivos, en este caso USDT, podrán ser convertidos conforme su elección, a dinero FIAT, a saber, Pesos Argentinos ($) y/ó Dólares Americanos (USD) a la tasa de cambio vigente en el momento de la transacción. SixalimeS.A.S. se reserva el derecho de verificar la autenticidad y validez de las transacciones de criptomonedas antes de acreditar los fondos en la cuenta del usuario. Una vez efectuada la transacción, los fondos en dinero FIAT podrán ser retirados al CBU proporcionado por el usuario, consignado en su perfil, y de su titularidad exclusivamente. ')} 
            {t('Se hace saber que dicho retiro, bajo ningún aspecto podrá ser retirado a un CBU que no sea exclusivamente de su titularidad ni de terceros. El usuario se compromete a proporcionar su información bancaria correcta y completa, a los fines de facilitar el retiro en forma eficiente al CBU informado. La conversión se efectuará de acuerdo con los términos y condiciones establecidos para los servicios de intercambio utilizados para llevar a cabo la operación. El usuario renuncia expresamente a cualquier reclamo y/óresponsabilidad alguna contra Sixalime S.A.S. sobre la conversión de divisas y la transferencia de fondos a su cuenta bancaria.')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. podrá tomar las medidas que considere necesarias para consultar y/o confirmar información sobre la cuenta bancaria de los Usuarios, y no tendrá ningún tipo de responsabilidad por cualquier incapacidad temporal o permanente del Usuario para acceder al saldo transferido a su cuenta registrada en el Sitio. Sixalime S.A.S. podrá establecer límites mensuales y anuales al momento de ingresar dinero a su cuenta registrada en el Sitio, y Sixalime S.A.S. no responderá por los perjuicios y/o inconvenientes ocasionados al Usuario en virtud del mal uso o conflicto entre el Usuario y el medio de pago. Al aceptar los presentes Términos y Condiciones Cryptoel Usuario declara tener capacidad legal para contratar, ser mayor de edad y ser un sujeto con aptitud y capacidad suficiente para conocer y aceptar expresamente las fluctuaciones de las criptomonedas. ')} 
            {t('El cambio final considerado para la conversión entre pesos argentinos y la criptomoneda será el especificado en el Sitio/App al momento de la acreditación de los fondos. En virtud de la fluctuación de la criptomoneda ya conocida por el Usuario y la potencial demora para la conciliación de la transferencia, el Usuario reconoce y acepta que no podrá reclamar diferencias y/o daños y/o perjuicios vinculados a la fluctuación. El Usuario renuncia por medio del presente a invocar la aplicación de la teoría de la imprevisión de conformidad con lo dispuesto por el art. 1091 del Código Civil y Comercial de la Nación.')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. no se responsabiliza por el destino de las monedas virtuales que el Usuario adquiere ni es responsable por el origen de las mismas. En caso de que se solicitara información acerca de ciertas operaciones de una cuenta por parte de un órgano competente o autoridades judiciales, el Usuario autoriza a Sixalime S.A.S. a dar cumplimiento a una eventual obligación de informar y proveer toda la información requerida por los órganos competentes. El Usuario se obliga a garantizar la lícita procedencia de fuentes legítimas del saldo transferido a su cuenta registrada en el Sitio y que toda transacción tendrá objeto lícito. El Usuario comprende y acepta que podrá realizar las siguientes operaciones: adquirir y vender criptoactivos contra la entrega de pesos argentinos, adquirir y vender criptoactivos mediante la transferencia de dólares estadounidenses.')}
          </p>
        <p className="textScroll">
            {t('El Usuario acepta y reconoce que todas estas operaciones podrán estar sujetas a un cobro por servicio, comisión o costos de transacción que informe Sixalime S.A.S.')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. se reserva el derecho a analizar el origen de los criptoactivos que el Usuario transfiera a su cuenta registrada en el Sitio, y el derecho a rechazar dicha transferencia o desconocer la legitimidad de los criptoactivos sin que sea necesario brindar al Usuario información alguna al respecto. Sixalime no será responsable por las consecuencias que le impliquen al Usuario la cancelación de dichas transferencia de criptoactivos ni por los daños y/o perjuicios que se deriven como consecuencia de la misma en caso de corresponder.')}
          </p>
        </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('INCUMPLIMIENTO')}
          </p>
        <p className="textScroll">
            {t('En caso de incumplimientos y/o infracciones por parte del Usuario de los presentes Términos y Condiciones Crytpo, Sixalime S.A.S. se encuentra facultado a devolver los fondos del Usuario a este a través de transferencia bancaria, sin perjuicio del descuento de los gastos administrativos correspondientes.')}
          </p>
          </div>
        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('PROTOCOLOS DE MONEDA DIGITAL')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. no tiene autoridad ni control sobre los protocolos de software que gobiernan las operaciones en criptomoneda soportadas en nuestra plataforma. En general, estos protocolos son de código abierto y cualquier persona puede usarlos, copiarlos, modificarlos y distribuirlos. Al usar los servicios de Sixalime S.A.S., el Usuario reconoce y acepta que (i) Sixalime S.A.S. no es responsable por el funcionamiento de los protocolos subyacentes y que Sixalime S.A.S. no garantiza su funcionalidad, seguridad o disponibilidad y que (ii) los protocolos están sujetos a cambios repentinos en sus reglas operativas (es el caso de las eventuales bifurcaciones o “forks”). ')}
            {t('Tales bifurcaciones pueden afectar materialmente el valor, funcionalidad y/o denominación de la moneda digital almacenada en la plataforma de Sixalime S.A.S. En el caso de ocurrir una bifurcación, el Usuario acepta que Sixalime S.A.S. puede suspender sus operaciones de forma temporaria (con o sin aviso previo) y que Sixalime S.A.S. puede, si así lo cree necesario, (a) configurar o reconfigurar sus sistemas o (b) decidir no soportar (o dejar de soportar) un protocolo alternativo, siempre y cuando el Usuario tenga la oportunidad de retirar sus fondos de la plataforma. El Usuario reconoce y acepta que  Sixalime S.A.S. no asume responsabilidad alguna respecto a una rama no soportada de un protocolo alternativo, liberando de cualquier responsabilidad al respecto a Sixalime S.A.S.')}
          </p>
        <p className="textScroll">
            {t('SE HACE SABER QUE SIXALIME S.A.S. NO ES UNA ENTIDAD FINANCIERA, NI OFRECE ASESORAMIENTO FINANCIERO O DE INVERSIÓN. QUEDA EXPRESAMENTE ESTABLECIDO, Y EL USUARIO ACEPTA, QUE SIXALIME S.A.S. A TRAVÉS DEL SITIO NO PROPORCIONA NINGÚN TIPO DE CONSEJO DE INVERSIÓN CON RESPECTO A LOS SERVICIOS PRESTADOS. ASIMISMO, SE ACLARA QUE SIXALIME S.A.S. NO REALIZA TAREAS DE INTERMEDIACIÓN DE RECURSOS FINANCIEROS NI VALORES NEGOCIABLES, NI TAMPOCO GARANTIZA NINGÚN RETORNO DE INVERSIÓN A LOS USUARIOS."')}
          </p>
          </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('OBLIGACIONES TRIBUTARIAS')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. no es responsable de cualquier obligación fiscal que se devengue en cabeza del Usuario, siendo este el único responsable por la oportuna declaración e ingreso de los tributos que correspondieran por su operatoria.')}
          </p>
          </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('PERFIL DE RIESGO')}
          </p>
        <p className="textScroll">
            {t('Con la aceptación de estos Términos y Condiciones Crypto, el Usuario reconoce y acepta que Sixalime S.A.S y/u otras sociedades comerciales que ofrezcan en el futuro servicios o productos en el Sitio quedan habilitados a recopilar el historial de operaciones realizadas por el Usuario en el Sitio, así como a solicitar ante autoridades públicas y/o entidades privadas informes de análisis de riesgo crediticio del Usuario, para la generación y evaluación de su perfil comercial y de riesgo. El Usuario tiene conocimiento y presta su formal consentimiento para que Sixalime S.A.S., a fin de brindar un mejor servicio, puedan utilizar bases de datos de terceros que ayuden a establecer el mejor perfil comercial y de riesgo del Usuario.')}
          </p>
          </div>

        <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('RESPONSABILIDAD')}
          </p>
        <p className="textScroll">
            {t('El Usuario reconoce y acepta que utiliza el Sitio bajo su única y exclusiva responsabilidad. Cada Usuario reconoce y acepta ser el exclusivo responsable de su accionar dentro del Sitio. El Usuario reconoce y acepta que al realizar operaciones a través del Sitio lo hace bajo su propio riesgo.')}
          </p>
        <p className="textScroll">
            {t('EN NINGÚN CASO SIXALIME S.A.S. SERÁ RESPONSABLE POR LUCRO CESANTE, O POR CUALQUIER OTRO DAÑO Y/O PERJUICIO QUE HAYA PODIDO SUFRIR EL USUARIO DEBIDO A LAS OPERACIONES QUE SE CONCRETEN A TRAVÉS DEL SITIO,  O COMO RESULTADO DE LA PIRATERÍA (HACKEOS), MANIPULACIÓN, TRANSMISIÓN DE VIRUS, OTROS ACCESOS NO AUTORIZADOS O USO DE LOS SERVICIOS, SU CUENTA O CUALQUIER INFORMACIÓN CONTENIDA EN LA MISMA, ASÍ POR LA IMPOSIBILIDAD DE USO O FALTA DE DISPONIBILIDAD DE LOS USO O FALTA DE DISPONIBILIDAD DE LOS SERVICIOS. LAS EXCLUSIONES DE RESPONSABILIDAD SE APLICARÁN HASTA EL LÍMITE MÁXIMO PERMITIDO POR LA LEY APLICABLE. LA SOCIEDAD NO SERÁ RESPONSABLE POR LA INTERACCIÓN DE LOS USUARIOS BASADAS EN LA CONFIANZA DEPOSITADA EN EL SISTEMA O EN EL SITIO.')}
          </p>
        <p className="textScroll">
            {t('Al aceptar estos Términos y Condiciones, el Usuario acepta y reconoce que el comercio de bienes y productos, reales o virtuales implica un riesgo significativo debido a pérdidas que se pueden producir como resultado de las fluctuaciones propias de un mercado. El Usuario acepta y reconoce que el comercio de criptomonedas es un mercado muy volátil que se basa principalmente en la confianza y que, por ello, tiene riesgos especiales no compartidos con el comercio de materias primas o bienes en un mercado tradicional. Teniendo en cuenta estas consideraciones, el Usuario acepta, reconoce y asume que pueden existir riesgos adicionales que no han sido expresamente previstos en estos Términos y Condiciones, y libera de cualquier clase de responsabilidad a Sixalime S.A.S por daños o pérdidas sufridas como consecuencia directa o indirecta de las características propias del comercio de criptoactivos y su volatilidad.')}
          </p>
        <p className="textScroll">
            {t('Queda expresamente establecido, y el Usuario acepta que la Sixalime S.A.S., a través del Sitio, no proporciona ningún tipo de consejo de inversión en relación con los servicios prestados. Sixalime S.A.S. podrá proporcionar información sobre el precio, el rango, la volatilidad de criptomonedas y eventos que han afectado el precio de las mismas, pero esto en ningún caso se considerará asesoría financiera o de inversión y no deberá interpretarse como tal. Cualquier decisión de compra o venta de criptomonedas es decisión exclusiva del Usuario y la SixalimeS.A.S. no será responsable de cualquier pérdida sufrida como consecuencia de esa decisión.')}
          </p>
          </div>

          <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('FALLAS EN EL SITIO')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. no se responsabiliza por cualquier daño, perjuicio o pérdida que sufra un Usuario causados por fallas en el Sitio, sistema, en el servidor o en Internet. Los Usuarios no podrán imputarle a Sixalime S.A.S. responsabilidad alguna ni exigirle indemnizaciones, en virtud de perjuicios resultantes de dificultades técnicas o fallas en el Sitio, los sistemas o en Internet (incluyendo, sin que implique limitación, cualquier incapacidad temporal del Usuario  para acceder al Sitio). Sixalime S.A.S. no garantiza el acceso y uso continuado o ininterrumpido de su Sitio. El sistema puede eventualmente no estar disponible debido a dificultades técnicas o fallas de la red, o por cualquier otra circunstancia ajena a Sixalime S.A.S.; en tales casos, se procurará restablecerlo con la mayor celeridad posible sin que por ello pueda imputársele algún tipo de responsabilidad a Sixalime S.A.S. ni a sus sociedades vinculadas o controladas.')}
          </p>
          </div>

          <div className="contenedorUnoTerms">
        <p className="textScroll">
            {t('INDEMNIDAD')}
          </p>
        <p className="textScroll">
            {t('El Usuario indemnizará y mantendrá indemne a Sixalime S.A.S. y sus directivos, gerentes, representantes y empleados, por cualquier reclamo o demanda de otros Usuarios o terceros por sus actividades en el Sitio o por su incumplimiento de los Términos y Condiciones Crypto y demás políticas que se entienden incorporadas al presente o por la violación de cualesquiera leyes o derechos de terceros.')}
          </p>
        <p className="textScroll">
            {t('Sixalime S.A.S. se reservan el derecho de revisar estos Términos y Condiciones Compra y Venta Divisas en cualquier momento, actualizando y/o modificando esta página. El Usuario deberá revisar estos Términos y Condiciones cada vez que acceda al Sitio, puesto que las mismas son obligatorias y vinculantes. Toda modificación del presente, será considerada tácitamente aceptada toda vez que el Usuario acceda al Sitio sin necesidad de confirmación expresa salvo que Sixalime S.A.S. exigiera. Asimismo, debido a que ciertos servicios y contenidos ofrecidos a los Usuarios a través del Sitio pueden contener normas específicas que reglamentan, complementan y/o modifiquen los presentes Términos y Condiciones se recomienda a los Usuarios tomar conocimiento específico de ellas antes de la utilización del Sitio.')}
          </p>
        <p className="textScroll">
            {t('A todos los efectos legales que corresponda Sixalime S.A.S. constituye domicilio especial en la calle REPUBLICA DE LA INDIA 2781, CABA, 1425, República Argentina.')}
          </p>
          </div>

      </>
    ),
  };
  return <div className="textComplete">{termsText[section]}</div>;
};

Terminos.propTypes = {
  section: PropTypes.string.isRequired,
};

export default Terminos;
