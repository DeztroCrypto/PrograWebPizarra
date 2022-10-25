import Boton_Herramienta from "./Boton_Herramienta"
import imagenes from "./imagenes"

const Barra_Herramientas = (props) => {

    return (
        <>
        <Boton_Herramienta src = {imagenes[0].src} alt = {imagenes[0].titulo} onClick = {props.funcionPincel}/>
        <Boton_Herramienta src = {imagenes[1].src} alt = {imagenes[1].titulo} onClick = {props.funcionBorrador}/>
        </>
    )
}

export default Barra_Herramientas