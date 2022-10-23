import Boton_Herramienta from "./Boton_Herramienta"
import imagenes from "./imagenes"

const Barra_Herramientas = () => {

    return (
        <>
        <Boton_Herramienta src = {imagenes[0].src} alt = {imagenes[0].titulo} value = "black"/>
        <Boton_Herramienta src = {imagenes[1].src} alt = {imagenes[1].titulo} value = "white"/>
        
        </>
    )
}

export default Barra_Herramientas