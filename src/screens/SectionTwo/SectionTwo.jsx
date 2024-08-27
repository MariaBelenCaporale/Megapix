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
                        <p className='textPill'>Control de tus finanzas</p>
                    </button>
                    <button className='containerPill'>
                        <p className='textPill'>Plataforma gratuita</p>
                    </button>
                    <button className='containerPill'>
                        <p className='textPill'>Segura</p>
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPillCuatro containerPill'>
                        <p className='textPill'>Amplias opciones de cobro</p>
                    </button>
                    <button className='containerPillCinco containerPill'>
                        <p className='textPill'>Rapidez</p>
                    </button>
                    <button className='containerPill'>
                        <p className='textPill'>Multiplataforma</p>
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPill'>
                        <p className='textPill'>Conexión con turistas</p>
                    </button>
                    <button className='containerPillUno containerPill'>
                        <p className='textPill'>Transacciones sin posnet</p>
                    </button>
                    <button className='containerPill'>
                        <p className='textPill'>Cobros sin barreras</p>
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPillDos containerPill'>
                        <p className='textPill'>Inclusión financiera</p>
                    </button>
                    <button className='containerPillSeis containerPill'>
                        <p className='textPill'>Conversiones automáticas</p>
                    </button>
                    <button className='containerPillDos containerPill'>
                        <p className='textPill'>Soportes 24/7</p>
                    </button>
                </div>
                <div className='containerPills'>
                    <button className='containerPill'>
                        <p className='textPill'>Comercio exterior</p>
                    </button>
                    <button className='containerPillSiete containerPill'>
                        <p className='textPill'>Fácil</p>
                    </button>
                    <button className='containerPill'>
                        <p className='textPill'>Tecnología PIX</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;
