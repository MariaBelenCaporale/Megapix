import CardDrag from '../../../components/Card/CardGrag/CardDrag';
import './styles.css'

const TuristFive = () => {
    return (
        <section className='containerTuristFive'>
            <div className='containerFiveTitle'>
                <h2 className="titleTuristFive">
                    Ventajas de usar <span className="highlight">Megapix</span>
                </h2>
            </div>
            <div className='containerDragFive'>
                <CardDrag />
            </div>
        </section>
    )
}

export default TuristFive;