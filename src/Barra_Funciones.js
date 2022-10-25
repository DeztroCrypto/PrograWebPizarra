import Boton_Opcion from "./Boton_Opcion"
import {limpiar_pizarra} from "./DrawingCanvas"

const Barra_Funciones = (props) => {
    return(
        <>
        <Boton_Opcion nombre = "Borrar" onClick = {props.funcionLimpiar}/>
        </>
    )
}

export default Barra_Funciones