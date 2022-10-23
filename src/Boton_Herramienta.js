import './styles.css'
import {cambiar_color} from "./DrawingCanvas"

const Boton_Herramienta = (props) => {
    return (
        <button class="boton_imagen" onClick= {() => cambiar_color(props.value)}>
            <img class="imagen" src={props.src} alt={props.alt} />
        </button>
    )
}

export default Boton_Herramienta