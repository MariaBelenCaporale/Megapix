import './styles.css';

const SectionTwo = () => {

    return (
        <section className='containerSectionTwo'>
            <div className='blurTwo'>
            <h2 className="titleSectionTwo">
                Ventajas de usar <span className="highlight">Megapix</span>
            </h2>
            </div>
        <div className='pillsRow'>
                <div className='containerPills'>
                    <button className='containerPillCero containerPill  before'>
                        Control de tus finanzas
                    </button>
                    <button className='containerPill'>
                        Plataforma gratuita
                    </button>
                    <button className='containerPill'>
                        Segura
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPillCuatro containerPill'>
                        Amplias opciones de cobro
                    </button>
                    <button className='containerPillCinco containerPill'>
                        Rapidez
                    </button>
                    <button className='containerPill'>
                        Multiplataforma
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPill'>
                        Conexión con turistas
                    </button>
                    <button className='containerPillUno containerPill'>
                        Transacciones sin posnet
                    </button>
                    <button className='containerPill'>
                        Cobros sin barreras
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPillDos containerPill'>
                        Inclusión financiera
                    </button>
                    <button className='containerPillSeis containerPill'>
                        Conversiones automáticas
                    </button>
                    <button className='containerPillDos containerPill'>
                        Soportes 24/7
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPill'>
                        Comercio exterior
                    </button>
                    <button className='containerPillSiete containerPill'>
                        Fácil
                    </button>
                    <button className='containerPill'>
                        Tecnología PIX
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;
