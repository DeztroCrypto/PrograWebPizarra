import {cambiar_grosor} from "./DrawingCanvas"
import './styles.css'

const Barra_Grosor = (props) => {
    return(
        <>
        <input type="range"  min="1" max="100" class="selector_color" onChange={e => cambiar_grosor(e.target.value)}></input>
        </>
    )
}

export default Barra_Grosor