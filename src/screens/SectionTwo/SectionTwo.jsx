import "./styles.css";

const SectionTwo = () => {
  const items = [
    {  
      text: "Control de tus finanzas",
      delay: "800ms",
      styles: {
        top: "35%",
        left: "15%",
        transform: "rotate(-25deg)",
      },
      animationClass: "animation-1",
    },
    { 
      text: "Cobros con QR",
      delay: "700ms",
      styles: {
        top: "70%",
        left: "60%",
        transform: "rotate(-15deg)",
      },
      animationClass: "animation-2",
    },
    {
      text: "Conexión con turistas",
      delay: "500ms",
      styles: {
        top: "57%",
        left: "30%",
        transform: "rotate(-30deg)",
      },
      animationClass: "animation-3",
    },
    {
      text: "Gratis",
      delay: "700ms",
      styles: {
        top: "70%",
        left: "60%",
        transform: "rotate(-15deg)",
      },
      animationClass: "animation-4",
    },
    {
      text: "Multiplataforma",
      delay: "800ms",
      styles: {
        top: "12%",
        left: "61%",
        transform: "rotate(25deg)",
      },
      animationClass: "animation-5",
    },
    { 
      text: "Rápido",
      delay: "700ms",
      styles: {
        top: "65%",
        left: "42%",
        transform: "rotate(-30deg)",
      },
      animationClass: "animation-6",
    },
    {
      text: "Fácil",
      delay: "500ms",
      styles: {
        top: "84%",
        left: "37%",
        transform: "rotate(-15deg)",
      },
      animationClass: "animation-7",
    },
    {
        text: "Sin comisiones",
        delay: "800ms",
        styles: {
          top: "85%",
          left: "20%",
          transform: "rotate(10deg)",
        },
        animationClass: "animation-8",
      },
      { 
        text: "Seguridad",
        delay: "700ms",
        styles: {
          top: "50%",
          left: "24%",
          transform: "rotate(-15deg)",
        },
        animationClass: "animation-9",
      },
      { 
        text: "Gratis",
        delay: "800ms",
        styles: {
          top: "45%",
          left: "63%",
          transform: "rotate(-15deg)",
        },
        animationClass: "animation-10",
      },
      { 
        text: "Tecnología PIX",
        delay: "500ms",
        styles: {
          top: "24%",
          left: "30%",
          transform: "rotate(-15deg)",
        },
        animationClass: "animation-11",
      },
      { 
        text: "Transacciones sin posnet",
        delay: "800ms",
        styles: {
          top: "34%",
          left: "40%",
          transform: "rotate(30deg)",
        },
        animationClass: "animation-12",
      },
      {
        text: "Cobros sin barreras",
        delay: "700ms",
        styles: {
          top: "24%",
          left: "48%",
          transform: "rotate(25deg)",
        },
        animationClass: "animation-13",
      },
      { 
        text: "Segura",
        delay: "500ms",
        styles: {
          top: "74%",
          left: "45%",
          transform: "rotate(-25deg)",
        },
        animationClass: "animation-14",
      },
      {
        text: "Soporte 24/7",
        delay: "800ms",
        styles: {
          top: "45%",
          left: "63%",
          transform: "rotate(-15deg)",
        },
        animationClass: "animation-15",
      },
  ];

  return (
    <section className="containerSectionTwo">
      <div className="blurTwo">
        <h2 className="titleSectionTwo">
          Ventajas de usar <span className="highlight">Megapix</span>
        </h2>
      </div>
      <div className="rotated-items-container">
        {items.map((el, idx) => {
          return (
            <button
              key={idx}
              className={`rotated-item ${el.animationClass}`}
              style={{
                ...el.styles,
                animationDelay: el.delay,
              }}
            >
              {el.text}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SectionTwo;
