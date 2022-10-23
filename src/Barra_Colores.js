import Boton_Color from "./Boton_Color"
import "./w3.css"
import {cambiar_color} from "./DrawingCanvas"

const Barra_Colores = () => {
    return(
        <>
        <Boton_Color className = "w3-button boton_color w3-red" value ="red"/>
        <Boton_Color className = "w3-button boton_color w3-blue" value ="blue"/>
        <Boton_Color className = "w3-button boton_color w3-orange" value ="orange"/>
        <Boton_Color className = "w3-button boton_color w3-yellow" value ="yellow"/>
        <input type="color" class="selector_color" onChange={e => cambiar_color(e.target.value)} ></input>
        </>
    )
}

export default Barra_Colores