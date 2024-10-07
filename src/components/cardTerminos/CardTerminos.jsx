import './styles.css';
import { NavLink } from "react-router-dom";


const CardTerminos = () => {
    return (

        <div className='cardTerms'>
        <div>
            <h2 className='titleIndice'>Indice</h2>
            <p className='subtitleTerms'>Términos y condiciones</p>
        </div>
        <div></div>
        <div>
            <div>
                <nav>
                <NavLink  
                    to="#"
                >
                <h3 className='titleCardItem'>Términos y condiciones </h3>
                </NavLink>
              
                </nav>
            </div>
        </div>
        </div>

    )
}

export default CardTerminos;