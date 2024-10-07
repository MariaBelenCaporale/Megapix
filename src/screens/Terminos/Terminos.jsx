import CardTerminos from "../../components/cardTerminos/CardTerminos";
// import Footer from '../../components/Footer/Footer';
import "./styles.css";

const Terminos = () => {
  return (
    <section className="containerTerms">
      <div className="containerTitleTerms">
        <h2 className="titleTerms">Términos y condiciones</h2>
      </div>
      <div className="containerTermScroll">
        <CardTerminos />
        <div className="containerTextScroll">
          <div className="textComplete">
            <p className="textScroll">
              Los siguientes términos y condiciones generales de uso de la
              aplicación “Megapix”, y/o sitio web www.megapix.lat incluyendo sus
              modificaciones, constituyen el acuerdo entre cualquier persona y/o
              representante legal mayor de 18 años en adelante
              (“Comerciante/cliente y Turista/usuario final”) que utilice la
              aplicación móvil disponible en www.megapix.lat operado por
              Cavaliere Group S.R.L. Se describirán los derechos,
              responsabilidades y obligaciones que aplicarán en la relación
              entre el cliente comerciante, usuario final turista, y Megapix,
              referente al uso de la aplicación y cualquier producto,
              funcionalidad o servicio en relación que allí se ofrezca.
            </p>
            <p className="textScroll">
              <span className="negrita">1. Aceptación de los Términos: </span>
              La aceptación a los Términos y Condiciones Generales- y demás
              anexos vinculados- previo a la utilización de la Aplicación
              implica un acuerdo contractual vinculante entre las partes.
              Cualquier usuario que no desee aceptarlos deberá abstenerse de
              utilizar la misma.
              <br></br>
              <span className="negrita">
                2. Actualizaciones y Modificaciones:{" "}
              </span>
              La vigencia de las actualizaciones y/ modificaciones consideradas
              pertinentes comenzará a regir desde el momento de su publicación
              y/o funcionamiento y podrán ocurrir de manera automática sin
              previo aviso. Por la presente, aceptas estas posibles futuras
              modificaciones y actualizaciones.
              <br></br>
              <span className="negrita">3. Comunicación Electrónica: </span>Al
              aceptar estos Términos Generales el usuario consiente el formato
              electrónico de notificación en lo referente al uso de la misma y
              los servicios provistos por ella.
              <br></br>
              <span className="negrita">4. Canales de Atención: </span> En
              Megapix, brindamos un soporte integral a nuestro cliente
              (comerciante) a través de la sección llamada “Soporte” dentro
              nuestra plataforma. En esta sección, el usuario encontrará:
            </p>
            <p className="textScroll">
              <span className="bullets">
                • Manual de uso de la herramienta: Guías detalladas para
                maximizar el uso de nuestras funcionalidades.
              </span>{" "}
              <br></br>
              <span className="bullets">
                • Preguntas frecuentes: Respuestas a las dudas más comunes para
                facilitar una solución rápida.
              </span>{" "}
              <br></br>
              <span className="bullets">
                • Canal de comunicación: Un sistema de mensajería para consultas
                y soporte técnico.
              </span>{" "}
              <br></br>
            </p>

            <p className="textScroll">
              El canal de comunicación que utilizamos se llama “Liveconnect”,
              una herramienta versátil que integra varios medios de
              comunicación, incluyendo redes sociales, WhatsApp, correo
              electrónico y más. Aquí están algunas de sus ventajas:
            </p>
            <p className="textScroll">
              <span className="bullets">
                • Seguimiento con ID: Cada reclamo o consulta recibe un ID único
                para asegurar el seguimiento continuo y evitar la pérdida de
                información.
              </span>{" "}
              <br></br>
              <span className="bullets">
                • Chatbot automatizado: Nuestro chatbot puede manejar preguntas
                frecuentes y solicitar documentación previa, como capturas de
                pantalla de errores, para acelerar la resolución de problemas.
              </span>{" "}
              <br></br>
            </p>

            <p className="textScroll">
              Nuestro objetivo es proporcionar un soporte eficiente y accesible
              sin depender exclusivamente del correo electrónico, asegurando que
              nuestro sistema escale adecuadamente con el crecimiento de nuestro
              equipo. Con Liveconnect, los usuarios pueden obtener la ayuda que
              necesitan de manera rápida y efectiva, mejorando su experiencia
              con Megapix.
            </p>

            <p className="negrita">5. Definiciones:</p>
            <p className="textScroll">
              {" "}
              “Cliente-comerciante”: Toda persona física mayor de 18 años y/o,
              toda persona jurídica que realice las actividades comerciales
              habilitadas por el sitio.
            </p>
            <p className="textScroll">
              “Cliente-comerciante”: Toda persona física mayor de 18 años y/o,
              toda persona jurídica que realice las actividades comerciales
              habilitadas por el sitio.{" "}
            </p>
            <p className="textScroll">
              “Usuario final-Turista”: Toda persona física mayor de 18 años que
              tenga una cuenta PIX.{" "}
            </p>
            <p className="textScroll">
              “Activos digitales”: a la representación digital de valor que se
              puede comercializar y/o transferir digitalmente y utilizar para
              pagos o inversiones. En ningún caso se entenderá como activo
              virtual la moneda de curso legal en el territorio nacional y las
              monedas emitidas por otros países o jurisdicciones (moneda
              fiduciaria).{" "}
            </p>
            <p className="textScroll">
              “Servicios”: Comprende en general la totalidad de los servicios,
              funcionalidades y productos que se ofrecen a través de la
              Aplicación.
            </p>

            <p className="textScroll">
              <span className="negrita">6. Personas Jurídicas: </span>
              En el caso de que personas jurídicas que deseen ser usuarias
              cliente del servicio de Megapix, al registrar su cuenta el sistema
              de manera automática le enviara un mail (genérico ej.
              info@megapix.com sin retorno de respuesta) en el que recibirá las
              indicaciones de la documentación necesaria para terminar con la
              validación de la cuenta que le permita mantenerla y usarla, este
              tendrá un plazo de quince días hábiles para ser entregada, en el
              caso de no cumplir automáticamente se bloqueara el usuario y no
              podrá utilizar las funcionalidades principales.El representante de
              la entidad deberá instrumentar la documentación correspondiente
              estipulada por el Backoffice de Megapix, en su interior recibirá
              toda la documentación necesaria para poder aprobar, solicitar
              corrección o rechazar.
            </p>

            <p className="textScroll">
              <span className="negrita">7. Registración: </span>
              Es requisito obligatorio para el uso de la Aplicación realizar el
              proceso de registración. Para ello, se requerirá que el
              cliente-comerciante proporcione todos los datos e información que
              se le solicite, los cuáles deberán ser válidos, exactos y
              verídicos. Adicionalmente, deberán cumplir con el proceso de
              identificación y debida diligencia, así como también los
              requisitos previstos en materia de Prevención de Lavado de Activos
              y Financiamiento del Terrorismo (LA/FT) por la UIF (Unidad de
              Información Financiera) en su Resolución 49/2024.
            </p>
            <p className="textScroll">
              Toda la información y datos personales proporcionados por el
              cliente-comerciante tienen carácter de declaración jurada y
              garantiza la veracidad, vigencia y autenticidad de la información
              provista.
            </p>

            <p className="textScroll">
              <span className="negrita">8. Verificación de la identidad: </span>
              Megapix se reserva el derecho de solicitar documentación e
              información adicional al cliente-comerciante, a terceros a efectos
              de corroborar la información ya proporcionada durante la vigencia
              de los servicios, así como de rechazar una solicitud de registro,
              suspender de forma parcial o definitivamente. Los
              clientes-comerciantes cuyos datos no hayan podido ser revalidados,
              o en caso de detectar actividades sospechosas, sin que tal
              decisión genere derecho de indemnización o resarcimiento alguno
              para el cliente-comerciante.
              <br></br>
              <span className="negrita">9. Privacidad: </span>
              La información personal proporcionada se gestionará de acuerdo con
              nuestra Política de Privacidad
              <br></br>
              <span className="negrita">10. Cuenta Megapix: </span>
              El registro exitoso generará en favor del cliente-comerciante una
              cuenta personal e intransferible, a fin de permitir el acceso a
              los servicios y funcionalidades que ofrece la aplicación Megapix.
            </p>

            <p className="textScroll">
              <span className="negrita">11. Acceso: </span>
              El cliente-comerciante accede a su cuenta Megapix mediante el
              ingreso de su dirección e-mail, ID de empresa y contraseña al
              momento de registrarse en la aplicación. El cliente-comerciante
              tiene como obligatorio resguardar y mantener la confidencialidad
              de su contraseña en todo momento, ya que éste será el único
              responsable por las operaciones efectuadas en su cuenta Megapix.
            </p>
            <p className="textScroll">
              <span className="negrita">12. Uso indebido: </span>
              Programa de prevención de Lavado de Dinero y Financiamiento del
              Terrorismo En Megapix promovemos la transparencia en pos de una
              inclusión financiera sustentable. La empresa cumple con la
              normativa UIF y en particular con la Resolución 49/24. En base a
              ello, nuestros estándares de cumplimiento se rigen por las mejores
              prácticas adoptadas tanto a nivel mundial como nacional en la
              industria; tomando en consideración lo recomendado por FAFT- GAFI
              (Finantial Action Task Force /Grupo de Acción Financiera
              Internacional) Organismo gubernamental, el Grupo EGMONT y la
              Organización de las Naciones Unidas (ONU) en punto al debido
              conocimiento del cliente. En cuanto al alcance de nuestra
              autorregulación, la misma contiene los procedimientos,
              lineamientos y medidas para prevenir el lavado de activos,
              financiamiento del terrorismo y otros delitos, de todos los
              productos y servicios que ofrece Megapix, siendo aplicable a toda
              la operación, respecto de clientes permanentes u ocasionales,
              accionistas, directivos, funcionarios y empleados, prestadores de
              servicios, así como para las personas físicas y jurídicas con
              quienes se mantenga relaciones contractuales.
            </p>

            <p className="textScroll">
                <span className="negrita">13. Cierre de Cuenta: </span>
                
Nuestro derecho de cerrar o suspender su cuenta: Nuestro Derecho de Cerrar o Suspender su Cuenta Podremos terminar estos Términos y cerrar su cuenta, a nuestra discreción, previa notificación a través de correo electrónico o comunicación telefónica. También podemos suspender su acceso a los Servicios si sospechamos que usted ha dejado de cumplir con estos Términos y Condiciones, plantea un riesgo de fraude inaceptable para nosotros, o si proporciona información falsa, incompleta, inexacta o engañosa. No seremos responsables ante usted por cualquier pérdida en que incurra en relación con nuestro cierre o suspensión de su cuenta. <br></br>
Efecto de Cierre de Cuenta. Si su cuenta Megapix es cerrada, usted acepta: (a) que siga estar obligado a cumplir con estos Términos y Condiciones, (b) dejar de usar inmediatamente los Servicios, (c) que la licencia prevista en estas Condiciones terminará, (d) que nos reservamos el derecho (pero no tenemos ninguna obligación) de borrar todos los datos de la información y de la cuenta almacenada en nuestros servidores, y (e) que no seremos responsables ante usted ni ante terceros por la cancelación del acceso a los Servicios o por la eliminación de su información o datos de cuenta. <br></br>
Indemnización. Usted acepta indemnizar a Cavaliere Group S.R.L., sus entidades afiliadas y relacionadas, y cualquiera de sus funcionarios, directores, empleados y agentes de y contra cualquier reclamo, costos, pérdidas, responsabilidades, daños, gastos y juicios de toda índole (incluyendo, sin limitación, costos, gastos y honorarios razonables de abogados) que surjan de, relacionados con, o que incurran en relación con cualquier reclamación, demanda, acción, auditoría, investigación, indagación, u otro procedimiento iniciado por una persona o entidad que surja o se relacione con: (a) cualquier incumplimiento real o supuesto de sus declaraciones, garantías u obligaciones establecidas en las presentes Condiciones; (b) el uso indebido o inadecuado de los Servicios; (c) los productos o servicios vendidos por usted a través de los Servicios, incluyendo pero no limitado a cualquier reclamación por publicidad engañosa, defectos en el producto, lesiones personales, muerte o daños a la propiedad; o (d) el acceso o uso de los servicios de información de su cuenta por terceras partes.
            </p>

            <p className="textScroll">OFRECEMOS LOS SERVICIOS Y SEGÚN DISPONIBILIDAD. NO GARANTIZAMOS QUE LOS SERVICIOS (Y NUESTRO SITIO WEB): FUNCIONARÁ LIBRE DE ERRORES O QUE LOS DEFECTOS O ERRORES SERÁN CORREGIDOS; CUMPLAN CON SUS REQUERIMIENTOS O ESTARÁN DISPONIBLE, ININTERRUMPIDAMENTE O SEGUROS EN CUALQUIER MOMENTO O LUGAR; ESTARÁN LIBRES DE VIRUS OCUALQUIER OTRO CONTENIDO NOCIVO. NOSOTROS NO AVALAMOS, GARANTIZAMOS NI ASUMIMOS RESPONSABILIDAD POR CUALQUIER PRODUCTO O SERVICIO OFRECIDO O ANUNCIADO POR TERCEROS A TRAVÉS DE LOS SERVICIOS O POR MEDIO DE NUESTRO SITIO WEB, Y NO SEREMOS PARTE NI MONITOREAREMOS CUALQUIER INTERACCIÓN ENTRE USTED Y TERCEROS PROVEEDORES DE LOS PRODUCTOS O SERVICIOS.
Limitación de la responsabilidad. EN NINGÚN CASO SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR DAÑOS DIRECTOS, INDIRECTOS INCIDENTALES, DERIVADOS, INDIRECTOS, ESPECIALES O EJEMPLARES PUNITIVOS
O CUALQUIER PÉRDIDA, ROBO, DESAPARICIÓN O DAÑOS POR PÉRDIDA DE BENEFICIOS, INGRESOS, DE DATOS O DE OTRAS PÉRDIDAS INTANGIBLES QUE RESULTEN DEL USO DE, LA IMPOSIBILIDAD DE USO, O FALTA DE DISPONIBILIDAD DE LOS SERVICIOS, INDEPENDIENTEMENTE DE LA FORMA DE ACCIÓN O YA SEA QUE SUPIÉRAMOS QUE TALES DAÑOS SE HUBIESEN INCURRIDO. EN NINGÚN CASO SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR CUALQUIER DAÑO, PÉRDIDA O DAÑO COMO RESULTADO DE PIRATERÍA, MANIPULACIÓN, TRANSMISIÓN DE VIRUS U OTRO ACCESO NO AUTORIZADO O USO DE LOS SERVICIOS, SU CUENTA MEGAPIX, O CUALQUIER INFORMACIÓN CONTENIDA EN LA MISMA. EN NINGÚN CASO, NUESTRA RESPONSABILIDAD POR LOS DAÑOS QUE SE PLANTEAN EN RELACIÓN CON LOS SERVICIOS SUPERARÁN LOS HONORARIOS DEVENGADOS POR NOSOTROS. EN RELACIÓN CON EL USO DE LOS SERVICIOS DURANTE EL PERIODO DE 6 MESES INMEDIATAMENTE ANTERIOR AL EVENTO QUE DIO LUGAR A LA RECLAMACIÓN DE RESPONSABILIDAD. LAS LIMITACIONES DE RESPONSABILIDAD SE APLICARÁN HASTA EL LÍMITE MÁXIMO PERMITIDO POR LA LEY EN LA JURISDICCIÓN APLICABLE</p>

<p className="textScroll">
    <span className="negrita">14. Plazo de vigencia: </span>
    La relación contractual entre las partes emergentes de la aceptación de estos términos y condiciones generales es de plazo indeterminado. La revocación o cierre de la cuenta Megapix por voluntad del usuario será sin costo alguno para él.
</p>
<p className="textScroll">
    <span className="negrita">15. Impuestos, costos y gastos: </span>
    La utilización de los servicios por parte del Usuario puede requerir el pago de comisiones, cargos o impuestos previstos por la legislación aplicable. Cavaliere Group S.R.L. no será responsable por el incumplimiento de las obligaciones fiscales de los usuarios. Los costos serán informados en la Aplicación.
</p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
};

export default Terminos;
