import Boton_Color from "./Boton_Color"
import "./w3.css"
import {cambiar_color} from "./DrawingCanvas"

const Barra_Colores = (props) => {
    return(
        <>
        <Boton_Color className = "w3-button boton_color w3-red" value ="red" onClick = {props.funcionColor}/>
        <Boton_Color className = "w3-button boton_color w3-blue" value ="blue" onClick = {props.funcionColor}/>
        <Boton_Color className = "w3-button boton_color w3-orange" value ="orange" onClick = {props.funcionColor}/>
        <Boton_Color className = "w3-button boton_color w3-yellow" value ="yellow" onClick = {props.funcionColor}/>
        <input type="color" class="selector_color" onChange={props.funcionColor} ></input>
        </>
    )
}

export default Barra_Colores