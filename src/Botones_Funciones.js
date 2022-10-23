import Boton_Opcion from "./Boton_Opcion"
import {limpiar_pizarra} from "./DrawingCanvas"

const Barra_Funciones = () => {
    return(
        <>
        <Boton_Opcion nombre = "Borrar" funcion = {() => limpiar_pizarra()}/>
        </>
    )
}

export default Barra_Funciones